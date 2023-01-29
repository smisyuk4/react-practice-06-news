import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"; //useSelector
import { fetchNews } from "redux/operations";
import { NewsCard } from "components/NewsCard"
import { fakeApi } from "fakeApi"
import { NewsListWrp } from "./NewsList.styled"



export const NewsList =()=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return <NewsListWrp>         
                <Outlet/>

                <ul>
                    {fakeApi.map(item=> <NewsCard key={item.id} news={item} />)}
                </ul>                       
            </NewsListWrp>
}