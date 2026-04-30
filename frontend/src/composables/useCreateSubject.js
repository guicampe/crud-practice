import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

export const useCreateSubject = () => {
    const authStore = useAuthStore();
    const name = ref("");
    const total_classes = ref("");
    const loading = ref(false);
    const error = ref(null);

    const fetchCreateSubject = async () => {
        if (!authStore.token) return;
        loading.value = true;
        error.value = null;

        try {
            const request = await fetch("http://localhost:3000/admin/subjects/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${authStore.token}`
                },
                body: JSON.stringify({ name: name.value, total_classes: total_classes.value })
            });

            const response = await request.json();

            return response;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return { name, total_classes, loading, error, fetchCreateSubject };
}