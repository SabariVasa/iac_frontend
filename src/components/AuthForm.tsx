import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ isLogin, onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    phone_number: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <Input name="username" placeholder="Username" onChange={handleChange} required />
          <Input name="phone_number" placeholder="Phone Number" onChange={handleChange} required />
        </>
      )}
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <Input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
      {isLogin && <Button onClick={() => navigate("/register")}>Sign up</Button>}
    </form>
  );
}
