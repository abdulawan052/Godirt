import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cities, mainNav, sectors, services, type NavItem } from "@/lib/site-data";
import logo from "@/assets/logo.webp.asset.json";
import footerLogo from "@/assets/footer-logo.webp.asset.json";  

function DesktopDropdown({ item }: { item: NavItem }) {
  return <div className="group relative h-full content-center">
    <button className="flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand-green">{item.label}<ChevronDown className="size-3.5" /></button>
    <div className="invisible absolute left-0 top-full z-50 w-[280px] -translate-y-1 border-t-4 border-brand-lime bg-brand-navy py-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {item.children?.map(child => <Link key={child.path} to="/$" params={{ _splat: child.path.replace(/^\//, "").replace(/\/$/, "") }} className="block px-6 py-3 text-sm font-medium text-white hover:bg-brand-navy/60 hover:text-brand-lime">{child.label}</Link>)}
    </div>
  </div>;
}

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-40 bg-background shadow-sm">
    <div className="mx-auto flex h-[82px] max-w-[1120px] items-center justify-between px-5">
      <Link to="/" aria-label="Crystal home"><img src="/footer-logo-new.png" alt="Godirt" className="h-14 w-auto" /></Link>
      <nav className="hidden h-full items-center gap-6 lg:flex">
        {mainNav.map(item => item.children ? <DesktopDropdown key={item.label} item={item}/> : <Link key={item.path} to="/$" params={{ _splat: item.path.replace(/^\//, "").replace(/\/$/, "") }} className="text-sm font-semibold text-brand-navy hover:text-brand-green">{item.label}</Link>)}
        <Button asChild variant="lime" size="lg"><Link to="/$" params={{ _splat: "contact-us" }}>CONTACT US</Link></Button>
      </nav>
      <div className="flex items-center gap-2 lg:hidden"><Button asChild variant="lime" size="sm"><Link to="/$" params={{ _splat: "contact-us" }}>CONTACT US</Link></Button><Button variant="ghost" size="icon" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>
    </div>
    {open && <nav className="max-h-[calc(100vh-82px)] overflow-auto border-t bg-background p-5 lg:hidden">
      {mainNav.map(item => <details key={item.label} className="border-b border-border py-3">
        {item.children ? <><summary className="flex cursor-pointer list-none justify-between font-semibold">{item.label}<ChevronDown className="size-4"/></summary><div className="mt-2 grid pl-3">{item.children.map(c=><Link onClick={()=>setOpen(false)} key={c.path} to="/$" params={{ _splat: c.path.replace(/^\//, "").replace(/\/$/, "") }} className="py-2 text-sm text-muted-foreground">{c.label}</Link>)}</div></> : <Link onClick={()=>setOpen(false)} to="/$" params={{ _splat: item.path.replace(/^\//, "").replace(/\/$/, "") }} className="font-semibold">{item.label}</Link>}
      </details>)}
      <Button asChild variant="lime" className="mt-4 w-full"><Link onClick={()=>setOpen(false)} to="/$" params={{ _splat: "contact-us" }}>CONTACT US</Link></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
 return <footer className="bg-brand-navy text-brand-on-navy">
  <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
   <div><img src="/Footer-New.png" alt="Godirt" className="h-16 w-auto"/><p className="mt-5 text-sm leading-7 text-brand-on-navy/70">Your trusted partner for commercial cleaning servicesacross the United Kingdom.</p><a className="mt-5 flex items-center gap-2 font-semibold text-brand-lime" href="tel:+442089933831"><Phone className="size-4"/>031 1120 4070</a></div>
   <FooterColumn title="Services" items={services.slice(0,8)}/><FooterColumn title="Company" items={mainNav.filter(x=>!x.children).concat([{label:"Contact Us",path:"/contact-us/"},{label:"Privacy Policy",path:"/privacy-policy/"}])}/>
   <div><h3 className="mb-4 font-bold">Nationwide Coverage</h3><div className="grid grid-cols-2 gap-2">{cities.map(c=><Link key={c} to="/$" params={{ _splat: `services/${c.toLowerCase()}` }} className="text-sm text-brand-on-navy/70 hover:text-brand-lime">{c}</Link>)}</div><p className="mt-6 text-sm leading-6 text-brand-on-navy/70">Leeds<br/>United Kingdom<br/>info@godirt.uk.com</p></div>
  </div>
 </footer>
}
function FooterColumn({title,items}:{title:string;items:NavItem[]}) { return <div><h3 className="mb-4 font-bold">{title}</h3><div className="grid gap-2">{items.map(x=><Link key={x.path} to="/$" params={{ _splat: x.path.replace(/^\//, "").replace(/\/$/, "") }} className="text-sm text-brand-on-navy/70 hover:text-brand-lime">{x.label}</Link>)}</div></div> }
