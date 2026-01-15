export type Region = {
  slug: string
  name: string
  title: string
  description: string
  h1: string
  intro: string
  areas: string[]
}

export const regions: Region[] = [
  {
    slug: "contra-costa-county",
    name: "Contra Costa County",
    title: "Online Therapy in Contra Costa County | CoreMind Therapy",
    description:
      "Online therapy for young adults in Contra Costa County. Support for anxiety, stress, and life transitions with a licensed California therapist.",
    h1: "Online Therapy in Contra Costa County",
    intro:
      "CoreMind Therapy provides secure telehealth therapy for young adults across Contra Costa County. We support anxiety, burnout, relationships, and major life transitions.",
    areas: ["Walnut Creek", "Concord", "San Ramon", "Danville", "Richmond"],
  },
  {
    slug: "los-angeles-county",
    name: "Los Angeles County",
    title: "Online Therapy in Los Angeles County | CoreMind Therapy",
    description:
      "Online therapy for young adults across Los Angeles County. Help for anxiety, stress, and confidence in work and relationships.",
    h1: "Online Therapy in Los Angeles County",
    intro:
      "We offer online therapy for young adults across Los Angeles County with flexible scheduling and practical, evidence-based support.",
    areas: [
      "Los Angeles",
      "Santa Monica",
      "Pasadena",
      "Long Beach",
      "Glendale",
    ],
  },
  {
    slug: "san-diego-county",
    name: "San Diego County",
    title: "Online Therapy in San Diego County | CoreMind Therapy",
    description:
      "Online therapy for young adults across San Diego County. Support for anxiety, stress, and life transitions through telehealth.",
    h1: "Online Therapy in San Diego County",
    intro:
      "CoreMind Therapy serves young adults across San Diego County through telehealth, focused on stress, anxiety, and navigating major life changes.",
    areas: ["San Diego", "La Jolla", "Chula Vista", "Encinitas", "Carlsbad"],
  },
  {
    slug: "orange-county",
    name: "Orange County",
    title: "Online Therapy in Orange County | CoreMind Therapy",
    description:
      "Online therapy for young adults in Orange County. Anxiety support, confidence building, and relationship guidance via telehealth.",
    h1: "Online Therapy in Orange County",
    intro:
      "We provide online therapy for young adults across Orange County, focused on practical tools for anxiety, self-esteem, and relationships.",
    areas: ["Irvine", "Anaheim", "Santa Ana", "Costa Mesa", "Huntington Beach"],
  },
  {
    slug: "bay-area",
    name: "Bay Area",
    title: "Online Therapy in the Bay Area | CoreMind Therapy",
    description:
      "Online therapy for young adults across the Bay Area. Support for anxiety, burnout, and life transitions with a licensed California therapist.",
    h1: "Online Therapy in the Bay Area",
    intro:
      "CoreMind Therapy supports young adults across the Bay Area via telehealth, especially around stress, burnout, and career and relationship transitions.",
    areas: ["San Francisco", "Oakland", "San Jose", "Berkeley", "Walnut Creek"],
  },
  {
    slug: "sacramento-metro",
    name: "Sacramento Metro",
    title: "Online Therapy in Sacramento | CoreMind Therapy",
    description:
      "Online therapy for young adults in the Sacramento region. Help for anxiety, stress, and major life transitions through telehealth.",
    h1: "Online Therapy in Sacramento",
    intro:
      "We provide online therapy to young adults across the Sacramento region, with support for anxiety, stress, and navigating life and work changes.",
    areas: ["Sacramento", "Elk Grove", "Roseville", "Folsom", "Davis"],
  },
  {
    slug: "inland-empire",
    name: "Inland Empire",
    title: "Online Therapy in the Inland Empire | CoreMind Therapy",
    description:
      "Online therapy for young adults across the Inland Empire. Evidence-based support for anxiety, stress, and life transitions.",
    h1: "Online Therapy in the Inland Empire",
    intro:
      "CoreMind Therapy supports young adults across the Inland Empire through telehealth, focused on anxiety, stress, and building healthier routines and relationships.",
    areas: [
      "Riverside",
      "San Bernardino",
      "Ontario",
      "Rancho Cucamonga",
      "Moreno Valley",
    ],
  },
]
