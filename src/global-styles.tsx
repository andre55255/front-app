import { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${font});
    }

    * {
        font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: .25s ease-in-out;

        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style-type: none;
        list-style: none;
        text-decoration: none;

        scroll-behavior: smooth;
        caret-color: transparent;
        
        font-size: 1rem;

        background-color: ${(props) => props.theme.bodyBgColor};
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.scrollColor};
        border-radius: .2rem;
    }

    ::-webkit-scrollbar-track {
        background-color: #F9F9F9;
    }
`;
