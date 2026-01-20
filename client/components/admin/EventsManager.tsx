import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Event, InsertEvent, insertEventSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Plus, Calendar, MapPin, ArrowLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "@/components/ui/image-upload";

interface EventsManagerProps {
    onBack?: () => void;
    editId?: number | null;
}

export default function EventsManager({ onBack, editId }: EventsManagerProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isCreating, setIsCreating] = useState(false);

    // If editId is provided, we default to "creating" mode (which is actually editing here)
    useEffect(() => {
        if (editId) {
            setIsCreating(true);
        }
    }, [editId]);

    const { data: events, isLoading } = useQuery<Event[]>({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await fetch("/api/events");
            if (!res.ok) throw new Error("Failed to fetch events");
            return res.json();
        },
    });

    const form = useForm<InsertEvent>({
        resolver: zodResolver(insertEventSchema),
        defaultValues: {
            title: "",
            date: "",
            location: "",
            description: "",
            imageUrl: "",
        },
    });

    // Fetch details if we are editing
    const { data: eventToEdit, isLoading: isLoadingEvent } = useQuery<Event>({
        queryKey: ["event", editId],
        queryFn: async () => {
            if (!editId) return null;
            const res = await fetch(`/api/events/${editId}`);
            if (!res.ok) throw new Error("Failed to fetch event");
            return res.json();
        },
        enabled: !!editId,
    });

    // Populate form when event data is available
    useEffect(() => {
        if (eventToEdit) {
            form.reset({
                title: eventToEdit.title,
                date: eventToEdit.date,
                location: eventToEdit.location,
                description: eventToEdit.description,
                imageUrl: eventToEdit.imageUrl || "",
            });
        } else if (!editId && !isCreating) {
            form.reset({
                title: "",
                date: "",
                location: "",
                description: "",
                imageUrl: "",
            });
        }
    }, [eventToEdit, editId, form, isCreating]);

    const mutation = useMutation({
        mutationFn: async (data: InsertEvent) => {
            const url = editId ? `/api/events/${editId}` : "/api/events";
            const method = editId ? "PATCH" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(`Failed to ${editId ? "update" : "create"} event`);
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
            queryClient.invalidateQueries({ queryKey: ["event", editId] });
            toast({ title: "Success", description: `Event ${editId ? "updated" : "created"} successfully` });
            setIsCreating(false);
            if (onBack && editId) onBack(); // Go back if we were deep linked
            form.reset({
                title: "",
                date: "",
                location: "",
                description: "",
                imageUrl: "",
            });
        },
        onError: () => {
            toast({ title: "Error", description: `Failed to ${editId ? "update" : "create"} event`, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`/api/events/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete event");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
            toast({ title: "Success", description: "Event deleted successfully" });
        },
    });

    const onSubmit = (data: InsertEvent) => {
        mutation.mutate(data);
    };

    if (editId && isLoadingEvent) {
        return <div className="flex justify-center p-8"><Loader2 className="w-6 h-6 animate-spin" /></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {onBack && (
                        <Button variant="ghost" size="icon" onClick={() => {
                            if (isCreating && !editId) setIsCreating(false);
                            else onBack();
                        }}>
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    )}
                    <h2 className="text-2xl font-bold text-gray-900">{editId ? "Edit Event" : "Manage Events"}</h2>
                </div>
                {!editId && (
                    <Button onClick={() => setIsCreating(!isCreating)}>
                        {isCreating ? "Cancel" : <><Plus className="mr-2 h-4 w-4" /> Add Event</>}
                    </Button>
                )}
            </div>

            {(isCreating || editId) && (
                <div className="bg-white p-6 rounded-lg shadow-md border animate-in fade-in slide-in-from-top-4">
                    <h3 className="text-lg font-semibold mb-4">{editId ? "Edit Event" : "Create New Event"}</h3>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Event Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Health Camp 2024" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. March 15, 2024" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Kolkata, West Bengal" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="imageUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Event Image (Optional)</FormLabel>
                                            <FormControl>
                                                <ImageUpload
                                                    value={field.value || ""}
                                                    onChange={field.onChange}
                                                    disabled={mutation.isPending}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Event details..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2">
                                <Button type="submit" disabled={mutation.isPending}>
                                    {mutation.isPending ? (editId ? "Updating..." : "Creating...") : (editId ? "Update Event" : "Create Event")}
                                </Button>
                                {editId && onBack && (
                                    <Button variant="outline" type="button" onClick={onBack}>Cancel</Button>
                                )}
                            </div>
                        </form>
                    </Form>
                </div>
            )}

            {!editId && (
                <div className="grid grid-cols-1 gap-4">
                    {isLoading ? (
                        <div>Loading events...</div>
                    ) : events?.length === 0 ? (
                        <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg">No events found.</div>
                    ) : (
                        events?.map((event) => (
                            <div key={event.id} className="bg-white p-4 rounded-lg shadow border flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className="h-24 w-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                        <img src={event.imageUrl || "https://placehold.co/100"} alt={event.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2 line-clamp-2">{event.description}</p>
                                    </div>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => deleteMutation.mutate(event.id)}
                                    disabled={deleteMutation.isPending}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
