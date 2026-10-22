export interface Attorney {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  bio: string;
  qualifications: string[];
  memberships: string[];
  photo?: string;
}

export const attorneys: Attorney[] = [
  {
    slug: 'placeholder-partner-1',
    name: '[Partner Name 1]',
    title: 'Managing Partner',
    practiceAreas: ['Corporate & Commercial Law', 'Banking & Finance'],
    bio: '[Biography to be provided by the firm. This placeholder will be replaced with verified professional background information.]',
    qualifications: ['[Qualifications to be provided]'],
    memberships: ['[Professional memberships to be provided]'],
  },
  {
    slug: 'placeholder-partner-2',
    name: '[Partner Name 2]',
    title: 'Partner',
    practiceAreas: ['Civil Litigation & Dispute Resolution', 'Employment & Labour Law'],
    bio: '[Biography to be provided by the firm. This placeholder will be replaced with verified professional background information.]',
    qualifications: ['[Qualifications to be provided]'],
    memberships: ['[Professional memberships to be provided]'],
  },
  {
    slug: 'placeholder-associate-1',
    name: '[Associate Name 1]',
    title: 'Associate Advocate',
    practiceAreas: ['Conveyancing & Real Estate', 'Family & Succession Law'],
    bio: '[Biography to be provided by the firm. This placeholder will be replaced with verified professional background information.]',
    qualifications: ['[Qualifications to be provided]'],
    memberships: ['[Professional memberships to be provided]'],
  },
];

export function getAttorney(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}
