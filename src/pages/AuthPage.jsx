import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="image-phone" />
          </Box>
          {/* right side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=es&gl=US&pli=1"
                target="_blank"
              >
                <Image src="/playstore.png" h={10} alt="playstore-logo" />
              </a>
              <a
                href="https://apps.apple.com/es/app/instagram/id389801252"
                target="_blank"
              >
                {" "}
                <Image src="/App_Store.png" h={10} alt="appstore-logo" />
              </a>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
