import { atom } from "jotai";

export const projects = [
  {
    title: "ResultFlow.ai",
    url: "https://resultflow.ai/",
    image: "projects/resultflow.jpg",
    description: "The retail-native Agentic Commerce platform.",
  },
  {
    title: "Premium Retailer",
    url: "https://resultflow.ai/",
    image: "projects/premium-retailer.jpg",
    description: "70% increase in search conversion.",
  },
  {
    title: "Fashion Brand",
    url: "https://resultflow.ai/",
    image: "projects/fashion-brand.jpg",
    description: "6.76% conversion rate on Black Friday.",
  },
  {
    title: "Beauty Brand",
    url: "https://resultflow.ai/",
    image: "projects/beauty-brand.jpg",
    description: "$5M+ in annualized revenue.",
  },
  {
    title: "Luxury Brand",
    url: "https://resultflow.ai/",
    image: "projects/luxury-brand.jpg",
    description: "11.5% conversion rate increase.",
  },
];

export const currentProjectAtom = atom(0);


