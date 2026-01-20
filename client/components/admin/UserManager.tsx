import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { User, insertUserSchema, InsertUser } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2, Shield, User as UserIcon, X } from "lucide-react";

export default function UserManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isAdding, setIsAdding] = useState(false);

    // We are fetching all users. In a real app we might filter by role=admin if there were normal users
    const { data: users, isLoading } = useQuery<User[]>({
        queryKey: ["/api/users"],
        queryFn: async () => {
            const res = await fetch("/api/users");
            if (!res.ok) throw new Error("Failed to fetch users");
            return res.json();
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.message || "Failed");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/api/users"] });
            toast({ title: "User deleted successfully" });
        },
        onError: (err: any) => {
            toast({ title: "Error", description: err.message, variant: "destructive" });
        }
    });

    const form = useForm<InsertUser>({
        resolver: zodResolver(insertUserSchema),
        defaultValues: {
            username: "",
            password: "",
            role: "admin", // Defaulting to admin for this panel
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.message || "Failed to create user");
            }

            queryClient.invalidateQueries({ queryKey: ["/api/users"] });
            toast({ title: "User created successfully" });
            setIsAdding(false);
            form.reset();
        } catch (error: any) {
            toast({ title: "Error creating user", description: error.message, variant: "destructive" });
        }
    };

    if (isLoading) return <Loader2 className="w-8 h-8 animate-spin mx-auto" />;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">User Management</h2>
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                    >
                        <Plus className="w-4 h-4" /> Add Admin User
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200 text-left">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Create New Admin</h3>
                        <button onClick={() => setIsAdding(false)} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-sm font-medium mb-1">Username</label>
                            <input {...form.register("username")} className="w-full p-2 border rounded" placeholder="username" />
                            {form.formState.errors.username && <p className="text-red-500 text-sm">{String(form.formState.errors.username.message)}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input type="password" {...form.register("password")} className="w-full p-2 border rounded" placeholder="password" />
                            {form.formState.errors.password && <p className="text-red-500 text-sm">{String(form.formState.errors.password.message)}</p>}
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                            <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 border rounded">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Create User</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users?.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <UserIcon className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="font-semibold">{user.username}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full uppercase font-bold flex w-max items-center gap-1">
                                        <Shield className="w-3 h-3" /> {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => {
                                            if (confirm(`Delete user ${user.username}?`)) deleteMutation.mutate(user.id);
                                        }}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete User"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
