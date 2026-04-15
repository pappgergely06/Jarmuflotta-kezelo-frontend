import { Box, Button, Input, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/chakra-snippets/color-mode";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function LoginForm() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {login, loginError} = useAuth()

    function handleLogin() {
        login(username, password)
    }

    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'rgb(48, 166, 172)')}
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
                        bg={useColorModeValue('white', 'gray.700')}
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
                        bg={useColorModeValue('white', 'gray.700')}
                        type="password"
                        placeholder="*******"
                        focusBorderColor="blue.400"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>

                {
                    loginError && (
                        <Text fontWeight="medium">{loginError}</Text>
                    )
                }

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