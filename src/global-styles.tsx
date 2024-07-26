import { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${font});
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

    
    * {
        font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: .25s ease-in-out;
        -webkit-text-size-adjust: none;
    }

    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img,
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
        border: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        caret-color: transparent;
        height: 100%;
    }

    body {
        font-size: 1rem;
        height: 100%;
        background-color: ${props => props.theme.bodyBgColor};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    ol {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }

    p {
        margin-bottom: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
