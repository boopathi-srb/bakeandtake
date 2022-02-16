import React from 'react';
import thumbsup from './thumbsup.mp4'

function Orderplaced() {
  return <div>
     <video width="100vw">
       <source src={thumbsup} type="video/mp4"></source>
     </video>
  </div>;
}

export default Orderplaced;

