import React, { createContext } from "react";
import ComA from "./ComA";

//createContext hook
const FirstName = createContext();
const MiddleName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Sumit"}>
        <MiddleName.Provider value={"Kumar"}>
          <LastName.Provider value={"Gupta"}>
            <ComA />
          </LastName.Provider>
        </MiddleName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, MiddleName, LastName };
