import React from "react";

function Footer(){
    const now = new Date();

    const currentYear = now.getFullYear();

    return <footer> <p>Copyright {currentYear}</p> </footer>;
}

export default Footer;