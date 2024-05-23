import React from 'react';

function MyButton({count,handleClick}){
  
       
        return (
            <button onClick={handleClick}>
              Clicked {count} times
            </button>
          );
    
}
export default MyButton;