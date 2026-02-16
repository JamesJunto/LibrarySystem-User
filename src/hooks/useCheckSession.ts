import { useState } from "react";

export const useCheckSession = () => {
    const [ready, setReady] = useState(false);

    const checkSession = async () => {
        try {
            const response = await fetch("http://localhost:8080/check-session.php", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                setReady(data.loggedIn);
            }

        } catch (error) {
            console.error("Error checking session:", error);
        }
    };

    checkSession();

    return { ready, checkSession };
}