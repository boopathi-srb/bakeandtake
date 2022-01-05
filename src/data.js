import Blackforest from './cakes/Black_forest.png';
import Butterscotch from './cakes/butterscotch.png';
import Jamun from './cakes/gulabjamun.png'
const ProductData = {
  
  cakeOptions: [
      {
          styleName: 'Blackforest',
          imageSrc: {Blackforest}
      },
      {
          styleName: 'Butterscotch',
          imageUrl: {Butterscotch}
      },
      {
          styleName: 'Jamun',
          imageUrl: {Jamun}
      },
      {
          styleName: 'Purple Strap',
          imageUrl: 'https://imgur.com/xSIK4M8.png'
      },
  ],
  featureList: [
      "Time", "Heart Rate"
  ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData; 