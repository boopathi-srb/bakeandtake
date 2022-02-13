import Blackforest from './cakes/blackforest.jpg';
import Butterscotch from './cakes/butterscotch.jpg';
import Jamun from './cakes/gulabjamun.jpg';
import Whiteforest from './cakes/whiteforest.jpg';
// import Vannila from './cakes/vannila.png';
// import Rasamalai from './cakes/rasamalai.png';
// import Orange_Creamsicle from './cakes/orange.png';
// import Fruit from './cakes/fruit.png';
import Chocolate from './cakes/ChocoTruffle.jpg';
import Cupcake from './cakes/cupcake.jpg';
import Theme from './cakes/ThemeCake.jpg';

const ProductData = {
  
  cakeOptions: [
      {
          styleName: 'Blackforest',
          Rate: '650/kg',
          imageSrc: Blackforest
      },
      {
          styleName: 'Butterscotch',
          Rate: '700/kg',
          imageSrc: Butterscotch 
      },
      {
          styleName: 'Jamun',
          Rate: '900/kg',
          imageSrc: Jamun
      },
      {
          styleName: 'Chocolate',
          Rate: '500/kg',
          imageSrc: Chocolate
      },
      {
        styleName: 'Whiteforest',
        Rate: '650/kg',
        imageSrc: Whiteforest
    },
    {
        styleName: 'Cupcake',
        Rate: 'Based on the flavour',
        imageSrc: Cupcake
    },
    {
        styleName: 'Theme cake',
        Rate: 'Based on the theme',
        imageSrc: Theme
    },
    // {
    //     styleName: 'Orange Creamsicle',
    //     imageSrc: Orange_Creamsicle
    // },
    // {
    //     styleName: 'Fresh fruit gateaux',
    //     imageSrc: Fruit
    // },
  ],

  offerings: [
      {offerings: 'Vannila' },
      {offerings: 'Chocolate'},
      {offerings: 'Black Forest'},
      {offerings: 'White Forest'},
      {offerings: 'Butterscotch'},
      {offerings: 'Red Velvet'},
      {offerings: 'Choco Truffle'},
      {offerings: 'Pineapple'},
      {offerings: 'Rosemilk'},
      {offerings: 'Gulabjamun'},
      {offerings: 'Rasamalai'},
      {offerings: 'Fresh fruit gateaux'},
      {offerings: 'Orange creamsicle'},
      {offerings: 'Cup cakes'},
      {offerings: 'Theme cakes'},
      {offerings: 'Cookies!'},
  ]
 
}


Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData; 