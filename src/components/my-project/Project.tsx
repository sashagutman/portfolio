import type { FunctionComponent } from "react";
import "../../styles/project-style/project.css";
import { LuGithub, LuSquareArrowOutUpRight } from "react-icons/lu";

import { PROJECTS } from "./data/project"; 
import { TECHS } from "./data/techs";     
import { motion } from "framer-motion";
import { scaleIn } from "../../helpers/framerMotion";

// Выводим тип проекта из массива PROJECTS
type ProjectType = typeof PROJECTS[number];

interface ProjectProps {
  projects?: ProjectType[];
}

const Project: FunctionComponent<ProjectProps> = ({ projects = PROJECTS }) => {
  return (
    <section id="projects" className="section project__section">
      <div className="container">
        <div className="project__inner center-inner">
          <div className="project__badge badge">Portfolio</div>
          <h2 className="title project__title">Featured Work</h2>
          <p className="description project__description">
            A collection of projects showcasing modern design and functionality
          </p>
        </div>

        <ul className="project__list">
          {projects.map((p) => (
            <li className="project__card" key={p.id}>
              <div className="project__img">
                <motion.img {...scaleIn} className="project__cover" src={p.cover} alt={p.title || "project cover"} loading="lazy" />
              </div>

              <div className="project__body">
                <h3 className="project__body-title">{p.title}</h3>
                <p className="project__body-summary">{p.summary}</p>

                <ul className="project__tags">
                  {p.techs.map((t) => (
                    <li
                      className={`project__tag ${TECHS[t]?.className ?? ""}`}
                      key={t}
                      aria-label={TECHS[t]?.label}
                      title={TECHS[t]?.label}
                    >
                      {TECHS[t]?.label ?? t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project__actions">
                {p.live && (
                  <a
                    className="btn btn--ghost project__btn project__btn--view"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live: ${p.title}`}
                  >
                    View
                    <span><LuSquareArrowOutUpRight /></span>
                  </a>
                )}

                {p.code && (
                  <a
                    className="btn btn--ghost project__btn project__btn--code"
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open code: ${p.title}`}
                  >
                    <span><LuGithub /></span>
                    Code
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
