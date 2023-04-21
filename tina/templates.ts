import type { TinaField } from "tinacms";
export function portfolioFields() {
  return [
    {
      type: "string",
      name: "categorie_n",
      nameOverride: "categorieën",
      label: "categorieën",
    },
    {
      type: "string",
      name: "Uitdaging",
      label: "Uitdaging",
    },
    {
      type: "string",
      name: "project",
      label: "project",
    },
    {
      type: "string",
      name: "shortDescription",
      label: "shortDescription",
    },
    {
      type: "string",
      name: "Oplossing",
      label: "Oplossing",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
  ] as TinaField[];
}
