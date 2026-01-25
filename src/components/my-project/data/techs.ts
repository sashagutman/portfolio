  import type { TechId } from "../types/project";

  export type TechMeta = { label: string; className?: string };

  export const TECHS: Record<TechId, TechMeta> = {
    html:    { label: "HTML" },
    css:     { label: "CSS" },
    react:   { label: "React" },
    js:      { label: "JavaScript" },
    ts:      { label: "TypeScript" },
    node:    { label: "Node.js" },
    express: { label: "Express" },
    mongo:   { label: "MongoDB" },
    api:     { label: "API" },
  };
