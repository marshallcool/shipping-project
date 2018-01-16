import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../services/storage.service';
import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';
import { Observable } from 'rxjs/Observable';

const apiHost = environment.api;

@Injectable()
export class CalculatorService {
  country: any;

  constructor(private http: HttpClient,
              private storageService: StorageService,
              private apiErrorHandleService: ApiErrorHandlerService) {}

  changeAddress() {
    this.country = [
      {
        id: 3,
        title: 'Afghanistan',
        code: 'AF'
      },
      {
        id: 15,
        title: 'Aland',
        code: 'AX'
      },
      {
        id: 6,
        title: 'Albania',
        code: 'AL'
      },
      {
        id: 62,
        title: 'Algeria',
        code: 'DZ'
      },
      {
        id: 11,
        title: 'American Samoa',
        code: 'AS'
      },
      {
        id: 1,
        title: 'Andorra',
        code: 'AD'
      },
      {
        id: 8,
        title: 'Angola',
        code: 'AO'
      },
      {
        id: 5,
        title: 'Anguilla',
        code: 'AI'
      },
      {
        id: 9,
        title: 'Antarctica',
        code: 'AQ'
      },
      {
        id: 4,
        title: 'Antigua and Barbuda',
        code: 'AG'
      },
      {
        id: 10,
        title: 'Argentina',
        code: 'AR'
      },
      {
        id: 7,
        title: 'Armenia',
        code: 'AM'
      },
      {
        id: 14,
        title: 'Aruba',
        code: 'AW'
      },
      {
        id: 13,
        title: 'Australia',
        code: 'AU'
      },
      {
        id: 12,
        title: 'Austria',
        code: 'AT'
      },
      {
        id: 16,
        title: 'Azerbaijan',
        code: 'AZ'
      },
      {
        id: 32,
        title: 'Bahamas',
        code: 'BS'
      },
      {
        id: 23,
        title: 'Bahrain',
        code: 'BH'
      },
      {
        id: 19,
        title: 'Bangladesh',
        code: 'BD'
      },
      {
        id: 18,
        title: 'Barbados',
        code: 'BB'
      },
      {
        id: 36,
        title: 'Belarus',
        code: 'BY'
      },
      {
        id: 20,
        title: 'Belgium',
        code: 'BE'
      },
      {
        id: 37,
        title: 'Belize',
        code: 'BZ'
      },
      {
        id: 25,
        title: 'Benin',
        code: 'BJ'
      },
      {
        id: 27,
        title: 'Bermuda',
        code: 'BM'
      },
      {
        id: 33,
        title: 'Bhutan',
        code: 'BT'
      },
      {
        id: 29,
        title: 'Bolivia',
        code: 'BO'
      },
      {
        id: 30,
        title: 'Bonaire',
        code: 'BQ'
      },
      {
        id: 17,
        title: 'Bosnia and Herzegovina',
        code: 'BA'
      },
      {
        id: 35,
        title: 'Botswana',
        code: 'BW'
      },
      {
        id: 34,
        title: 'Bouvet Island',
        code: 'BV'
      },
      {
        id: 31,
        title: 'Brazil',
        code: 'BR'
      },
      {
        id: 106,
        title: 'British Indian Ocean Territory',
        code: 'IO'
      },
      {
        id: 239,
        title: 'British Virgin Islands',
        code: 'VG'
      },
      {
        id: 28,
        title: 'Brunei',
        code: 'BN'
      },
      {
        id: 22,
        title: 'Bulgaria',
        code: 'BG'
      },
      {
        id: 21,
        title: 'Burkina Faso',
        code: 'BF'
      },
      {
        id: 24,
        title: 'Burundi',
        code: 'BI'
      },
      {
        id: 117,
        title: 'Cambodia',
        code: 'KH'
      },
      {
        id: 47,
        title: 'Cameroon',
        code: 'CM'
      },
      {
        id: 38,
        title: 'Canada',
        code: 'CA'
      },
      {
        id: 52,
        title: 'Cape Verde',
        code: 'CV'
      },
      {
        id: 124,
        title: 'Cayman Islands',
        code: 'KY'
      },
      {
        id: 41,
        title: 'Central African Republic',
        code: 'CF'
      },
      {
        id: 215,
        title: 'Chad',
        code: 'TD'
      },
      {
        id: 46,
        title: 'Chile',
        code: 'CL'
      },
      {
        id: 48,
        title: 'China',
        code: 'CN'
      },
      {
        id: 54,
        title: 'Christmas Island',
        code: 'CX'
      },
      {
        id: 39,
        title: 'Cocos [Keeling] Islands',
        code: 'CC'
      },
      {
        id: 49,
        title: 'Colombia',
        code: 'CO'
      },
      {
        id: 119,
        title: 'Comoros',
        code: 'KM'
      },
      {
        id: 45,
        title: 'Cook Islands',
        code: 'CK'
      },
      {
        id: 50,
        title: 'Costa Rica',
        code: 'CR'
      },
      {
        id: 98,
        title: 'Croatia',
        code: 'HR'
      },
      {
        id: 51,
        title: 'Cuba',
        code: 'CU'
      },
      {
        id: 53,
        title: 'Curacao',
        code: 'CW'
      },
      {
        id: 55,
        title: 'Cyprus',
        code: 'CY'
      },
      {
        id: 56,
        title: 'Czechia',
        code: 'CZ'
      },
      {
        id: 40,
        title: 'Democratic Republic of the Congo',
        code: 'CD'
      },
      {
        id: 59,
        title: 'Denmark',
        code: 'DK'
      },
      {
        id: 58,
        title: 'Djibouti',
        code: 'DJ'
      },
      {
        id: 60,
        title: 'Dominica',
        code: 'DM'
      },
      {
        id: 61,
        title: 'Dominican Republic',
        code: 'DO'
      },
      {
        id: 221,
        title: 'East Timor',
        code: 'TL'
      },
      {
        id: 63,
        title: 'Ecuador',
        code: 'EC'
      },
      {
        id: 65,
        title: 'Egypt',
        code: 'EG'
      },
      {
        id: 210,
        title: 'El Salvador',
        code: 'SV'
      },
      {
        id: 88,
        title: 'Equatorial Guinea',
        code: 'GQ'
      },
      {
        id: 67,
        title: 'Eritrea',
        code: 'ER'
      },
      {
        id: 64,
        title: 'Estonia',
        code: 'EE'
      },
      {
        id: 69,
        title: 'Ethiopia',
        code: 'ET'
      },
      {
        id: 72,
        title: 'Falkland Islands',
        code: 'FK'
      },
      {
        id: 74,
        title: 'Faroe Islands',
        code: 'FO'
      },
      {
        id: 71,
        title: 'Fiji',
        code: 'FJ'
      },
      {
        id: 70,
        title: 'Finland',
        code: 'FI'
      },
      {
        id: 75,
        title: 'France',
        code: 'FR'
      },
      {
        id: 80,
        title: 'French Guiana',
        code: 'GF'
      },
      {
        id: 175,
        title: 'French Polynesia',
        code: 'PF'
      },
      {
        id: 216,
        title: 'French Southern Territories',
        code: 'TF'
      },
      {
        id: 76,
        title: 'Gabon',
        code: 'GA'
      },
      {
        id: 85,
        title: 'Gambia',
        code: 'GM'
      },
      {
        id: 79,
        title: 'Georgia',
        code: 'GE'
      },
      {
        id: 57,
        title: 'Germany',
        code: 'DE'
      },
      {
        id: 82,
        title: 'Ghana',
        code: 'GH'
      },
      {
        id: 83,
        title: 'Gibraltar',
        code: 'GI'
      },
      {
        id: 89,
        title: 'Greece',
        code: 'GR'
      },
      {
        id: 84,
        title: 'Greenland',
        code: 'GL'
      },
      {
        id: 78,
        title: 'Grenada',
        code: 'GD'
      },
      {
        id: 87,
        title: 'Guadeloupe',
        code: 'GP'
      },
      {
        id: 92,
        title: 'Guam',
        code: 'GU'
      },
      {
        id: 91,
        title: 'Guatemala',
        code: 'GT'
      },
      {
        id: 81,
        title: 'Guernsey',
        code: 'GG'
      },
      {
        id: 86,
        title: 'Guinea',
        code: 'GN'
      },
      {
        id: 93,
        title: 'Guinea-Bissau',
        code: 'GW'
      },
      {
        id: 94,
        title: 'Guyana',
        code: 'GY'
      },
      {
        id: 99,
        title: 'Haiti',
        code: 'HT'
      },
      {
        id: 96,
        title: 'Heard Island and McDonald Islands',
        code: 'HM'
      },
      {
        id: 97,
        title: 'Honduras',
        code: 'HN'
      },
      {
        id: 95,
        title: 'Hong Kong',
        code: 'HK'
      },
      {
        id: 100,
        title: 'Hungary',
        code: 'HU'
      },
      {
        id: 109,
        title: 'Iceland',
        code: 'IS'
      },
      {
        id: 105,
        title: 'India',
        code: 'IN'
      },
      {
        id: 101,
        title: 'Indonesia',
        code: 'ID'
      },
      {
        id: 108,
        title: 'Iran',
        code: 'IR'
      },
      {
        id: 107,
        title: 'Iraq',
        code: 'IQ'
      },
      {
        id: 102,
        title: 'Ireland',
        code: 'IE'
      },
      {
        id: 104,
        title: 'Isle of Man',
        code: 'IM'
      },
      {
        id: 103,
        title: 'Israel',
        code: 'IL'
      },
      {
        id: 110,
        title: 'Italy',
        code: 'IT'
      },
      {
        id: 44,
        title: 'Ivory Coast',
        code: 'CI'
      },
      {
        id: 112,
        title: 'Jamaica',
        code: 'JM'
      },
      {
        id: 114,
        title: 'Japan',
        code: 'JP'
      },
      {
        id: 111,
        title: 'Jersey',
        code: 'JE'
      },
      {
        id: 113,
        title: 'Jordan',
        code: 'JO'
      },
      {
        id: 125,
        title: 'Kazakhstan',
        code: 'KZ'
      },
      {
        id: 115,
        title: 'Kenya',
        code: 'KE'
      },
      {
        id: 118,
        title: 'Kiribati',
        code: 'KI'
      },
      {
        id: 245,
        title: 'Kosovo',
        code: 'XK'
      },
      {
        id: 123,
        title: 'Kuwait',
        code: 'KW'
      },
      {
        id: 116,
        title: 'Kyrgyzstan',
        code: 'KG'
      },
      {
        id: 126,
        title: 'Laos',
        code: 'LA'
      },
      {
        id: 135,
        title: 'Latvia',
        code: 'LV'
      },
      {
        id: 127,
        title: 'Lebanon',
        code: 'LB'
      },
      {
        id: 132,
        title: 'Lesotho',
        code: 'LS'
      },
      {
        id: 131,
        title: 'Liberia',
        code: 'LR'
      },
      {
        id: 136,
        title: 'Libya',
        code: 'LY'
      },
      {
        id: 129,
        title: 'Liechtenstein',
        code: 'LI'
      },
      {
        id: 133,
        title: 'Lithuania',
        code: 'LT'
      },
      {
        id: 134,
        title: 'Luxembourg',
        code: 'LU'
      },
      {
        id: 148,
        title: 'Macao',
        code: 'MO'
      },
      {
        id: 144,
        title: 'Macedonia',
        code: 'MK'
      },
      {
        id: 142,
        title: 'Madagascar',
        code: 'MG'
      },
      {
        id: 156,
        title: 'Malawi',
        code: 'MW'
      },
      {
        id: 158,
        title: 'Malaysia',
        code: 'MY'
      },
      {
        id: 155,
        title: 'Maldives',
        code: 'MV'
      },
      {
        id: 145,
        title: 'Mali',
        code: 'ML'
      },
      {
        id: 153,
        title: 'Malta',
        code: 'MT'
      },
      {
        id: 143,
        title: 'Marshall Islands',
        code: 'MH'
      },
      {
        id: 150,
        title: 'Martinique',
        code: 'MQ'
      },
      {
        id: 151,
        title: 'Mauritania',
        code: 'MR'
      },
      {
        id: 154,
        title: 'Mauritius',
        code: 'MU'
      },
      {
        id: 247,
        title: 'Mayotte',
        code: 'YT'
      },
      {
        id: 157,
        title: 'Mexico',
        code: 'MX'
      },
      {
        id: 73,
        title: 'Micronesia',
        code: 'FM'
      },
      {
        id: 139,
        title: 'Moldova',
        code: 'MD'
      },
      {
        id: 138,
        title: 'Monaco',
        code: 'MC'
      },
      {
        id: 147,
        title: 'Mongolia',
        code: 'MN'
      },
      {
        id: 140,
        title: 'Montenegro',
        code: 'ME'
      },
      {
        id: 152,
        title: 'Montserrat',
        code: 'MS'
      },
      {
        id: 137,
        title: 'Morocco',
        code: 'MA'
      },
      {
        id: 159,
        title: 'Mozambique',
        code: 'MZ'
      },
      {
        id: 146,
        title: 'Myanmar [Burma]',
        code: 'MM'
      },
      {
        id: 160,
        title: 'Namibia',
        code: 'NA'
      },
      {
        id: 169,
        title: 'Nauru',
        code: 'NR'
      },
      {
        id: 168,
        title: 'Nepal',
        code: 'NP'
      },
      {
        id: 166,
        title: 'Netherlands',
        code: 'NL'
      },
      {
        id: 161,
        title: 'New Caledonia',
        code: 'NC'
      },
      {
        id: 171,
        title: 'New Zealand',
        code: 'NZ'
      },
      {
        id: 165,
        title: 'Nicaragua',
        code: 'NI'
      },
      {
        id: 162,
        title: 'Niger',
        code: 'NE'
      },
      {
        id: 164,
        title: 'Nigeria',
        code: 'NG'
      },
      {
        id: 170,
        title: 'Niue',
        code: 'NU'
      },
      {
        id: 163,
        title: 'Norfolk Island',
        code: 'NF'
      },
      {
        id: 121,
        title: 'North Korea',
        code: 'KP'
      },
      {
        id: 149,
        title: 'Northern Mariana Islands',
        code: 'MP'
      },
      {
        id: 167,
        title: 'Norway',
        code: 'NO'
      },
      {
        id: 172,
        title: 'Oman',
        code: 'OM'
      },
      {
        id: 178,
        title: 'Pakistan',
        code: 'PK'
      },
      {
        id: 185,
        title: 'Palau',
        code: 'PW'
      },
      {
        id: 183,
        title: 'Palestine',
        code: 'PS'
      },
      {
        id: 173,
        title: 'Panama',
        code: 'PA'
      },
      {
        id: 176,
        title: 'Papua New Guinea',
        code: 'PG'
      },
      {
        id: 186,
        title: 'Paraguay',
        code: 'PY'
      },
      {
        id: 174,
        title: 'Peru',
        code: 'PE'
      },
      {
        id: 177,
        title: 'Philippines',
        code: 'PH'
      },
      {
        id: 181,
        title: 'Pitcairn Islands',
        code: 'PN'
      },
      {
        id: 179,
        title: 'Poland',
        code: 'PL'
      },
      {
        id: 184,
        title: 'Portugal',
        code: 'PT'
      },
      {
        id: 182,
        title: 'Puerto Rico',
        code: 'PR'
      },
      {
        id: 187,
        title: 'Qatar',
        code: 'QA'
      },
      {
        id: 42,
        title: 'Republic of the Congo',
        code: 'CG'
      },
      {
        id: 188,
        title: 'Reunion',
        code: 'RE'
      },
      {
        id: 189,
        title: 'Romania',
        code: 'RO'
      },
      {
        id: 191,
        title: 'Russia',
        code: 'RU'
      },
      {
        id: 192,
        title: 'Rwanda',
        code: 'RW'
      },
      {
        id: 26,
        title: 'Saint Barthelemy',
        code: 'BL'
      },
      {
        id: 199,
        title: 'Saint Helena',
        code: 'SH'
      },
      {
        id: 120,
        title: 'Saint Kitts and Nevis',
        code: 'KN'
      },
      {
        id: 128,
        title: 'Saint Lucia',
        code: 'LC'
      },
      {
        id: 141,
        title: 'Saint Martin',
        code: 'MF'
      },
      {
        id: 180,
        title: 'Saint Pierre and Miquelon',
        code: 'PM'
      },
      {
        id: 237,
        title: 'Saint Vincent and the Grenadines',
        code: 'VC'
      },
      {
        id: 244,
        title: 'Samoa',
        code: 'WS'
      },
      {
        id: 204,
        title: 'San Marino',
        code: 'SM'
      },
      {
        id: 209,
        title: 'Sao Tome and Principe',
        code: 'ST'
      },
      {
        id: 193,
        title: 'Saudi Arabia',
        code: 'SA'
      },
      {
        id: 205,
        title: 'Senegal',
        code: 'SN'
      },
      {
        id: 190,
        title: 'Serbia',
        code: 'RS'
      },
      {
        id: 195,
        title: 'Seychelles',
        code: 'SC'
      },
      {
        id: 203,
        title: 'Sierra Leone',
        code: 'SL'
      },
      {
        id: 198,
        title: 'Singapore',
        code: 'SG'
      },
      {
        id: 211,
        title: 'Sint Maarten',
        code: 'SX'
      },
      {
        id: 202,
        title: 'Slovakia',
        code: 'SK'
      },
      {
        id: 200,
        title: 'Slovenia',
        code: 'SI'
      },
      {
        id: 194,
        title: 'Solomon Islands',
        code: 'SB'
      },
      {
        id: 206,
        title: 'Somalia',
        code: 'SO'
      },
      {
        id: 248,
        title: 'South Africa',
        code: 'ZA'
      },
      {
        id: 90,
        title: 'South Georgia and the South Sandwich Islands',
        code: 'GS'
      },
      {
        id: 122,
        title: 'South Korea',
        code: 'KR'
      },
      {
        id: 208,
        title: 'South Sudan',
        code: 'SS'
      },
      {
        id: 68,
        title: 'Spain',
        code: 'ES'
      },
      {
        id: 130,
        title: 'Sri Lanka',
        code: 'LK'
      },
      {
        id: 196,
        title: 'Sudan',
        code: 'SD'
      },
      {
        id: 207,
        title: 'Suriname',
        code: 'SR'
      },
      {
        id: 201,
        title: 'Svalbard and Jan Mayen',
        code: 'SJ'
      },
      {
        id: 213,
        title: 'Swaziland',
        code: 'SZ'
      },
      {
        id: 197,
        title: 'Sweden',
        code: 'SE'
      },
      {
        id: 43,
        title: 'Switzerland',
        code: 'CH'
      },
      {
        id: 212,
        title: 'Syria',
        code: 'SY'
      },
      {
        id: 228,
        title: 'Taiwan',
        code: 'TW'
      },
      {
        id: 219,
        title: 'Tajikistan',
        code: 'TJ'
      },
      {
        id: 229,
        title: 'Tanzania',
        code: 'TZ'
      },
      {
        id: 218,
        title: 'Thailand',
        code: 'TH'
      },
      {
        id: 217,
        title: 'Togo',
        code: 'TG'
      },
      {
        id: 220,
        title: 'Tokelau',
        code: 'TK'
      },
      {
        id: 224,
        title: 'Tonga',
        code: 'TO'
      },
      {
        id: 226,
        title: 'Trinidad and Tobago',
        code: 'TT'
      },
      {
        id: 223,
        title: 'Tunisia',
        code: 'TN'
      },
      {
        id: 225,
        title: 'Turkey',
        code: 'TR'
      },
      {
        id: 222,
        title: 'Turkmenistan',
        code: 'TM'
      },
      {
        id: 214,
        title: 'Turks and Caicos Islands',
        code: 'TC'
      },
      {
        id: 227,
        title: 'Tuvalu',
        code: 'TV'
      },
      {
        id: 232,
        title: 'U.S. Minor Outlying Islands',
        code: 'UM'
      },
      {
        id: 240,
        title: 'U.S. Virgin Islands',
        code: 'VI'
      },
      {
        id: 231,
        title: 'Uganda',
        code: 'UG'
      },
      {
        id: 230,
        title: 'Ukraine',
        code: 'UA'
      },
      {
        id: 2,
        title: 'United Arab Emirates',
        code: 'AE'
      },
      {
        id: 77,
        title: 'United Kingdom',
        code: 'GB'
      },
      {
        id: 233,
        title: 'United States',
        code: 'US'
      },
      {
        id: 234,
        title: 'Uruguay',
        code: 'UY'
      },
      {
        id: 235,
        title: 'Uzbekistan',
        code: 'UZ'
      },
      {
        id: 242,
        title: 'Vanuatu',
        code: 'VU'
      },
      {
        id: 236,
        title: 'Vatican City',
        code: 'VA'
      },
      {
        id: 238,
        title: 'Venezuela',
        code: 'VE'
      },
      {
        id: 241,
        title: 'Vietnam',
        code: 'VN'
      },
      {
        id: 243,
        title: 'Wallis and Futuna',
        code: 'WF'
      },
      {
        id: 66,
        title: 'Western Sahara',
        code: 'EH'
      },
      {
        id: 246,
        title: 'Yemen',
        code: 'YE'
      },
      {
        id: 249,
        title: 'Zambia',
        code: 'ZM'
      },
      {
        id: 250,
        title: 'Zimbabwe',
        code: 'ZW'
      }
    ];
    return this.country;
  }

  sendCalculate(data) {
    return this.http.post(`${apiHost}/back/calculator`, data)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }
}
