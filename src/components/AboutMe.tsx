import type { FunctionComponent } from "react";
import "../styles/about-me.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  springUp,
  staggerContainer,
  staggerItem,
} from "../helpers/framerMotion";

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <>
      <motion.section
        id="about"
        className="section about__section"
        {...fadeIn} // плавное появление всей секции
      >
        <div className="container">
          <div className="about__inner center-inner">
            <div className="about__badge badge">About Me</div>

            <motion.h2
              {...fadeInUp} // заголовок выезжает снизу
              className="title about__title"
            >
              Creating tactile{" "}
              <span className="about__title-line">digital experiences</span>
            </motion.h2>
          </div>

          <div className="about__meta">
            {/* Фото */}
            <motion.div
              className="about__group about__img"
              {...fadeInLeft} // слева → вправо
            >
              <img
                src={`${import.meta.env.BASE_URL}projects-img/myPic.jpg`}
                alt="I"
              />
            </motion.div>

            {/* Текст-интро */}
            <motion.div
              className="about__group"
              {...fadeInRight} // справа → в центр
            >
              <p className="description about__description about__intro">
                <span>Hello! I’m Alex</span> — a junior frontend developer with a solid base in HTML, CSS, and JavaScript. I build responsive React + TypeScript apps, work with REST APIs, and focus on clean, maintainable UI. I enjoy turning ideas into user-friendly interfaces, handling UI states (loading/error), and improving UX. Comfortable with Git/GitHub and deploying projects (e.g., Render).
              </p>
            </motion.div>

            {/* Focus */}
            <motion.div
              className="about__group about__focus"
              {...fadeInUp}
            >
              <h3 className="about__meta-title">Focus</h3>
              <ul className="about__bullets">
                <li>Clean, accessible UIs.</li>
                <li>Responsive layouts &amp; performance.</li>
                <li>Pragmatic API integration.</li>
              </ul>
            </motion.div>

            <motion.div
              className="about__group about__tech"
              {...fadeInUp}
            >
              <h3 className="about__meta-title">Tech stack</h3>
              <motion.ul
                className="about__tags"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {["HTML", "CSS", "JavaScript", "React", "GitHub", "TypeScript"].map((tech) => (
                  <motion.li key={tech} variants={staggerItem}>
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <motion.div
            className="about__action about__group"
            {...springUp}
          >
            <p className="about__meta-title">Get my CV:</p>
            <div className="about__actions">
              <motion.a
                className="btn about__btn"
                href={`${import.meta.env.BASE_URL}files/resume-alexgutman.pdf`}
                download="resume-alexgutman.pdf"
              >
                Download
                <span className="about__btn-icon" >
                  <IoCloudDownloadOutline />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutMe;
