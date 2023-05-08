import { useState } from "react";
import '../Buttons/button.css';
export default function CountClick() {
    const  [count ,setCount] = useState(0);
    // Note :
    
    function handleClick(){
        setCount(count+1);
    }
    return (
        <>
        <button className='button' count = {count} onClick={handleClick}>
            Click Count : {count}
        </button>
        </>
    )
     
  }