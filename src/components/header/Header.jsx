import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
          <Tab>Music</Tab>
          <Tab>Meme</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Render Trending</p>
          </TabPanel>
          <TabPanel>
            <p>Music</p>
          </TabPanel>
          <TabPanel>
            <p>Meme</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Header;
