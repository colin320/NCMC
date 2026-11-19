import { business, isConfirmed } from '../data/business';

const B = business;
export const ORG_ID = `${B.url}/#business`;
export const SITE_ID = `${B.url}/#website`;

/** Drop keys whose value is an unconfirmed placeholder, null, or empty. */
function clean<T extends Record<string, unknown>>(o: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(o).filter(([, v]) => (Array.isArray(v) ? v.length > 0 : isConfirmed(v))),
  ) as Partial<T>;
}

export function businessSchema(logoUrl: string, imageUrl: string) {
  const a = B.address;
  const addressConfirmed = [a.street, a.city, a.postalCode].every(isConfirmed);
  return clean({
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': ORG_ID,
    name: B.name,
    legalName: B.legalName,
    url: `${B.url}/`,
    logo: logoUrl,
    image: imageUrl,
    telephone: B.phones.office.e164,
    email: B.email,
    description: `${B.positioning} building docks and boat lifts in ${B.serviceAreaSummary}.`,
    address: addressConfirmed
      ? {
          '@type': 'PostalAddress',
          streetAddress: a.street,
          addressLocality: a.city,
          addressRegion: a.region,
          postalCode: a.postalCode,
          addressCountry: a.country,
        }
      : null,
    geo: B.geo ? { '@type': 'GeoCoordinates', latitude: B.geo.lat, longitude: B.geo.lng } : null,
    openingHoursSpecification: B.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.schemaDays,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: B.areas.map((t) => ({ '@type': 'City', name: `${t.name}, NC` })),
    priceRange: B.priceRange,
    foundingDate: B.yearFounded,
    sameAs: [B.social.facebook, B.social.instagram, B.social.googleBusinessProfile].filter(isConfirmed),
    // aggregateRating intentionally omitted until real reviews are shown on the site.
  });
}

export function offerCatalog(services: { name: string; url: string }[]) {
  return {
    '@type': 'OfferCatalog',
    name: 'Marine construction services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: s.url },
    })),
  };
}

export function websiteSchema() {
  return { '@type': 'WebSite', '@id': SITE_ID, name: B.name, url: `${B.url}/`, publisher: { '@id': ORG_ID } };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(s: { name: string; serviceType: string; url: string; description: string }) {
  return {
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    url: s.url,
    description: s.description,
    provider: { '@id': ORG_ID },
    areaServed: B.areas.map((t) => ({ '@type': 'City', name: `${t.name}, NC` })),
  };
}

/** ImageGallery of real project photos (home slider, projects page). */
export function imageGallerySchema(name: string, url: string, images: { url: string; caption: string; alt: string; town?: string }[]) {
  return {
    '@type': 'ImageGallery',
    name,
    url,
    associatedMedia: images.map((i) => ({
      '@type': 'ImageObject',
      contentUrl: i.url,
      caption: i.caption,
      description: i.alt,
      creator: { '@id': ORG_ID },
      copyrightHolder: { '@id': ORG_ID },
      ...(i.town ? { contentLocation: { '@type': 'Place', name: `${i.town}, NC` } } : {}),
    })),
  };
}
