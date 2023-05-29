export const productDetails = {
  id: '76v6g56n8t78tm',
  title: 'Osaka entry tee superdry 12',
  image: './iamges/osaka12.jpg',
  price: '29,00',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt a accusamus, cumque voluptate sit. Officiis sunt ullam minima non officia ab',
  categories: ['Men', 'T-Shirts'],
  tags: ['jeans', 'man', 't-shirt', 'white'],
  socialIcons: [
    {
      id: 123,
      icon: 'fa-brands fa-facebook-f',
      color: '#3a589d',
      tooltip: 'Share on Facebook',
      link: 'https://facebook.com',
    },
    {
      id: 124,
      icon: 'fa-brands fa-twitter',
      color: '#2478ba',
      tooltip: 'Share on Twitter',
      link: 'https://twitter.com',
    },
    {
      id: 125,
      icon: 'fa-regular fa-envelope',
      color: '#111',
      tooltip: 'Email to a Friend',
      link: 'https://gmail.com',
    },
    {
      id: 126,
      icon: 'fa-brands fa-pinterest-p',
      color: '#cb2320',
      tooltip: 'Pin to Pinterest',
      link: 'https://pinterest.com',
    },
    {
      id: 127,
      icon: 'fa-brands fa-linkedin-in',
      color: '#0072b7',
      tooltip: 'Share on LinkedIn',
      link: 'https://linkedin.com',
    },
  ],
};

export const socialIcons = [
  {
    id: 123,
    icon: 'fa-brands fa-facebook-f',
    color: '#3a589d',
    tooltip: 'Share on Facebook',
    link: 'https://facebook.com',
  },
  {
    id: 124,
    icon: 'fa-brands fa-twitter',
    color: '#2478ba',
    tooltip: 'Share on Twitter',
    link: 'https://twitter.com',
  },
  {
    id: 125,
    icon: 'fa-regular fa-envelope',
    color: '#111',
    tooltip: 'Email to a Friend',
    link: 'https://gmail.com',
  },
  {
    id: 126,
    icon: 'fa-brands fa-pinterest-p',
    color: '#cb2320',
    tooltip: 'Pin to Pinterest',
    link: 'https://pinterest.com',
  },
  {
    id: 127,
    icon: 'fa-brands fa-linkedin-in',
    color: '#0072b7',
    tooltip: 'Share on LinkedIn',
    link: 'https://linkedin.com',
  },
];

export const product = {
  breadcrumbs: [
    { text: 'Home', link: 'https://google.com?q=home' },
    { text: 'Shop', link: 'https://google.com?q=shop' },
    { text: 'Men', link: 'https://google.com?q=men' },
    { text: 'T-Shirts', link: 'https://google.com?q=tshirts' },
  ],
  title: 'Osaka Entry Tee Superdry 12',
  price: {
    sale: 29.0,
    regular: 39.0,
  },
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, veniam at soluta in eligendi rerum labore consequatur. Repellat, sed distinctio esse obcaecati debitis animi iure!',
  categories: [
    {
      text: 'Men',
      link: '#',
    },
    {
      text: 'T-Shirt',
      link: '#',
    },
  ],
  tags: [
    {
      text: 'men',
      link: '#',
    },
    {
      text: 't-Shirt',
      link: '#',
    },
  ],
  share: socialIcons,
  images: [
    {
      thumb: 'thumb-url',
      original: 'original-url',
      alt: 'alt-text',
      featured: true,
    },
    {
      thumb: 'thumb-url',
      original: 'original-url',
      alt: 'alt-text',
      featured: false,
    },
    {
      thumb: 'thumb-url',
      original: 'original-url',
      alt: 'alt-text',
      featured: false,
    },
  ],
  wishlist: true,
};

export const menus = [
  {
    id: 1,
    text: 'Home',
    link: '#',
  },
  {
    id: 2,
    text: 'Home 1',
    link: '#',
  },
  {
    id: 3,
    text: 'Home 2',
    link: '#',
  },
  {
    id: 4,
    text: 'Shop',
    link: '#',
  },
  {
    id: 5,
    text: 'Shop 1',
    link: '#',
  },
  {
    id: 6,
    text: 'Shop 2',
    link: '#',
  },
  {
    id: 7,
    text: 'Shop 3',
    link: '#',
  },
  {
    id: 8,
    text: 'About',
    link: '#',
  },
];

export const childrenMap = [
  {
    id: 1,
    children: [2, 3],
  },
  {
    id: 4,
    children: [5, 6, 7],
  },
  {
    id: 8,
  },
];

export const finalMenu = childrenMap.map((child) => {
  return {
    ...menus.find((menu) => menu.id === child.id),
    children: child.children
      ? child.children.map((childId) =>
          menus.find((iMenu) => iMenu.id === childId)
        )
      : [],
  };
});
