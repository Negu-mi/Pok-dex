import React, { useState } from 'react';

// function Change(props) {
    const Change = () => {
    const sayHello = () => Message="Bye";
 
  return <Button handleClick={sayHello} />;
};
 
const Button = ({ handleClick = () => Message="Bye" }) => (
  <button type="button" onClick={handleClick}>
    Button
  </button>
);
 
//     const App = () => {
//         return <Headline />;
//       };
    
//     const Headline = () => {const [open,close]= useState("Hello")};
    
//     return (
//         <div>
//             <p>{props.message}</p>
//             <button onClick={() => close("Sayounara")}>Click</button>
//         </div>
//     );
// }

export default Change;