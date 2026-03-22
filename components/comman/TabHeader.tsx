import { useRouter } from "expo-router";
import { ArrowLeft, Search } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TabHeader = ({ title, isSearch = false }: any) => {
  const router = useRouter();
  return (
    <View className="bg-[#16a34a] px-4 py-3 rounded-b-2xl">
      <View className="flex-row items-center gap-3 mb-4">
        <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
          <ArrowLeft size={22} color="white" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-white">{title}</Text>
      </View>

      {/* Search */}
      {isSearch && (
        <View className="bg-white rounded-xl flex-row items-center px-3 py-2">
          <Search size={18} color="gray" />
          <TextInput
            placeholder="Search Sub Categories..."
            className="ml-2 flex-1 text-sm"
          />
        </View>
      )}
    </View>
  );
};

export default TabHeader;
