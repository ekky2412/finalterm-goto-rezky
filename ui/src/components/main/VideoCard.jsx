import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  LinkBox,
  Flex,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

const VideoCard = ({ video }) => {
  return (
    <LinkBox
      display="flex"
      minHeight={400}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8)) , url(${video.urlThumbnail})`}
      alignItems="flex-end"
    >
      <Text color="white" padding={5} fontSize={20}>
        {video.title.length > 45
          ? `${video.title.substring(0, 45)}...`
          : video.title}
      </Text>
    </LinkBox>
  );
};

export default VideoCard;
