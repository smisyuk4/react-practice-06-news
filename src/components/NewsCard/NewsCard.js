import { Link, useLocation } from "react-router-dom"

export const NewsCard = ({news:{id, title, image, desc}})=> {
    const location = useLocation()
    return <>
        <Link to={`/news/${id}`} state={{ from: location }}>
            <h3>{title}</h3>
            <p>{image}</p>
            <p>{desc}</p>
        </Link>
    </>
}