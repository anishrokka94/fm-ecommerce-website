import { AuthProvider } from "./global-state/context/AuthContext/AuthContext";
import { ThemeProvider } from "./global-state/context/ThemeContext/ThemeContext";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Allroutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
