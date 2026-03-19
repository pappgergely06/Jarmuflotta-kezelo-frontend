import { Box, Button, Heading, Input, Flex, Stack, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../chakra-snippets/color-mode";

function LoginForm() {
    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            width={'60%'}
        >
            <Stack alignItems={"center"} gap={"2rem"} spacing={4}>
                <Image src="src\assets\logo.png" width={"80%"} borderRadius={"1rem"}/>
                <Box width={"70%"}>
                    <Text fontWeight="medium" mb={1}>Felhasználónév</Text>
                    <Input
                        type="text"
                        placeholder="felhasznalonev"
                        focusBorderColor="blue.400"
                    />
                </Box>

                <Box width={"70%"}>
                    <Flex justify="space-between" align="center" mb={1}>
                        <Text color={"white"} fontWeight="medium">Jelszó</Text>
                    </Flex>
                    <Input
                        type="password"
                        placeholder="*******"
                        focusBorderColor="blue.400"
                    />
                </Box>

                <Button
                    bg={useColorModeValue("","#121C1E")}
                    width="60%"
                    mt={4}
                    type="submit"
                    color={"white"}
                >
                    Bejelentkezés
                </Button>
            </Stack>

        </Box >
    );
}

export default LoginForm;