import { Flex } from '@chakra-ui/react';
import { Provider } from '../../components/ui/chakra-snippets/provider';
import LoginForm from '../../components/login-form/LoginForm';

function LoginPage() {
    return (
        <Provider>
            <Flex
                width={"100%"} 
                minHeight={"90vh"}
                px={4}
                alignItems={"center"} 
                flexDirection={"column"} 
                justifyContent={"center"}
            >
                <LoginForm />
            </Flex>
        </Provider>
    );
}

export default LoginPage;