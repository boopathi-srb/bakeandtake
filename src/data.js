import Blackforest from './cakes/blackforest.jpg';
import Butterscotch from './cakes/butterscotch.jpg';
import Jamun from './cakes/gulabjamun.png';
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
          imageSrc: Blackforest
      },
      {
          styleName: 'Butterscotch',
          imageSrc: Butterscotch 
      },
      {
          styleName: 'Jamun',
          imageSrc: Jamun
      },
      {
          styleName: 'Chocolate',
          imageSrc: Chocolate
      },
      {
        styleName: 'Whiteforest',
        imageSrc: Whiteforest
    },
    {
        styleName: 'Cupcake',
        imageSrc: Cupcake
    },
    {
        styleName: 'Theme cake',
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
 
}


Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData; 