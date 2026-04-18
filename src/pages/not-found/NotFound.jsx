import { Flex, Image } from '@chakra-ui/react';
import style from './NotFound.module.css'

function NotFound() {
    return (
        <Flex
            width={"100%"}
            minHeight={"100vh"}
            px={4}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            bg={'rgb(48, 166, 172)'}
        >
            <Image
                src="src\assets\not-found.png"
                width={"50%"}
                borderRadius={"lg"}
            />
        </Flex>
    );
}

export default NotFound;