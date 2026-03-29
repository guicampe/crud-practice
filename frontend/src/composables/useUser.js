import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

export const useUser = () => {
  const authStore = useAuthStore();
  const user = ref(null);

  const fetchUser = async () => {
    if (!authStore.token) return;

    user.value = null;

    const request = await fetch(`http://localhost:3000/users/${authStore.id}`, {
      headers: {
        "Authorization": `Bearer ${authStore.token}`
      }
    })

    const data = await request.json();

    user.value = data;
  }

  return { user, fetchUser }
}