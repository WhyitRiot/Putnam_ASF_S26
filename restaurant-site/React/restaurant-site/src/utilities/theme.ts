import {createTheme} from '@mui/material/styles';
export const muiTheme = createTheme({
    palette: {
        // Map MUI palette keys to your daisyUI CSS variables
        primary: {
            // Manual HEX equivalent for oklch(58% 0.233 277.117)
            main: '#7b8ff7',
        },
        secondary: {
            main: '#f77ba1',
        },
        background: {
            default: '#1a1c23', // Match base-100
            paper: '#1e2029',   // Match base-200
        },
        text: {
            primary: '#f9fafb',
        },
    },
    shape: {
        // Map your custom radius variables
        borderRadius: 8, // You can use var(--radius-selector) if it's a pixel/rem value
    },
})