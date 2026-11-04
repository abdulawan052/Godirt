import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/crystal-page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Facilities Management Company UK | Crystal FM" },
    { name: "description", content: "Seamless facilities management across the UK — cleaning, maintenance and security from one trusted partner." },
    { property: "og:title", content: "Facilities Management Company UK | Crystal FM" },
    { property: "og:description", content: "Cleaning, maintenance and security tailored to your business." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});