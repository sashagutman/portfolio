import AboutMe from "./AboutMe";
import Contacts from "./contacts/Contacts";
import Hero from "./Hero";
import Project from "./my-project/Project";


export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <AboutMe />
      <Contacts />
    </>
  );
}
