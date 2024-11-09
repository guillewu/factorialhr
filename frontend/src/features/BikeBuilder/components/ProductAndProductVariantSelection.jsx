import { Button } from "@material-tailwind/react";
import useBikeBuilderStore from "../hooks/useBikeBuilderStore";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../api/products";
import { useEffect } from "react";

export default function ProductAndProductVariantSelection() {
  const {
    setSelectedProduct,
    setSelectedProductVariant,
    selectedProductVariant,
    selectedProduct,
  } = useBikeBuilderStore();

  const { pathname } = useLocation();
  const family = pathname.split("/")[2];

  useEffect(() => {
    const resetState = () => {
      setSelectedProduct();
      setSelectedProductVariant();
    };
    resetState();
  }, [pathname]);

  const { data, isPending, error } = useQuery({
    queryKey: [family],
    queryFn: () => fetchProducts(family),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="basis-6/12 border-x border-black mx-2 px-2">
      <h1 className="text-lg mb-2">Select a product:</h1>
      <div className="mb-10">
        {Object.entries(data).map(([id, product]) => {
          return (
            <Button
              onClick={() => {
                setSelectedProduct(product);
                setSelectedProductVariant(null);
              }}
              disabled={selectedProduct?.id == id}
              key={id}
              className="mr-1"
            >
              {product.name}
            </Button>
          );
        })}
      </div>
      {selectedProduct && (
        <h2 className="text-lg mb-2">Select a product variant:</h2>
      )}
      <div className="mb-10">
        {selectedProduct
          ? selectedProduct.productVariants.map((pv) => {
              return (
                <Button
                  className="mr-1"
                  key={pv.id}
                  onClick={() => setSelectedProductVariant(pv)}
                  disabled={selectedProductVariant?.id == pv.id}
                >
                  {pv.name}
                </Button>
              );
            })
          : null}
      </div>
    </div>
  );
}
