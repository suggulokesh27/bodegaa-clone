import { Text } from "react-native";

type Props = {
  message?: string;
};

export default function ErrorText({ message }: Props) {
  if (!message) return null;

  return (
    <Text className="text-red-500 text-xs mt-1 ml-1">
      {message}
    </Text>
  );
}