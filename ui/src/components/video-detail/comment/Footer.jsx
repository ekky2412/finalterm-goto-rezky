import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ handleSendMessage }) => {
  const [username, setUsername] = useState({});
  const [message, setMessage] = useState({});
  return (
    <Flex p={5} flexDirection="column">
      <Input my={2} name="username" placeholder="Username"></Input>
      <Input my={2} name="comment" placeholder="Comment"></Input>
      <Button disabled onClick={() => handleSendMessage(username, message)}>
        Kirim
      </Button>
    </Flex>
  );
};

export default Footer;
