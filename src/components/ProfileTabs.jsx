import { Box, Flex, Text } from "@chakra-ui/react";
import { MdGridOn } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { GrLike } from "react-icons/gr";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        p={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <MdGridOn />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Posts</Text>
      </Flex>

      <Flex
        
        alignItems={"center"}
        p={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <FaBookmark />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Saved</Text>
      </Flex>

      <Flex
        
        alignItems={"center"}
        p={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <GrLike />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Likes</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
