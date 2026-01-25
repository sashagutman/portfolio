import type { FunctionComponent } from "react";
import "../../styles/footer.css"
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {

    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer section">
                <div className="container">
                    <div className="footer__inner">
                        <nav className="footer__nav" aria-label="Footer navigation">
                            <h3 className="footer__title">Quick links:</h3>
                            <ul className="footer__list">
                                <li><a href="/#projects">Projects</a></li>
                                <li><a href="/playground">Playground</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="footer__logo">
                            <a className="footer__logo-link" href="#home" aria-label="Home">
                                <img src={`${import.meta.env.BASE_URL}projects-img/logoAG.png`}
                                    alt="AG logo"
                                    width={60}
                                    height={60}
                                    decoding="async"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </a>
                        </div>
                        <div className="footer__legal">
                            <div className="footer__legal-inner">
                                <small>© {year} Alex. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;