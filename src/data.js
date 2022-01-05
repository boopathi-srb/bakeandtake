import Blackforest from './cakes/Black_forest.png';
import Butterscotch from './cakes/butterscotch.png';
import Jamun from './cakes/gulabjamun.png';
import Whiteforest from './cakes/white_forest.png';
import Vannila from './cakes/vannila.png';
import Rasamalai from './cakes/rasamalai.png';
import Orange_Creamsicle from './cakes/orange.png';
import Fruit from './cakes/fruit.png';
import Chocolate from './cakes/chocolate.png';

const ProductData = {
  
  cakeOptions: [
      {
          styleName: 'Blackforest',
          imageSrc: {Blackforest}
      },
      {
          styleName: 'Butterscotch',
          imageSrc: {Butterscotch}
      },
      {
          styleName: 'Jamun',
          imageSrc: {Jamun}
      },
      {
          styleName: 'Chocolate',
          imageSrc: {Chocolate}
      },
      {
        styleName: 'Whiteforest',
        imageSrc: {Whiteforest}
    },
    {
        styleName: 'Vannila',
        imageSrc: {Vannila}
    },
    {
        styleName: 'Rasamalai',
        imageSrc: {Rasamalai}
    },
    {
        styleName: 'Orange Creamsicle',
        imageSrc: {Orange_Creamsicle}
    },
    {
        styleName: 'Fresh fruit gateaux',
        imageSrc: {Fruit}
    },
  ],
 
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData; 