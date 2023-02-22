export const content = [
  "./app/routes/**/*.{js,ts,jsx,tsx}",
  "./app/components/**/*.{js,ts,jsx,tsx}",
  "./app/kommons/**/*.{js,ts,jsx,tsx}",
  "./app/layouts/**/*.{js,ts,jsx,tsx}",
  "./app/root.{js,ts,jsx,tsx}",
];
export const theme = {
  fontFamily: {
    title: "Lora",
    body: "Inter",
  },
  extend: {
    animation: {
      text: "text 5s ease infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
    colors: {
      "main-bg": "#121212",
      "dark-bg": "#171717",
    },
  },
};
export const plugins = [];
