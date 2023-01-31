import styled from '@emotion/styled';
import { Link } from "react-router-dom"

export const LinkStyled = styled(Link)`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

    &:hover, &:focus{
        background: pink;
        transform: scale(1.03);
    }

`
export const ImgStyled = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;   
`

export const TitleWrp = styled.div`
    padding: 5px;
`