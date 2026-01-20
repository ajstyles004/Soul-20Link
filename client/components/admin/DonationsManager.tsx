import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Donation } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, Smartphone } from "lucide-react";
import { format } from "date-fns";

export default function DonationsManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: donations, isLoading } = useQuery<Donation[]>({
        queryKey: ["/api/donations"],
        queryFn: async () => {
            const res = await fetch("/api/donations");
            if (!res.ok) throw new Error("Failed to fetch donations");
            return res.json();
        },
    });

    const verifyMutation = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`/api/donations/${id}/verify`, { method: "PATCH" });
            if (!res.ok) throw new Error("Failed");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/donations"] });
            toast({ title: "Donation verified" });
        },
    });

    if (isLoading) return <Loader2 className="w-8 h-8 animate-spin mx-auto" />;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Manage Donations</h2>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {donations?.map((donation) => (
                            <tr key={donation.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {donation.createdAt ? format(new Date(donation.createdAt), 'PP') : '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{donation.donorName}</div>
                                    <div className="text-sm text-gray-500">{donation.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ₹{donation.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${donation.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {donation.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {donation.status !== 'verified' && (
                                        <button
                                            onClick={() => verifyMutation.mutate(donation.id)}
                                            className="text-primary hover:text-blue-900 font-bold flex items-center gap-1 ml-auto"
                                        >
                                            <CheckCircle className="w-4 h-4" /> Verify
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {donations?.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No donation records found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mock Donation Button for Demo Purposes - visible only in dev maybe? keeping it hidden for now unless asked */}
        </div>
    );
}
