import React from 'react';
import iconData from '../../assets/icons/icons';

const Footer = () => {
    return (
        <footer id="foo" className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="container">
                        <ul className="footer-brand">
                            <li className="footer-brand-item">
                                <h4 className="h4 footer-title">About Us</h4>
                                <p className="footer-text">
                                    At JourneyBikes, we are passionate about providing the best
                                    cycling experience. Whether you are a seasoned cyclist or a
                                    beginner, our range of bicycles is designed with performance
                                    and comfort in mind. Your satisfaction and riding enjoyment
                                    are our top priorities.
                                </p>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <h4 className="h4 footer-title">Contact Information</h4>
                                <a href="mailto:contact@journeybikes.com" className="footer-link">
                                    <span>{React.createElement(iconData.location)}</span>
                                    <span className="span">123 Bicycle Lane, Cyclist City, USA 12345</span>
                                </a>
                            </li>

                            <li className="footer-item">
                                <a href="tel:+1234567890" className="footer-link">
                                    <span>{React.createElement(iconData.call)}</span>
                                    <span className="span">+1 234 567 890</span>
                                </a>
                            </li>

                            <li className="footer-item">
                                <a href="mailto:contact@journeybikes.com" className="footer-link">
                                    <span>{React.createElement(iconData.email)}</span>
                                    <span className="span hover-shine">contact@journeybikes.com</span>
                                </a>
                            </li>

                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    <span>{React.createElement(iconData.document)}</span>
                                    <span className="span hover-shine">Download Our Brochure</span>
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            <h4 className="h4 footer-title">Quick Links</h4>
                            <li className="footer-item">
                                <a href="#" className="footer-link hover-shine">Home</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link hover-shine">Bicycles</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link hover-shine">Testimonials</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link hover-shine">FAQs</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link hover-shine">Contact Us</a>
                            </li>
                        </ul>

                        <ul className="social-list">
                            <h4 className="h4 footer-title">Follow Us</h4>
                            <div className="footer-social-wrapper">
                                <li className="social-item">
                                    <a href="https://facebook.com" className="social-link">
                                        {React.createElement(iconData.facebook)}
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://twitter.com" className="social-link">
                                        {React.createElement(iconData.twitter)}
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://linkedin.com" className="social-link">
                                        {React.createElement(iconData.linkedin)}
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://pinterest.com" className="social-link">
                                        {React.createElement(iconData.pinterest)}
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="https://rss.com" className="social-link">
                                        {React.createElement(iconData.rss)}
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <ul className="footer-bottom-list">
                        <li className="footer-bottom-item">
                            <span className="span copyright">© 2024 JourneyBikes. All Rights Reserved.</span>
                        </li>
                        <div className="footer-bottom-next-list">
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link hover-shine">
                                    <span className="span">Terms of Service</span>
                                </a>
                            </li>
                            <li className="footer-bottom-item">
                                <a href="#" className="footer-bottom-link hover-shine">
                                    <span className="span">Privacy Policy</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
