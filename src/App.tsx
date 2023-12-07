import { Router } from "./Router";
import { CoffeeOrderContextProvider } from "./contexts/CoffeeOrderContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/theme";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeOrderContextProvider>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </CoffeeOrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
