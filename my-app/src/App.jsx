/*import React from "react";
import {useState} from "react";
const App = () => {
    let[counter,setCounter] =useState(0);
    return (
    <>
        <h1>Counter Task</h1>
        <h2>Counter:{counter}</h2>
        <h2>Number Type : {counter % 2 === 0 ?"Even" :"Odd"}</h2>
        <button onClick={() => setCounter(counter + 1)}>Update</button>
     </>
    );
};
*/
// import React from "react";
// // import ChildComponent from "./ChildComponent";
// const App = () => {
//     let data= [{sname:"Chirag" , isPlaced:false},{sname:"Harshul",isPlaced:true}];
//     return(
//         <>
//             <h1>Task 2</h1>
//             {data.map((val,ind)=>{
//                 return <ChildComponent value ={val} />;
//             })}
//         </>
//     );
    
// };
// export default App;
// ?  FORMS IN REACT JS 
// ? === useRef() Hook ===
/*
import React from "react";  
import { useRef } from "react"; // ! STEP-1
const App = () => {
    let nameRef =useRef(); // ! STEP-2
    let emailRef =useRef();
    let pwdRef =useRef();
    let mobileNoRef = useRef();

    let handleSubmit = e => {
        e.preventDefault();
        console.log("form submitted");

        console.log(
            {
                userName:nameRef.current.value,
                userEmail:emailRef.current.value,
                userPassword:pwdRef.current.value,
                userMobileNo:mobileNoRef.current.value,

            }
        );
    };


return (
    <>
        <h1>useHook() Hooks / Forms</h1>
        <form onSubmit={handleSubmit}>
            Name:<input ref = {nameRef} /> <br />
            <br />
            Email: <input ref={emailRef} /> <br />
            <br />
            Password : <input ref = {pwdRef} />
            <br /> <br />
            MobileNo : <input ref = {mobileNoRef} />
            <br /> <br />
            <button type="submit">SUBMIT</button>

        </form>
    </>
);
};
*/
// ? Example 2
// import React from "react";
// import { useState } from "react";
/*
const App = () => {
    let[num1,setNum1] = useState("");
    let[num2,setNum2] = useState("");
    let[num3,setNum3] = useState("");
    let[sum,setSum] = useState(0);
    let handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted");
        let total=Number(num1) + Number(num2) + Number(num3);
        setSum(total);
    };
let handleNum1 = e => {
    setNum1(e.target.value);
};
let handleNum2 = e => {
    setNum2(e.target.value);
};
let handleNum3 = e => {
    setNum3(e.target.value);
};
return (
    <>
        <form onSubmit={handleSubmit}>
            {/* e.preventdef */
    //         <div>
    //             NUM1:<input type="number" value={num1} onChange={handleNum1}/>
    //         </div>
    //         <div>
    //             NUM2:<input type="number" value={num2} onChange={handleNum2}/>
    //         </div>
    //         <div>
    //             NUM3:<input type="number" value={num3} onChange={handleNum3}/>
    //         </div>
    //         <button>Submit</button>
    //     </form>
    //     <h2>The sum is : {sum}</h2>
    // </>
