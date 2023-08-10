import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";

const VideoCard = ({ video }) => {
  return (
    <Card maxW="md">
      <CardBody>
        <Image objectFit="cover" src={video.urlThumbnail} alt="Chakra UI" />
      </CardBody>
    </Card>
  );
};

export default VideoCard;
