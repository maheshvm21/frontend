import { Box } from '@chakra-ui/react';
import React from 'react';

function MyChatsBox() {
 let selectedChat;
  return <div> <Box

  d={{ base:selectedChat ? "flex" : "none", md: "flex" }}
  alignItems="center"
  flexDir="column"
  p={3}
  bg="white"
  w={{ base: "100%", md: "68%" }}
  borderRadius="lg"
  borderWidth="1px"
>
  {/* <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
</Box></div>;
}

export default MyChatsBox;
