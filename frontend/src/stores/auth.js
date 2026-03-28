import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const token = ref(localStorage.getItem("token") || null);

    const getPayload = () => {
        const savedToken = localStorage.getItem("token");
        
        if (!savedToken) return null;

        return JSON.parse(atob(savedToken.split(".")[1]));
    }

    const role = ref(getPayload()?.role || null);

    const id = ref(getPayload()?.id || null);

    const setToken = (newToken) => {
        token.value = newToken;
        localStorage.setItem("token", newToken);
        const payload = JSON.parse(atob(newToken.split(".")[1]));
        role.value = payload.role;
        id.value = payload.id;
    };

    const logout = () => {
        token.value = null;
        role.value = null;
        id.value = null;
        localStorage.removeItem("token");
    }

    return { token, role, id, setToken, logout };
})