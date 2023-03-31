import React from "react";
import SearchBar from "../components/SearchBar"


const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar
                onSearch={onSearch}
            />

        </nav>
    )
}

 export default Nav;
 