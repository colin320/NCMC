/**
 * Single source of truth for NC Marine Construction business facts.
 *
 * RULES (see docs/BRIEF.md section 0):
 * - Anything unverified is a TODO_CONFIRM placeholder. Never invent reviews, prices,
 *   years in business, license numbers, or project details.
 * - Placeholders render visibly on preview builds so they get caught in review, and
 *   are omitted from JSON-LD (see isConfirmed) so schema stays valid.
 * - Every placeholder is listed in docs/LAUNCH-CHECKLIST.md. At launch,
 *   `npm run check:placeholders` must pass.
 */
import { SITE_URL } from './site-url.mjs';

export const TODO = (note: string) => `TODO_CONFIRM: ${note}`;
export const isConfirmed = (v: unknown): boolean =>
  v !== null && v !== undefined && v !== '' && !String(v).includes('TODO_CONFIRM');

export interface Phone {
  display: string;
  /** E.164 for tel:/sms: links and schema */
  e164: string;
}

export const business = {
  legalName: 'NC Marine Construction Inc.',
  name: 'NC Marine Construction',
  shortName: 'NCMC',
  url: SITE_URL,
  tagline: 'Docks, boat lifts, floating docks and seawalls for Hampstead and Topsail Island.',
  positioning: 'Licensed and insured marine contractor',
  differentiator: 'We build from engineered plans',

  phones: {
    /** Primary, shown everywhere. Source: current site + Facebook. */
    office: { display: '(910) 465-1712', e164: '+19104651712' } as Phone,
    /**
     * Mobile listed on current site. 808 is a Hawaii area code, so it is NOT published
     * until the client confirms. Set `publishMobile` to true once confirmed.
     */
    mobile: { display: '(808) 443-9412', e164: '+18084439412' } as Phone,
    publishMobile: false,
    /**
     * Number used for the "Text" button. Defaults to the office line.
     * [CONFIRM] that this line can receive texts (see LAUNCH-CHECKLIST).
     */
    text: { display: '(910) 465-1712', e164: '+19104651712' } as Phone,
  },

  /** Source: current site. Recommend a branded address on the site domain [CONFIRM]. */
  email: 'ncmarineinc@gmail.com',

  owner: {
    name: TODO('owner name'),
    title: 'Owner',
    bio: TODO('short owner story (2 to 4 sentences)'),
  },

  address: {
    street: TODO('street address'),
    city: TODO('city'),
    region: 'NC',
    postalCode: TODO('ZIP'),
    country: 'US',
  },
  /** Lat/long of the shop/office, for schema `geo`. */
  geo: null as null | { lat: number; lng: number },

  /** e.g. [{ days: 'Mon to Fri', opens: '07:00', closes: '17:00', schemaDays: ['Monday', ...] }] */
  hours: [] as { days: string; opens: string; closes: string; schemaDays: string[] }[],
  hoursText: TODO('business hours'),

  license: {
    number: TODO('NC General Contractor license #'),
    classification: TODO('license classification'),
  },
  insuranceCarrier: TODO('insurance carrier'),
  yearFounded: TODO('year founded'),

  /** Only fill with a real, current Google rating. Drives no schema until reviews are shown on-site. */
  googleRating: null as null | { rating: number; count: number },
  warranty: TODO('warranty terms'),
  financing: TODO('financing offered? (yes/no and provider)'),
  priceRange: TODO('schema priceRange, e.g. $$'),

  social: {
    facebook: 'https://www.facebook.com/p/NC-Marine-Construction-100054190360805/',
    instagram: 'https://www.instagram.com/ncmarine_inc/',
    googleBusinessProfile: TODO('Google Business Profile URL'),
  },

  /**
   * Target market (Dyno decision, 2026-11-19): own Hampstead and the Topsail Island towns.
   * Wilmington is intentionally NOT targeted. Order = priority.
   * `areaPage` is filled in only once a town has a real, unique area page (phase 3).
   */
  serviceAreaSummary: 'Hampstead and Topsail Island, NC',
  areas: [
    { name: 'Surf City', areaPage: null },
    { name: 'Hampstead', areaPage: null },
    { name: 'Topsail Beach', areaPage: null },
    { name: 'North Topsail Beach', areaPage: null },
  ] as { name: string; note?: string; areaPage: string | null }[],
  areasConfirmed: true,

  /** Brands seen on verified project credits (Facebook). [CONFIRM] what else they install. */
  brands: ['CMI (vinyl sheet piling)', 'WaveArmor', 'Tide Tamer'],

  /** Real reviews only. { name: 'First L.', town: 'Hampstead', text: '...', source: 'Google' } */
  reviews: [] as { name: string; town: string; text: string; source: string }[],

  /** Does the company handle CAMA permits and sealed drawings for the client? */
  handlesPermits: TODO('do they handle CAMA permits + engineered/sealed drawings for the client?'),
  leadTime: TODO('typical lead time from deposit to build'),
} as const;

/** Third-party IDs. Leave empty until real; empty values disable the integration. */
export const integrations = {
  /** GA4 measurement ID, e.g. G-XXXXXXX */
  ga4Id: '',
  /** Microsoft Clarity project ID (optional) */
  clarityId: '',
  /** Cloudflare Turnstile site key (invisible). Secret goes in Cloudflare env, never here. */
  turnstileSiteKey: '',
};

export const telHref = (p: Phone = business.phones.office) => `tel:${p.e164}`;
export const smsHref = (p: Phone = business.phones.text) => `sms:${p.e164}`;
export const fullAddress = () => {
  const a = business.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
};
