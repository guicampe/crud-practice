import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

export const useGrades = () => {
    const authStore = useAuthStore();
    const grade = ref(null);

    const fetchGrades = async () => {
        if (!authStore.token) return;

        grade.value = null;

        const request = await fetch("http://localhost:3000/grades/me", {
            headers: {
                "Authorization": `Bearer ${authStore.token}`
            }
        })

        const data = await request.json();
        grade.value = data;
    }

    return { grade, fetchGrades }
}