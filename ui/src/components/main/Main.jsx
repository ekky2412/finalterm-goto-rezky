import { React, useState, useEffect } from "react";
import { getAllVideos } from "../../services/ApiServices";
import VideoCard from "./VideoCard";
import { SimpleGrid } from "@chakra-ui/react";

const Main = () => {
  const [videos, setVideos] = useState([]);
  const [videosCount, setVideosCount] = useState([]);

  useEffect(() => {
    getAllVideos().then((videos) => {
      console.log(videos);
      setVideoCount(videos);
      setVideos(videos);
    });
  }, []);

  const setVideoCount = (video) => {
    video.forEach(() => {
      setVideosCount(videosCount + 1);
    });
  };

  const VideoRow = (video, index) => {
    return <VideoCard key={index} video={video}></VideoCard>;
  };

  const videosCard = videos.map((video, index) => VideoRow(video));

  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {videosCard}
      </SimpleGrid>
    </div>
  );
};

export default Main;
