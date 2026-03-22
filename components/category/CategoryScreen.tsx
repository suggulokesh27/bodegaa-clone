import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import TabHeader from "../comman/TabHeader";

export default function CategoryScreen({categories}: any) {
  return (
    <View className="flex-1 bg-gray-100">
      <TabHeader title="Main Categories" isSearch={true}/>

      {/* Main Categories */}
      <FlatList
        data={categories?.slice(0, 5)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="items-center mr-5">
            <Image
              source={{ uri: item.image }}
              className="w-16 h-16 rounded-full border-2 border-green-500"
            />
            <Text className="text-xs mt-2 text-center w-20">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Sub Categories Title */}
      <Text className="text-lg font-semibold px-4 mb-2">
        Sub Categories
      </Text>

      {/* Sub Categories Grid */}
      <FlatList
        data={categories?.slice(5)}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 items-center mb-6">
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-full"
            />
            <Text className="text-xs mt-2 text-center w-24">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}