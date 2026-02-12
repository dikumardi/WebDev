import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../api/MediaApi";

const ResultGrid = () => {
  useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const getData = () => {
    if (activeTab == "photos") {
      const data = fetchPhotos();
    }
  };

  useEffect(() => {
   
  }, []);

  return <div> <button>Get Data</button></div>;
};

export default ResultGrid;
