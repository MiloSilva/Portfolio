import { createContext } from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: string,
  setTheme: (theme: Theme) => void
}>({
  theme: 'dark',
  setTheme: (theme: Theme) => {}
});
