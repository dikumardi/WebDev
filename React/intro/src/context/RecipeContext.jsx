import { createContext, useEffect, useState } from "react"
export const recipecontext = createContext(null)
const RecipeContext = (props) => {
    const [data, setdata] = useState([]);

    useEffect(()=>{

      setdata(JSON.parse(localStorage.getItem("recipe")) ||  [])
    },[]);

   
    console.log(props);
    

  return (
    <recipecontext.Provider value={{data, setdata}}>
            {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext

  // {
  //   id: 1,
  //   title: "Pav Bhaji",
  //   ingredients: [
  //     "Potatoes",
  //     "Tomatoes",
  //     "Peas",
  //     "Onions",
  //     "Pav bhaji masala",
  //     "Butter"
  //   ],
  //   image: 
  //   `https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji.jpg`,
  //   chef: "Anjali Mehta",
  //   desc: "Cook mixed vegetables with spices and butter, then mash into a thick bhaji and serve with buttered pav.",
  // },
  // { id: 2,
  //   title: "Masala Dosa",
  //   ingredients: [
  //     "Rice",
  //     "Urad dal",
  //     "Potatoes",
  //     "Onions",
  //     "Mustard seeds",
  //     "Turmeric"
  //   ],
  //   image: `https://vismaifood.com/storage/app/uploads/public/fc8/6e9/476/thumb__700_0_0_0_auto.jpg`,
  //   chef: "Sneha Reddy",
  //   desc: "Ferment rice and lentil batter, prepare spicy potato filling, and cook crisp dosa filled with masala.",
  // }