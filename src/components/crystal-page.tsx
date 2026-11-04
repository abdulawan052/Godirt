import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Building2, Sparkles, Droplets, CalendarDays, GraduationCap, Landmark, HeartPulse, HardHat, Warehouse, BedDouble, ShoppingCart, Store, PiggyBank, Briefcase, Lightbulb, Shield, TrendingUp, Leaf } from "lucide-react";
import { useState, type ReactNode, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { sectors, services, titleFromPath } from "@/lib/site-data";
import hero from "@/assets/hero.webp.asset.json";
import commercial from "@/assets/commercial.webp.asset.json";
import student from "@/assets/student.webp.asset.json";
import contact from "@/assets/contact.webp.asset.json";
import about from "@/assets/about.webp.asset.json";
import bics from "@/assets/bics.webp.asset.json"; import iso1 from "@/assets/iso9001.webp.asset.json"; import iso2 from "@/assets/iso14001.webp.asset.json"; import sia from "@/assets/sia.webp.asset.json"; import safe from "@/assets/safe.webp.asset.json"; import iip from "@/assets/iip.webp.asset.json";
import ebay from "@/assets/ebay.webp.asset.json"; import mansion from "@/assets/mansion.webp.asset.json"; import heriot from "@/assets/heriot.webp.asset.json"; import fresh from "@/assets/fresh.webp.asset.json"; import york from "@/assets/york.webp.asset.json"; import savills from "@/assets/savills.webp.asset.json"; import nhs from "@/assets/nhs.png.asset.json";
const icon1 = "/icon1.webp"; const icon2 = "/icon2.webp";
   const icon3 = "/icon3.webp";
   const icon4 = "/icon4.webp";
   const icon5 = "/icon5.webp";
   const icon6 = "/icon6.webp";
   const icon7 = "/icon7.webp";
   const icon8 = "/icon8.webp";

const accreditations=[bics,iso1,iso2,sia,safe,iip]; const clients=[ebay,mansion,heriot,fresh,york,savills,nhs];
const findService = (label: string) => services.find(s => s.label === label);
const serviceCards=[
 ["Commercial Cleaning","Our commercial cleaning services cover offices, retail spaces, and more.",findService("Commercial Cleaning"),icon1],
 ["Commercial Deep Cleaning","Our commercial deep cleaning covers floors, surfaces, and high-touch areas.",findService("Deep Cleaning"),icon2],
 ["Office Cleaning","Spotless, hygienic, and organised workspaces.",findService("Office Cleaning"),icon8],
 ["Cleaning Contractor","Deep cleans and specialist maintenance solutions.",findService("Cleaning Contractor"),icon4],
 ["Disinfection Services","Complete sanitisation and a germ-free environment.",findService("Disinfection"),icon7],
 ["Kitchen Duct Cleaning","Safe, efficient, grease-free ventilation.",findService("Kitchen Duct Cleaning"),icon5],
 ["Window Cleaning","Our window cleaning services deliver spotless, streak-free, crystal clear results.",findService("Window Cleaning"),icon1],
 ["After Builders Cleaning","Comprehensive after builders cleaning including sparkle cleans and window washing.",findService("Builders Cleaning"),icon8],
] as const;
const sectorInfo: Record<string, { icon: typeof Building2; text: string }> = {
  "Student Accommodation": { icon: Building2, text: "Comprehensive cleaning and maintenance for student residences." },
  "House keeping": { icon: Sparkles, text: "Professional housekeeping services tailored for all sectors." },
  "Summer Deep Cleaning": { icon: Droplets, text: "Thorough deep cleaning for seasonal refresh and hygiene." },
  "Term Time Cleaning": { icon: CalendarDays, text: "Regular and effective cleaning for educational institutions." },
  "Universities & Colleges": { icon: GraduationCap, text: "Safe and hygienic cleaning services for primary and secondary schools." },
  "Schools": { icon: Landmark, text: "Expert cleaning and facility management for higher education." },
  "Healthcare": { icon: HeartPulse, text: "Strict hygiene protocols to maintain medical facility cleanliness." },
  "Construction Site": { icon: HardHat, text: "Post-construction cleanup ensuring a safe and clean site." },
  "Warehouse & Depots": { icon: Warehouse, text: "Industrial-grade cleaning services for warehouses and logistics centers." },
  "Hotel": { icon: BedDouble, text: "High-standard hospitality cleaning for guest satisfaction." },
  "Retail": { icon: ShoppingCart, text: "Retail store cleaning for a welcoming shopping experience." },
  "Mall Cleaning": { icon: Store, text: "Tailored cleaning solutions for shopping malls and retail centers." },
};
export function TrustStrips(){ return <><div className="bg-brand-navy text-brand-on-navy"><div className="mx-auto grid max-w-[1120px] divide-y divide-brand-on-navy/15 px-5 md:grid-cols-5 md:divide-x md:divide-y-0"><div className="py-4 text-xs uppercase tracking-widest text-brand-on-navy/70">Care for every space<br/><b className="normal-case text-brand-on-navy">Our core services</b></div>{services.slice(0,4).map(s=><Link to="/$" params={{ _splat: s.path.replace(/^\//, "").replace(/\/$/, "") }} key={s.path} className="flex items-center justify-between px-5 py-4 text-sm font-semibold hover:text-brand-lime">{s.label}<ArrowRight className="size-4"/></Link>)}</div></div></> }

export function PageHero({title,description,image=hero.url,kicker="Professional Cleaning Solutions • Nationwide UK"}:{title:ReactNode;description:string;image?:string;kicker?:string}){return <><section className="relative min-h-[480px] overflow-hidden bg-brand-navy md:min-h-[590px]"><img src="/Gemini_Generated_Image_ww9ddcww9ddcww9d.jpg" alt="Godirt team" className="absolute inset-0 h-full w-full object-cover md:object-center" style={{ objectPosition: "75% center" }}/><div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/70 to-brand-navy md:bg-hero-overlay"/><div className="relative mx-auto flex min-h-[480px] max-w-[1120px] items-center px-5 py-14 md:min-h-[590px] md:py-20"><div className="max-w-[610px] text-brand-on-navy"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-brand-on-navy/80"><span className="text-brand-lime">●</span> {kicker}</p><h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-base leading-7 text-brand-on-navy/85">{description}</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="lime" size="lg"><Link to="/$" params={{ _splat: "contact-us" }}>Get a free quote <ArrowRight/></Link></Button><Button asChild variant="heroOutline" size="lg"><a href="tel:+442089933831"><Phone/>031 1120 4070</a></Button></div><div className="mt-5 flex flex-wrap gap-6 text-xs text-brand-on-navy/75"><span>✓ Tailored to your business</span><span>✓ 24/7 helpdesk</span></div></div></div><div className="hidden bottom-8 right-[8%] border-l-2 border-brand-lime pl-4 text-brand-on-navy"><b className="text-3xl">15+</b><span className="ml-2 inline-block text-xs">years supporting<br/>UK businesses</span></div></section><TrustStrips/></>}

export function HomePage(){return <main><PageHero title={<>Spotless Workplaces,<br/>Every Single Day. <span className="text-brand-lime">Cleaning you can trust.</span></>} description="Godirt provides dependable commercial cleaning for offices, schools, healthcare and retail sites across the UK, with flexible schedules and a plan shaped around your premises."/><section className="mx-auto grid max-w-[1120px] gap-12 px-5 py-[50px] lg:grid-cols-[1.3fr_.7fr]"><div><h2 className="text-center" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "24px", lineHeight: "40px", color: "var(--brand-green)" }}>WELCOME TO GODIRT</h2><p className="body-copy">Think of us as your essential partner for all types of commercial cleaning. For more than a years, Godirt Professional Cleaning Solutions has been looking after businesses across the UK, earning a great reputation for high-quality, dependable service.

We cover everything: from your regular daily office clean to complex specialist industrial work and complete cleaning packages. Whatever your sector, we have the experience and dedication to keep standards high—we genuinely love exceeding your expectations!

We really believe your service should be as unique as your business. We are not just offering a standard price list; our friendly team will work closely with you to design a custom plan that matches your exact needs and budget. Using our professional team and smart technology, we ensure you have a clean, safe, and highly efficient workplace that supports everyone's well-being and productivity."</p><p className="body-copy">Godirt Professional Cleaning Solutions covers it all — from routine office cleaning to specialist industrial work.</p><Button asChild variant="navy" className="mt-6"><Link to="/$" params={{ _splat: "about" }}>About Us <ArrowRight/></Link></Button></div><QuoteForm/></section><LogoBand/><ServicesGrid/><CleaningBanner/><section className="bg-white py-[50px]"><div className="mx-auto max-w-[1120px] px-5"><div className="text-center"><h2 className="text-center" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "24px", lineHeight: "40px", color: "var(--brand-green)" }}>Our Sectors</h2><p className="mt-3 text-center text-sm text-muted-foreground">We offer all types of professional cleaning services Nationwide. We are proud to be delivering across the UK in the following industries:</p></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{sectors.map(s=>{const info=sectorInfo[s.label]||{icon:Building2,text:"Tailored cleaning, maintenance and facilities support delivered by experienced teams."};const Icon=info.icon;return <Link to="/$" params={{ _splat: s.path.replace(/^\//, "").replace(/\/$/, "") }} key={s.path} className="group rounded-xl bg-white p-7 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><Icon className="mx-auto size-10 text-brand-navy"/><h3 className="mt-4 text-lg font-bold text-brand-navy">{s.label}</h3><p className="mt-2 text-sm text-muted-foreground">{info.text}</p></Link>})}</div></div></section><WhyChooseFM/><Cta/></main>}

function LogoBand(){return <section className="hidden border-y bg-background py-10"><div className="mx-auto max-w-[1120px] px-5"><p className="eyebrow text-center">Trusted by leading organisations</p><h2 className="mb-8 text-center text-3xl font-bold">Our Clients</h2><div className="flex flex-wrap items-center justify-center gap-10">{clients.map((x,i)=><img key={i} src={x.url} alt="Client logo" className="h-14 w-28 object-contain grayscale"/>)}</div></div></section>}
function ServicesGrid(){return <section className="mx-auto max-w-[1120px] px-5 py-[50px]"><div className="text-center"><h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "24px", lineHeight: "40px", color: "var(--brand-green)" }}>Professional Commercial Cleaning Services in the UK</h2><p className="eyebrow text-brand-navy">We Cover Everything</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{serviceCards.map(([name,text,s,icon])=><div key={name} className="group bg-brand-navy p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><img src={icon} alt="" className="mx-auto h-14 w-14 object-contain"/><h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-brand-green">{name}</h3><p className="mt-3 text-sm leading-6 text-white/80">{text}</p><Link to="/$" params={{ _splat: (s?.path ?? "/").replace(/^\//, "").replace(/\/$/, "") }} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-lime hover:underline">Learn more <ArrowRight className="size-4"/></Link></div>)}</div></section>}function QuoteForm(){  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "36c7467e-3774-49f1-8a11-f42fca2193da");
    formData.append("subject", "New Quote Request - Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-brand-blue p-7 text-brand-on-navy">
        <h2 className="text-2xl font-bold text-white">Thank you!</h2>
        <p className="mt-3 text-sm text-brand-on-navy/80">Your request has been submitted successfully. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="bg-brand-blue p-7 text-brand-on-navy" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Request a free quote</h2>
      <p className="mt-2 text-sm text-brand-on-navy/70">Tell us what your business needs.</p>
      <input name="Name" aria-label="Name" placeholder="Name" required className="mt-4 h-11 w-full border border-brand-on-navy/25 bg-transparent px-3 text-sm placeholder:text-brand-on-navy/60"/>
      <input name="Email" type="email" aria-label="Email" placeholder="Email" required className="mt-4 h-11 w-full border border-brand-on-navy/25 bg-transparent px-3 text-sm placeholder:text-brand-on-navy/60"/>
      <input name="Mobile" aria-label="Mobile" placeholder="Mobile" className="mt-4 h-11 w-full border border-brand-on-navy/25 bg-transparent px-3 text-sm placeholder:text-brand-on-navy/60"/>
      <textarea name="Message" aria-label="Message" placeholder="Message" className="mt-4 min-h-28 w-full border border-brand-on-navy/25 bg-transparent p-3 text-sm placeholder:text-brand-on-navy/60"/>
      {status === "error" && <p className="mt-3 text-sm text-red-300">Something went wrong. Please try again.</p>}
      <Button type="submit" variant="lime" className="mt-4 w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
function Cta(){return <section className="bg-brand-green py-[50px] text-brand-on-navy"><div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center"><div><h2 className="text-3xl font-bold">Let’s create a cleaner, safer workplace</h2><p className="mt-2 text-brand-on-navy/80">Get in touch with our team today.</p></div><Button asChild variant="lime" size="lg"><Link to="/$" params={{ _splat: "contact-us" }}>Contact Us <ArrowRight/></Link></Button></div></section>}
function CleaningBanner(){
  return (
    <section
      className="relative bg-brand-navy py-[50px] text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(15,61,62,0.6), rgba(15,61,62,0.6)), url('/Gemini_Generated_Image_ww9ddcww9ddcww9d.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative mx-auto max-w-[820px] px-5">
        <h2 className="text-2xl font-bold md:text-3xl text-white">Premium Commercial Cleaning Services Across the UK</h2>
        <p className="mt-4 text-sm leading-6 text-white/85 md:text-base">Discover our premium commercial cleaning services tailored to meet your needs. At Godirt Professional Cleaning Solutions, we pride ourselves on delivering top-notch solutions to ensure the cleanliness, safety, and functionality of your commercial and residential spaces.</p>
        <Button asChild variant="lime" size="lg" className="mt-7"><Link to="/$" params={{ _splat: "contact-us" }}>Get a Free Quote</Link></Button>
      </div>
    </section>
  );
}
function WhyChooseFM(){
  const items = [
    { icon: PiggyBank, title: "Cost Efficiency", text: "We use cost-effective methods and smart scheduling to optimise resources and reduce your cleaning costs." },
    { icon: Briefcase, title: "Focus on Core Activities", text: "Outsourcing your cleaning to us lets your team focus on their core business without distractions." },
    { icon: Lightbulb, title: "Expertise & Quality", text: "Benefit from trained, BICSc accredited professionals who follow the latest cleaning standards and techniques." },
    { icon: Shield, title: "Health & Safety", text: "We proactively manage hygiene and safety risks, ensuring a clean and compliant work environment." },
    { icon: TrendingUp, title: "Enhanced Productivity", text: "A consistently clean, well-maintained workplace supports a more productive and positive environment." },
    { icon: Leaf, title: "Sustainability", text: "Our eco-friendly cleaning practices support responsible waste management and a greener future." },
  ];
  return (
    <section className="bg-white">
      <div className="bg-brand-navy py-8 text-center">
        <h2 className="text-xl font-bold text-white md:text-2xl">Why Choose Godirt for Cleaning Services?</h2>
      </div>
      <div className="mx-auto max-w-[1120px] px-5 py-[50px]">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Icon className="mx-auto size-9 text-brand-green"/>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="lime" size="lg"><Link to="/$" params={{ _splat: "contact-us" }}>Contact Us</Link></Button>
        </div>
      </div>
    </section>
  );
}
const intros:Record<string,string>={
 "About Us":"Godirt is driven by a team of dedicated and results-focused people. We work with customers to provide tailor-made cleaning solutions for short-term, long-term and ad hoc contracts.",
 "Contact Us":"Get in touch with Godirt for a free, no-obligation quote — or a chat about your cleaning, maintenance or security needs anywhere in the UK.",
 "Sustainability and Innovation":"We continuously seek better ways to protect the environment, support our people and deliver efficient services through responsible innovation.",
 "Social Values":"Our commitment extends beyond facilities. We create local opportunities, support communities and put people at the centre of everything we do.",
 "Privacy Policy":"Godirt respects your privacy and is committed to protecting the personal data we hold. This policy explains how we collect, use, retain and safeguard your information."
};
export function GenericPage({path}:{path:string}){const title=titleFromPath(path); const isService=path.includes("/services/"); const isSector=path.includes("/sector/"); const isContact=title==="Contact Us"; const isAbout=title==="About Us"; const image=isContact?contact.url:isAbout?about.url:isSector?student.url:isService?commercial.url:hero.url; const desc=intros[title] || `Professional ${title.toLowerCase()} from Godirt, tailored to your site, sector and requirements across the UK.`; return <main><PageHero title={title+(isService||isSector?" Services UK":"")} description={desc} image={image}/><section className="mx-auto grid max-w-[1120px] gap-12 px-5 py-20 lg:grid-cols-[1fr_360px]"><article><p className="eyebrow">{isService?"Professional solutions":isSector?"Sector expertise":"Godirt"}</p><h2 className="section-title">{title}</h2><p className="body-copy">{desc}</p>{title==="Privacy Policy"?<PolicyCopy/>:<><p className="body-copy">Our experienced operations team works closely with every client to create a reliable, accountable and cost-effective plan. Every detail is shaped around your premises, schedule and standards.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Dedicated operations support","Flexible service schedules","Trained and vetted teams","Quality checks and reporting","24/7 responsive helpdesk","Nationwide UK coverage"].map(x=><div className="flex gap-3 border border-border p-4 text-sm font-semibold" key={x}><Check className="size-5 shrink-0 text-brand-green"/>{x}</div>)}</div><h2 className="mt-12 text-3xl font-bold text-brand-navy">A service designed around your business</h2><p className="body-copy">We begin by understanding your goals, completing a detailed site assessment and agreeing clear outcomes. Our managers then oversee mobilisation, delivery and continuous improvement.</p></>}</article><QuoteForm/></section><LogoBand/><Cta/></main>}
function PolicyCopy(){return <div className="space-y-7">{[["WHO WE ARE?","Godirt is a limited company registered in England and Wales, registration number 05645405 and is a controller under the General Data Protection Regulation and Data Protection Act 2025."],["WHOSE DATA DO WE HOLD?","We may hold data about employees, customers, suppliers and service providers, advisers, consultants, professional experts, complainants and enquirers."],["WHAT DATA WE COLLECT?","We only collect information relevant to the matter we are dealing with, including personal details, financial details and business activities."],["HOW WE USE YOUR INFORMATION","Information is used to provide our services, communicate with you, meet our legal obligations and improve our operations. We do not sell personal information."],["YOUR RIGHTS","You may ask to access, correct or erase your information, restrict processing, object to processing or request data portability where applicable."],["CONTACT US","Questions about this policy can be sent to info@godirt.co.uk or to our registered address at The Lyra, Portal Way, North Acton, W3 6BJ."]].map(([h,p])=><section key={h}><h3 className="text-xl font-bold text-brand-navy">{h}</h3><p className="body-copy">{p}</p></section>)}</div>}
