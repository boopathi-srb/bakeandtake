import Blackforest from './cakes/blackforest.jpg';
import Butterscotch from './cakes/butterscotch.jpg';
import Butterscotch1 from './cakes/Butterscotch1.jpg';
import Butterscotch3 from './cakes/Butterscotch3.jpg';
import Butterscotch4 from './cakes/Butterscotch4.jpg';
import Jamun from './cakes/gulabjamun.jpg';
import Whiteforest from './cakes/whiteforest.jpg';
import Whiteforest1 from './cakes/Whiteforest1.jpg';
import Whiteforest2 from './cakes/Whiteforest2.jpg';
import Vanilla from './cakes/Vanilla.jpg';
import Chocolate from './cakes/Chocolate.jpg';
import Chocotruffle from './cakes/ChocoTruffle.jpg';
import Chocotruffle1 from './cakes/Chocotruffle1.jpg';
import Cupcake from './cakes/cupcake.jpg';
import Theme from './cakes/ThemeCake.jpg';
import Pistachio from './cakes/Pistachio.jpg';
import Redvelvet from './cakes/Redvelvet.jpg';
import Blackcurrant from './cakes/Blackcurrant.jpg';
import Blackcurrant1 from './cakes/Blackcurrant1.jpg';
import Blackforest1 from './cakes/Blackforest1.jpg';



const ProductData = {
  
  cakeOptions: [
      {
          styleName: 'Black forest',
          Rate: '650/kg',
          imageSrc: Blackforest
      },
      {
        styleName: 'Black forest',
        Rate: '650/kg',
        imageSrc: Blackforest1
      },
      {
        styleName: 'Blackcurrant',
        Rate: '650/kg',
        imageSrc: Blackcurrant
      },
      {
        styleName: 'Blackcurrant',
        Rate: '650/kg',
        imageSrc: Blackcurrant1
      },
      {
          styleName: 'Butter scotch',
          Rate: '700/kg',
          imageSrc: Butterscotch 
      },
      {
        styleName: 'Butter scotch',
        Rate: '700/kg',
        imageSrc: Butterscotch1
      },
      {
        styleName: 'Butter scotch',
        Rate: '700/kg',
        imageSrc: Butterscotch3 
      },
      {
        styleName: 'Butter scotch',
        Rate: '700/kg',
        imageSrc: Butterscotch4
      },
      {
          styleName: 'Jamun',
          Rate: '900/kg',
          imageSrc: Jamun
      },
      {
          styleName: 'Chocotruffle',
          Rate: '500/kg',
          imageSrc: Chocotruffle
      },
      {
        styleName: 'Chocotruffle',
        Rate: '500/kg',
        imageSrc: Chocotruffle1
    },
    {
        styleName: 'Chocolate',
        Rate: '500/kg',
        imageSrc: Chocolate
    },
      {
        styleName: 'White  forest',
        Rate: '650/kg',
        imageSrc: Whiteforest
    },
    {
        styleName: 'White  forest',
        Rate: '650/kg',
        imageSrc: Whiteforest1
    },
    {
        styleName: 'White  forest',
        Rate: '650/kg',
        imageSrc: Whiteforest2
    },
    {
        styleName: 'Vanilla',
        Rate: '500/kg',
        imageSrc: Vanilla
    },
    {
        styleName: 'Pistachio',
        Rate: '500/kg',
        imageSrc: Pistachio
    },
    {
        styleName: 'Red Velvet',
        Rate: '500/kg',
        imageSrc: Redvelvet
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