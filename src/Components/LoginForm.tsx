import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import type { ILogin } from "../interface/ILogin";

export const LoginForm = () => {
  const { Login } = useLogin();
  const navigate = useNavigate();

  const [form, setForm] = useState<ILogin>({
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await Login(form);

    if (result.success) {
      navigate("/Dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
      <legend className="fieldset-legend">Login</legend>

      <label className="label">Email</label>
      <input type="email" value={form.username} onChange={handleChange} name="username" className="input" placeholder="Username" />

      <label className="label">Password</label>
      <input type="password" value={form.password} onChange={handleChange} name="password" className="input" placeholder="Password" />

      <button onClick={handleSubmit} className="btn btn-neutral mt-4">Login</button>
    </fieldset>
    </div>
  );
};
