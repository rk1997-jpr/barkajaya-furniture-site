export function GET() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
       <defs>
         <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" style="stop-color:#faf5f0;stop-opacity:1" />
           <stop offset="100%" style="stop-color:#1e1e1e;stop-opacity:1" />
         </linearGradient>
       </defs>
       <rect width="1200" height="630" fill="url(#grad)" />
       <text x="600" y="100" font-family="Inter, sans-serif" font-size="96" fill="#ffffff" text-anchor="middle" dy="0.3em">
         Barkajaya Indonesia
       </text>
       <text x="600" y="200" font-family="Inter, sans-serif" font-size="48" fill="#c47f60" text-anchor="middle" dy="0.3em">
         Premium Furniture Manufacturing
       </text>
       <text x="600" y="500" font-family="Inter, sans-serif" font-size="32" fill="#6b6b6b" text-anchor="middle" dy="0.3em">
         Crafted in Jepara, Indonesia
       </text>
     </svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    },
  );
}