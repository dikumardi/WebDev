import { useState } from "react";
const useStateHooks = () => {
  const [userName, setUserName] = useState("Bob");

  const changedHandler = () => {
    setUserName("sdwzz");
  };
  console.log(userName);

  return (
    <div>
      <h1>UserName</h1>
      <h2>{userName}</h2>
      <button onClick={changedHandler}>Change Name</button>
    </div>
  );
};

export default useStateHooks;
