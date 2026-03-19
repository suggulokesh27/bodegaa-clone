import { useAuth } from "@/context/AuthContext";
import { verifyOtpService } from "@/services";
import { otpSchema } from "@/utils/validation";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View
} from "react-native";
import InputField from "../ui/InputField";

export default function OtpScreen() {
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { setUser } = useAuth();

  const handleVerifyOtp = async () => {
    const result = otpSchema.safeParse({ otp });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setLoading(true);
console.log("Verifying OTP for:", phone, "OTP:", otp);
    const res = await verifyOtpService(String(phone), otp);

    setLoading(false);

    if (res.success) {
      setUser(res.data);
      router.replace("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-2xl font-bold text-center">Verify OTP</Text>

      <Text className="text-center text-gray-500 mt-2">
        Sent to +91 {phone}
      </Text>

      <InputField
        value={otp}
        onChangeText={(text) => {
          setOtp(text);
          setError("");
        }}
        keyboardType="number-pad"
        maxLength={4}
        className="text-center text-xl tracking-widest"
        error={error}
      />

      <Pressable
        onPress={handleVerifyOtp}
        disabled={otp.length !== 4 || loading}
        className={`mt-6 py-4 rounded-xl items-center ${
          otp.length === 4 ? "bg-green-700" : "bg-gray-300"
        }`}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-semibold">Verify</Text>
        )}
      </Pressable>

      <Pressable className="mt-4">
        <Text className="text-green-700 text-center">Resend OTP</Text>
      </Pressable>
    </View>
  );
}
