import Image from "./Image";
import ProductAndProductVariantSelection from "./ProductAndProductVariantSelection";
import BikeBuilderHeader from "./BikeBuilderHeader";
import useBikeBuilderStore from "../hooks/useBikeBuilderStore";
import Cart from "@/components/Cart";

export default function BikeBuilder() {
  const { selectedProductVariant } = useBikeBuilderStore();

  return (
    <div>
      <BikeBuilderHeader />
      <div className="flex flex-row">
        <Image imageUrl={selectedProductVariant?.imageUrl} />
        <ProductAndProductVariantSelection />
        <div className="basis-3/12">
          <Cart />
        </div>
      </div>
    </div>
  );
}
