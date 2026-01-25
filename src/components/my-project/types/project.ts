export type TechId = 
| "html" | "react" | "css" | "js" | "ts" | "node" | "mongo" | "express" | "api";

export type Project = {
    id: string;
    title: string;
    summary: string;
    cover: string;
    techs: TechId[];
    live?: string;
    code?: string;
}

