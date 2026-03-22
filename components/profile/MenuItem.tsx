import { Text, TouchableOpacity, View } from "react-native";

export default function MenuItem({
  icon,
  title,
  onPress,
  isDanger,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between py-4 border-b border-gray-200"
    >
      <View className="flex-row items-center gap-3">
        
        <View className="bg-green-100 p-2 rounded-full">
          {icon}
        </View>

        <Text
          className={`text-base ${
            isDanger ? "text-red-500" : "text-gray-700"
          }`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}