import {useAuth} from "../../contexts/AuthContext";
import {Text, Button} from "@chakra-ui/react";

function Profile({history}) {

    const {user, logout} = useAuth();

    const handleLogout = async () => {
        logout(() => {
            history.push('/')
        });
    }

    return (
        <div className="content">
            <Text fontSize="22">Profile</Text>
            <pre>{JSON.stringify(user)}</pre>
            <br/>
            <br/>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Profile