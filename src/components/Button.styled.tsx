import styled, {css} from 'styled-components';

type StyledButtonPropsType = {
    color?: string;
    fontSize?: string;
    // primary?: boolean;
    // outlined?: boolean;
    btnType: 'primary' | 'outlined';
    active?: boolean
}

export const StyledButton = styled.button<StyledButtonPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;

    &:hover {
        background-color: rgba(41, 36, 132, 0.72);

        &:last-child {
            background-color: #6d9da7;
        }

        &:hover {
            background-color: blue;
        }


        //outlined
        ${props => props.btnType === 'outlined' && css<StyledButtonPropsType>`
            border: 2px solid ${props => props.color || '#fc6ca2'};
            color: ${props => props.color || '#fc6ca2'};
            background-color: transparent;

            &:hover {
                border-color: #4053cc;
                color: #4053cc;
                background-color: transparent;
            }


        `} //primary
        ${props => props.btnType === 'primary' && css<StyledButtonPropsType>`
            background-color: ${props => props.color || '#fc6ca2'};
            color: snow;
        `}

        ${props => props.active && css<StyledButtonPropsType>`
            box-shadow: 5px, 5px, 5px, 5px rgba(37, 37 ,44 ,0.6);
        `}

`