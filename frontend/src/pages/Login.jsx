
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux/authSlice'

const API_URL = 'http://localhost:5000/api/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error(
          `API returned ${response.status} ${response.statusText} instead of JSON. Check the backend URL and endpoint.`
        )
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      if (!data.user || !data.token) {
        throw new Error('Backend response mein user ya token missing hai.')
      }

      dispatch(
        setCredentials({
          user: data.user,
          token: data.token,
        })
      )

      navigate('/community')
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
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
          Login to your account
        </p>

        {location.state?.message && (
          <p className="text-green-700 bg-green-50 p-3 rounded-lg mb-4">
            {location.state.message}
          </p>
        )}

        <label className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <label className="block text-sm font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
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
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-bold text-orange-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}