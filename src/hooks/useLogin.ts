import type { ILogin } from "../interface/ILogin";

export const useLogin = () => {

  const Login = async (data: ILogin)  => {
    try {
      const response = await fetch("http://localhost:8080/Login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      return result;

    } catch (err) {
        console.error("Error submitting form:", err);
        throw err; 
    }

  };
  
  return { Login};
};