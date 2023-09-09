import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer-color">
            <div className='footer'>
                <h2>Explore</h2>
                <u1>
                    <li>Home</li>
                    <li>Article</li>
                    <li>Tutorials</li>
                </u1>
            </div>
            <div className="foter-section">
                <h2>Support</h2>
                <u1>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact us</li>
                </u1>
            </div>
            <div className="foter-bottom">
                <h2>Dev@Deakin 2022</h2>
                <u1 className= "footer-list">
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Code of Conduct</li>
                </u1>
            </div>
        </footer>
    );
}
export default Footer;