import styled from 'styled-components';

interface ComponentProps {
    bgColor?: string;
    foreColor?: string;

    bgColorHover?: string;
    foreColorHover?: string;

    bgColorActive?: string;
    foreColorActive?: string;
} 

export const Component = styled.div<ComponentProps>`
    cursor: pointer;
    padding:12px 24px;
    border-radius:5px;
    text-align:center;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.foreColor};

    &:hover{
        background-color: ${(props) => props.bgColorHover};
        color: ${(props) => props.foreColorHover};
    }

    &.active{
        background-color: ${(props) => props.bgColorActive};
        color: ${(props) => props.foreColorActive};
    }

`;