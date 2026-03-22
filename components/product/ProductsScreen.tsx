import { FlatList, View } from "react-native";
import TabHeader from "../comman/TabHeader";
import ProductCard from "./ProductCard";

const ProductsScreen = ({ products }: any) => {
  return (
    <View className="flex-1 bg-gray-100">
      <TabHeader title="Products" isSearch={false} />
      <FlatList
        data={products}
        keyExtractor={(item: any) => item._id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 12, paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
};

export default ProductsScreen;
