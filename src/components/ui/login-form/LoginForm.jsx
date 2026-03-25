import { Box, Button, Input, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../chakra-snippets/color-mode";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginForm() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        login(username, password)
    }

    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={{ base: 4, md: 8 }}
            width={{ base: '90%', sm: '80%', md: '60%', lg: '40%' }}
        >
            <Stack alignItems={"center"} gap={"2rem"} spacing={4}>
                <Image
                    src="src\assets\logo.png"
                    width={{ base: "100%", md: "80%" }}
                    borderRadius={"1rem"}
                />

                <Box width={{ base: "100%", md: "70%" }}>
                    <Text fontWeight="medium" mb={1}>Felhasználónév</Text>
                    <Input
                        type="text"
                        placeholder="felhasznalonev"
                        focusBorderColor="blue.400"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </Box>

                <Box width={{ base: "100%", md: "70%" }}>
                    <Flex justify="space-between" align="center" mb={1}>
                        <Text fontWeight="medium">Jelszó</Text>
                    </Flex>
                    <Input
                        type="password"
                        placeholder="*******"
                        focusBorderColor="blue.400"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>

                <Button
                    bg={useColorModeValue("gray.800", "#121C1E")}
                    width={{ base: "100%", md: "60%" }}
                    mt={4}
                    type="submit"
                    color={"white"}
                    _hover={{ opacity: 0.9 }}
                    onClick={handleLogin}
                >
                    Bejelentkezés
                </Button>
            </Stack>
        </Box>
    );
}

export default LoginForm;