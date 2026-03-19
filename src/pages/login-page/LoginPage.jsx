import { Flex } from '@chakra-ui/react';
import style from './LoginPage.module.css'
import { Provider } from '../../components/ui/provider';

function LoginPage() {
    return (
        <Provider>
            <Flex width={"100%"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}>
                <h1>Járműflotta kezelő</h1>
            </Flex>
        </Provider>
    );
}

export default LoginPage;