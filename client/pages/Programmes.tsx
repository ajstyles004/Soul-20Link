import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { Programme } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function Programmes() {
    const { data: programmes, isLoading } = useQuery<Programme[]>({
        queryKey: ["programmes"],
        queryFn: async () => {
            const res = await fetch("/api/programmes");
            if (!res.ok) throw new Error("Failed to fetch programmes");
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programmes</h1>
                    <p className="text-xl max-w-2xl mx-auto text-blue-100">
                        Initiatives designed to make a real impact in our community.
                    </p>
                </div>
            </div>

            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {programmes?.map((prog, index) => (
                        <div key={prog.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
                                    <img
                                        src={prog.imageUrl || "https://placehold.co/600x400?text=Programme"}
                                        alt={prog.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">{prog.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {prog.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {programmes?.length === 0 && (
                        <div className="col-span-full text-center text-gray-500 py-10">
                            No programmes found.
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
