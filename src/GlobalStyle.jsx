import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        width: 1280px;
        margin: 10px auto;
        background-color: skyblue;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`

export default GlobalStyle;