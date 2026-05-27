import {
  Brain,
  BriefcaseBusiness,
  CalendarPlus,
  Dumbbell,
  GraduationCap,
  Library,
  MessageSquareText,
  MousePointerClick,
  NotebookTabs,
  PhoneCall,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ClusterId =
  | "try-it"
  | "demos"
  | "education"
  | "work"
  | "hobbies"
  | "ai";

export type PortfolioStatus =
  | "Live"
  | "In Progress"
  | "Demo"
  | "Concept"
  | "Placeholder";

export type PortfolioItem = {
  slug: string;
  title: string;
  cluster: ClusterId;
  status: PortfolioStatus;
  oneLiner: string;
  description: string;
  route: string;
  primaryAction?: string;
  icon: LucideIcon;
  links?: {
    label: string;
    href: string;
    type: "live" | "github" | "prompt" | "video" | "demo" | "linkedin";
  }[];
  demoBlocks?: {
    title: string;
    type: "video" | "gif" | "iframe" | "image" | "placeholder";
    src?: string;
    orientation?: "landscape" | "portrait";
    caption: string;
  }[];
  sections: {
    heading: string;
    body: string;
  }[];
};

export const clusters: {
  id: ClusterId;
  title: string;
  description: string;
  accent: string;
  position: string;
}[] = [
  {
    id: "try-it",
    title: "Try It",
    description: "Little utilities and beta products built because the friction was annoying enough.",
    accent: "green",
    position: "lg:col-start-1 lg:row-start-1",
  },
  {
    id: "demos",
    title: "Demos",
    description: "Clickable sketches for ideas that needed to be felt before they were explained.",
    accent: "blue",
    position: "lg:col-start-1 lg:row-start-2",
  },
  {
    id: "education",
    title: "Education",
    description: "Notre Dame, Stanford, Wharton, and the questions each chapter opened up.",
    accent: "gold",
    position: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "work",
    title: "Work",
    description: "Engineering, supportability, internal tools, and learning how systems behave.",
    accent: "green",
    position: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "hobbies",
    title: "Hobbies / Certifications",
    description: "The practical, physical, and slightly unexpected corners of the operating system.",
    accent: "purple",
    position: "lg:col-start-1 lg:row-start-3",
  },
  {
    id: "ai",
    title: "AI / Experiments",
    description: "Prompt trails, agent ideas, weird drafts, and experiments still finding their shape.",
    accent: "teal",
    position: "lg:col-start-3 lg:row-start-3",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "add-to-gcal",
    title: "AddToGCal",
    cluster: "try-it",
    status: "In Progress",
    oneLiner:
      "A natural-language calendar tool that turns quick text into a structured Google Calendar event.",
    description:
      "Adding calendar events manually takes too many tiny decisions. AddToGCal explores what it feels like to type what you mean and let AI fill in the calendar-ready details.",
    route: "/projects/add-to-gcal",
    primaryAction: "Try it",
    icon: CalendarPlus,
    links: [
      { label: "Visit AddToGCal.com", href: "https://addtogcal.com", type: "live" },
      { label: "GitHub placeholder", href: "#", type: "github" },
      { label: "Prompt placeholder", href: "#", type: "prompt" },
    ],
    demoBlocks: [
      {
        title: "AddToGCal demo video",
        type: "video",
        src: "https://www.youtube-nocookie.com/embed/BKfpBNRFBGs",
        caption:
          "A walkthrough of the natural-language calendar entry flow.",
      },
    ],
    sections: [
      {
        heading: "Why I built it",
        body: "I wanted calendar entry to feel lightweight instead of administrative. The first version is centered on the tiny moment where you know the plan, but do not want to click through every calendar field.",
      },
      {
        heading: "What it does",
        body: "It accepts natural language, extracts title, date, time, location, and category, then prepares a calendar-ready event. The future version would learn recurring preferences like usual tennis location or category colors.",
      },
      {
        heading: "What's next",
        body: "Add a limited public demo, keep Google API access private, and add an interest flow for people who want to test it.",
      },
    ],
  },
  {
    slug: "caseprepper",
    title: "CasePrepper.ai",
    cluster: "try-it",
    status: "In Progress",
    oneLiner:
      "An AI-powered case interview practice tool for low-pressure reps, feedback, and targeted improvement.",
    description:
      "CasePrepper helps people practice cases independently when finding a partner or scheduling synchronous prep is hard.",
    route: "/projects/caseprepper",
    primaryAction: "View sample",
    icon: MessageSquareText,
    links: [
      { label: "Live site placeholder", href: "#", type: "live" },
      { label: "GitHub placeholder", href: "#", type: "github" },
      { label: "Prompt placeholder", href: "#", type: "prompt" },
    ],
    demoBlocks: [
      {
        title: "Practice session preview",
        type: "placeholder",
        caption:
          "Future demo: a one-minute walkthrough of a sample case, feedback, and a mock progress dashboard.",
      },
    ],
    sections: [
      {
        heading: "Why I built it",
        body: "Consulting case prep rewards repetition, but repetition can be hard to coordinate. This prototype explores a lower-pressure way to practice and get structured feedback.",
      },
      {
        heading: "What it does",
        body: "Users step through sample cases, answer by text or voice, and get feedback on correctness, precision, clarity, and structure.",
      },
      {
        heading: "What's next",
        body: "Track weak areas like estimation, graph interpretation, and math, then recommend targeted drills over time.",
      },
    ],
  },
  {
    slug: "callyourbesties",
    title: "Call Your Besties",
    cluster: "try-it",
    status: "In Progress",
    oneLiner:
      "A friendship care tool for staying close to long-distance best friends with thoughtful reminders and lightweight check-ins.",
    description:
      "Call Your Besties helps make connection feel easier when distance, busy weeks, and half-finished text threads get in the way.",
    route: "/projects/callyourbesties",
    primaryAction: "Watch demo",
    icon: PhoneCall,
    links: [
      { label: "Visit CallYourBesties.com", href: "https://callyourbesties.com", type: "live" },
    ],
    demoBlocks: [
      {
        title: "CallYourBesties in action",
        type: "video",
        src: "https://www.youtube-nocookie.com/embed/nf-8EHs5Cpc",
        orientation: "portrait",
        caption:
          "A short preview of the friendship reminder and check-in experience.",
      },
    ],
    sections: [
      {
        heading: "Why I built it",
        body: "Long-distance friendships can be deeply important and surprisingly easy to neglect. This project explores gentle prompts that make care feel natural instead of another task.",
      },
      {
        heading: "What it does",
        body: "It centers lightweight reminders, thoughtful check-ins, and tiny nudges for staying close to the people who matter most.",
      },
      {
        heading: "What's next",
        body: "Keep shaping the reminder flow, refine the tone, and test what makes the product feel warm without becoming noisy.",
      },
    ],
  },
  {
    slug: "moves",
    title: "Moves",
    cluster: "try-it",
    status: "In Progress",
    oneLiner:
      "A social planning web app for turning casual ideas into real plans with friends.",
    description:
      "Moves is about lowering the friction of social planning and helping people coordinate around shared interest.",
    route: "/projects/moves",
    primaryAction: "View demo",
    icon: UsersRound,
    links: [
      { label: "Open interactive demo", href: "/moves-interactive", type: "demo" },
      { label: "Team links placeholder", href: "#", type: "linkedin" },
    ],
    demoBlocks: [
      {
        title: "Beta flow",
        type: "placeholder",
        caption:
          "Future demo: current product screenshots, demo link, and a compact team section.",
      },
    ],
    sections: [
      {
        heading: "Why we built it",
        body: "The team is exploring how to make casual planning feel less heavy, especially when people are interested but not ready to commit yet.",
      },
      {
        heading: "What it does",
        body: "Moves helps groups turn loose ideas into plans by collecting interest, surfacing momentum, and making it easier to coordinate next steps.",
      },
      {
        heading: "What's next",
        body: "Keep beta testing, learn from real planning behavior, and make the product clearer without making it feel like a pitch deck.",
      },
    ],
  },
  {
    slug: "float",
    title: "Float",
    cluster: "demos",
    status: "Concept",
    oneLiner:
      "A social planning concept for casually floating ideas and seeing who is interested before committing.",
    description:
      "Float explores the earlier, softer stage of making plans: the moment where you have an idea but do not yet know who else is in.",
    route: "/demos/float",
    primaryAction: "View concept",
    icon: Sparkles,
    links: [
      { label: "Onboarding demo placeholder", href: "#", type: "demo" },
      { label: "Usage demo placeholder", href: "#", type: "demo" },
      { label: "Prompt placeholder", href: "#", type: "prompt" },
    ],
    demoBlocks: [
      {
        title: "Onboarding + usage demos",
        type: "placeholder",
        caption:
          "Future embed: two HTML demos, one for entering the product and one for floating an idea.",
      },
    ],
    sections: [
      {
        heading: "Why I explored it",
        body: "Social planning can be awkward when an idea might fit multiple friend groups. Float asks what it would feel like to share a lightweight signal before a plan becomes real.",
      },
      {
        heading: "What it shows",
        body: "A user floats an idea to a broader circle, friends indicate interest, and mutual interest creates momentum toward making the plan happen.",
      },
      {
        heading: "What's next",
        body: "Keep it distinct from Moves while using it as a design exploration for early-stage social coordination.",
      },
    ],
  },
  {
    slug: "e2e",
    title: "E2E",
    cluster: "demos",
    status: "Concept",
    oneLiner:
      "A feedback ingestion engine that uses company context to turn raw feedback into prioritized product work.",
    description:
      "E2E is a design exploration around the missing context layer in AI workflows: roadmap, ownership, priorities, code, and team capacity.",
    route: "/demos/e2e",
    primaryAction: "View demo",
    icon: NotebookTabs,
    links: [
      { label: "HTML demo placeholder", href: "#", type: "demo" },
      { label: "Prompt placeholder", href: "#", type: "prompt" },
    ],
    demoBlocks: [
      {
        title: "Feedback to product work",
        type: "placeholder",
        caption:
          "Future embed: raw feedback becomes summary, priority, related roadmap item, owner, effort estimate, and suggested tasks.",
      },
    ],
    sections: [
      {
        heading: "Why I explored it",
        body: "The same feedback can mean totally different things depending on the company. This concept imagines an AI system with enough context to interpret feedback responsibly.",
      },
      {
        heading: "What it does conceptually",
        body: "It maps raw feedback to existing roadmap items, known bugs, new opportunities, feature specs, owners, effort estimates, and repeated patterns.",
      },
      {
        heading: "What's next",
        body: "Keep it clearly framed as a concept, inspired by product work and internal tooling rather than a production product.",
      },
    ],
  },
];

const placeholderSections = [
  {
    heading: "Current note",
    body: "This page is a placeholder for V1. It gives the site a complete map now and leaves room for real photos, reflections, links, and notes over time.",
  },
  {
    heading: "What belongs here",
    body: "A short personal reflection, a few specific details, and one or two visual artifacts will make this feel lived-in without turning it into a resume wall.",
  },
];

export const placeholderItems: PortfolioItem[] = [
  {
    slug: "notre-dame",
    title: "Notre Dame",
    cluster: "education",
    status: "Placeholder",
    oneLiner: "Room for academics, SASA, TA experience, community building, and photos.",
    description:
      "A future reflection on Notre Dame, community, teaching, and the experiences that shaped the next chapter.",
    route: "/education/notre-dame",
    icon: GraduationCap,
    sections: placeholderSections,
  },
  {
    slug: "stanford",
    title: "Stanford",
    cluster: "education",
    status: "Placeholder",
    oneLiner: "Program details, photos, and what the experience clarified.",
    description:
      "A future page for Stanford program details, what Megha learned, and how it connected to product and AI interests.",
    route: "/education/stanford",
    icon: GraduationCap,
    sections: placeholderSections,
  },
  {
    slug: "wharton",
    title: "Wharton",
    cluster: "education",
    status: "Placeholder",
    oneLiner: "Incoming MBA chapter: tech, AI, product, community, and wellness.",
    description:
      "A placeholder for the incoming Wharton MBA chapter and the questions Megha wants to explore there.",
    route: "/education/wharton",
    icon: GraduationCap,
    sections: placeholderSections,
  },
  {
    slug: "kindi",
    title: "KINDI Internship",
    cluster: "work",
    status: "Placeholder",
    oneLiner: "A short reflective page for role, year, work, and lessons learned.",
    description:
      "A future work note that stays concise and reflective, with one photo placeholder and a few specifics.",
    route: "/work/kindi",
    icon: BriefcaseBusiness,
    sections: placeholderSections,
  },
  {
    slug: "microsoft-internship",
    title: "Microsoft Internship",
    cluster: "work",
    status: "Placeholder",
    oneLiner: "Team, year, technologies, and what the internship taught me.",
    description:
      "A placeholder for the internship story, keeping details public-safe and focused on learning.",
    route: "/work/microsoft-internship",
    icon: BriefcaseBusiness,
    sections: placeholderSections,
  },
  {
    slug: "microsoft-postgrad",
    title: "Microsoft Postgrad",
    cluster: "work",
    status: "Placeholder",
    oneLiner: "Cloud supportability, telemetry, internal tools, and impact placeholders.",
    description:
      "A future page for postgrad engineering work, written at a safe level of detail.",
    route: "/work/microsoft-postgrad",
    icon: BriefcaseBusiness,
    sections: placeholderSections,
  },
  {
    slug: "tennis",
    title: "Tennis",
    cluster: "hobbies",
    status: "Placeholder",
    oneLiner: "Why tennis is fun, current goals, and a few photos.",
    description:
      "A lightweight personal page for tennis, practice goals, and the joy of getting better at something physical.",
    route: "/hobbies/tennis",
    icon: Trophy,
    sections: placeholderSections,
  },
  {
    slug: "lagree",
    title: "Lagree",
    cluster: "hobbies",
    status: "Placeholder",
    oneLiner: "Fitness, consistency, and why the format works.",
    description:
      "A future hobby note for fitness, routine, and the studio aesthetic.",
    route: "/hobbies/lagree",
    icon: Dumbbell,
    sections: placeholderSections,
  },
  {
    slug: "ai-certification",
    title: "AI Certification",
    cluster: "hobbies",
    status: "Placeholder",
    oneLiner: "Certification details, motivation, and what stuck.",
    description:
      "A placeholder for the certification name, why Megha pursued it, and what she learned.",
    route: "/hobbies/ai-certification",
    icon: Brain,
    sections: placeholderSections,
  },
  {
    slug: "notary-certification",
    title: "Notary Certification",
    cluster: "hobbies",
    status: "Placeholder",
    oneLiner: "A practical certification and a tiny curiosity artifact.",
    description:
      "A future page for notary status, motivation, and how it connects to practical curiosity.",
    route: "/hobbies/notary-certification",
    icon: MousePointerClick,
    sections: placeholderSections,
  },
  {
    slug: "ai-life-coach",
    title: "AI Life Coach",
    cluster: "ai",
    status: "Placeholder",
    oneLiner: "A future experiment around personalized reflection and decision support.",
    description:
      "A future AI experiment exploring how personalized context, reflection, and coaching can help people make better decisions and understand themselves more clearly.",
    route: "/ai/ai-life-coach",
    icon: Brain,
    sections: placeholderSections,
  },
  {
    slug: "moo",
    title: "Moo",
    cluster: "ai",
    status: "Concept",
    oneLiner: "A context-aware agent concept connected to the Moves ecosystem.",
    description:
      "Moo is a concept for a context-rich agent that understands the product, team, and user feedback around Moves.",
    route: "/ai/moo",
    icon: Sparkles,
    sections: placeholderSections,
  },
  {
    slug: "prompt-library",
    title: "Prompt Library",
    cluster: "ai",
    status: "In Progress",
    oneLiner: "Prompts as part of the creative artifact, shared alongside code.",
    description:
      "For many projects, the prompt trail matters as much as the final product. This page will collect the build prompts, remix notes, and next prompts to try.",
    route: "/prompts",
    icon: Library,
    sections: [
      {
        heading: "Why prompts belong here",
        body: "The goal is to show the creative process behind the product and make it easier for someone else to rebuild, remix, or improve the idea themselves.",
      },
      {
        heading: "What each prompt card will include",
        body: "Project name, prompt link, what the prompt helped build, and the next improvement prompt worth trying.",
      },
    ],
  },
];

export const allItems = [...portfolioItems, ...placeholderItems];

export function getItemBySlug(slug: string) {
  return allItems.find((item) => item.slug === slug);
}

export function getClusterItems(cluster: ClusterId) {
  return allItems.filter((item) => item.cluster === cluster);
}

export const promptCards = [
  {
    project: "AddToGCal",
    title: "Calendar parser prompt",
    note: "Turn a casual sentence into calendar-ready fields and category logic.",
  },
  {
    project: "Float",
    title: "Social concept prompt",
    note: "Explore onboarding, usage flow, and the feeling of floating an idea.",
  },
  {
    project: "E2E",
    title: "Context engine prompt",
    note: "Transform raw feedback into roadmap-aware product work.",
  },
];
