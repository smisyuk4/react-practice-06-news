import { fakeApi } from "fakeApi"
import { NewsCard } from "components/NewsCard"
import { Outlet } from "react-router-dom"
import { NewsListWrp } from "./NewsList.styled"



export const NewsList =()=> {
    return <NewsListWrp>         
                <Outlet/>

                <ul>
                    {fakeApi.map(item=> <NewsCard key={item.id} news={item} />)}
                </ul>                       
            </NewsListWrp>
}