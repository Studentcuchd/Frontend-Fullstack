import React, { useState } from 'react';
import api from '../utils/api';

const AuthModal = ({ type, onClose, onLogin, onSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (type === 'login') {
        // login expects email + password. Backend will set httpOnly cookie.
        const user = await api.login(formData.email, formData.password);
        onLogin(user);
      } else {
        const user = await api.register(formData.username, formData.email, formData.password);
        onSignup(user);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            {type === 'login' ? 'Welcome Back' : 'Join LearnPath'}
          </h3>
          <p className="modal-subtitle">
            {type === 'login' 
              ? 'Sign in to continue your learning journey' 
              : 'Start building your future today'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <div className="form-group">
              <label className="form-label" htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {loading ? (type === 'login' ? 'Signing In...' : 'Creating...') : (type === 'login' ? 'Sign In' : 'Create Account')}
            </button>
          </div>
        </form>
            {error && <p className="error-text" style={{ color: 'red', marginTop: '0.75rem' }}>{error}</p>}
      </div>
    </div>
  );
};

export default AuthModal;