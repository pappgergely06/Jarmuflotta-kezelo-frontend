import { Box, Input, Flex, Stack, Text, Image, IconButton, Alert } from "@chakra-ui/react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { LuLogIn } from "react-icons/lu";

function LoginForm() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { login, loginError } = useAuth()

    function handleLogin() {
        login(username, password)
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleLogin()
        }
    }

    return (
        <Box
            rounded={'lg'}
            bg="#121C1E"
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
                        bg='gray.50'
                        type="text"
                        focusBorderColor="blue.400"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </Box>

                <Box width={{ base: "100%", md: "70%" }}>
                    <Flex justify="space-between" align="center" mb={1}>
                        <Text fontWeight="medium">Jelszó</Text>
                    </Flex>
                    <Input
                        onKeyDown={handleKeyDown}
                        bg='gray.50'
                        type="password"
                        focusBorderColor="blue.400"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>

                {
                    loginError && (
                        <Box width={{ base: "100%", md: "70%" }}>
                            <Alert.Root status="error">
                                <Alert.Indicator />
                                <Alert.Title>
                                    Hibás felhasználónév vagy jelszó!
                                </Alert.Title>
                            </Alert.Root>
                        </Box>
                    )
                }

                <IconButton
                    bg="green.600"
                    width={{ base: "100%", md: "60%" }}
                    mt={4}
                    type="submit"
                    color={"white"}
                    _hover={{ opacity: 0.9 }}
                    onClick={handleLogin}>
                    <LuLogIn />
                    <Text>Bejelentkezés</Text>
                </IconButton>
            </Stack>
        </Box>
    );
}

export default LoginForm;