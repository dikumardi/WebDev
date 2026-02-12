import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../Redux/features/SearchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "GIFs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-3 px-21">
      {tabs.map((elem) => (
        <button
          key={elem}
          className={`${
            activeTab === elem ? "bg-blue-700" : "bg-gray-700"
          } text-white rounded-xl py-3 px-5 cursor-pointer active:scale-95`}
          onClick={() => dispatch(setActiveTabs(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
