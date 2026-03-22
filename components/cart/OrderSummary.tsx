import { useCart } from "@/context/CartContext";
import { Text, View } from "react-native";

export default function OrderSummary() {
  const { cart, totals } = useCart();

  return (
    <View className="bg-gray-100 p-4 rounded-2xl mt-4">
      <Text className="text-green-700 font-bold text-lg mb-3">
        Order Summary
      </Text>

      <View className="flex-row justify-between mb-2">
        <Text>Total ({cart.length} items)</Text>
        <Text>₹{totals.total.toFixed(2)}</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text>Handling Fee</Text>
        <Text>₹{totals.handling.toFixed(2)}</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text>GST</Text>
        <Text>₹{totals.gst.toFixed(2)}</Text>
      </View>

      <View className="flex-row justify-between mt-3">
        <Text className="font-bold text-lg">Grand Total</Text>
        <Text className="font-bold text-lg">
          ₹{totals.grandTotal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}