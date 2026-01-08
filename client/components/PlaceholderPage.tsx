import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface PlaceholderPageProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function PlaceholderPage({
  icon,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="text-center px-4">
        <div className="mb-6 flex justify-center text-primary">{icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-md mb-8">{description}</p>
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-md">
          <p className="text-gray-700 text-sm mb-3">
            This page is currently being developed.
          </p>
          <p className="text-gray-600 text-sm">
            Continue asking us to fill in the details for this page, and we'll
            build it out with all the features you need.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-primary text-sm font-semibold">
            Tell us what you need <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
