import { useState } from "react";
import { Button, Field, Fieldset, Input, VStack, HStack, Tabs, Box, Text } from "@chakra-ui/react";
import { IoIosSave, IoIosArrowForward } from "react-icons/io";
import Cookies from "js-cookie";
import { useRefresh } from "../../../contexts/refresh/RefreshContext";
import { addUser, addDriver, addAssignment } from "../../../utils/api";

function AddDriverForm() {
    const { triggerRefresh } = useRefresh();
    const [activeTab, setActiveTab] = useState("user");
    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("driver");

    const [name, setName] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [startingDate, setStartingDate] = useState(new Date().toISOString().split('T')[0]);

    const [vehicleId, setVehicleId] = useState("");
    const [assignedFrom, setAssignedFrom] = useState(new Date().toISOString().split('T')[0]);
    const [assignedTo, setAssignedTo] = useState("");

    const [savedUserId, setSavedUserId] = useState(null);
    const [savedDriverId, setSavedDriverId] = useState(null);

    const token = Cookies.get("auth_token");

    const handleUserSubmit = async () => {
        if (!username || !password) return;
        setIsLoading(true);
        try {
            const res = await addUser({ username:username, password: password, role: role });
            console.log(res)
            setSavedUserId(res.userId);
            setActiveTab("driver");
        } catch (err) {
            console.error("User hiba:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDriverSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await addDriver(token, {
                name: name,
                license_number: licenseNumber,
                address: address,
                email: email,
                phone: phone,
                starting_date: startingDate,
                user_id: savedUserId
            });
            console.log(res)
            setSavedDriverId(res.id); 
            setActiveTab("assignment");
        } catch (err) {
            console.error("Driver hiba:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAssignmentSubmit = async () => {
        setIsLoading(true);
        try {
            await addAssignment(token, {
                driver_id: savedDriverId,
                vehicle_id: Number(vehicleId),
                assigned_from: assignedFrom,
                assigned_to: assignedTo || null
            });
            triggerRefresh("drivers");
        } catch (err) {
            console.error("Assignment hiba:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box maxW="2xl" mx="auto" mt={8} p={4}>
            <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
                <Tabs.List justifyContent="center" mb={6}>
                    <Tabs.Trigger value="user" disabled={activeTab !== "user"} color="white">Felhasználó</Tabs.Trigger>
                    <Tabs.Trigger value="driver" disabled={activeTab !== "driver"} color="white">Sofőr</Tabs.Trigger>
                    <Tabs.Trigger value="assignment" disabled={activeTab !== "assignment"} color="white">Autó hozzárendelés</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="user">
                    <Fieldset.Root>
                        <VStack gap={4} align="stretch">
                            <Field.Root>
                                <Field.Label>Felhasználónév</Field.Label>
                                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Jelszó</Field.Label>
                                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Szerepkör</Field.Label>
                                <select 
                                    value={role} 
                                    onChange={(e) => setRole(e.target.value)}
                                    style={{ background: "#2D3748", color: "white", padding: "8px", borderRadius: "4px" }}
                                >
                                    <option value="driver">Sofőr</option>
                                    <option value="admin">Adminisztrátor</option>
                                </select>
                            </Field.Root>
                            <Button bg={"blue.500"} loading={isLoading} onClick={handleUserSubmit} alignSelf="flex-end">
                                Felhasználó mentése & Következő <IoIosArrowForward />
                            </Button>
                        </VStack>
                    </Fieldset.Root>
                </Tabs.Content>

                <Tabs.Content value="driver">
                    <Fieldset.Root>
                        <VStack gap={4} align="stretch">
                            <HStack gap={4}>
                                <Field.Root flex={1}>
                                    <Field.Label>Név</Field.Label>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                                </Field.Root>
                                <Field.Root flex={1}>
                                    <Field.Label>Jogosítványszám</Field.Label>
                                    <Input value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
                                </Field.Root>
                            </HStack>
                            <HStack gap={4}>
                                <Field.Root flex={1}>
                                    <Field.Label>Email</Field.Label>
                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Field.Root>
                                <Field.Root flex={1}>
                                    <Field.Label>Telefonszám</Field.Label>
                                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Field.Root>
                            </HStack>
                            <HStack gap={4}>
                                <Field.Root flex={2}>
                                    <Field.Label>Lakcím</Field.Label>
                                    <Input value={address} onChange={(e) => setAddress(e.target.value)} />
                                </Field.Root>
                                <Field.Root flex={1}>
                                    <Field.Label>Kezdés dátuma</Field.Label>
                                    <Input type="date" value={startingDate} onChange={(e) => setStartingDate(e.target.value)} />
                                </Field.Root>
                            </HStack>
                            <Button bg={"blue.500"} loading={isLoading} onClick={handleDriverSubmit} alignSelf="flex-end">
                                Sofőr mentése & Következő <IoIosArrowForward />
                            </Button>
                        </VStack>
                    </Fieldset.Root>
                </Tabs.Content>

                <Tabs.Content value="assignment">
                    <Fieldset.Root>
                        <VStack gap={4} align="stretch">
                            <Field.Root>
                                <Field.Label>Jármű ID</Field.Label>
                                <Input type="number" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} placeholder="Példa: 12" />
                            </Field.Root>
                            <HStack gap={4}>
                                <Field.Root flex={1}>
                                    <Field.Label>Hozzárendelés kezdete</Field.Label>
                                    <Input type="date" value={assignedFrom} onChange={(e) => setAssignedFrom(e.target.value)} />
                                </Field.Root>
                                <Field.Root flex={1}>
                                    <Field.Label>Hozzárendelés vége</Field.Label>
                                    <Input min={assignedFrom} type="date" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
                                </Field.Root>
                            </HStack>
                            <Button bg={"green.500"} loading={isLoading} onClick={handleAssignmentSubmit} alignSelf="center" width="200px" mt={4}>
                                <IoIosSave /> Véglegesítés
                            </Button>
                        </VStack>
                    </Fieldset.Root>
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}

export default AddDriverForm;