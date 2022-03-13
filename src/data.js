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
import Vanilla1 from './cakes/vanilla1.jpg';
import Chocolate from './cakes/Chocolate.jpg';
import Chocotruffle from './cakes/ChocoTruffle.jpg';
import Chocotruffle1 from './cakes/Chocotruffle1.jpg';
import Cupcake from './cakes/cupcake.jpg';
import Theme from './cakes/ThemeCake.jpg';
import Theme2 from './cakes/themecake2.jpg';
import Theme3 from './cakes/themecake3.jpg';
import Theme4 from './cakes/themecake4.jpg';
import Pistachio from './cakes/Pistachio.jpg';
import Redvelvet from './cakes/Redvelvet.jpg';
import Blackcurrant from './cakes/Blackcurrant.jpg';
import Blackcurrant1 from './cakes/Blackcurrant1.jpg';
import Blackforest1 from './cakes/Blackforest1.jpg';
import Blackforest2 from './cakes/blackforest2.jpg';
import Blackforest3 from './cakes/blackforest3.jpg';



const ProductData = {
  
  cakeOptions: [
      {
          styleName: 'Black forest',
          Rate: 'Rs.350-1/2kg, Rs.700-1kg',
          imageSrc: Blackforest
      },
      {
        styleName: 'Black forest',
        Rate:'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Blackforest1
      },
      {
        styleName: 'Black forest',
        Rate: 'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Blackforest2
      },
      {
        styleName: 'Black forest',
        Rate:'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Blackforest3
      },
      {
        styleName: 'Blackcurrant',
        Rate: 'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Blackcurrant
      },
      {
        styleName: 'Blackcurrant',
        Rate: 'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Blackcurrant1
      },
      {
          styleName: 'Butter scotch',
          Rate:  'Rs.450-1/2kg, Rs.900-1kg',
          imageSrc: Butterscotch 
      },
      {
        styleName: 'Butter scotch',
        Rate: 'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Butterscotch1
      },
      {
        styleName: 'Butter scotch',
        Rate:  'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Butterscotch3 
      },
      {
        styleName: 'Butter scotch',
        Rate:  'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Butterscotch4
      },
      {
          styleName: 'Jamun',
          Rate:  'Rs.450-1/2kg, Rs.900-1kg',
          imageSrc: Jamun
      },
      {
          styleName: 'Chocotruffle',
          Rate: 'Rs.450-1/2kg, Rs.900-1kg',
          imageSrc: Chocotruffle
      },
      {
        styleName: 'Chocotruffle',
        Rate: 'Rs.450-1/2kg, Rs.900-1kg',
        imageSrc: Chocotruffle1
    },
    {
        styleName: 'Chocolate',
        Rate: 'Rs.300-1/2kg, Rs.600-1kg',
        imageSrc: Chocolate
    },
      {
        styleName: 'White  forest',
        Rate: 'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Whiteforest
    },
    {
        styleName: 'White  forest',
        Rate: 'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Whiteforest1
    },
    {
        styleName: 'White  forest',
        Rate: 'Rs.350-1/2kg, Rs.700-1kg',
        imageSrc: Whiteforest2
    },
    {
        styleName: 'Vanilla',
        Rate:'Rs.300-1/2kg, Rs.600-1kg',
        imageSrc: Vanilla
    },
    {
      styleName: 'Vanilla',
      Rate:'Rs.300-1/2kg, Rs.600-1kg',
      imageSrc: Vanilla1
    },
    {
        styleName: 'Pistachio',
        Rate: 'Rs.500/kg',
        imageSrc: Pistachio
    },
    {
        styleName: 'Red Velvet',
        Rate: 'Rs.450-1/2kg, Rs.900-1kg',
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
    {
      styleName: 'Theme cake',
      Rate: 'Based on the theme',
      imageSrc: Theme2
    },
    {
      styleName: 'Theme cake',
      Rate: 'Based on the theme',
      imageSrc: Theme3
    },
    {
      styleName: 'Theme cake',
      Rate: 'Based on the theme',
      imageSrc: Theme4
    },
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