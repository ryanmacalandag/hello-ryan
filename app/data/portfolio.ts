export type PortfolioType = {
  title: string;
  url: string;
  slug: string; 
  tags: string[];
  link?: string;
  tools: string[];
};

export const portfolio:PortfolioType[] = [
  {
    title: 'Filipino Tech Community Canberra',
    url: '/portfolio/ftcc-website.jpg',
    slug: 'ftcc-website',
    tags: ['website', 'branding'],
    link: 'https://ftcc.org.au',
    tools: ['nextjs','javascript','tailwind','typescipt'],
  },
  {
    title: 'Australian Catholic Communications Congress',
    url: '/portfolio/accc2024-branding.png',
    slug: 'mediacongress-branding',
    tags: ['event', 'branding'],
    tools: ['wordpress','javascript', 'tailwind','php','mysql'],
  },
  {
    title: 'Reposit Customers: Rob & Jen',
    url: '/portfolio/reposit-rob-jen.jpg',
    slug: 'reposit-rob-jen',
    tags: ['video', 'promo'],
    link: 'https://youtu.be/V4t8SFut-rU?si=BhlgGUqwpJqRCvFi',
    tools: ['sony','premiere'],
  },
  {
    title: 'Kantakanta - Songs App',
    url: '/portfolio/song-app.jpg',
    slug: 'song-app',
    tags: ['uiux', 'mobile', 'prototype'],
    link: 'https://www.figma.com/proto/wyPBXRYqZX82pEWDiScbjT/kantakanta?node-id=62-317&node-type=canvas&t=FAB1nJPt9xwExiuO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
    tools: ['figma'],
  },
  {
    title: 'Reposit Customers',
    url: '/portfolio/reposit-customers.jpg',
    slug: 'reposit-customers',
    tags: ['video', 'promo'],
    link: 'https://youtu.be/9kTQbSJkCDg?si=gWu2vUdXGuiQ7pGe',
    tools: ['sony','premiere'],
  },
  {
    title: 'Australian Catholic Communications Congress',
    url: '/portfolio/media-congress-website-01.jpg',
    slug: 'media-congress-website-01',
    tags: ['event', 'website'],
    link: 'https://mediacongress.catholic.au/',
    tools: ['wordpress','javascript','tailwind','php','mysql'],
  },
  {
    title: 'ACBC Social Media Tiles',
    url: '/portfolio/acbc-social-tiles.jpg',
    slug: 'acbc-social-media',
    tags: ['socials', 'graphics'],
    tools: ['photoshop'],
  },
  {
    title: 'Michael Galovic Iconography Exhibit',
    url: '/portfolio/michael-galovic.jpg',
    slug: 'michael-galovic',
    tags: ['video', 'documentary'],
    link: 'https://youtu.be/swIIw0EYAVE?si=eQ4Wu9xUDRiz6gV3',
    tools: ['sony','premiere'],
  },
  {
    title: 'National Centre for Evangelisation',
    url: '/portfolio/nce-new-logo.jpg',
    slug: 'nce-logo-redesign',
    tags: ['branding'],
    tools: ['illustrator'],
  },
  {
    title: 'Mass for You at Home',
    url: '/portfolio/mfyah-website-01.jpg',
    slug: 'mfyah-website-01',
    tags: ['website'],
    tools: ['wordpress','javascript','tailwind'],
  },
  {
    title: '2024-2025 Social Justice Statement',
    url: '/portfolio/sjs2425-print.jpg',
    slug: 'sjs2425-publication',
    tags: ['publication', 'print'],
    tools: ['indesign'],
  },
  {
    title: 'Gabrielle and Shane Wedding',
    url: '/portfolio/gabrielle-and-shane-wedding.jpg',
    slug: 'gabrielle-and-shane-wedding',
    tags: ['video', 'wedding'],
    link: 'https://www.youtube.com/watch?v=9Fc0nlKPuhQ',
    tools: ['sony','premiere'],
  },
  {
    title: 'MFYAH Stripe Integration',
    url: '/portfolio/mfyah-website-02.jpg',
    slug: 'mfyah-website-02',
    tags: ['website'],
    tools: ['wordpress','javascript','tailwind'],
  },
  {
    title: 'Reposit App UI/UX Redesign',
    url: '/portfolio/reposit-app.jpg',
    slug: 'reposit-app-redesign',
    tags: ['uiux', 'mobile', 'prototype'],
    link: 'https://www.figma.com/proto/C1AcRSfzThwoXc1rCLS1AE/Reposit-App-UI?node-id=2-2&starting-point-node-id=282%3A2&t=tsICWkWytdgoZiww-1',
    tools: ['figma','sketch','react-native'],
  },
  {
    title: 'Refugee Sunday 2024',
    url: '/portfolio/refugee-sunday.jpg',
    slug: 'refugee-sunday',
    tags: ['uiux', 'website', 'prototype'],
    link: 'https://www.figma.com/proto/L582qPW1C50enIDwi3xrNb/Migrant-and-Refugee-Resources?node-id=14-98&starting-point-node-id=2%3A2&t=4tyZXuHagMEfOAsi-1',
    tools: ['figma'],
  },
  {
    title: 'Papa J Launch Campaign',
    url: '/portfolio/papa-j-promo.jpg',
    slug: 'papa-j-promo',
    tags: ['video', 'promo'],
    link: 'https://www.youtube.com/watch?v=jEn-gdbJLi4',
    tools: ['premiere','sony'],
  },
  {
    title: 'CathNews Website Layout',
    url: '/portfolio/cathnews-website.jpg',
    slug: 'cathnews-website',
    tags: ['website'],
    link: 'https://cathnews.com',
    tools: ['wordpress','php','mysql'],
  },
];