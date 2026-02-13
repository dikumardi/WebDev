import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/MediaApi";
import { setError, setLoading, setResults } from "../Redux/features/SearchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
           if (!query) return
       try {
        dispatch(setLoading())
              let data = [];
      if (activeTab == "photos") {
        const response = await fetchPhotos();
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));
      }
      if (activeTab == "videos") {
        const response = await fetchVideos();
        data = response.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
        }));
      }
      if (activeTab == "GIFs") {
        const response = await fetchGIF();
        data = response.data.results.map((item) => ({
          id: item.id,
          type: "GIFs",
          title: item.title || "GIFs",
          thumbnail: item.media_formats.tinygif.url,
          src: item.media_formats.gif.url,
        }));
      }

      dispatch(setResults(data));
       } catch (err) {
        dispatch(setError(err.message))
       }

    }
    
    getData();
  }, [query, activeTab]);

   if (error) return <h1>Error</h1>
   if (loading) return <h1>Loading</h1>
  return <div>
   {results.map((item,idx)=>{
    return <div
    className=" justify-center flex flex-wrap gap-7 overflow-auto px-10"
    key={idx}>
    <ResultCard item={item} />
    </div>
   })}
  </div>
};

export default ResultGrid;
