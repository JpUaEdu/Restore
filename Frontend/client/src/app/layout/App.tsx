import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
 const theme = createTheme({
  palette: {
    mode: paletteType,
    background: {
      default: paletteType === 'light' ? '#eaeaea' : '#121212',
    }
  }
 })
  function handleThemeChange(){
    setDarkMode(!darkMode); 
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> {/*to remove the padding*/}
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        {/*the list of the product won't be at the edge of the page some paddi g will be added*/}
      <Outlet/>{/*This is where the content of the currently active route (child route) will be displayed. For example, if the current route is /products, the list of products will be rendered here.*/}
      </Container>
    </ThemeProvider>
  );

}
export default App;
