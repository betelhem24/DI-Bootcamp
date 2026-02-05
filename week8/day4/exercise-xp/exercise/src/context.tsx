/**
 * Theme Context and Provider implementation.
 * Provides theme state ('light' | 'dark') and a toggle function using React Context API.
 */
import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

/**
 * Defines the shape of the Theme Context value.
 * @property {'light' | 'dark'} theme - The current theme state.
 * @property {() => void} toggleTheme - A function to switch between 'light' and 'dark' themes.
 */
export type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

/**
 * Props for the ThemeProvider component.
 * @property {ReactNode} children - The child components that will consume the theme context.
 */
export type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within ThemeContext");
    }
    return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () =>
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    const value = useMemo(
        () => ({ theme, toggleTheme }),
        [theme]);
    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
}