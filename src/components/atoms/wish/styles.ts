import styled from 'styled-components'

export const Container = styled.div`
        background: #F2F3F6;
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        font-size: 28px;
        padding-top: 2px;
        cursor: pointer;

        transition: .3s;

        &:hover{
                background: #FEE5EC;
                color: #DA4B4F;
        }

        &.wished{
                background: #DA4B4F;
                color: #ffffff;
         
                &:hover{
                background: #C22539;

                }
        }
`;