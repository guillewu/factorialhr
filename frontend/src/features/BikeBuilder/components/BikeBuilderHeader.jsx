import { useNavigate, useLocation } from "react-router-dom";
import useBikeBuilderStore from "../hooks/useBikeBuilderStore";
import { Button } from "@material-tailwind/react";

const stepsMap = {
  frame: { order: 1, nextStep: "wheel" },
  wheel: { order: 2, nextStep: "chain" },
  chain: { order: 3, nextStep: "summary" },
};

export default function BikeBuilderHeader() {
  const { addToCart, selectedProduct, selectedProductVariant } =
    useBikeBuilderStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const part = pathname.split("/")[2];

  const goBack = () => {
    navigate(-1);
  };

  const addToBikeAndNavigate = () => {
    if (selectedProductVariant) {
      addToCart(selectedProduct, selectedProductVariant);
    }
    navigate(`/bike-builder/${stepsMap[part].nextStep}`);
  };

  return (
    <div className="flex flex-row justify-between mb-4">
      <h1 className="text-3xl font-bold underline">
        Step {`${stepsMap[part].order}: ${part}`}
      </h1>
      <div className="text-right">
        <Button color="red" className="mr-1" onClick={goBack}>
          Back
        </Button>
        <Button onClick={addToBikeAndNavigate} color="green">
          Next
        </Button>
      </div>
    </div>
  );
}
