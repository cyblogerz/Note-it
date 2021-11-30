import React from "react";

let year = new Date().getFullYear();
function Footer(){
    return(
        <footer>
            &copy; {year}
        </footer>
    );
}

export default Footer;