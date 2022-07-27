import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import { baseTheme } from "./assets/theme/theme"

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
        <Sidebar></Sidebar>
    </ThemeProvider>
  );
}

export default App;
