import { fakeApi } from "fakeApi"
import { NewsCard } from "components/NewsCard"
import { Link, useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"


export const NewsList =()=> {
    const location = useLocation()
    return <div>
            <ul>
                {fakeApi.map(item=>                
                    <Link key={item.id} to={`/news/${item.id}`} state={{ from: location }}>
                        <h3>{item.title}</h3>
                        <p>{item.image}</p>
                        <p>{item.desc}</p>
                    </Link>                
                )}
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
}
//<NewsCard key={item.id} news={item} />