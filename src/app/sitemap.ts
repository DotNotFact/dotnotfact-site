import type { MetadataRoute } from "next";
import { person } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: person.site, changeFrequency: "monthly", priority: 1 }];
}
