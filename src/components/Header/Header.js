import { NavLink } from "react-router-dom";

import { SelectCountry } from "components/SelectCountry";
import { SearchNews } from "components/SearchNews";

export const Header = () => {
    return <div style={{borderBottom:'2px solid', padding: '20px', display: 'flex', gap: '20px', backgroundColor: 'pink'}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/saved-posts">Saved posts</NavLink>
            <SelectCountry/>
            <SearchNews/>        
        </div>}