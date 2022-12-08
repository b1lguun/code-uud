import React, { useEffect, useState } from "react";
import axios from "axios";
import "./api.css";

export function Api() {
  const [data, setData] = useState([]);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const API_URL = "https://api.themoviedb.org/3";
  const fetchMovies = async () => {
    console.log("asd");
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: "db7774b33dfefe87ff3fc42cb5a234da",
      },
    });
    console.log("data", data);
    setData(data.data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(data);
  return (
    <div className="poster">
      {data.map((poster) => (
        <img src={`${IMAGE_PATH}${poster?.poster_path}`} />
      ))}
    </div>
  );
}
