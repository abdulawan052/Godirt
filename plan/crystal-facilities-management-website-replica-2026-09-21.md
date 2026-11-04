# Crystal Facilities Management website replica

## Goal
Recreate the publicly accessible Crystal Facilities Management website at the same URL paths, preserving its page hierarchy, wording, imagery, banners, sections, and desktop/mobile navigation—including the Services and Sectors dropdown menus.

## Implementation
- Build a shared site shell matching the reference header, mobile menu, dropdowns, typography, colours, buttons, forms, and footer.
- Recreate the home page section-for-section, including its hero, service strip, accreditations, enquiry form, client logos, services, sectors, calls to action, articles, and footer content.
- Build reusable templates for service, sector, location, informational, event, blog/article, contact, and legal/policy pages.
- Use the reference sitemap to create every accessible public path and retain the original copy for each page.
- Download and store referenced website imagery with the project rather than relying on external image links.
- Preserve telephone, email, social, accreditation, and external links; keep enquiry forms visually and interactively complete in the replica.
- Give each page its own matching title and social description.

## Validation
- Compare the home page and representative page types against the reference at desktop and mobile sizes.
- Verify all navigation items, dropdown entries, page paths, images, forms, and policy links.
- Check the final preview for broken pages, missing assets, overflow, and runtime errors.

## Technical details
- TanStack Start routes with a shared layout and a catch-all content route backed by generated page data.
- Tailwind design tokens will reproduce the navy, white, and lime visual system.
- Public media will be mirrored into project-managed assets.
