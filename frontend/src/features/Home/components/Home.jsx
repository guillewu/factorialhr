import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Button>
        <Link to="/bike-builder">Build my bike</Link>
      </Button>
    </div>
  );
}
