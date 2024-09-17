import {
  SidebarConfig,
  SidebarItemConfig,
} from "@docusaurus/plugin-content-docs/src/sidebars/types.js";
import _raw from "./sidebars.json";
import matter from "gray-matter";
import { readFileSync } from "fs";

interface Node {
  name: string;
  items: (Node | string)[];
}

const raw = _raw as Node[];

const sidebars: SidebarConfig = Object.fromEntries(
  raw.map(({ name, items }) => {
    const result: SidebarItemConfig[] = [`${name}/index`];
    for (const item of items) {
      if (typeof item === "string") {
        result.push(`${name}/${item}`);
      } else {
        const path = name + "/" + item.name;
        const content = readFileSync(`docs/${path}/index.mdx`, "utf-8");
        const label = matter(content).data.title as string;
        result.push({
          type: "category",
          label,
          link: { type: "doc", id: path + "/index" },
          items: (item.items as string[]).map(
            (subitem) => `${path}/${subitem}`
          ),
        });
      }
    }
    return [name, result];
  })
);

export default sidebars;
