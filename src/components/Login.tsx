import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, just check if email and password are not empty
      if (email && password) {
        console.log('Login successful', { email, password, rememberMe });
        // In a real app, you would redirect or update auth state here
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }, 1500);
  };

  return (
    <section id="login" className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-800 text-white p-6 text-center">
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-gray-300 mt-1">Sign in to your account</p>
          </div>
          
          <div className="p-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-gray-700 font-medium">
                    Password
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                  Remember me
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};