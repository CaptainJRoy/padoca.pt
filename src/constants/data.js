import images from './images';

export let language = 'pt';
export function toggleLanguage(lang) {
  language = lang === 'pt' ? 'pt' : 'en';
}


export const labels = {
  en: {
    navbar: {
      about: 'About Us',
      menu: 'Menu',
      contact_us: 'Where to find us'
    },
    header: {
      sub_heading: '100% plant based food!',
      title: 'Pursuing a sustainable future',
      text: 'Come and taste our 100% plant based menues. From breakfast to dinner, we\'ve got you covered.',
      explore_menu: 'Explore our menu'
    },
    menu: {
      sub_heading: 'Menu that fits your palatte',
      description: 'We have a wide variety of dishes, from breakfast to dinner. We also have a wide variety of drinks, from wines to cocktails.',
    },
    gallery: {
      title: 'Photo Gallery',
      description: 'Get a sneak peak at what we have to offer. Explore more delicious food through our Instagram.',
      see_more: 'View more'
    },
    footer: {
      contact_us: 'Where to find us',
      schedule: 'Schedule',
      open_hours: [
        {
          days: 'Tuesday - Saturday',
          hours: '10am - 10pm'
        },
        {
          days: 'Bank Hollidays',
          hours: '10h00 - 15h00'
        },
        {
          days: 'Sunday - Monday',
          hours: 'Closed'
        }
      ]
    }
  },
  pt: {
    navbar: {
      about: 'Sobre Nós',
      menu: 'Menu',
      contact_us: 'Onde Estamos'
    },
    header: {
      sub_heading: 'Comida 100% à base de plantas!',
      title: 'Por um planeta mais sustentável',
      text: 'Vem saborear os nossos menus 100% Vegetais. Desde pequenos almoços a jantar, temos tudo o que possas procurar.',
      explore_menu: 'Explora o nosso menu'
    },
    menu: {
      sub_heading: 'Um menu para todos os gostos',
      description: 'We have a wide variety of dishes, from breakfast to dinner. We also have a wide variety of drinks, from wines to cocktails.',
    },
    gallery: {
      title: 'Galeria de Fotos',
      description: 'Vê um pouco do que te temos para oferecer. Explora mais comida deliciosa através do nosso Instagram.',
      see_more: 'Ver mais'
    },
    footer: {
      contact_us: 'Onde estamos?',
      schedule: 'Horário Funcionamento',
      open_hours: [
        {
          days: 'Terça - Sábado',
          hours: '10h00 - 22h00'
        },
        {
          days: 'Feriados',
          hours: '10h00 - 15h00'
        },
        {
          days: 'Domingo - Segunda',
          hours: 'Encerrado'
        }
      ]
    }
  }
};

export const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: {
      en: 'AU | Bottle',
      pt: 'AU | Garrafa'
    }
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: {
      en: 'AU | Bottle',
      pt: 'AU | Garrafa'
    }
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: {
      en: 'FR | 750 ml',
      pt: 'FR | 750 ml'
    }
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: {
      en: 'CA | 750 ml',
      pt: 'CA | 750 ml'
    }
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: {
      en: 'IE | 750 ml',
      pt: 'IE | 750 ml'
    }
  },
];

export const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: {
      en: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
      pt: 'Aperol | Villa Marchesi prosecco | Refrigerante | 30 ml'
    }
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: {
      en: 'Dark rum | Ginger beer | Slice of lime',
      pt: 'Rum escuro | Cerveja de gengibre | Fatia de limão'
    }
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: {
      en: 'Rum | Citrus juice | Sugar',
      pt: 'Rum | Sumo de citrinos | Açúcar'
    }
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: {
      en: 'Bourbon | Brown sugar | Angostura Bitters',
      pt: 'Bourbon | Açúcar mascavo | Angostura Bitters'
    }
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: {
      en: 'Gin | Sweet Vermouth | Campari | Orange garnish',
      pt: 'Gin | Vermute doce | Campari | Laranja'
    }
  },
];

export const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: {
      en: 'Lorem ipsum dolor sit amet, consectetur.',
      pt: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: {
      en: 'Lorem ipsum dolor sit amet, consectetur.',
      pt: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: {
      en: 'Lorem ipsum dolor sit amet, consectetur.',
      pt: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: {
      en: 'Lorem ipsum dolor sit amet, consectetur.',
      pt: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  },
];