import { useQuery } from "@tanstack/react-query";
import { ContactMessage } from "@shared/schema";
import { Loader2, Mail } from "lucide-react";
import { format } from "date-fns";

export default function ContactManager() {
    const { data: messages, isLoading } = useQuery<ContactMessage[]>({
        queryKey: ["/api/contact"],
        queryFn: async () => {
            const res = await fetch("/api/contact");
            if (!res.ok) throw new Error("Failed to fetch messages");
            return res.json();
        },
    });

    if (isLoading) return <Loader2 className="w-8 h-8 animate-spin mx-auto" />;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Messages</h2>

            <div className="grid gap-4">
                {messages?.map((msg) => (
                    <div key={msg.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{msg.name}</h3>
                                <a href={`mailto:${msg.email}`} className="text-sm text-primary hover:underline flex items-center gap-1">
                                    <Mail className="w-3 h-3" /> {msg.email}
                                </a>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {msg.createdAt ? format(new Date(msg.createdAt), 'PP p') : '-'}
                            </span>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm">
                            {msg.message}
                        </p>
                        <div className="mt-4 flex justify-end">
                            <a
                                href={`mailto:${msg.email}?subject=Re: Inquiry from SoulLink`}
                                className="text-sm bg-primary text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Reply via Email
                            </a>
                        </div>
                    </div>
                ))}
                {messages?.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No messages found.</p>
                )}
            </div>
        </div>
    );
}
