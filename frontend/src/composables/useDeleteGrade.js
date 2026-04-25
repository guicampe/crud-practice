import { useAuthStore } from "@/stores/auth";

export const useDeleteGrade = () => {
    const authStore = useAuthStore();

    const fetchDeleteGrade = async (userId, subjectId) => {
        if (!authStore.token) return;

        const request = await fetch(`http://localhost:3000/admin/grades/${userId}/${subjectId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${authStore.token}` }
        });

        if (!request.ok) {
            throw new Error("Erro ao deletar matéria do aluno");
        }

        if (request.status === 204) {
            return null;
        }

        return await request.json();
    }

    return { fetchDeleteGrade }
}