// );
// };*/
// const App = () => {
//     let[formData,setFormData] = useState(
//         {
//             name:"",
//             email:"",
//             pwd:"",
//         }
//     );
//     let handleChange = e  => {
//         console.log("name : " ,e.target.name, "value : " ,e.target.value);
//         setFormData(
//             {
//                 ...formData,
//                 [e.target.name]:e.target.value,
//             }
//         );
//     };
//     let handleSubmit = e => {
//         e.prevent.Default();
//     }
// }
// export default App;
/*import React, { useState } from 'react';

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pwd: "",
    });

    const handleChange = (e) => {
        console.log("name: ", e.target.name, "value: ", e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now use formData for further processing like sending data to an API
        console.log("Form submitted with data: ", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="pwd">Password: </label>
                <input
                    type="password"
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
*/
// ! ======= Life Cycle Methods of a components ======
// ! ====== Mounting Phase  =======
 /*//?1. Constructor():
    //?It is used to intailize the variables. We cannot use this keyword directly.
     // ? 1. constructor(props)
     // ? 2. super(props)
    //? 2.
    //?3. render():
    //?It is the only mandatory method of mounting phase.
    //? It will render the data into UI.

    //?NOTE:
    //? 1.setState(...) takes an object of state variables to update or a function which returns an object of state variables.

*/
//? Example 1:
/*
import React,{Component} from "react";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        };
    }
    render(){
        console.log("I am class based Component");
        console.log(this.state);
        return (
            <>

                <h1>I am Class Based Component</h1>
                <h2>Counter:{this.state.counter}</h2>
                <button>Decrement</button>
                <button>Reset</button>
                <button
                onClick={() =>{
                    this.setState({counter:this.state.counter + 1});

                }}>Increment</button>
            </>
        )
    }
}
*/
// ! ============= axios =========
/*
  ? axios is a 3rd party library (It is not in react we have to install it in react)
   ? axios helps us to perform http requests
  ? get ---> It will recieve the data
  ? post ---> It will send the data
  ? put --> It will update the data
  ?patch --> It will update the data
  ? delete --> It will delete the data
  ? 1. npm install axios/ npm i axios
  ? import variableName from axios
  ? 3. variableName.get("pathaddress")

*/
/*
import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import axios from "axios";
const App = () => {
    let[data,setData] = useState([]);
    let getAPI = async() => {
    let {data} =  await axios.get("https://fakestoreapi.com/products");
    //? axios.get will return a promise
    //?
    
    console.log(data);

    }
}
    */
//  ! ======== Portals ===========
// ? Step - 1 :
 // ~ create an element in html for portal
//? Step - 2:
// ~ import ReactDom from "React-Dom"
//? Step - 3:
// ~ ReactDOM.createPortal(content,Container);
/*
import ReactDOM from "react-dom";
import React,{useState} from "react";

const App = () => {
    let[isOpen1,setOpen1] = useState(false);
    let[isOpen2,setOpen2] = useState(false);
    return(
        <>
            ,<section
                style={
                    {
                        border:"solid",
                    }
                }

            >
                <h1>Without Portal</h1>
                <button onClick={()=>setOpen1(true)}>open</button>
                {isOpen1 ?
                (<h1>
                    Hello I am From React Root("")
                    <button onClick={()=>setOpen1(false)}>❎</button>
                </h1>):null}
            </section>
            <section style={{border:"solid",}}>
                <h1>With Portal</h1>
                <button onClick={()=>setOpen2(true)}>open</button>
                {isOpen2 ? ReactDOM.createPortal(<section style={{background:"bisque",
                    position:"absolute",
                    top:"0px",
                    left:"0px",
                    height:"100vh",
                    width:"100vw",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}
                >
                    <h1>Hello I am not from React root <button onClick={() =>setOpen2(false)}>❎</button></h1>
                </section>,document.getElementById("portal")):null}

            </section>
        </>
    )
}
//    import React,{useState} from "react";
//    import ReactDOM from "react-dom";

//     const App = () =>{
//         let[isOpen,setOpen] = useState(false);
//         return (
//             <>
//                 <section>
                    
//                 </section>
//             </>
//         )

//     }
*/
// !  ====== Pure Components /React memo ======
/*
?PureComponents
?ShouldComponentUpdate
 ?1.It will run just before the render method.
 ?2.It will accept props and states as parameters
 ?3.It will cross verify the props/states are changed
 ?4.If changed it will return true leads to re-render of a  component
 ?5.If not changed it will return false leads to no re-render  of a component.
 Pure Components inbuilt contains the ShouldComponentUpdate method.
 pure Component are available in CBC










*/
import React from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  console.log("I am App Component");

  const user = {
    firstName: 'Chirag',
    lastName: 'Mehra'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;  
  }

  return (
    <>
      <h1>I am App Component</h1>
      <h2>{formatName(user)}</h2>
      <ChildComponent fullName={formatName(user)} />
    </>
  );
};

export default App;

