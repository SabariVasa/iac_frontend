// import AuthForm from "@/components/AuthForm";

import AuthForm from "@/components/AuthForm";

export default function Register() {
  const handleRegister = async (data) => {
    const res = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Registered successfully");
    } else {
      alert(result?.non_field_errors || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md">
      <h1 className="text-2xl mb-4">Register</h1>
      <AuthForm isLogin={false} onSubmit={handleRegister} />
    </div>
  );
}
