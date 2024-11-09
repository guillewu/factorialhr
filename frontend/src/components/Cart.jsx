import { useMemo } from "react";
import useBikeBuilderStore from "../features/BikeBuilder/hooks/useBikeBuilderStore";
import PropTypes from "prop-types";

export default function Cart() {
  const { cart } = useBikeBuilderStore();

  const totalPrice = useMemo(
    () => cart.reduce((acc, pv) => acc + pv.price, 0),
    [cart]
  );

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <>
      <div className="text-lg">Cart</div>
      <div>
        {cart.map((pv) => (
          <LineItem key={pv.id} productVariant={pv} />
        ))}
      </div>
      <div className="text-right">Total: ${totalPrice}</div>
    </>
  );
}

function LineItem({ productVariant }) {
  return (
    <div key={productVariant.id} className="flex flex-row justify-between">
      <div>
        {productVariant.product.name} - {productVariant.name}
      </div>
      <div>${productVariant.price}</div>
    </div>
  );
}

LineItem.propTypes = {
  productVariant: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    product: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};
