import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <p>Copyright © {year} - All Rights Reserved.</p>
        </footer>
        </>
    );
}

export default Footer;