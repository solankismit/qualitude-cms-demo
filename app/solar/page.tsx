import client from "@/tina/__generated__/client";
import SolarPage from "@/components/solar/SolarPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Solutions | Qualitude Technologies",
  description: "Sustainable solar solutions for homes and businesses",
};

export default async function Page() {
  try {
    const res = await client.queries.solarPage({
      relativePath: "solar.json",
    });
    return (
      <SolarPage data={res.data} query={res.query} variables={res.variables} />
    );
  } catch (error) {
    console.error("Error fetching Tina CMS data:", error);
    // If Tina CMS query fails, use static data
    return <></>;
  }
}
