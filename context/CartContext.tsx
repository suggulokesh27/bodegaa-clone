// context/CartContext.tsx

import { addToCartService } from "@/services";
import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = async (product: any) => {
    try {
      await addToCartService(product._id, 1);
      setCart((prev) => {
        const exists = prev.find((i) => i._id === product._id);

        if (exists) {
          return prev.map((i) =>
            i._id === product._id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }

        return [...prev, { ...product, quantity: 1 }];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((i) =>
        i._id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i._id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i._id !== id));
  };

  const totals = useMemo(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const handling = 0.1;
    const gst = total * 0.0002;

    return {
      total,
      handling,
      gst,
      grandTotal: total + handling + gst,
    };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        totals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);