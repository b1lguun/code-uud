import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import video from "./videos/queensgambit.mp4";
import axios from "axios";
import { Api } from "./component/api";

function App() {
  const [youtubeID] = useState("kwrQzTz16w4");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://unogs-unogs-v1.p.rapidapi.com/search/deleted",
      headers: {
        "X-RapidAPI-Key": "16696b927bmsh9e26fb5e80f619dp1c04a7jsnce9453126afa",
        "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar offset={offset} />
        <video
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          src={video}
          autoPlay
          muted
          loop
        ></video>
        <div className="list">
          <Api />
        </div>
      </div>
    </div>
  );
}

export default App;
