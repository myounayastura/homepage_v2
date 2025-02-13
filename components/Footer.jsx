"use client"
import './Footer.css';

function Footer() {
    return (
        <div className="footer_container">
            <footer>
                <div className="footer-wrapper">
                    <a href="https://x.com/?lang=ja"><img src="/images/x.png"></img></a>
                    <a href=""><img src="/images//instagram.png"></img></a>
                    <a href="https://nougatshop.jp/"><img src="/images/icon.png"></img></a>
                </div>
                <p className='noto-sans-jp-400'>© 2024 HunnyHowse</p>
            </footer>
        </div>

    );
}

export default Footer;