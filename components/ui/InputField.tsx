// components/ui/InputField.tsx

import { TextInput, TextInputProps, View } from "react-native";
import ErrorText from "./ErrorText";

type Props = TextInputProps & {
  error?: string;
};

export default function InputField({ error, ...props }: Props) {
  return (
    <View className="w-full">
      <TextInput
        {...props}
        className={`border rounded-xl px-4 py-3 ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      />

      <ErrorText message={error} />
    </View>
  );
}