import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../Redux/features/SearchSlice";

const SearchBar = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    
    settext("");
  };

  return (
    <div className="bg-gray-600 w-full h-[20%]">
      <form
        className="flex  gap-3 py-7 px-30"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
       
        <input
          required
          className="w-full border px-6 py-3 text-xl rounded outline-none"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          type="text"
          placeholder="Search here ..."
        />
        <button 
        className="active:scale-95 cursor-pointer border px-4 py-2 text-xl rounded outline-none bg-emerald-500 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
