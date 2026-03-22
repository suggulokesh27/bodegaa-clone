import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CartItem({ item }: any) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <View className="flex-row items-center justify-between border border-green-500 rounded-2xl p-3 mb-4">
      
      <View className="flex-row items-center gap-3">
        <Image
          source={{ uri: item.image[0] }}
          className="w-14 h-14 rounded-lg"
        />

        <View>
          <Text className="font-semibold">{item.name}</Text>

          <View className="flex-row gap-2">
            <Text className="line-through text-gray-400">
              ₹{item.mrp}
            </Text>
            <Text className="text-green-600 font-bold">
              ₹{item.price}
            </Text>
          </View>

          <Text className="text-green-600 text-sm">In stock</Text>
        </View>
      </View>

      <View className="flex-row items-center bg-green-200 rounded-xl px-3 py-2 gap-3">
        
        <TouchableOpacity onPress={() => removeItem(item._id)}>
          <Trash2 size={18} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => decreaseQty(item._id)}>
          <Minus size={18} />
        </TouchableOpacity>

        <Text>{item.quantity}</Text>

        <TouchableOpacity onPress={() => increaseQty(item._id)}>
          <Plus size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}