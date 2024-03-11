import { Spinner, Center } from "native-base";

export  function Loanding(){
    return (
        <Center flex={1} bg={"gray.700"}>
    <Spinner color="green.500" />
    </Center>
    );
}