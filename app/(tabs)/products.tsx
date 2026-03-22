import ProductsScreen from "@/components/product/ProductsScreen";
import { getBestSellersService } from "@/services";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function ProductsTab() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await getBestSellersService();

      if (!res.success) {
        setError("Failed to load products");
        return;
      }
      setProducts(res?.data?.products || []);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#16a34a" />
        <Text className="mt-2 text-gray-500">Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-red-500 font-semibold">{error}</Text>
        <Text className="text-green-600 mt-2" onPress={fetchProducts}>
          Retry
        </Text>
      </View>
    );
  }

  if (!products.length) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-500">No products found</Text>
      </View>
    );
  }

  return (
   <ProductsScreen products={products} />
  );
}