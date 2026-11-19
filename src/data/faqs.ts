/**
 * Master FAQ content. Pages render these visibly AND in FAQPage schema from the same
 * array, so the text always matches. Permit answers are general information, not legal
 * advice, and need client review before launch (see LAUNCH-CHECKLIST).
 */
export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: 'What areas do you serve?',
    a: 'We build docks, lifts and seawalls in Hampstead, Surf City, Topsail Beach and North Topsail Beach. Call to confirm we cover your property.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We visit your property, look at the shoreline, water depth and access, and give you a written estimate at no cost.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. NC Marine Construction is a licensed and insured marine contractor. Ask us for our license number and certificate of insurance at any time.',
  },
  {
    q: 'What is the difference between a floating dock and a fixed dock?',
    a: 'A fixed dock stays at one height on pilings. A floating dock rides on floats and rises and falls with the tide, so the step to your boat stays the same. Many waterfront homes use a fixed pier with a floating dock attached.',
  },
  {
    q: 'What is the best material for a bulkhead on the NC coast?',
    a: 'Many property owners now choose vinyl sheet piling because it does not rot and is not attacked by marine borers the way wood can be. Wood can cost less up front. We will price both so you can compare.',
  },
];

export const permitFaqs: Faq[] = [
  {
    q: 'Do I need a CAMA permit to build a new dock in North Carolina?',
    a: 'Generally, yes. New docks, piers, boat lifts and bulkheads in the 20 coastal counties go through the NC Division of Coastal Management under the Coastal Area Management Act (CAMA). Many residential docks qualify for a general permit. This is general information, not legal advice.',
  },
  {
    q: 'Do I need a CAMA permit to replace my dock?',
    a: 'Under NC Session Laws 2024-45 and 2024-53, rebuilding a dock, pier or walkway damaged by storms, fire or normal wear to its prior footprint generally no longer needs a CAMA permit. Exceptions include structures over 6 ft wide, platforms over 800 sq ft, docks next to a federal navigation channel, or enlargements beyond set limits. Other state, federal and local rules still apply. This is general information, not legal advice.',
  },
  {
    q: 'Who applies for the permit?',
    a: 'We explain the permit path for your project during the estimate visit and can help you through the process. Ask us how we handle permits for your specific project.',
  },
];

export const processFaqs: Faq[] = [
  {
    q: 'How long does a dock or seawall project take?',
    a: 'Permitting and scheduling usually take longer than construction itself. After the site visit we give you a realistic timeline for your property.',
  },
  {
    q: 'What happens at the estimate visit?',
    a: 'We walk the shoreline with you, check water depth and access, talk through how you want to use the water, and explain options, permits and next steps. You get a written estimate afterward.',
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
