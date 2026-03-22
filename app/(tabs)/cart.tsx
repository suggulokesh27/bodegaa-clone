import CartScreen from "@/components/cart/CartScreen";
import { useCart } from "@/context/CartContext";

const CartTab = () => {
    const { cart } = useCart();
    return(
        <CartScreen cart={cart} />
    )
}

export default CartTab;