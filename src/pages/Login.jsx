import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login attempted with:', { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  const styles = {
    loginContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
    },
    loginCard: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center'
    },
    loginHeader: {
      marginBottom: '30px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '16px'
    },
    logoIcon: {
      fontSize: '24px',
      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333'
    },
    welcomeText: {
      color: '#666',
      fontSize: '14px',
      margin: '0'
    },
    loginForm: {
      marginBottom: '30px'
    },
    formGroup: {
      marginBottom: '20px',
      textAlign: 'left'
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'border-color 0.3s ease',
      boxSizing: 'border-box'
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#ff6b35',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)'
    },
    passwordInputWrapper: {
      position: 'relative'
    },
    passwordToggle: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '0',
      color: '#666'
    },
    loginButton: {
      width: '100%',
      background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
      color: 'white',
      border: 'none',
      padding: '14px 20px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    },
    divider: {
      position: 'relative',
      margin: '30px 0',
      color: '#999',
      fontSize: '14px'
    },
    dividerLine: {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      height: '1px',
      background: '#eee'
    },
    dividerText: {
      background: 'white',
      padding: '0 15px',
      position: 'relative',
      zIndex: '1'
    },
    socialLogin: {
      display: 'flex',
      gap: '12px',
      marginBottom: '30px'
    },
    socialButton: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: 'white',
      color: '#666',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    socialIcon: {
      fontWeight: 'bold',
      fontSize: '16px'
    },
    loginFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: '#666'
    },
    link: {
      color: '#ff6b35',
      textDecoration: 'none',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={styles.loginHeader}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🔥</span>
            <span style={styles.logoText}>Dev Shukra</span>
          </div>
          <p style={styles.welcomeText}>Welcome! Nice to see you again</p>
        </div>

        <div style={styles.loginForm}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <div style={styles.passwordInputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button
                type="button"
                style={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <button type="button" style={styles.loginButton} onClick={handleLogin}>
            Login Now →
          </button>
        </div>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>OR</span>
        </div>

        <div style={styles.socialLogin}>
          <button
            style={styles.socialButton}
            onClick={() => handleSocialLogin('Google')}
          >
            <span style={styles.socialIcon}>G</span>
            Google
          </button>
          <button
            style={styles.socialButton}
            onClick={() => handleSocialLogin('Facebook')}
          >
            <span style={styles.socialIcon}>f</span>
            Facebook
          </button>
          <button
            style={styles.socialButton}
            onClick={() => handleSocialLogin('Apple')}
          >
            <span style={styles.socialIcon}>📱</span>
            Apple
          </button>
        </div>

        <div style={styles.loginFooter}>
          <span>No account? </span>
          <a href="#" style={styles.link}>Signup?</a>
          <a href="#" style={styles.link}>Lost Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;