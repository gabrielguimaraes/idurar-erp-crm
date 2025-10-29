const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  name: {
    type: String,
    trim: true,
    required: true,
  },
  legalName: {
    type: String,
    trim: true,
  },
  hasParentCompany: {
    type: Boolean,
    default: false,
  },
  parentCompany: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
  },
  isClient: {
    type: Boolean,
    default: false,
  },
  peoples: [{ type: mongoose.Schema.ObjectId, ref: 'People', autopopulate: true }],
  mainContact: { type: mongoose.Schema.ObjectId, ref: 'People', autopopulate: true },
  icon: {
    type: String,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  imageHeader: String,
  bankName: {
    type: String,
    trim: true,
  },
  bankIban: {
    type: String,
    trim: true,
  },
  bankSwift: {
    type: String,
    trim: true,
  },
  bankNumber: {
    type: String,
    trim: true,
  },
  bankRouting: {
    type: String,
    trim: true,
  },
  bankCountry: {
    type: String,
    trim: true,
  },
  companyRegNumber: {
    type: String,
    trim: true,
  },
  companyTaxNumber: {
    type: String,
    trim: true,
  },
  companyTaxId: {
    type: String,
    trim: true,
  },
  companyRegId: {
    type: String,
    trim: true,
  },
  securitySocialNbr: String,
  customField: [
    {
      fieldName: {
        type: String,
        trim: true,
        lowercase: true,
      },
      fieldType: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'string',
      },
      fieldValue: {},
    },
  ],
  location: {
    latitude: Number,
    longitude: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  State: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
  // TODO: Refactor country codes to use shared constants
  // Currently duplicated in: backend/src/utils/countryList.js (125 countries),
  // frontend/src/utils/countryList.js (187 countries), and this model (187 countries).
  // Consider extracting to a shared constant module to maintain consistency.
  country: {
    type: String,
    trim: true,
    required: [true, 'Please select a country'],
    enum: {
      values: [
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
      ],
      message: '{VALUE} is not a valid country code'
    },
  },
  phone: {
    type: String,
    trim: true,
  },
  otherPhone: [
    {
      type: String,
      trim: true,
    },
  ],
  fax: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  otherEmail: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  website: {
    type: String,
    trim: true,
    lowercase: true,
  },
  socialMedia: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    tiktok: String,
    youtube: String,
    snapchat: String,
  },
  images: [
    {
      id: String,
      name: String,
      path: String,
      description: String,
      isPublic: {
        type: Boolean,
        default: false,
      },
    },
  ],
  files: [
    {
      id: String,
      name: String,
      path: String,
      description: String,
      isPublic: {
        type: Boolean,
        default: false,
      },
    },
  ],
  category: String,
  approved: {
    type: Boolean,
    default: true,
  },
  verified: {
    type: Boolean,
  },
  notes: String,
  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
});

schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Company', schema);
