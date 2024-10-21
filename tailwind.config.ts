  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      fontFamily: {
        'sans': "var(--font-sans)",
        'serif': "var(--font-serif)",
        'mono': "var(--font-mono)",
      },
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        backgroundImage: {
          'paper-neutral': "url('/patterns/paper-neutral.png')",
        },
        aspectRatio: {
          'portrait': '4 / 5',
        },
        fontSize: {
          '2xs': '.6rem',
        },
      },
    },
    plugins: [],
  };
  export default config;
