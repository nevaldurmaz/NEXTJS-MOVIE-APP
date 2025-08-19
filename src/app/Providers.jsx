"use client";

import { ThemeProvider } from "next-theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enabledSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
