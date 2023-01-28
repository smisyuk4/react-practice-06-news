
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { fakeApi } from "fakeApi";

export const NewsDetails = ()=>{
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        if (id===''){
          return
        }

        const currentNews = fakeApi.find(item => {
            console.log(item.id)
            console.log(id)
            return item.id === Number(id)
        })

        setNews(currentNews)
    },[id])

    return <>
            <p>test {id}</p>
            <h3>{news.title}</h3>
            <p>{news.image}</p>
            <p>{news.newsdesc}</p>
            <p>{news.security}</p>
        </>
}