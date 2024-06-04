import CartTourT from "../carts/CartTourT";
import CartHotelT from "../carts/CartHotelT";
import CartTransportT from "../carts/CartTransportT";

export function CartItem({ item, itemType, cartId, setIsLoader, isLoader }) {
  switch (itemType) {
    case "hotels":
      return (
        <CartHotelT
          hotel={item}
          cartId={cartId}
          setIsLoader={setIsLoader}
          isLoader={isLoader}
        />
      );

    case "activities":
      return (
        <CartTourT
          activity={item}
          cartId={cartId}
          setIsLoader={setIsLoader}
          isLoader={isLoader}
        />
      );

    case "transportations":
      return (
        <CartTransportT
          transport={item}
          cartId={cartId}
          setIsLoader={setIsLoader}
          isLoader={isLoader}
        />
      );
    default:
      return null;
  }
}
