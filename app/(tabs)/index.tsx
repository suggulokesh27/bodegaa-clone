import HomeScreen from "@/components/home/HomeScreen";
import { useAuth } from "@/context/AuthContext";
import { getHomeDataService } from "@/services";
import { useEffect, useState } from "react";

export default function HomeTab() {
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();
  const fetchHomeData = async () => {
    const [bestSellersRes, categoryRes] = await getHomeDataService();

    if(!bestSellersRes.success || !categoryRes.success) {
      setLoading(false);
      return;
    }

    setBestSellers(bestSellersRes.data);
    setCategories(categoryRes.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  if (loading) {
    return null;
  }

  return <HomeScreen bestSellers={bestSellers} categories={categories} user={user} />;
}