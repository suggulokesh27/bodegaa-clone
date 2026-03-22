import CategoryScreen from "@/components/category/CategoryScreen";
import { getCategoryService } from "@/services";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function CategoryTab() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await getCategoryService();

      if (!res.success) {
        setError("Failed to load categories");
        return;
      }

      setCategories(res?.data?.categories || []);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#22c55e" />
        <Text className="mt-2 text-gray-500">Loading categories...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-red-500 text-base font-semibold mb-2">
          {error}
        </Text>
        <Text
          className="text-green-600 mt-2"
          onPress={fetchCategories}
        >
          Retry
        </Text>
      </View>
    );
  }

  if (!categories.length) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">No categories found</Text>
      </View>
    );
  }

  return <CategoryScreen categories={categories} />;
}