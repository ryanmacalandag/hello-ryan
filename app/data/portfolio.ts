export type PortfolioType = {
  title: string;
  url: string;
  slug: string;
  tags: string;
  link?: string;
};

export const portfolio:PortfolioType[] = [
  {
    title: 'Filipino Tech Community Canberra',
    url: '/portfolio/ftcc-website.jpg',
    slug: 'ftcc-website',
    tags: 'website, branding',
    link: 'https://ftcc.org.au',
  },
  {
    title: 'Australian Catholic Communications Congress',
    url: '/portfolio/accc2024-branding.png',
    slug: 'mediacongress-branding',
    tags: 'event, branding',
  },
  {
    title: 'Reposit Customers: Rob & Jen',
    url: '/portfolio/reposit-rob-jen.jpg',
    slug: 'reposit-rob-jen',
    tags: 'event, branding',
    link: 'https://youtu.be/V4t8SFut-rU?si=BhlgGUqwpJqRCvFi'
  },
  {
    title: 'Reposit Customers',
    url: '/portfolio/reposit-customers.jpg',
    slug: 'reposit-customers',
    tags: 'corporate, video, marketing',
    link: 'https://youtu.be/9kTQbSJkCDg?si=gWu2vUdXGuiQ7pGe',
  },
  {
    title: 'Australian Catholic Communications Congress',
    url: '/portfolio/media-congress-website-01.jpg',
    slug: 'media-congress-website-01',
    tags: 'event, website',
    link: 'https://mediacongress.catholic.au/',
  },
  {
    title: 'ACBC Social Media Tiles',
    url: '/portfolio/acbc-social-tiles.jpg',
    slug: 'acbc-social-media',
    tags: 'social media',
  },
  {
    title: 'Michael Galovic Iconography Exhibit',
    url: '/portfolio/michael-galovic.jpg',
    slug: 'michael-galovic',
    tags: 'video',
    link: 'https://youtu.be/swIIw0EYAVE?si=eQ4Wu9xUDRiz6gV3',
  },
  {
    title: 'National Centre for Evangelisation',
    url: '/portfolio/nce-new-logo.jpg',
    slug: 'nce-logo-redesign',
    tags: 'logo, branding, redesign',
  },
  {
    title: 'Mass for You at Home',
    url: '/portfolio/mfyah-website-01.jpg',
    slug: 'mfyah-website-01',
    tags: '',
  },
  {
    title: '2024-2025 Social Justice Statement',
    url: '/portfolio/sjs2425-print.jpg',
    slug: 'sjs2425-publication',
    tags: 'print publication magazine',
  },
  {
    title: 'Australian Catholic Communications Congress',
    url: '/portfolio/mfyah-website-02.jpg',
    slug: 'mfyah-website-02',
    tags: 'mfyah website redesign strategy wordpress',
  },
  {
    title: 'ACBC General Secretariat Portraits',
    url: '/portfolio/acbc-staff-photos.jpg',
    slug: 'acbc-general-secretariat',
    tags: 'photography portraits people',
  },
];