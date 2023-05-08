import { useState } from "react"

export default function ShareData1222(){
    const [count,setCount]=useState(0);
    
    function handleClick() {  
        setCount(count+1);
    }
    
    return (
        <>
        <Button count={count} onClick={handleClick}></Button>
        <Button count={count} onClick={handleClick}></Button>
        </>

    )

}



// here create custom functional component
export function Button ({count,onClick}){
return (
    <button className="button" onClick={onClick}>
        Click count is :{count}
    </button>
)

}