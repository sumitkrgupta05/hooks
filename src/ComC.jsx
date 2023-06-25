//**********useContext************ 


import React, { useContext } from 'react';
import { FirstName,MiddleName,LastName } from './App';

const ComC = () => {

    //useContext API
    const fname = useContext(FirstName);
    const mname = useContext(MiddleName);
    const lname = useContext(LastName);
   return (
    <>
        <br/>
        <h2>Hello World!!</h2>
        <br/>
        <br/>
        <h1>My Name is {fname} {mname} {lname}</h1>
        <br/>
        <br/>
        <br/>
        <hr/>
    </>
  )
}

export default ComC;