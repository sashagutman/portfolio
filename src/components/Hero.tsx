import type { FunctionComponent } from "react";
import "../styles/hero.css"
interface HeroProps {
    
}
 
const Hero: FunctionComponent<HeroProps> = () => {
    return ( 
        <>
            <section id="home" className="section hero__section">
                <div className="container">
                    <div className="hero__inner center-inner">
                        <div className="hero__badge badge">Frontend Developer</div>
                        <h1 className="hero__title">
                            <span>Building Web</span>
                            <span className="hero__title-line">Experiences</span>
                        </h1>
                        <p className="hero__description description">Here you’ll find selected projects built with HTML, CSS, JavaScript, and React/TypeScript. They highlight my focus on responsive UI, good UX, and clean, maintainable code. Each project includes a live demo and source code, with a short overview of the key features.</p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;