import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@shared/schema";
import Layout from "../components/Layout";
import { Loader2, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function EventDetails() {
    const { id } = useParams();

    const { data: event, isLoading, error } = useQuery<Event>({
        queryKey: ["event", id],
        queryFn: async () => {
            const res = await fetch(`/api/events/${id}`);
            if (!res.ok) throw new Error("Failed to fetch event");
            return res.json();
        },
        enabled: !!id,
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

    if (error || !event) {
        return (
            <Layout>
                <div className="container mx-auto py-20 text-center">
                    <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
                    <Button asChild>
                        <Link to="/events">Back to Events</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Events
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {event.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-500 mb-8 border-b border-gray-100 pb-8">
                    <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">
                        <Calendar className="w-5 h-5" />
                        {event.date}
                    </span>
                    <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
                        <MapPin className="w-5 h-5" />
                        {event.location}
                    </span>
                </div>

                {event.imageUrl && (
                    <div className="mb-10 rounded-xl overflow-hidden shadow-lg aspect-video">
                        <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Event</h3>
                    {event.description}
                </div>
            </article>
        </Layout>
    );
}
