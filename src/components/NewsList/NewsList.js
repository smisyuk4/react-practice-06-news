// import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useGetNewsQuery } from "services/newsApi"



import { NewsCard } from "components/NewsCard"
import { fakeApi } from "fakeApi"
import { NewsListWrp } from "./NewsList.styled"



export const NewsList =()=> {
    const { data } = useGetNewsQuery()

    console.log(data)
    return <NewsListWrp>         
                <Outlet/>

                <ul>
                    {fakeApi.map(item=> <NewsCard key={item.id} news={item} />)}
                </ul>                       
            </NewsListWrp>
}