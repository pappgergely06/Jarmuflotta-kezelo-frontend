import { Box, Button, Heading, Input, Flex, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../chakra-snippets/color-mode";

function LoginForm() {
    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            width={'50%'}
        >
            <Stack spacing={4}>
                <Box textAlign="center">
                    <Heading fontSize={'2xl'} textAlign={'center'}>
                        Bejelentkezés
                    </Heading>
                </Box>

                <Box>
                    <Text fontWeight="medium" mb={1}>Felhasználónév</Text>
                    <Input
                        type="text"
                        placeholder="felhasználónév"
                        focusBorderColor="blue.400"
                    />
                </Box>

                <Box>
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
                    width="full"
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