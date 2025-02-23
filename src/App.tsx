import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                {/*<StyledButton as={Link}>Link component</StyledButton>*/}
                {/*<StyledButton as='a' href={'#'}>Link</StyledButton>*/}
                {/*<input type="submit"/>*/}
                {/*<SuperButton>Super Button</SuperButton>*/}
                <StyledButton color={myTheme.colors.primary} btnType={'primary'} active>Hello</StyledButton>
                <StyledButton color={myTheme.colors.secondary} btnType={'outlined'}>Hello</StyledButton>
            </Box>

        </div>
    );
}

export default App;

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`

