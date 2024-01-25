import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

import useLogout from "../hooks/useLogout";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, isLogginOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"md"} src={authUser.profilePicUrl} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.fullname}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLogginOut}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
