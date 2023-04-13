import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--sanblas": "#99d98c",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    // Base Colors 
    "--black": props["--my-black"],
    "--white": props["--my-white"],
    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],
    "--gray": '#666',
    "--gray-base": "#666",

    // Brand 
    "--brand-primary": props["--sanblas"],

    // Default button 
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--sanblas"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],

    // State colors 
    "--state-danger-color": props["--my-red"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],

    // Nav colors 
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    // Focus 
    "--focus-color": props["--sanblas"],
})