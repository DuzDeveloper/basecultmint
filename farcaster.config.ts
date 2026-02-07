export const ROOT_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const farcasterConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjU3NjA2MiwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDRiZEUyNjkxYTRhOTg3OWQ3NjUxMjQwN0FjNmFlOThFZDU5ZTdkQzMifQ",
    "payload": "eyJkb21haW4iOiJiYXNlY3VsdG1pbnQudmVyY2VsLmFwcCJ9",
    "signature": "bG3ObjCp76fcDk3Y9xd1G4AIViPyRycAWQU8kV0BxClX56RHgVjO9GnQNJ0M4eWyjNRM/0u2x9rxiQvQANoeCxw=",
},
  frame: {
    version: "1",
    subtitle: "Be part of Cult",
    description: "The best Cult of Base",
    screenshotUrls: [],
    name: "Base Cult Mint",
    iconUrl: `https://basecultmint.vercel.app/cult.png`,
    splashImageUrl: `https://basecultmint.vercel.app/cult.png`,
    splashBackgroundColor: "#000000",
    homeUrl: "https://basecultmint.vercel.app",
    webhookUrl: "https://basecultmint.vercel.app/api/webhook",
    primaryCategory: "art-creativity",
    tags: ["Art"],
    heroImageUrl: "https://basecultmint.vercel.app/cult.png",
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: "https://basecultmint.vercel.app/cult.png",
  },
} as const;