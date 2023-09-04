import React from 'react';
import {BsFacebook, BsTiktok, BsYoutube} from 'react-icons/bs';

function Footer() {
    return (
        <footer className="footer">
      <span>
        Copyright &copy; 2023 Moshi Moshi Spa - All Rights Reserved.
      </span>
            <div className="footer__social__icons">
                <BsFacebook />
                <BsTiktok />
                <BsYoutube />
            </div>
        </footer>
    );
}

export default Footer;
