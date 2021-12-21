import { ThemeProvider } from "@mui/material";
import Header from "./components/layout/Header";
import Router from "./routes/router";
import { theme } from "./styles/theme";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./services/config";

initializeApp(firebaseConfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Router />
    </ThemeProvider>
  );
}

export default App;
