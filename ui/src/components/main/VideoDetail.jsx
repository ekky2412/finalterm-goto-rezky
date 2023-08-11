import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { id } = useParams();
  return <div>Testing video ada {id}</div>;
};

export default VideoDetail;
