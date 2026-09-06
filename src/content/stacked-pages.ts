import {
  AboutContent,
  CommunitiesContent,
  ContactContent,
  LifeFarmsContent,
  LifeHouseContent,
  LifePodContent,
  NewsContent,
  PartnershipsContent,
  ResearchContent,
  TechnologyContent,
  VisionContent,
} from "@/components/pages/page-content";

export const stackedHomePages = [
  { id: "vision", Content: VisionContent },
  { id: "lifepod", Content: LifePodContent },
  { id: "lifehouse", Content: LifeHouseContent },
  { id: "lifefarms", Content: LifeFarmsContent },
  { id: "technology", Content: TechnologyContent },
  { id: "communities", Content: CommunitiesContent },
  { id: "partnerships", Content: PartnershipsContent },
  { id: "research", Content: ResearchContent },
  { id: "about", Content: AboutContent },
  { id: "news", Content: NewsContent },
  { id: "contact", Content: ContactContent },
] as const;
