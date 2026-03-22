import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  FileText,
  Heart,
  Info,
  LogOut,
  MapPin,
  Pencil,
  Phone,
  Shield,
  User
} from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import TabHeader from "../comman/TabHeader";
import MenuItem from "./MenuItem";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 bg-gray-100">
      <TabHeader title="Profile" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-green-100 rounded-2xl p-4 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="bg-gray-300 rounded-full p-3">
              <User size={24} color="#333" />
            </View>

            <View>
              <Text className="text-lg font-semibold">
                User
              </Text>
              <Text className="text-gray-600">{user?.mobile_number}</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Pencil color="#15803d" />
          </TouchableOpacity>
        </View>

        <Text className="mt-6 mb-3 text-gray-700 font-semibold">Account</Text>

        <MenuItem icon={<MapPin />} title="Saved Addresses" />
        <MenuItem icon={<Heart />} title="Favorites" />
        <MenuItem icon={<Bell />} title="Notifications" />

        <Text className="mt-6 mb-3 text-gray-700 font-semibold">More</Text>

        <MenuItem icon={<Info />} title="About us" />
        <MenuItem icon={<Shield />} title="Privacy Policy" />
        <MenuItem icon={<FileText />} title="Terms and Conditions" />
        <MenuItem icon={<Phone />} title="Contact Us" />

        <MenuItem
          icon={<LogOut color="red" />}
          title="Log Out"
          isDanger
          onPress={logout}
        />
      </ScrollView>
    </View>
  );
}
