import "./Header.css";
import React from "react";

class Header extends React.Component<{},{}>{
    render(){
        return(
            <nav>
                <ul className="flex-container">
                    <li>
                       <a href="">Naslovna</a> 
                    </li>
                    <li>
                        <a href="">Nacionalni parkovi</a>
                    </li>
                    <li>
                        <a href="">Komentari</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;

