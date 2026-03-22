// ============================================================
// MANEMESSAGE SITE CONTENT
// ============================================================
// Jen — this is your content file! Edit text here to update
// your website. You don't need to touch any other files.
//
// RULES:
// - Keep text inside the quote marks (" " or ` `)
// - Backtick quotes (` `) allow multiple lines
// - Don't delete the commas at the end of lines
// - Save the file, commit to GitHub, and Vercel auto-deploys
// ============================================================

export const siteConfig = {
  name: "ManeMessage Marketing",
  tagline: "Your NO-BS Digital Marketing Maven Turned Equine / Pet-Loving Wordsmith",
  email: "manemessagemarketing@gmail.com",
  calendlyUrl: "https://calendly.com/jmitch0762/30min",
  mediumUrl: "https://medium.com/@jenmitch_762",
  linkedinUrl: "https://www.linkedin.com/in/jmitchelldoe/", // Add your LinkedIn URL here
};

// ============================================================
// HOMEPAGE HERO
// ============================================================
export const hero = {
  badge: "Equine & Pet Industry Specialist",
  headline: "Digital Marketing & Copywriting",
  headlineAccent: "Connect. Convert. Grow.",
  subtext: `Combining hands-on industry knowledge with digital marketing strategy to create website content that speaks your clients’ language, builds trust, and drives results.`,
  ctaPrimary: "Free Discovery Call",
  ctaSecondary: "View Services",
};

// ============================================================
// VALUE PROPOSITIONS (Homepage)
// ============================================================
export const values = [
  {
    icon: "✦",
    title: "Industry-Fluent Copy",
    text: `I'm not googling what a pre-purchase vet exam is. I understand 
your clients because I am your client. Every piece I write speaks the language 
your audience already thinks in.`,
  },
  {
    icon: "◷",
    title: "Time Back in Your Day",
    text: `Running an equine business is labor-intensive. You shouldn't also be 
sweating over blog posts at midnight. I handle the marketing so you can handle the horses.`,
  },
  {
    icon: "▲",
    title: "SEO That Gets You Found",
    text: `Beautiful copy that nobody sees is just a diary entry. I write content 
that's optimized for search engines and crafted to convert browsers into buyers.`,
  },
];

// ============================================================
// CREDENTIALS BAR (Homepage)
// ============================================================
export const credentials = [
  { number: "10+", label: "Years in Digital\nMarketing" },
  { number: "4", label: "Industry Verticals\n(High-Tech to Healthcare)" },
  { number: "∞", label: "Lifelong Equestrian" },
];

// ============================================================
// SERVICES
// ============================================================
export const services = [
  {
    title: "Website Copy & Landing Pages",
    description: `Your website is your digital barn door — it should be inviting, 
on-brand, and speak directly to your ideal client. I'll write SEO-optimized copy 
that tells your story and inspires visitors to take the next step.`,
    price: "Starting at $500",
  },
  {
    title: "SEO Optimized Blog Content",
    description: `Keyword-rich blog posts that position you as the authority, drive 
organic traffic, and give your audience real value. Businesses with active blogs 
generate 67% more leads than those without.`,
    price: "Starting at $250",
  },
  {
    title: "Product & Sales Pages",
    description: `Whether you're listing sales horses or tack inventory, compelling 
product pages clearly inform and persuade. Well-crafted descriptions directly impact 
sales and boost your visibility in search.`,
    price: "Starting at $150–$200",
  },
  {
    title: "Articles & Case Studies",
    description: `Long-form content that informs your audience and performs well with 
search engines. Articles and case studies can be repurposed across social media, 
advertising, and email — maximum mileage from every piece.`,
    price: "Starting at $250",
  },
  {
    title: "Email Marketing & Newsletters",
    description: `They gave you their email — now keep them engaged. I'll develop 
an email strategy with compelling subject lines and content that keeps your business 
top of mind when the timing is right.`,
    price: "Starting at $150",
  },
];

