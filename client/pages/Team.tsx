import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { Member } from "@shared/schema";
import { Loader2, Mail } from "lucide-react";

export default function Team() {
  const { data: members, isLoading } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await fetch("/api/members");
      if (!res.ok) throw new Error("Failed to fetch members");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh]">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Dedicated professionals working towards a common goal of social welfare.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members?.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
              <div className="h-64 overflow-hidden bg-gray-100">
                <img
                  src={member.imageUrl || "https://placehold.co/400x400?text=Member"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <div className="pt-4 border-t border-gray-100 flex justify-center">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>{member.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {members?.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No team members found.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
