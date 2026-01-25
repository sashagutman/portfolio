import type { FunctionComponent } from "react";
import "../../styles/playground/playground.css"
import { LuGithub, LuSquareArrowOutUpRight } from "react-icons/lu";
import { PLAYGROUNDS } from "./data/playground";
// Выводим тип проекта из массива PLAYGROUNDS
type PlaygroundItem = (typeof PLAYGROUNDS)[number];

interface PlaygroundPgeProps {
    playground?: PlaygroundItem[];
}
 
const PlaygroundPge: FunctionComponent<PlaygroundPgeProps> = ({playground = PLAYGROUNDS}) => {
    return (
        <>
            <section className="section playground__section">
                <div className="container">
                    <div className="playground__inner center-inner">
                        <div className="playground__badge badge">Playground</div>

                        <h2 className="title playground__title">
                            Mini Projects
                        </h2>
                        <p className="description">
                            “JS Playground” is a collection of small interactive projects — mini apps and games built with JavaScript. They showcase core frontend skills: DOM manipulation, application logic, UI states, and clean structure. Each project is a focused experiment and a quick demo of a specific feature.
                        </p>
                    </div>

                    <ul className="playground__list">
                        {playground.map((p) => (
                            <li className="playground__item" key={p.id}>
                            <div className="playground__item-img">
                                <img src={p.img} alt={p.title} />
                            </div>

                            <div className="playground__item-body">
                                <h3 className="playground__item-title">
                                   {p.title}
                                </h3>
                                <p className="playground__item-description">
                                      {p.description}
                                </p>
                            </div>

                            <div className="playground__item-actions">
                                <a href={p.live} className="btn playground__item-link" target="_blank">
                                    View
                                    <LuSquareArrowOutUpRight />
                                </a>
                                <a href={p.code} className="btn playground__item-link" target="_blank">
                                    <span><LuGithub /></span>
                                    Code
                                </a>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
     );
}
 
export default PlaygroundPge;