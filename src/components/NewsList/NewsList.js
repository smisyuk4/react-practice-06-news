// import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useGetNewsQuery } from "services/newsApi"



import { NewsCard } from "components/NewsCard"
// import { fakeApi } from "fakeApi"
import { NewsListWrp, NewsColection } from "./NewsList.styled"



export const NewsList =()=> {
    const { data } = useGetNewsQuery()

    console.log(data)
    return (data && 
                <NewsListWrp>         
                    <Outlet/>

                    <NewsColection>
                        {data.articles.map(item=> <NewsCard key={item.url} news={item} />)}
                    </NewsColection>                       
                </NewsListWrp>
    )
}