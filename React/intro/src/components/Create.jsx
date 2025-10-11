import { useState } from "react";

const Create = (props) => {
  console.log(props);

  const [fullname, setfullname] = useState("");
  const [age, setage] = useState();

  const submitHandler = (e) => {
    console.log("form submit");
    const newuser = { fullname, age };
    e.preventDefault();
    console.log(newuser);
    //set the user in the setusers
  };

  return (
    <div>

      <h1>Register User</h1>

      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Enter Name"
        />


        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Enter  Age"
        />

        <button>Submit</button>

      </form>

    </div>
  );
};

export default Create;
