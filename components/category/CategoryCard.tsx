import { Image, Pressable, Text, View } from "react-native";

export default function CategoryCard({ item }: any) {
  return (
    <View className="bg-white rounded-2xl p-3 mr-3 w-44 h-52 shadow-sm justify-between">
      
      <Text className="font-semibold text-left">
        {item.name}
      </Text>

      <View className="flex-1 justify-center items-center">
        <Image
          source={{ uri: item.image }}
          className="w-full h-20"
          resizeMode="cover"
        />
      </View>

      <Pressable className="bg-green-700 py-2 rounded-lg">
        <Text className="text-white text-center text-sm">
          Shop Now →
        </Text>
      </Pressable>

    </View>
  );
}