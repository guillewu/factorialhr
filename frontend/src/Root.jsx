import { Outlet } from "react-router-dom";
import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Navbar className="mb-5 max-w-full px-4 py-2 lg:px-8 lg:py-4 rounded-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/">Markus Bike Shop</Link>
          </Typography>
        </div>
      </Navbar>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
