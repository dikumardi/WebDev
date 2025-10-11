import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Work nn", isCompleted: false },
  ]);

  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("mumbai")

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
        />
        <br /> <br />

        <input
          checked={completed}
        onChange={(e) => setcompleted(e.target.checked)}
        type="checkbox" /> Completed
        <br /> <br />
       
        <input     
         onChange={(e) => setgender(e.target.value)}
         value="male"
         checked={gender == "male" && true}
        type="radio"
        /> male

         <input     
         onChange={(e) =>setgender(e.target.value)}
         value="Female"
         checked={gender == "female" && true}
        type="radio"
        /> Female
        <br /> <br />
        <select onChange={(e)=>setcity(e.target.value)}
        value={city}
        >
        <option value="delhi">Delhi</option>
        <option value="jaipur">jaipur</option>
        <option value="mumbai">mumbai</option>
        </select>

        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
