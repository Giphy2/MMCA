export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Insights', path: '/insights' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const firmInfo = {
  name: 'Mukele Moni Law',
  credential: 'Advocates of the High Court of Kenya',
  email: 'info@mukelemonilaw.com',
  phone: '+254 20 222 3344',
  phoneHref: 'tel:+254202223344',
  emailHref: 'mailto:info@mukelemonilaw.com',
  offices: [
    { city: 'Nairobi', region: 'Kenya' },
    { city: 'Kakamega', region: 'Kenya' },
  ],
};
