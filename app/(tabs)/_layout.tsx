import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Redirect, Tabs } from "expo-router";
import { Grid2x2, Home, ShoppingCart, Store, User } from "lucide-react-native";
import { Text, View } from "react-native";

function CartIconWithBadge({ color, size, count }: any) {
  return (
    <View style={{ width: size, height: size }}>
      <ShoppingCart color={color} size={size} />

      {count > 0 && (
        <View
          style={{
            position: "absolute",
            top: -4,
            right: -6,
            backgroundColor: "red",
            borderRadius: 10,
            minWidth: 16,
            height: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>
            {count}
          </Text>
        </View>
      )}
    </View>
  );
}
export default function TabsLayout() {
  const { user } = useAuth();
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  if (!user) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#15803d",
        tabBarStyle: {
          overflow: "visible", // ✅ important
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ color, size }) => (
            <Grid2x2 color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <CartIconWithBadge color={color} size={size} count={cartCount} />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ color, size }) => <Store color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
