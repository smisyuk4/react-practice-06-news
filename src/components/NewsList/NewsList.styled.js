import styled from '@emotion/styled';

export const NewsListWrp = styled.div`
    display: flex;
    gap: 20px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 20px;

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }
    @media screen and (min-width: 1280px) {
        max-width: 1280px;
    }    
`

export const NewsColection = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
`