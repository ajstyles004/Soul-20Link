import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@shared/schema";
import { Loader2, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function Events() {
    const { data: events, isLoading } = useQuery<Event[]>({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await fetch("/api/events");
            if (!res.ok) throw new Error("Failed to fetch events");
            return res.json();
        },
    });

    const formatDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return dateStr;
            return format(date, "MMMM d, yyyy");
        } catch (e) {
            return dateStr;
        }
    };

    return (
        <Layout>
            <section className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
                        <p className="text-xl text-white/80 max-w-2xl">
                            Join us in our mission. Participate in our workshops, drives, and community gatherings.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 min-h-[50vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(!events || events.length === 0) && (
                                <div className="col-span-full text-center py-10 bg-white rounded-lg shadow-sm">
                                    <p className="text-gray-500 text-lg">No upcoming events scheduled at the moment.</p>
                                    <p className="text-gray-400 mt-2">Check back later for updates!</p>
                                </div>
                            )}
                            {events?.map((event) => (
                                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                    <div className="h-48 overflow-hidden bg-gray-100 relative group">
                                        <img
                                            src={event.imageUrl || "https://placehold.co/600x400?text=Event"}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-sm flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {formatDate(event.date)}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                                {event.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                            <MapPin className="w-4 h-4 text-secondary" />
                                            {event.location}
                                        </div>
                                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                            {event.description}
                                        </p>

                                        <Button asChild variant="outline" className="w-full">
                                            <Link to={`/events/${event.id}`}>
                                                Know More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
