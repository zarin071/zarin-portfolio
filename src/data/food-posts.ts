export interface FoodPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export const foodPosts: FoodPost[] = [
  {
    slug: "why-wasabi-with-sushi",
    title: "Why Do We Eat Wasabi with Sushi?",
    excerpt:
      "It's not just about heat. The tradition of pairing wasabi with sushi dates back centuries and has roots in food safety, flavour chemistry, and Japanese culinary philosophy.",
    category: "History",
    date: "2025",
    readTime: "5 min",
  },
  {
    slug: "history-of-dal-chawal",
    title: "The Humble Comfort of Dal Chawal — A History",
    excerpt:
      "India's most iconic comfort food has a story that spans thousands of years, from ancient Ayurvedic texts to modern-day home kitchens across the subcontinent.",
    category: "History",
    date: "2025",
    readTime: "4 min",
  },
  {
    slug: "biryani-travels",
    title: "Tracking Biryani Through the Mughal Empire",
    excerpt:
      "How a Persian rice dish travelled through Mughal kitchens, regional adaptations, and became India's most celebrated one-pot meal.",
    category: "Travel",
    date: "2024",
    readTime: "6 min",
  },
]
