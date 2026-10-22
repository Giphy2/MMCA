export interface Insight {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  summary: string;
  body: string[];
  isDemo: boolean;
}

export const insights: Insight[] = [
  {
    slug: 'understanding-the-companies-act-2015',
    title: 'Understanding the Companies Act, 2015: Key Considerations for Kenyan Businesses',
    date: 'March 2025',
    dateISO: '2025-03-15',
    category: 'Corporate Law',
    summary:
      'An overview of the key provisions of the Companies Act, 2015 and what they mean for company directors, shareholders, and governance practices in Kenya.',
    body: [
      'The Companies Act, 2015 brought significant reforms to company law in Kenya, modernising the legal framework for incorporation, governance, and corporate reporting. This article highlights key considerations for businesses operating under the Act.',
      'One of the notable changes is the introduction of the single-member company, allowing businesses to incorporate with a sole shareholder. This has simplified the entry point for entrepreneurs and small businesses.',
      'The Act also strengthened director duties, codifying the responsibilities of company directors in areas such as duty of care, skill, and diligence, and the duty to avoid conflicts of interest. Directors should ensure their governance practices align with these statutory obligations.',
      'This article is for general informational purposes only and does not constitute legal advice. Specific legal questions should be discussed with a qualified advocate.',
    ],
    isDemo: true,
  },
  {
    slug: 'key-considerations-in-property-transfers',
    title: 'Key Considerations in Kenyan Property Transfers',
    date: 'February 2025',
    dateISO: '2025-02-10',
    category: 'Conveyancing',
    summary:
      'A practical guide to the legal requirements and due diligence steps involved in transferring property in Kenya.',
    body: [
      'Transferring property in Kenya involves several legal steps, from title searches at the Lands Registry to the preparation and execution of transfer documents. Understanding the process helps buyers and sellers avoid common pitfalls.',
      'Due diligence is critical. Before committing to a purchase, a buyer should verify the title, check for encumbrances or caveats, confirm rates and rent are paid up to date, and ensure the seller has the legal capacity to transfer the property.',
      'Stamp duty is payable on transfers, and the rate varies depending on whether the property is in a municipality or outside. Ensuring the correct duty is assessed and paid is essential for a valid transfer.',
      'This article is for general informational purposes only and does not constitute legal advice.',
    ],
    isDemo: true,
  },
  {
    slug: 'employment-law-updates-2025',
    title: 'Recent Developments in Kenyan Employment Law',
    date: 'January 2025',
    dateISO: '2025-01-20',
    category: 'Employment Law',
    summary:
      'An overview of recent developments in employment law and what employers should be aware of in their workplace practices.',
    body: [
      'Kenyan employment law continues to evolve, with developments in areas such as fair termination procedures, the gig economy, and workplace policies. Employers should stay informed to ensure compliance.',
      'Fair procedure remains a cornerstone of employment law. Courts have consistently emphasised the importance of following due process — including proper notification, hearing, and reasons — before terminating employment.',
      'Employers should also review their workplace policies regularly to ensure they address contemporary issues such as remote work, data protection, and workplace harassment.',
      'This article is for general informational purposes only and does not constitute legal advice.',
    ],
    isDemo: true,
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
