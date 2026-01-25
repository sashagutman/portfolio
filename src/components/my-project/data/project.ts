import type { Project } from "../types/project";

export const PROJECTS = [
  {
    id: "b-card",
    title: "B-Card",
    summary:
      "Business card app: CRUD for cards, favorites, filters, authentication.",
    cover: `${import.meta.env.BASE_URL}projects-img/business-card.jpg`,
    techs: ["react", "ts", "css", "api"],
    // live: "https://yourname.github.io/b-card/",
    code: "https://github.com/sashagutman/b-card",
  },
  {
    id: "book-loop",
    title: "Book Loop",
    summary:
      "Full-stack reading tracker with roles (admin/user), book statuses, and filters.",
    cover: `${import.meta.env.BASE_URL}projects-img/book-loop.jpg`,
    techs: ["react", "ts", "css", "node", "express", "mongo", "api"],
    live: "https://bookloop-staging-1.onrender.com",
    code: "https://github.com/sashagutman/bookLoop",
  },

  {
    id: "fake-store",
    title: "Fake Store",
    summary:
      "Product catalog on a public API: search, sorting, pagination.",
    cover: `${import.meta.env.BASE_URL}projects-img/fake-store.jpg`,
    techs: ["react", "ts", "css", "api"],
    live: "https://sashagutman.github.io/fake-store/",
    code: "https://github.com/sashagutman/fake-store",
  },
  {
    id: "dananz-layout",
    title: "Dananz — multi-page website layout",
    summary:
      "Multi-page website layout (home, about, services, projects, contact): responsive layout, semantic HTML/CSS, and basic JS for interactivity.",
    cover: `${import.meta.env.BASE_URL}projects-img/dananz.jpg`,
    techs: ["html", "css", "js"],
    code: "https://github.com/sashagutman/dananz-layout",
    live: "https://sashagutman.github.io/dananz-layout/"
  },
  
] satisfies Project[];
