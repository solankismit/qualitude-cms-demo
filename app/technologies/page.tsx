import client from "@/tina/__generated__/client";
import { TechnologiesPageClient } from "@/components/technologiesPageClient";

export default async function TechnologiesPage() {
  // Fetch page data from Tina CMS
  const pageData = await client.queries.technologiesPage({
    relativePath: "technologies.json",
  });

  return (
    <TechnologiesPageClient
      data={pageData.data}
      query={pageData.query}
      variables={pageData.variables}
    />
  );
}
