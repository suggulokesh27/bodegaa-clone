import { FlatList, Image } from "react-native";

const banners = [
  "https://img.freepik.com/premium-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template_502896-109.jpg",
  "https://img.freepik.com/free-vector/world-vegan-day-sale-banner-template_23-2149741503.jpg",
];

export default function Banner() {
  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          className="w-80 h-40 rounded-2xl mr-3"
        />
      )}
    />
  );
}