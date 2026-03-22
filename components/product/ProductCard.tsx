import { useCart } from "@/context/CartContext";
import { useFavourite } from "@/context/FavouriteContext";
import { Heart } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function ProductCard({ item }: any) {
  const { favourites, toggleFavourite } = useFavourite();
  const { addToCart } = useCart();

  const isFav = favourites.includes(item._id);

  return (
    <View className="bg-white rounded-2xl p-3 shadow-sm w-[48%]">
      
      <Pressable
        onPress={() => toggleFavourite(item._id)}
        className="absolute right-3 top-3 z-10"
      >
        <Heart
          size={20}
          color={isFav ? "red" : "#555"}
          fill={isFav ? "red" : "none"}
        />
      </Pressable>

      <Image
        source={{ uri: item.image[0] }}
        className="w-full h-24"
        resizeMode="contain"
      />

      <Text className="mt-2 font-medium text-gray-800">
        {item.name}
      </Text>

      <View className="flex-row items-center mt-1">
        <Text className="line-through text-gray-400 mr-1">
          ₹{item.mrp}
        </Text>
        <Text className="text-green-700 font-semibold">
          ₹{item.price}
        </Text>
        <Text className="text-gray-500 ml-1">
          | {item.weight}
        </Text>
      </View>

      <Text className="text-green-600 text-xs mt-1">
        In stock
      </Text>

      <Pressable
        onPress={() => addToCart(item)}
        className="bg-green-700 mt-2 py-2 rounded-xl"
      >
        <Text className="text-white text-center font-medium">
          Add to Cart
        </Text>
      </Pressable>
    </View>
  );
}