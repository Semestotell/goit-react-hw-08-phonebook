import { useSelector } from "react-redux"
import authSelectors from "redux/auth/auth-selectors"
import { Container, Title } from "./HomeViev.styled"

export const HomeView = () => {
    const name = useSelector(authSelectors.getUserName)
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (

        <Container>
            {isLoggedIn? <Title>Welcome {name} to Your Phonebook!</Title>: <Title>You can Sign In to Your Phonebook, or create new user account! </Title> }
        </Container>
    )
}