// ============================================================
// PROCESS STEPS
// ============================================================
export const processSteps = [
  {
    title: "Discovery Call",
    text: "15–30 minutes to discuss your goals. If we're a good fit, I'll send a follow-up proposal.",
  },
  {
    title: "Agreement & Kickoff",
    text: "We start with a smaller test project. Contract signed, 50% deposit — horses to the starting gate.",
  },
  {
    title: "Research & Writing",
    text: "I dig into your business, research your market, and write. All research and drafting is done by me — no AI filler.",
  },
  {
    title: "Review & Revisions",
    text: "First draft delivered via Google Doc. One round of edits included. Final 50% due at delivery.",
  },
  {
    title: "Results & Optimization",
    text: "We measure performance and adjust. Testing is crucial — let's make sure the copy works as hard as you do.",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = [
  {
    quote: "I had the pleasure of meeting Jen through a mutual connection, and I'm so glad I did. Jen is an absolute wordsmith; her writing is thoughtful, flows beautifully, and truly brings heart into every message. She has a special talent for helping small business owners find the right words to connect with their audience, especially in the equine and pet industries, but her expertise easily applies far beyond that. On top of her skill, she is warm, personable, and so fun to talk to. Every conversation leaves me inspired. Highly recommend connecting with her!",
    author: "Kelly Goulet",
    role: "Night Owl Notions",
    isPlaceholder: false,
  },
  {
    quote: "Jen is an incredible, professional copywriter! After struggling to write my own effective web copy, I reached out to Jen for her expert help. She took the time to understand my business, my goals and even my personality to craft the perfect copy and message! Stop struggling on your own and reach out to Jen for her expertise! Only wish I had done it sooner!",
    author: "Bobbie Abdallah",
    role: "Cold Noses News: Content & Marketing Simplified for Busy Dog Pros",
    isPlaceholder: false,
   }
];
// ============================================================
// PORTFOLIO ITEMS
// ============================================================
export const portfolio = [
  {
    type: "Note",
    title: "Writing Samples",
    description: "Visit the blog for recent writing samples covering digital marketing, SEO, content strategy, and equestrian topics.",
    url: "/blog",
    linkText: "View Blog Posts",
  },
];
// ============================================================
// BLOG POSTS
// To add a new blog post: copy one of the objects below,
// change the fields, and save. That's it!
// ============================================================
export const blogPosts = [
  {
    slug: "practical-guide-digital-marketing-2025",
    tag: "Digital Marketing",
    title: "A Practical Guide to Digital Marketing in 2025 for Small Businesses",
    excerpt: "Straightforward strategies that work for equine businesses without a massive marketing budget.",
    date: "2025-01-15",
    externalUrl: "https://medium.com/@jenmitch_762/a-practical-guide-to-digital-marketing-in-2025-for-small-businesses-464a412cea03",
  },
  {
    slug: "seo-best-practices-equine",
    tag: "SEO",
    title: "DIY SEO Best Practices for the Equine Professional",
    excerpt: "Stand out in a crowded online marketplace with foundational search optimization.",
    date: "2024-11-20",
    externalUrl: "https://medium.com/@jenmitch_762/do-it-yourself-seo-best-practices-for-the-equine-professional-d439b7783049",
  },
  {
    slug: "no-tricks-just-trust-blogging",
    tag: "Content Strategy",
    title: "No Tricks, Just Trust: Could Blogging Be Your Secret Weapon?",
    excerpt: "Why consistent blog content builds the kind of trust that turns readers into clients.",
    date: "2024-10-05",
    externalUrl: "https://medium.com/@jenmitch_762/no-tricks-just-trust-f9bbb2c4ef7b",
  },
  {
    slug: "hunter-pace-trail-ride",
    tag: "Equestrian Life",
    title: "A Trail Ride with a Mission: The Hunter Pace",
    excerpt: "An introduction to the wonderful sport of the Hunter Pace and why it deserves more attention.",
    date: "2024-09-12",
    externalUrl: "https://medium.com/@jenmitch_762/a-trail-ride-with-a-mission-announcing-the-hunter-pace-c300c61dac88",
  },
  {
    slug: "art-of-dressage",
    tag: "Equestrian Life",
    title: "Dancing Horses: Exploring the Art of Dressage",
    excerpt: "The origins, benefits, and beauty of dressage — and why it captivates riders worldwide.",
    date: "2024-08-01",
    externalUrl: "https://medium.com/@jenmitch_762/dancing-horses-lets-explore-the-art-of-dressage-c569c5271704",
  },
];

// ============================================================
// ABOUT PAGE
// ============================================================
export const about = {
  headline: "Marketing Maven.\nEquestrian.\nYour Ideal Customer.",
  intro: `I'm Jen Mitchell — a seasoned marketing professional with over a decade 
of experience leading digital programs across high-tech, insurance, healthcare, 
and retail. Now I focus that expertise exclusively on the world I love most: 
the equine and pet industry.`,
  story: `I started riding at seven. Got my first horse — a young Thoroughbred 
ex-racehorse — by nine. Horses taught me work ethic, empathy, patience, and the 
kind of grit that translates directly into how I approach business.`,
  whyMe: `Here's why that matters for you: I am your ideal customer. I understand 
what potential clients seek — whether it's a pre-purchase vet exam, the perfect 
boarding farm, or the right supplement. When I write for your business, I'm not 
faking it. I'm translating expertise I already live.`,
  quote: "Throw your heart over, and the horse will follow. This applies to most hurdles in life.",
  industries: [
    "Boarding & Training",
    "Breeding",
    "Vets",
    "Rescues",
    "Pet Services",
    "Feed & Tack",
    "Equine Therapy",
    "Dog Training",
  ],
  experience: [
    { sector: "High-Tech", detail: "Digital marketing programs at scale" },
    { sector: "Insurance", detail: "Regulated industry content strategy" },
    { sector: "Healthcare", detail: "Patient-facing and B2B marketing" },
    { sector: "Retail", detail: "Product marketing and conversion" },
  ],
};
