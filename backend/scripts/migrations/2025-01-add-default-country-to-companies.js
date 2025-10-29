/**
 * Migration Script: Add Default Country to Existing Companies
 *
 * This script handles the migration of existing Company records that may have
 * null or undefined country values, which is now a required field.
 *
 * Usage:
 *   node backend/scripts/migrations/2025-01-add-default-country-to-companies.js
 *
 * Environment Variables Required:
 *   - DATABASE_URL or DB connection settings
 *
 * WARNING: Review and test this script in a non-production environment first!
 */

const mongoose = require('mongoose');

// Default country to use for records missing a country value
// Change this to match your organization's primary country
const DEFAULT_COUNTRY = 'US'; // ISO 3166-1 alpha-2 code

// Import the Company model
const Company = require('../../src/models/appModels/Company');

// Allowed country codes - must match the enum in Company model
const ALLOWED_COUNTRIES = [
  'AF', 'AL', 'DZ', 'AD', 'AO', 'AI', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ',
  'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA',
  'BW', 'BR', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'CF', 'TD',
  'CL', 'CN', 'CO', 'KM', 'CD', 'CG', 'CR', 'HR', 'CU', 'CY', 'CZ', 'CI',
  'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'ER', 'EE', 'SZ', 'ET', 'FJ',
  'FI', 'FR', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GP', 'GU',
  'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID',
  'IR', 'IQ', 'IE', 'IL', 'IT', 'JM', 'JP', 'JO', 'KZ', 'KE', 'KP', 'KR',
  'KW', 'KG', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MG', 'MW',
  'MY', 'MV', 'ML', 'MT', 'MQ', 'MR', 'MU', 'MX', 'MD', 'MC', 'MN', 'ME',
  'MS', 'MA', 'MZ', 'MM', 'NA', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG',
  'NO', 'OM', 'PK', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'PR',
  'QA', 'MK', 'RO', 'RU', 'RW', 'RE', 'SA', 'SN', 'RS', 'SG', 'SK', 'SI',
  'SO', 'ZA', 'SS', 'ES', 'LK', 'SD', 'SR', 'SE', 'CH', 'SY', 'TW', 'TJ',
  'TZ', 'TH', 'TL', 'TG', 'TO', 'TN', 'TR', 'TM', 'UG', 'UA', 'AE', 'GB',
  'US', 'UY', 'UZ', 'VE', 'VN', 'YE', 'ZM', 'ZW'
];

/**
 * Validate the DEFAULT_COUNTRY value
 */
function validateDefaultCountry() {
  if (!ALLOWED_COUNTRIES.includes(DEFAULT_COUNTRY)) {
    console.error(`ERROR: DEFAULT_COUNTRY '${DEFAULT_COUNTRY}' is not a valid country code.`);
    console.error(`Allowed values: ${ALLOWED_COUNTRIES.join(', ')}`);
    process.exit(1);
  }
}

/**
 * Connect to MongoDB
 */
async function connectDB() {
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      console.error('ERROR: DATABASE_URL environment variable is required.');
      console.error('Please set DATABASE_URL before running this migration.');
      process.exit(1);
    }
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

/**
 * Main migration function
 */
async function migrateCompanies() {
  try {
    console.log('Starting migration...\n');

    // Find all companies without a country value
    const companiesWithoutCountry = await Company.find({
      $or: [
        { country: null },
        { country: { $exists: false } },
        { country: '' }
      ]
    }).select('_id name country');

    console.log(`Found ${companiesWithoutCountry.length} companies without a country value`);

    if (companiesWithoutCountry.length === 0) {
      console.log('No migration needed. All companies have a country value.');
      return;
    }

    console.log('\nCompanies that will be updated:');
    companiesWithoutCountry.forEach(company => {
      console.log(`  - ${company.name} (ID: ${company._id})`);
    });

    // Ask for confirmation (in production, you might want to remove this)
    console.log(`\nWill set country to: ${DEFAULT_COUNTRY}`);
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...\n');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Update all companies without a country
    const result = await Company.updateMany(
      {
        $or: [
          { country: null },
          { country: { $exists: false } },
          { country: '' }
        ]
      },
      {
        $set: { country: DEFAULT_COUNTRY }
      }
    );

    console.log(`\nMigration completed successfully!`);
    console.log(`Updated ${result.modifiedCount} companies`);

    // Verify the migration
    const remainingWithoutCountry = await Company.countDocuments({
      $or: [
        { country: null },
        { country: { $exists: false } },
        { country: '' }
      ]
    });

    if (remainingWithoutCountry > 0) {
      console.warn(`\nWARNING: ${remainingWithoutCountry} companies still don't have a country value`);
    } else {
      console.log('\nVerification passed: All companies now have a country value');
    }

  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    validateDefaultCountry();
    await connectDB();
    await migrateCompanies();
    console.log('\nMigration process completed!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the migration
if (require.main === module) {
  main();
}

module.exports = { migrateCompanies };
