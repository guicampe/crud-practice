import { useAuthStore } from "@/stores/auth";

export const useUpdateSubject = () => {
    const authStore = useAuthStore();

    const fetchUpdateSubject = async (id, name) => {
        if (!authStore.token) return;

        const request = await fetch(`http://localhost:3000/admin/subjects/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${authStore.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name })
        });

        if (!request.ok) throw new Error("Erro ao atualizar matéria");

        return await request.json();
    }

    return { fetchUpdateSubject }
}