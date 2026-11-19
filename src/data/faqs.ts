/**
 * Master FAQ content. Pages render these visibly AND in FAQPage schema from the same
 * array, so the text always matches. Permit answers are general information, not legal
 * advice, and need client review before launch (see LAUNCH-CHECKLIST).
 */
export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: 'What areas do you serve?',
    a: 'We build docks, lifts and seawalls in Hampstead, Surf City, Topsail Beach and North Topsail Beach. If your property is just outside that, call and we\'ll tell you whether we can cover it.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We come out, look at the shoreline and the water depth, and give you a written estimate at no charge.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We\'re licensed and insured. Ask, and we\'ll send the license number and a certificate of insurance.',
  },
  {
    q: 'What is the difference between a floating dock and a fixed dock?',
    a: 'A fixed dock stays at one height. A floating dock rides the tide, so the step onto the boat doesn\'t change. A lot of homes here use a fixed pier with a float on a gangway.',
  },
  {
    q: 'What is the best material for a bulkhead on the NC coast?',
    a: 'Vinyl doesn\'t rot, and borers leave it alone. Wood can cost less at the start. We\'ll price both if you want to see the difference.',
  },
];

export const permitFaqs: Faq[] = [
  {
    q: 'Do I need a CAMA permit to build a new dock in North Carolina?',
    a: 'Generally, yes. New docks, piers, boat lifts and bulkheads in the 20 coastal counties go through the NC Division of Coastal Management under CAMA. A lot of residential docks qualify for a general permit. This is general information, not legal advice.',
  },
  {
    q: 'Do I need a CAMA permit to replace my dock?',
    a: 'Under NC Session Laws 2024-45 and 2024-53, rebuilding a dock, pier or walkway damaged by storms, fire or normal wear to its prior footprint generally no longer needs a CAMA permit. Exceptions include structures over 6 ft wide, platforms over 800 sq ft, docks next to a federal navigation channel, or enlargements beyond set limits. Other state, federal and local rules still apply. This is general information, not legal advice.',
  },
  {
    q: 'Who applies for the permit?',
    a: 'We explain which permit applies when we come out, and we can help you through it. Ask us who files the paperwork on your job.',
  },
];

export const processFaqs: Faq[] = [
  {
    q: 'How long does a dock or seawall project take?',
    a: 'Permits and scheduling usually take longer than the construction. After we see the property, we give you a timeline for your job.',
  },
  {
    q: 'What happens at the estimate visit?',
    a: 'We come out to the property, check the water depth and how equipment will get in, and talk about how you use the boat. We also go over the permits. You get a written estimate afterward.',
  },
];

export const homeFaqs: Faq[] = [
  generalFaqs[1],
  generalFaqs[2],
  permitFaqs[0],
  permitFaqs[1],
  generalFaqs[3],
  processFaqs[0],
];
