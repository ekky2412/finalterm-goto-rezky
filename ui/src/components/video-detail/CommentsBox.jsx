import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./comment/Header";
import Comments from "./comment/Comments";
import Footer from "./comment/Footer";

const CommentsBox = ({ comments, setComments, handleSendMessage }) => {
  return (
    <Flex
      border="1px solid"
      borderRadius="lg"
      w="100%"
      flexDirection="column"
      mx="auto"
    >
      <Header></Header>
      <Divider></Divider>
      <Comments comments={comments}></Comments>
      <Divider></Divider>
      <Footer
        comments={comments}
        setComments={setComments}
        handleSendMessage={handleSendMessage}
      ></Footer>
    </Flex>
  );
};

export default CommentsBox;
