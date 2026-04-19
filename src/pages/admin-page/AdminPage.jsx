import { Flex, Grid, GridItem } from '@chakra-ui/react';
import style from './AdminPage.module.css'
import Navbar from '../../components/navbar/Navbar';
import Overview from '../../components/overview/Overview';
import Vehicles from '../../components/vehicles/Vehicles';
import Drivers from '../../components/drivers/Drivers';
import DataInput from '../../components/data-input/DataInput';
import CostStatement from '../../components/cost-statement/CostStatement';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';

function AdminPage() {

    const { user } = useAuth()
    return (
        <>
                {!user && <Navigate to={"/"}/>}
        {<Flex
                width={"100%"}
                minHeight={"100vh"}
                px={4}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                bg={'rgb(48, 166, 172)'}
            >
                <Navbar/>
                <Grid
                    w="90vw"
                    h="85vh"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                    fontFamily={"sans-serif"}
                >
                    <GridItem
                        bg={"gray.50"}
                        colSpan={2}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Drivers/>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={3}
                        rowSpan={2}
                        borderRadius="0.5rem"
                    >
                        <Vehicles/>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={1}
                        borderRadius="0.5rem"
                    >
                        <CostStatement/>
                    </GridItem>

                    <GridItem
                        bg={"gray.50"}
                        colSpan={4}
                        borderRadius="0.5rem"
                    >
                        <DataInput/>
                    </GridItem>


                </Grid>
            </Flex>}

        </>
    );
}

export default AdminPage;