import { ThemeProvider } from "@mui/material";
import Header from "./components/layout/Header";
import Router from "./routes/router";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Router />
    </ThemeProvider>
  );
}

export default App;
