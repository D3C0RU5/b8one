import styled from 'styled-components'

export const Card = styled.div`
    background: #ffffff;
    padding: 32px;
    border-radius: 8px;
    
    &:hover{
        box-shadow: 0px 8px 24px 0px #00000014;

    }
`;

export const Header = styled.div`
    position: relative;
`;
export const FloatButton = styled.div`
    position: absolute;    
    top: 0;
    right: 0;
`;
export const Title = styled.div`
    font-size: 14px;
    font-weight: 500; 
    margin-top: 32px;
    margin-bottom: 24px;
    display: block;
`

export const OldPrice = styled.div`
    font-size: 14px;
    text-decoration: line-through;
    color: #B5B5B6;
    display: block;
    font-weight: 500;
`

export const Price = styled.div`
    font-size: 20px;
    color: #DA4B4F;
    display: block;
    font-weight: 600;
`

export const Parcels =  styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #848587;

    margin-bottom: 32px;

    strong {
        color: #000;
    }
`
