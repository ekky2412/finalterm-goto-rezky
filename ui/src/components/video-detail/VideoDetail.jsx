import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getComments,
  postComment,
  getVideo,
} from "../../services/ApiServices";

const VideoDetail = ({ videoUrl }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getVideo(id).then((video) => {
      console.log(video);
      setProducts(video);
    });

    getProducts(id).then((products) => {
      console.log(products);
      setProducts(products);
    });

    getComments(id).then((comments) => {
      console.log(comments);
      setComments(comments);
    });
  }, []);
  return (
    <div>
      Testing video ada {id}
      ada product, dan comments
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
