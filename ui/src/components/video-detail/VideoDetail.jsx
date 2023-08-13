import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getComments,
  postComment,
  getVideo,
} from "../../services/ApiServices";
import VideoEmbed from "./VideoEmbed";
import ProductsList from "./ProductsList";
import { SimpleGrid, Box } from "@chakra-ui/react";

const VideoDetail = ({ videoUrl }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo(id).then((video) => {
      setVideo({
        ...video,
        urlVideo: video.urlVideo.replace("/watch?v=", "/embed/"),
      });
    });

    getProducts(id).then((products) => {
      console.log(products);
      setProducts(products);
    });

    getComments(id).then((comments) => {
      console.log(comments);
      setComments(comments);
    });
  }, [comments]);

  const ProductRow = (product, index) => {
    return <ProductsList key={index} product={product}></ProductsList>;
  };

  const productCard = products.map((product, index) => ProductRow(product));

  return (
    <div>
      <SimpleGrid spacing={5} columns={3} mx="auto">
        <Box
          column={1}
          h={400}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          {productCard}
        </Box>
        <VideoEmbed urlVideo={video.urlVideo}></VideoEmbed>
      </SimpleGrid>
    </div>
  );
};

export default VideoDetail;
