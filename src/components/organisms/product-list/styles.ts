import styled from 'styled-components'

export const Row = styled.div`
    background: #eee;

    padding: 15px;

    display: grid;
    grid-template-columns: calc(33.3333% - 7px) calc(33.3333% - 7px) calc(33.3333% - 7px);
    grid-gap: 10px;
    
    @media (max-width: 800px) {
        grid-template-columns: auto
    }
`
export const Container = styled.div`

`
