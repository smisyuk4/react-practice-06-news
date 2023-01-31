import styled from '@emotion/styled';

export const PostWrp = styled.div`
    padding: 20px;
    border-right: 2px solid;
`

export const PostDetails = styled.div`
    position: sticky;
    top: 80px;
    z-index: 200;

    width: 260px;
    background-color: white;
    border: 2px solid red;
`

export const Controls = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
`

export const ButtonStyled = styled.button`
    min-width: 70px;
    padding: 10px;

    text-transform: uppercase;
    font-weight: 700;
`

export const PaginationStyled = styled.div`
    position: sticky;
    top: 300px;
    z-index: 200;

    width: 260px;
    background-color: white;
    border: 2px solid green;
`