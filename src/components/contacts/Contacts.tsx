import type { FunctionComponent } from "react";
import { CONTACTS } from "./data/contsctsData";
import "../../styles/contacts.css";
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInRight,
  staggerContainer,
  staggerItem,
  springUp,
} from "../../helpers/framerMotion";

interface ContactsProps {}

const Contacts: FunctionComponent<ContactsProps> = () => {
  return (
    <>
      <motion.section
        id="contact"
        className="section contact__section"
        {...fadeIn} // плавное появление всей секции
      >
        <div className="container">
          <div className="contact__inner center-inner">
            <div className="about__badge badge">Get In Touch</div>

            <motion.h2
              {...fadeInUp} // заголовок выезжает снизу
              className="title about__title"
            >
              Let&apos;s Work <span className="about__title-line">Together</span>
            </motion.h2>

            <motion.p
              {...fadeInRight} // описание плавно появляется справа
              className="description contact__description"
            >
              Have a project in mind? I&apos;d love to hear about it and discuss
              how we can bring it to life.
            </motion.p>
          </div>

          <div className="contact__body">
            <motion.ul
              className="contact__list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {CONTACTS.map(({ id, label, value, href, Icon }) => (
                <motion.li
                  className="contact__item"
                  key={id}
                  variants={staggerItem} // элементы списка появляются по одному
                >
                  {Icon ? (
                    <div
                      className="contact__item-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </div>
                  ) : null}
                  <div className="contact__item-link">
                    <div className="contact__label">{label}</div>
                    <a
                      className="contact__label-link"
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                    >
                      {value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a {...springUp} className="btn contact__btn" href="mailto:alexgush06@gmail.com">
              Send message <BsSend className="contact__btn-icon" />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contacts;

