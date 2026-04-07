import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

export const useUserByIdGrades = () => {
    const authStore = useAuthStore();
    const subjects = ref([]);

    const fetchSubjectsById = async (id) => {
        if (!authStore.token) return;

        const request = await fetch(`http://localhost:3000/admin/grades/${id}`, {
            headers: {
                "Authorization": `Bearer ${authStore.token}`
            }
        })

        const data = await request.json();
        subjects.value = Array.isArray(data) ? data : [];
    }

    return { subjects, fetchSubjectsById }
}