// src/components/footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <ul className="footer-logo">
                        <li><h2>Funiro.</h2></li>
                        <li className='greey'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</li>
                    </ul>
                    <ul className='footer-link'>
                        <li className='greey'>Links</li>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='footer-help'>
                        <li className='greey'>Help</li>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                    <ul className='footer-newsletter'>
                        <li className='greey'>Newsletter</li>
                        <li>
                            <input type="text" placeholder='Enter You Email Address' className='footer-lebel' />
                            <input type="button" value="SUBSCRIBE" className='footer-button' />
                        </li>
                    </ul>
                </div>
                <hr />
                <p className="copyright">2024 Funiro. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
