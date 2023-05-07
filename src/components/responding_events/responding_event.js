import './button.css'
// creating button component inside the componet 
function Button (){
    return (
        <button  className='button' onClick={handleClick}>click me</button>
    )
}

function handleClick(){
    alert(`You clicked me`);
}

export default function RespondEvent(){
    return (
        <>
        <Button/>
        </>
    )
}

// note: we can also comnbine event handler function and button inside the main component  