import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    background-color: #fc6ca2;
    padding: 10px 20px;
    color: snow;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        background-color: #e697d9;

        &:last-child {
            background-color: #6d9da7;
        }
`

export const SuperButton = styled(StyledButton)`
    border-radius: 5px;
    background-color: #aeaee6;
    color: black;
`