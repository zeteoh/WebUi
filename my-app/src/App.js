import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import { baseTheme } from "./assets/theme/theme"
import MyCalendar from "./components/Calendar";

function App() {
  return (
    <div>
      <ThemeProvider theme={baseTheme}>
          <Sidebar></Sidebar>
      </ThemeProvider>
      <div class="float-container">

        <div class="float-child">
        </div>
        
        <div class="float-child">
          <MyCalendar className="calendarClass"></MyCalendar>
        </div>
          
      </div>
    </div>
    
  );
}

export default App;
