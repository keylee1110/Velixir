import React from "react";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export default async function AnnouncementBar() {
  let announcementText = "DISCOVER VELIXIR — MYTHS REBORN THROUGH SCENT";

  try {
    const settings = await client.fetch(siteSettingsQuery);
    if (settings?.announcementText) {
      announcementText = settings.announcementText;
    }
  } catch (error) {
    console.warn("Failed to fetch site settings from Sanity, using fallback.", error);
  }

  return (
    <div className="w-full bg-primary-black text-ivory border-b border-muted-gray/10 text-center py-2.5 px-4 font-sans text-[0.65rem] tracking-[0.25em] uppercase font-light">
      {announcementText}
    </div>
  );
}
