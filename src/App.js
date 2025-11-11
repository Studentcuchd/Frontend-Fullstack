import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import AuthModal from './components/AuthModal';
import SuccessMessage from './components/SuccessMessage';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import api from './utils/api';
import { skillsData } from './data/skillsData';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  // Do not store tokens in localStorage. Use cookie-based sessions and in-memory state.
  const [currentUser, setCurrentUser] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [currentSkill, setCurrentSkill] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [successMessage, setSuccessMessage] = useState('');

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const showRoadmap = (skillKey) => {
    setCurrentSkill(skillKey);
    setCurrentSection('roadmap');
  };

  const handleLogin = async (userData) => {
    try {
      // userData is the profile returned by backend (backend sets httpOnly cookie)
      const user = userData && userData._id ? userData : await api.profile();
      setCurrentUser(user);
      if (user?.progress) setUserProgress(user.progress);
      setShowAuthModal(false);
      showSuccess('Welcome back! Ready to learn? 🎉');
    } catch (e) {
      // clear any broken session
      setCurrentUser(null);
      showSuccess('Login failed');
    }
  };

  const handleSignup = async (userData) => {
    try {
      // backend sets httpOnly cookie and returns created user profile
      const user = userData && userData._id ? userData : null;
      if (user) {
        setCurrentUser(user);
        if (user.progress) setUserProgress(user.progress);
        setShowAuthModal(false);
        showSuccess('Account created! Start your journey! 🚀');
      }
    } catch (e) {
      showSuccess('Signup failed');
    }
  };

  const handleLogout = () => {
    // Call backend to clear cookie, then clear local state
    api.logout().finally(() => {
      setCurrentUser(null);
      setUserProgress({});
      showSuccess('See you next time! 👋');
    });
  };

  const openAuthModal = (type) => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const updateProgress = (skillKey, stepIndex, itemIndex, completed) => {
    setUserProgress(prev => {
      const newProgress = { ...prev };
      if (!newProgress[skillKey]) newProgress[skillKey] = { steps: {} };
      if (!newProgress[skillKey].steps[stepIndex]) newProgress[skillKey].steps[stepIndex] = { checklist: {} };
      newProgress[skillKey].steps[stepIndex].checklist[itemIndex] = completed;
      // Persist to backend if logged in (cookie-based session validated server-side)
      if (currentUser?.email) {
        api.updateProfile({ progress: newProgress })
          .then(updated => {
            if (updated?.progress) {
              setCurrentUser(prevUser => prevUser ? { ...prevUser, progress: updated.progress } : prevUser);
              setUserProgress(updated.progress);
            }
          })
          .catch(() => {
            // ignore - we keep local progress
          });
      }
      return newProgress;
    });

    // Touch profile to update streak based on activity
    if (currentUser?.email) {
      api.profile()
        .then(profile => {
          setCurrentUser(prev => prev ? { ...prev, ...profile } : profile);
        })
        .catch(() => {});
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // On mount, attempt to restore session from cookie
  useEffect(() => {
    api.profile()
      .then(profile => {
        if (profile && profile._id) {
          setCurrentUser(profile);
          if (profile.progress) setUserProgress(profile.progress);
        }
      })
      .catch(() => {
        setCurrentUser(null);
        setUserProgress({});
      });
  }, []);

  const calculateSkillProgress = (skillKey) => {
    const skillMeta = skillsData[skillKey];
    if (!skillMeta) return 0;

    // Total checklist items come from static roadmap definition
    const totalItems = (skillMeta.roadmap?.steps || []).reduce((acc, step) => {
      return acc + (step.checklist?.length || 0);
    }, 0);

    // Completed items are counted from userProgress booleans
    const progressEntry = userProgress[skillKey];
    const completedItems = Object.values(progressEntry?.steps || {}).reduce((acc, step) => {
      const list = Object.values(step.checklist || {});
      return acc + list.filter(Boolean).length;
    }, 0);

    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onShowSection={showSection} />;
      case 'skills':
        return (
          <Skills 
            onShowSection={showSection} 
            onShowRoadmap={showRoadmap} 
            userProgress={userProgress}
            calculateSkillProgress={calculateSkillProgress}
            currentUser={currentUser}
          />
        );
      case 'dashboard':
        return (
          <Dashboard 
            onShowSection={showSection} 
            userProgress={userProgress} 
            currentUser={currentUser}
            calculateSkillProgress={calculateSkillProgress}
            onShowRoadmap={showRoadmap}
          />
        );
      case 'roadmap':
        return currentSkill ? (
          <Roadmap 
            skillKey={currentSkill} 
            onShowSection={showSection} 
            userProgress={userProgress}
            onUpdateProgress={updateProgress}
            currentUser={currentUser}
            onShowSuccess={showSuccess}
            calculateSkillProgress={calculateSkillProgress}
          />
        ) : (
          <div className="container">Loading...</div>
        );
      default:
        return <Home onShowSection={showSection} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentUser={currentUser}
        onLoginClick={() => openAuthModal('login')}
        onSignupClick={() => openAuthModal('signup')}
        onLogout={handleLogout}
      />
      
      <main className="main-content">
        {renderSection()}
      </main>

      {showAuthModal && (
        <AuthModal
          type={authType}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      )}

      <SuccessMessage message={successMessage} />
    </div>
  );
}

export default App;