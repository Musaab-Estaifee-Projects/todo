import { AlertOctagon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center">
      <AlertOctagon className="mb-4 text-red-500" size={120} />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-3 text-gray-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>
    </div>
  );
};

export default NotFound;
