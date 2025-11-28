import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Just validation — no credential check
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setError('');

    try {
      // Fetch clients from backend (no login logic)
      const res = await fetch('http://localhost:5000/api/clients');
      const clients = await res.json();
      console.log('ServiceM8 Clients:', clients);

      // Mock login success
      localStorage.setItem('userId', email);

      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      setError('Unable to connect to backend.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
          Customer Login
        </h1>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div className="mb-6">
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
