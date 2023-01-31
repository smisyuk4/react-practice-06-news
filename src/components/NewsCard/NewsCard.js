import { useLocation } from "react-router-dom"
import { LinkStyled, ImgStyled, TitleWrp } from "./NewsCard.styled"
import defImg from "../../images/defaultImg.jpg"

export const NewsCard = ({news:{title, urlToImage}})=> {
    const location = useLocation()
    return <>
        <LinkStyled to={`/news/${title}`} state={{ from: location }}>            
            <ImgStyled src={urlToImage ? urlToImage:defImg} alt="title" loading="lazy" height="500" width="500"></ImgStyled>
            <TitleWrp>
                <h3>{title}</h3>
            </TitleWrp>
        </LinkStyled>
    </>
}