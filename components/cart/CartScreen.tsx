import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { ChevronRight } from "lucide-react-native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import TabHeader from "../comman/TabHeader";

export default function CartScreen({cart}: any) {

  return (
    <View className="flex-1 bg-gray-100">
      <TabHeader title="Cart"/>

      <TouchableOpacity className="border border-green-600 rounded-xl p-4 flex-row justify-between items-center mt-4">
        <Text className="text-green-600 font-semibold">Add Address</Text>
        <ChevronRight color="green" />
      </TouchableOpacity>

      <Text className="text-gray-400 mt-2">No addresses available.</Text>

      {cart.length === 0 ? (
        <Text className="text-center mt-10 text-gray-400">
          Your cart is empty
        </Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => item._id?.toString() || index.toString()}
            renderItem={({ item }) => <CartItem item={item} />}
            className="mt-4"
          />

          <Text className="text-green-700 text-center my-3">
            A delivery fee applies for orders below ₹500.
          </Text>

          <OrderSummary />

          <TouchableOpacity className="bg-green-700 py-4 rounded-xl mt-5">
            <Text className="text-center text-white font-semibold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}