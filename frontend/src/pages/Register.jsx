
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:5000/api/auth'

export default function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords match nahi kar rahe.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      })

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error(
          `API returned ${response.status} ${response.statusText} instead of JSON. Check the backend URL and endpoint.`
        )
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      navigate('/login', {
        state: { message: 'Account ban gaya! Ab login karo.' },
      })
    } catch (err) {
      setError(
        err.message === 'Failed to fetch'
          ? 'Backend start karo aur API URL check karo.'
          : err.message
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-orange-100"
      >
        <h1 className="text-3xl font-extrabold text-orange-600 text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
          Join our community
        </p>

        <label className="block text-sm font-semibold mb-1">
          Full Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          minLength={2}
          maxLength={50}
          required
          className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <label className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <label className="block text-sm font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Minimum 8 characters"
          minLength={8}
          maxLength={72}
          required
          className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <label className="block text-sm font-semibold mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
          minLength={8}
          maxLength={72}
          required
          className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        {error && (
          <p role="alert" className="text-red-600 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-orange-500 py-3 text-white font-bold hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Register'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-bold text-orange-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}