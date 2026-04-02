import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export const useRegister = () => {
    const router = useRouter();
    const authStore = useAuthStore();

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const nameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const credentialsError = ref("");
    const isLoading = ref(false);
    const registered = ref(false);

    const handleRegister = async () => {
        nameError.value = "";
        emailError.value = "";
        passwordError.value = "";
        credentialsError.value = "";

        if (!name.value) {
            nameError.value = "Nome obrigatório";
            return;
        }

        if (!email.value) {
            emailError.value = "E-mail obrigatório";
            return;
        }

        if (!password.value) {
            passwordError.value = "Senha obrigatória";
            return;
        }

        try {
            isLoading.value = true;

            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: password.value
                })
            })

            const data = await response.json();

            if (!response.ok) {
                credentialsError.value = data.message;
                return;
            }

            authStore.setToken(data.token);

            isLoading.value = false;
            registered.value = true;

            if (authStore.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/user");
            }
        } catch (error) {
            credentialsError.value = "Não foi possível conectar ao servidor. Tente novamente."
        } finally {
            isLoading.value = false;
        }
    }

    return {
        name,
        email,
        password,
        nameError,
        emailError,
        passwordError,
        credentialsError,
        isLoading,
        registered,
        handleRegister,
    }
};
