const fs = require('fs');

const restaurants = [
  {
    id: '1',
    name: "Becky's Burgers",
    priceRange: '$$',
    imageSrc: '/images/1-burger.jpg',
    imageDescription: 'A photo of a burger with fries',
    description: 'Juicy burgers, crunchy fries, and creamy shakes',
  },
  {
    id: '2',
    name: 'Chicken Nice',
    priceRange: '$',
    imageSrc: '/images/2-chicken-rice.jpg',
    imageDescription: 'A photo of Hainanese chicken rice',
    description: "The world's best Hainanese Chicken Rice",
  },
  {
    id: '3',
    name: "Nonna's pizza and pasta",
    priceRange: '$$',
    imageSrc: '/images/3-pizza.jpg',
    imageDescription: 'A photo of a margherita pizza',
    description: 'Classic pizza and pasta just like Nonna used to make',
  },
  {
    id: '4',
    name: 'Super satay skewers',
    priceRange: '$$',
    imageSrc: '/images/4-satay.jpg',
    imageDescription: 'A photo of some satay skewers with sauce',
    description: "Satay so good it'll save the world",
  },
  {
    id: '5',
    name: 'Curry delights',
    priceRange: '$$$',
    imageSrc: '/images/5-curry.jpg',
    imageDescription: 'A photo of Indian curries',
    description: 'The best Indian curries from the freshest ingredients',
  },
  {
    id: '6',
    name: 'Sliced',
    priceRange: '$',
    imageSrc: '/images/6-sandwich.jpg',
    imageDescription: 'A photo of a sandwich',
    description: 'Fresh sandwhiches at great prices',
  },
  {
    id: '7',
    name: 'Taste of Iberia',
    priceRange: '$$$$',
    imageSrc: '/images/7-paella.jpg',
    imageDescription: 'A photo of Spanish Paella',
    description: 'Paella, tapas, and imported Spanish wines',
  },
  {
    id: '8',
    name: 'Crunchy Crunch',
    priceRange: '$$',
    imageSrc: '/images/8-fried-chicken.jpg',
    imageDescription: 'A photo of crispy fried chicken',
    description: "The city's best Southern-style fried chicken",
  },
  {
    id: '9',
    name: "Japan's finest",
    priceRange: '$$$',
    imageSrc: '/images/9-sushi.jpg',
    imageDescription: 'A photo of sushi and sashimi',
    description: 'Only the freshest fish and tastiest katsu',
  },
  {
    id: '10',
    name: "Chippo's",
    priceRange: '$',
    imageSrc: '/images/10-fish-n-chips.jpg',
    imageDescription: 'A photo of deep-fried fish with thick-cut hot chips',
    description: 'Authentic Aussie-style fish n chips',
  },
];

fs.writeFileSync('./content/restaurants.json', JSON.stringify(restaurants));
fs.mkdirSync('./content/restaurants');
restaurants.forEach(restaurant => {
  fs.writeFileSync(
    `./content/restaurants/${restaurant.id}.json`,
    JSON.stringify(restaurant),
  );
});