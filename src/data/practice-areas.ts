export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  scope: string[];
  icon: string;
  faqs?: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'corporate-and-commercial-law',
    title: 'Corporate & Commercial Law',
    shortDescription:
      'Company formation, governance, commercial contracts, mergers and acquisitions, and regulatory compliance.',
    description:
      'We provide strategic legal counsel to businesses across Kenya — from incorporation and governance to complex commercial transactions. Our approach is practical, commercially aware, and oriented toward protecting your interests while keeping deals moving.',
    scope: [
      'Company formation and incorporation',
      'Corporate governance and compliance',
      'Commercial contracts and negotiations',
      'Mergers, acquisitions, and restructurings',
      'Joint ventures and shareholder agreements',
      'Regulatory compliance and licensing',
    ],
    icon: 'briefcase',
    faqs: [
      {
        question: 'Can you help us incorporate a company in Kenya?',
        answer:
          'Yes. We handle the full incorporation process with the Companies Registry, including drafting memorandum and articles of association, shareholder agreements, and filing all required statutory documents.',
      },
      {
        question: 'Do you review and draft commercial contracts?',
        answer:
          'We draft, review, and negotiate a wide range of commercial agreements — supply contracts, service agreements, distribution arrangements, and more — tailored to your commercial objectives.',
      },
    ],
  },
  {
    slug: 'civil-litigation-and-dispute-resolution',
    title: 'Civil Litigation & Dispute Resolution',
    shortDescription:
      'Representation in commercial disputes, property claims, judicial reviews, and alternative dispute resolution.',
    description:
      'When disputes arise, we combine rigorous legal analysis with a strategic, solution-focused approach. We represent clients before Kenyan courts and tribunals, and we are experienced in mediation, arbitration, and other alternative dispute resolution methods.',
    scope: [
      'Commercial and contractual disputes',
      'Property and land disputes',
      'Judicial review proceedings',
      'Debt recovery and enforcement',
      'Mediation and arbitration',
      'Injunctions and interim relief',
    ],
    icon: 'gavel',
    faqs: [
      {
        question: 'Do you handle alternative dispute resolution?',
        answer:
          'Yes. We are experienced in mediation, arbitration, and negotiated settlements, and we advise clients on the most appropriate and cost-effective path for resolving disputes.',
      },
      {
        question: 'What courts do you appear before?',
        answer:
          'We represent clients before the Magistrates\u2019 Courts, the High Court, the Court of Appeal, and specialised tribunals as appropriate to each matter.',
      },
    ],
  },
  {
    slug: 'conveyancing-and-real-estate',
    title: 'Conveyancing & Real Estate',
    shortDescription:
      'Property transfers, leases, charge and mortgage documentation, title searches, and development advisory.',
    description:
      'We guide clients through every stage of property transactions in Kenya — from due diligence and title searches to the final transfer. Our conveyancing practice covers residential, commercial, and agricultural property matters.',
    scope: [
      'Property purchases and transfers',
      'Lease agreements and tenancy matters',
      'Charges and mortgage documentation',
      'Title searches and due diligence',
      'Property development advisory',
      'Land registration and stamp duty',
    ],
    icon: 'home',
    faqs: [
      {
        question: 'What does the conveyancing process involve?',
        answer:
          'We conduct title searches, draft or review sale agreements, handle stamp duty assessment, lodge transfer documents with the Lands Registry, and ensure all statutory requirements are met.',
      },
    ],
  },
  {
    slug: 'employment-and-labour-law',
    title: 'Employment & Labour Law',
    shortDescription:
      'Employment contracts, workplace policies, unfair dismissal, disciplinary processes, and industrial relations.',
    description:
      'We advise both employers and employees on Kenyan employment and labour law matters. Our services range from drafting employment contracts and workplace policies to representing clients in industrial court proceedings.',
    scope: [
      'Employment contracts and policies',
      'Unfair dismissal and grievance handling',
      'Disciplinary processes and investigations',
      'Employee benefits and compensation',
      'Industrial relations and collective bargaining',
      'Compliance with Employment Act requirements',
    ],
    icon: 'users',
    faqs: [
      {
        question: 'Do you represent employers or employees?',
        answer:
          'We act for both employers and employees, providing balanced, practical advice on rights, obligations, and dispute resolution under Kenyan employment law.',
      },
    ],
  },
  {
    slug: 'family-and-succession-law',
    title: 'Family & Succession Law',
    shortDescription:
      'Wills and estate planning, probate and administration, matrimonial property, and family disputes.',
    description:
      'We handle family and succession matters with sensitivity and discretion. From drafting wills and managing estates to resolving matrimonial property disputes, we provide compassionate yet effective legal support.',
    scope: [
      'Wills and estate planning',
      'Probate and letters of administration',
      'Matrimonial property disputes',
      'Divorce and separation proceedings',
      'Child custody and maintenance',
      'Trusts and succession structuring',
    ],
    icon: 'heart',
    faqs: [
      {
        question: 'Can you help with estate planning?',
        answer:
          'Yes. We draft wills, establish trusts where appropriate, and advise on succession planning to ensure your wishes are respected and your family\u2019s interests are protected.',
      },
    ],
  },
  {
    slug: 'banking-and-finance',
    title: 'Banking & Finance',
    shortDescription:
      'Loan and facility agreements, security documentation, project finance, and regulatory advisory.',
    description:
      'We act for lenders, borrowers, and investors in banking and finance transactions. Our experience covers facility agreements, security documentation, project finance, and compliance with Kenyan financial regulations.',
    scope: [
      'Loan and facility agreements',
      'Security and charge documentation',
      'Project finance advisory',
      'Debt restructuring and refinancing',
      'Financial regulatory compliance',
      'Investment and finance transactions',
    ],
    icon: 'landmark',
    faqs: [],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription:
      'Trademarks, copyrights, IP registration, licensing, and enforcement of intellectual property rights.',
    description:
      'We help clients protect, manage, and enforce their intellectual property rights in Kenya. From trademark registration to licensing agreements and IP disputes, we provide comprehensive IP legal services.',
    scope: [
      'Trademark registration and protection',
      'Copyright registration and advisory',
      'IP licensing and assignment agreements',
      'Enforcement of intellectual property rights',
      'Trade secrets and confidentiality',
      'IP dispute resolution',
    ],
    icon: 'shield',
    faqs: [],
  },
  {
    slug: 'legal-advisory-and-compliance',
    title: 'Legal Advisory & Compliance',
    shortDescription:
      'Ongoing legal advisory, regulatory compliance, risk management, and corporate secretarial services.',
    description:
      'We serve as trusted legal advisors to businesses and organisations, providing ongoing counsel on regulatory compliance, risk management, and legal governance. Our advisory services are designed to prevent problems before they arise.',
    scope: [
      'Ongoing legal advisory and retainer services',
      'Regulatory compliance audits and programs',
      'Risk management and legal health checks',
      'Corporate secretarial services',
      'Policy development and review',
      'Training and legal awareness programs',
    ],
    icon: 'book-open',
    faqs: [],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
