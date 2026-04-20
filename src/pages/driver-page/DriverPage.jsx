import { Flex, Grid, GridItem } from '@chakra-ui/react';
import style from './DriverPage.module.css'
import Navbar from '../../components/navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';
import FuelingForm from '../../components/data-input/forms/fueling-form/FuelingForm';

function DriverPage() {

    const { user } = useAuth()

    return (
        <>
            {user && user.role === "driver" &&
                <Flex
                    width={"100%"}
                    minHeight={"100vh"}
                    px={4}
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    bg={'rgb(48, 166, 172)'}
                >
                    <Navbar width={"80vw"} />
                    <Grid
                        w="80vw"
                        h="85vh"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={2}
                        fontFamily={"sans-serif"}
                    >
                        <GridItem
                            bg={"gray.50"}
                            rowSpan={2}
                            borderRadius="0.5rem"
                        >

                        </GridItem>

                        <GridItem
                            bg={"gray.50"}
                            borderRadius="0.5rem"
                        >

                        </GridItem>

                        <GridItem
                            bg={"gray.50"}
                            borderRadius="0.5rem"
                        >

                        </GridItem>


                    </Grid>
                </Flex>
            }
        </>
    );
}

export default DriverPage;