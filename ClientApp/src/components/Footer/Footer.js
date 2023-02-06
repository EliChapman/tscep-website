import React from "react";
import "./Footer.css";
import Button from 'react-bootstrap/Button';

const Footer = () =>
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="socials">
                    <Button href="https://www.facebook.com/" variant="outline-secondary" className="social-link facebook">
                        <i className="fa fa-facebook"></i>
                    </Button>
                    <Button href="https://www.instagram.com/" variant="outline-secondary" className="social-link instagram">
                        <i className="fa fa-instagram"></i>
                    </Button>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2023 Copyright:
            Topeka Chess Club
        </div>
    </footer>

export default Footer;