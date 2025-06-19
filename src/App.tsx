import { AuthProvider } from "./global-state/context/AuthContext/AuthContext";
import { CartProvider } from "./global-state/context/CartContext/CartContext";
import { DrawerProvider } from "./global-state/context/DrawerContext/DrawerContext";
import { ThemeProvider } from "./global-state/context/ThemeContext/ThemeContext";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <DrawerProvider>
            <Allroutes />
          </DrawerProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
