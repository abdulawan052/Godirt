import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/crystal-page";
import { titleFromPath } from "@/lib/site-data";

export const Route = createFileRoute("/$")({
  head: ({ params }) => {
    const title = titleFromPath(params._splat || "");
    const description = `${title} from Crystal Facilities Management, trusted facilities management services across the UK.`;
    return { meta: [
      { title: `${title} | Crystal Facilities Management` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Crystal Facilities Management` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: CatchAllPage,
});

function CatchAllPage() {
  const { _splat } = Route.useParams();
  return <GenericPage path={`/${_splat || ""}/`} />;
}