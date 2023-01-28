
import { NewsList } from "components/NewsList"

export const Home = ()=>{
    return <div style={{display:'flex', gap: '20px'}}>
        <div style={{borderRight:'2px solid', padding: '20px'}}>
            <h2>home page</h2>
            <NewsList /> 
        </div>  
        <div >wait info</div>
    </div>
}