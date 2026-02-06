export const ROOT_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

export const farcasterConfig = {
  accountAssociation: {
    // Este objeto se completará después de firmar el manifest en:
    // https://farcaster.xyz/~/developers/mini-apps/manifest
    "header": "eyJmaWQiOjU3NjA2MiwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDRiZEUyNjkxYTRhOTg3OWQ3NjUxMjQwN0FjNmFlOThFZDU5ZTdkQzMifQ",
    "payload": "eyJkb21haW4iOiJiYXNlY3VsdG1pbnQudmVyY2VsLmFwcCJ9",
    "signature": "bG3ObjCp76fcDk3Y9xd1G4AIViPyRycAWQU8kV0BxClX56RHgVjO9GnQNJ0M4eWyjNRM/0u2x9rxiQvQANoeCxw="
  },
  frame: {
    version: "1",
    name: "basecult",
    iconUrl: `${ROOT_URL}/cult.png`,
    splashImageUrl: `${ROOT_URL}/cult.png`,
    splashBackgroundColor: "#0052FF",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
  },
} as const;
