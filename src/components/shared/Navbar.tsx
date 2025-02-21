import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-lg font-bold">Todo App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/create" className="hover:underline">
          Create Task
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
