import React from "react";
import { Router, Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Main from "../main/Main";

const Header = () => {
  return (
    <div>
      <Tabs
        isFitted
        variant="solid-rounded"
        colorScheme="facebook"
        style={{ padding: "10px" }}
      >
        <TabList>
          <Tab>Trending</Tab>
          <Tab>Search</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Main></Main>
          </TabPanel>
          <TabPanel>
            <p>Music</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Header;
