import { sendOtpService } from "@/services";
import { phoneSchema } from "@/utils/validation";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputField from "../ui/InputField";

export default function AuthScreen() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSendOtp = async () => {
    const result = phoneSchema.safeParse({ phone });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setLoading(true);
    setError("");

    const res = await sendOtpService(phone);
    setLoading(false);

    if (res.success) {
      router.push({
        pathname: "/auth/otp",
        params: { phone },
      });
    } else {
      alert(res.message);
    }
  };

  return (
    <View className="flex-1 bg-green-700">
      {/* TOP */}
      <View className="flex-1 items-center justify-center px-6">
        <View className="flex-row items-center">
          <View className="bg-orange-500 p-3 rounded-xl mr-2">
            <Text className="text-white text-3xl font-bold">B</Text>
          </View>
          <Text className="text-white text-4xl font-bold">odegaa</Text>
        </View>

        <Text className="text-white/80 mt-2 tracking-widest">
          BEST IN QUALITY
        </Text>
      </View>

      {/* BOTTOM */}
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      >
        <View className="bg-white rounded-t-3xl px-6 py-6">
          <Text className="text-xl font-semibold text-center">
            Get your stuff quickly
          </Text>

          <View className="flex-row mt-5 gap-3">
            <View className="flex-row items-center border border-gray-200 rounded-xl px-3 py-3">
              <Text className="mr-2">🇮🇳</Text>
              <Text className="text-gray-700 font-medium">+91</Text>
            </View>

            <InputField
              placeholder="Enter mobile number"
              keyboardType="number-pad"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setError("");
              }}
              error={error}
            />
          </View>

          <Pressable className="mt-4">
            <Text className="text-green-700 text-center font-medium">
              Continue as Guest
            </Text>
          </Pressable>

          <Pressable
            onPress={handleSendOtp}
            disabled={phone.length !== 10 || loading}
            className={`mt-5 py-4 rounded-xl flex-row justify-center ${
              phone.length === 10 ? "bg-green-700" : "bg-gray-300"
            }`}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-semibold">Continue</Text>
            )}
          </Pressable>

          <Text className="text-xs text-gray-500 text-center mt-4">
            By Continuing, you agree to our{" "}
            <Text className="text-blue-600 underline">Privacy Policy</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
