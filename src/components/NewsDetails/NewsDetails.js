
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { fakeApi } from "fakeApi";

import { PostDetails } from "./NewsDetails.styled";

export const NewsDetails = ()=>{
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        if (id===''){
          return
        }

        const currentNews = fakeApi.find(item => {
            return item.id === Number(id)
        })

        setNews(currentNews)
    },[id])

    return <PostDetails>    
            <h3>{news.title}</h3>
            <p>{news.image}</p>
            <p>{news.desc}</p>
            <p>{news.security}</p>
        </PostDetails>
}