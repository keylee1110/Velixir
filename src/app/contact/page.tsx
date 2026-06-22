import React from "react";
import { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact | Velixir Parfums",
  description: "Get in touch with Velixir Parfums brand showrooms and customer concierge services.",
};

export default async function ContactPage() {
  let settingsData: any = null;

  try {
    settingsData = await client.fetch(siteSettingsQuery);
  } catch (error) {
    console.warn("Failed to fetch site settings for ContactPage, using fallback:", error);
  }

  const shopeeUrl = settingsData?.shopeeUrl || "https://shopee.vn/";
  const tiktokUrl = settingsData?.tiktokUrl || "https://www.tiktok.com/";
  const instagramUrl = settingsData?.instagramUrl || "https://instagram.com";
  const facebookUrl = settingsData?.facebookUrl || "https://facebook.com";
  
  const email = settingsData?.email || "contact@velixir.vn";
  const phone = settingsData?.phone || "+84 (0) 909 123 456";
  const address = settingsData?.address || "District 1, Ho Chi Minh City, Vietnam";

  return (
    <>
      <AnnouncementBar />
      <Header forceSolid={true} shopeeUrl={shopeeUrl} tiktokUrl={tiktokUrl} />

      <main className="flex-grow pt-24 bg-primary-black overflow-hidden">
        {/* Contact Header Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 text-center border-b border-muted-gray/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.03)_0%,rgba(5,5,5,1)_80%)] pointer-events-none" />
          <ScrollReveal direction="up" distance={30} className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-4 uppercase font-semibold block">
              Concierge Service
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-ivory mb-6 uppercase">
              GET IN TOUCH
            </h1>
            <p className="font-sans text-xs md:text-sm text-muted-gray tracking-widest font-light leading-relaxed max-w-xl">
              Our fragrance concierge is at your service. Whether you seek advice on choosing a scent signature or wish to inquire about brand showrooms, we welcome your message.
            </p>
          </ScrollReveal>
        </section>

        {/* Contact Content Split */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Showroom details */}
            <ScrollReveal direction="right" distance={40} className="lg:col-span-5 flex flex-col">
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-champagne-gold mb-3 uppercase font-semibold">
                Showroom Details
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.05em] text-ivory mb-8 uppercase">
                VELIXIR ATELIER
              </h2>
              
              <div className="space-y-8 font-sans text-xs md:text-sm text-muted-gray tracking-wider leading-relaxed">
                <div>
                  <h3 className="text-ivory font-medium uppercase text-[0.7rem] tracking-[0.15em] mb-2">Address</h3>
                  <p className="whitespace-pre-line">{address}</p>
                </div>

                <div>
                  <h3 className="text-ivory font-medium uppercase text-[0.7rem] tracking-[0.15em] mb-2">Concierge Hours</h3>
                  <p>Monday — Saturday: 9:00 AM — 8:00 PM</p>
                  <p>Sunday: 10:00 AM — 6:00 PM</p>
                </div>

                <div>
                  <h3 className="text-ivory font-medium uppercase text-[0.7rem] tracking-[0.15em] mb-2">General Inquiry</h3>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                </div>

                <div className="border-t border-muted-gray/10 pt-8">
                  <h3 className="text-ivory font-medium uppercase text-[0.7rem] tracking-[0.15em] mb-3">Follow The Story</h3>
                  <div className="flex space-x-6 text-[0.7rem] tracking-[0.15em]">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-gray hover:text-champagne-gold transition-colors">INSTAGRAM</a>
                    <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-gray hover:text-champagne-gold transition-colors">TIKTOK</a>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-muted-gray hover:text-champagne-gold transition-colors">FACEBOOK</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal direction="left" delay={150} distance={40} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
