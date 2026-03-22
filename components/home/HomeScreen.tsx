import CategoryCard from "@/components/category/CategoryCard";
import Banner from "@/components/home/Banner";
import ProductCard from "@/components/product/ProductCard";
import { Bell, Search } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";

interface HomeScreenProps {
  bestSellers: any;
  categories: any;
  user: any;
}

export default function HomeScreen({
  bestSellers,
  categories,
  user,
}: HomeScreenProps) {
  return (
    <FlatList
      data={bestSellers?.products}
      numColumns={2}
      keyExtractor={(item) => item._id.toString()}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={{ paddingBottom: 20 }}
      
      ListHeaderComponent={
        <>
          <View className="bg-green-600 px-4 py-4 flex-row justify-between items-center">
            <View>
              <Text className="text-white font-bold text-lg">
                Hi, User
              </Text>
              <Text className="text-white text-sm">
                {user?.mobile_number}
              </Text>
            </View>

            <View className="flex-row gap-3">
              <Search color="#fff" />
              <Bell color="#fff" />
            </View>
          </View>

          <View className="p-4">
            <Banner />
          </View>

          <FlatList
            horizontal
            data={categories?.categories}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => <CategoryCard item={item} />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />

          <Text className="px-4 my-4 font-bold text-lg">
            Products for you
          </Text>
        </>
      }

      renderItem={({ item }) => <ProductCard item={item} />}

      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
}