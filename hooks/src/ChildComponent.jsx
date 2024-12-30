import React,{useEffect} from 'react'

const ChildComponent = () => {
    useEffect(() => {
        return  () =>{

        };
    },[])
  return (
    <>
        <h1>I am Child Component</h1>
    </>
  )
}

export default ChildComponent;
