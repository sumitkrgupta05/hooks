//**********useEffect************ 

import React, { useEffect, useState } from 'react';
import ComC from './ComC';

const ComB = () => {
    const [num ,setNum] =useState(0);
    const [nums ,setNums] =useState(0);

    /*
    // method1 -> woke every time when btn clicked!
    useEffect(() => {
        alert(" I'm clicked!! ");
    })
    */

    /*
    // method2 -> work on page render only 
    useEffect(() => {
        alert(" I'm clicked!! ");
    },[])
    */

    /*
    // method3 -> work when targeted btn is pressed! */
    useEffect(() => {
        alert(" I'm clicked!! ");
    },[num])
    

  return (
    <> 
        <ComC />
        <br/>
        <br/>
        <button onClick={()=> {setNum(num+1);}}>Click Me: {num}</button>
        <button onClick={()=> {setNums(nums+5);}}>Click Me: {nums}</button>
    </>
  )
}

export default ComB;