import { useAuthStore } from "@/stores/auth";

export const useUpdateGrade = () => {
    const authStore = useAuthStore();

    const fetchUpdateGrade = async (userId, subjectId, body) => {
        if (!authStore.token) return;

        const request = await fetch(`http://localhost:3000/admin/grades/${userId}/${subjectId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${authStore.token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!request.ok) throw new Error("Erro ao atualizar notas");

        return await request.json();
    }

    return { fetchUpdateGrade }
}