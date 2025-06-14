import { AuthProvider } from "./global-state/context/AuthContext/AuthContext";
import { DrawerProvider } from "./global-state/context/DrawerContext/DrawerContext";
import { ThemeProvider } from "./global-state/context/ThemeContext/ThemeContext";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DrawerProvider>
          <Allroutes />
        </DrawerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
