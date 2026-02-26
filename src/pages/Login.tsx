import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader2 } from 'lucide-react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setError(error.message);
        } else {
            navigate('/');
        }
        setLoading(false);
    };

    return (
        <div className="pt-32 pb-24 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-10 border border-beige-200">
                <div className="text-center">
                    <h2 className="text-3xl font-normal text-darkgray-900 tracking-tight uppercase">Welcome Back</h2>
                    <p className="mt-2 text-sm text-darkgray-800 uppercase tracking-widest">Sign in to your account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && <div className="text-red-500 text-xs text-center uppercase tracking-wider">{error}</div>}
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-darkgray-800" />
                            <input
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-beige-200 text-sm placeholder-darkgray-800 focus:outline-none focus:ring-1 focus:ring-darkgray-800 focus:border-darkgray-800 font-light"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-darkgray-800" />
                            <input
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-beige-200 text-sm placeholder-darkgray-800 focus:outline-none focus:ring-1 focus:ring-darkgray-800 focus:border-darkgray-800 font-light"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm tracking-widest uppercase bg-darkgray-800 text-white hover:bg-darkgray-900 focus:outline-none transition-colors"
                        >
                            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Sign In'}
                        </button>
                    </div>
                </form>

                <div className="text-center pt-4 border-t border-beige-200">
                    <p className="text-xs text-darkgray-800 uppercase tracking-widest">
                        New to MINIMA?{' '}
                        <Link to="/signup" className="text-darkgray-900 hover:underline underline-offset-4 font-normal">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
