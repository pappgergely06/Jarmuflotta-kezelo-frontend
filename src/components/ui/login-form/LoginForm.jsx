import { Box, Button, Heading, Input, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../chakra-snippets/color-mode";

function LoginForm() {
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
                    />
                </Box>

                <Button
                    bg={useColorModeValue("gray.800", "#121C1E")}
                    width={{ base: "100%", md: "60%" }}
                    mt={4}
                    type="submit"
                    color={"white"}
                    _hover={{ opacity: 0.9 }}
                >
                    Bejelentkezés
                </Button>
            </Stack>
        </Box>
    );
}

export default LoginForm;