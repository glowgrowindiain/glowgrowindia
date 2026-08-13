import workCommunity from "@/assets/work-community.jpg";
import workVilla from "@/assets/work-villa.jpg";
import workTravel from "@/assets/work-travel.jpg";
import workEvents from "@/assets/work-events.jpg";

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  desc: string;
  result: string;
  image: string;
  alt: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "muj-freshers-community",
    name: "MUJ Freshers Community",
    category: "Community Growth",
    desc: "Community growth, social media and student marketing for one of Jaipur's largest campus networks.",
    result: "20K+ students reached, 5K+ community members added",
    image: workCommunity,
    alt: "Students with hands raised at a campus night event",
  },
  {
    slug: "jaipur-villa-farms",
    name: "Jaipur Villa Farms",
    category: "Performance Marketing",
    desc: "Social media, branding and lead generation for a premium villa and farm stay destination.",
    result: "500+ qualified booking enquiries generated",
    image: workVilla,
    alt: "Luxury villa with pool reflection at dusk",
  },
  {
    slug: "manipal-travels",
    name: "Manipal Travels",
    category: "Social Media",
    desc: "Travel marketing and student community promotion across high-intent routes and seasons.",
    result: "3x growth in seasonal booking enquiries",
    image: workTravel,
    alt: "Night highway with long light trails",
  },
  {
    slug: "event-campaigns",
    name: "Event Campaigns",
    category: "Events",
    desc: "Event marketing, influencer campaigns and audience acquisition for 20+ live properties.",
    result: "20+ events marketed, multiple sold-out editions",
    image: workEvents,
    alt: "Crowd filming a DJ under stage light beams",
  },
];