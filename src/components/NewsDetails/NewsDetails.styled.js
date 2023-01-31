import styled from '@emotion/styled';

export const PostWrp = styled.div`
    padding: 20px;
    border-right: 2px solid;
`

export const PostDetails = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2000;
    transform: translateY(80px);

    width: 260px;
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