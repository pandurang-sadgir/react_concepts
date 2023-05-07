import LoginForm from "./login_form_component";
import Admin from "./admin_dashbord_component";

let isloggedIn = false;
// let rederComponent;

//Note:1. use if else statements outside the JSX


// if(isloggedIn){
//     // add component 
//     rederComponent = <Admin/>

// }
// else{
//     // add another component 
//     rederComponent = <LoginForm/>
// }


// Note 2. user ternary condional operator inside
export default function RederComponent(){
    return (
        <>
    {/* // [rederComponent] */}
    {/* // rederComponent */}
    {/* // isloggedIn?(<Admin/>):(<LoginForm/>) */}

    {/* // Note : uisng and operator (&&) for rendering */}
    {isloggedIn && <Admin/>}
    {!isloggedIn && <LoginForm/>}
    </>
    )
}

// Note:we can not use if condition directly into JSX
