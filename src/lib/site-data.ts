export type NavItem = { label: string; path: string; children?: NavItem[] };

export const services: NavItem[] = [
  ["Commercial Cleaning", "/services/commercial-cleaning-in-uk/"], ["Builders Cleaning", "/services/builders-cleaning/"],
  ["Deep Cleaning", "/services/deep-cleaning/"], 
  ["Office Cleaning", "/services/office-cleaning/"], 
  ["Specialist Cleaning", "/services/specialist-cleaning/"], ["Disinfection", "/services/disinfection-cleaning/"],
  ["Cleaning Contractor", "/services/cleaning-contractor/"], ["Window Cleaning", "/services/window-cleaning/"],
  ["Kitchen Duct Cleaning", "/services/kitchen-exhaust-duct-cleaning/"], ["End of Tenancy Cleaning", "/services/end-of-tenancy-cleaning/"],
  ["High-Level Cleaning", "/services/high-level-cleaning/"],
  ["Carpet Cleaning", "/services/carpet-cleaning/"],
  ["Jet Washing", "/services/jet-washing/"],
  ["Waste Management", "/services/waste-management/"],
].map(([label,path]) => ({label: label ?? "", path: path ?? "/"}));

export const sectors: NavItem[] = [
  ["Student Accommodation", "/sector/student-accommodation-cleaning-in-uk/"], ["House keeping", "/sector/domestic-cleaning-housekeeping-in-uk/"],
  ["Summer Deep Cleaning", "/sector/summer-deep-cleaning-in-uk/"], ["Term Time Cleaning", "/sector/term-time-cleaning-in-uk-educational-premises/"],
  ["Universities & Colleges", "/sector/primary-secondary-school-cleaning-in-uk/"], ["Schools", "/sector/higher-education-cleaning-in-uk/"],
  ["Healthcare", "/sector/healthcare-cleaning-in-uk/"], ["Construction Site", "/sector/construction-site-cleaning-in-uk/"],
  ["Warehouse & Depots", "/sector/warehouse-depot-cleaning-in-uk/"], ["Hotel", "/sector/hotels-pub-cleaning-in-uk/"],
  ["Retail", "/sector/retail-cleaning-in-uk/"], ["Mall Cleaning", "/sector/mall-cleaning-in-uk/"]
].map(([label,path]) => ({label: label ?? "", path: path ?? "/"}));

export const mainNav: NavItem[] = [
  {label:"About", path:"/about/"}, {label:"Services", path:"#", children:services}, {label:"Sectors", path:"#", children:sectors},
  {label:"Sustainability and Innovation",path:"/sustainability-innovation-in-uk/"}, {label:"Social Values",path:"/social-values/"},
  {label:"Events",path:"/events/"}, {label:"Blog",path:"/blog/"}
];
export const cities = ["London","Manchester","Birmingham","Liverpool","Leeds","Glasgow","Edinburgh","Bristol","Sheffield","Leicester","Coventry"];

export function titleFromPath(path:string) {
  const known: Record<string,string> = {
    "about":"About Us", "contact-us":"Contact Us", "privacy-policy":"Privacy Policy", "blog":"Blog", "events":"Events",
    "social-values":"Social Values", "sustainability-innovation-in-uk":"Sustainability and Innovation"
  };
  const slug=path.split("/").filter(Boolean).at(-1) || "";
  if(known[slug]) return known[slug];
  return slug.replace(/-in-uk/g,"").split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ").trim() || "Facilities Management";
}
