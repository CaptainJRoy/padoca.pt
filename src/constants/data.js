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
      description: 'Chef\'s recommendations',
      food: 'Food',
      drinks: 'Bar',
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
      description: 'Sugestão do Chef',
      food: 'Comida',
      drinks: 'Bar',
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

export const food = [
  {
    title: 'Francesinha à Padoca',
    price: '12,00€',
    tags: {
      en: 'Seitan, Chourizo, Sausage, Tofu Bacon, Chuxxse e Francesinha Sauce',
      pt: 'Seitan, Chouriço, Salsicha, Bacon de Tofu, Quxxjo e Molho'
    }
  },
  {
    title: 'Burguer à Padoca',
    price: '12,00€',
    tags: {
      en: 'Tomato, Veggie Burger, Vegan Cheddar, Tofu Bacon, Chxxse and Francesinha Sauce',
      pt: 'Tomate, Burguer Carne Vegetal, Cheddar Vegan, Bacon de Tofu, Quxxjo e Molho'
    }
  },
  {
    title: 'Burguês',
    price: '11,50€',
    tags: {
      en: 'Mayonnaise, Lettuce, Tomato, Pickle, Veggie Burger, Vegan Greek Chxxse and Caramelized Onion',
      pt: 'Maionese, Alface, Tomate, Cornichão, Burguer Carne Vegetal, Quxxjo Grego e Cebola Caramelizada'
    }
  },
  {
    title: 'Mexicano',
    price: '8,50€',
    tags: {
      en: 'Creamy Cheddar, Portobelo Mushroom, Black Beans, Lettuce, Carrot, Corn and Cucumber',
      pt: 'Cheddar Cremoso, Cogumelo Portobelo, Feijão Preto, Alface, Cenoura, Milho e Pepino'
    }
  }
];

export const drinks = [
  {
    title: 'Limonada do Dia',
    price: '2,60€',
    tags: {
      en: '',
      pt: ''
    }
  },
  {
    title: "Sumo do Dia",
    price: '2,80€',
    tags: {
      en: '',
      pt: ''
    }
  },
  {
    title: 'Sumo Laranja Natural',
    price: '2,80€',
    tags: {
      en: '',
      pt: ''
    }
  },
  {
    title: 'Gin',
    price: '7,80€',
    tags: {
      en: '',
      pt: ''
    }
  },
  {
    title: 'Água',
    price: '1,20€',
    tags: {
      en: '50cl',
      pt: '50cl'
    }
  },
];