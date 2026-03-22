import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { FavouriteProvider } from "@/context/FavouriteContext";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavouriteProvider>
        <CartProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#16a34a" />
            <Slot />
          </SafeAreaView>
        </CartProvider>
      </FavouriteProvider>
    </AuthProvider>
  );
}
