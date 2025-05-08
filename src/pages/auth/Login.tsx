// import AuthForm from "@/components/AuthForm";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const handleLogin = async (data) => {
    const res = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Login successful");
    } else {
      alert(result?.non_field_errors || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md">
      <h1 className="text-2xl mb-4">Login</h1>
      <AuthForm isLogin={true} onSubmit={handleLogin} />
    </div>
  );
}