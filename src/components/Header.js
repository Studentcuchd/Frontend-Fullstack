import React from 'react';

const Header = ({ currentUser, onLoginClick, onSignupClick, onLogout }) => {
  // Derive a safe display name from available fields
  const displayName = currentUser
    ? (currentUser.name || currentUser.username || (currentUser.email ? currentUser.email.split('@')[0] : 'User'))
    : '';

  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">LearnPath</div>
        <div className="nav-buttons">
          {currentUser ? (
            <div className="user-info logged-in">
              <div className="user-avatar">
                {String(displayName).charAt(0).toUpperCase()}
              </div>
              <span className="welcome-text">Welcome, {displayName}!</span>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="btn btn-outline" onClick={onLoginClick}>
                Login
              </button>
              <button className="btn btn-primary" onClick={onSignupClick}>
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
