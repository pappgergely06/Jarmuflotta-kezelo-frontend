import { Flex } from '@chakra-ui/react';
import style from './LoginPage.module.css'
import { Provider } from '../../components/ui/chakra-snippets/provider';
import LoginForm from '../../components/ui/login-form/LoginForm';

function LoginPage() {
    return (
        <Provider>
            <Flex className={style.flex} width={"100%"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"}>
                <h1>Járműflotta kezelő</h1>
                <LoginForm/>
            </Flex>
        </Provider>
    );
}

export default LoginPage;