import { SelectCountry } from "components/SelectCountry";
import { SearchNews } from "components/SearchNews";
import { HeaderStyled, NavLinkStyled } from "./Header.styled";

export const Header = () => {
    return <HeaderStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/saved-posts">Saved posts</NavLinkStyled>
            <SelectCountry/>
            <SearchNews/>        
        </HeaderStyled>
}