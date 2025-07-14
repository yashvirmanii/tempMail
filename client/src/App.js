import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { generateEmail as apiGenerateEmail, fetchInbox, simulateEmail as apiSimulateEmail } from './services/api';

function App() {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [simMailLoading, setSimMailLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMail, setSelectedMail] = useState(null);

  // Generate a new temp email from backend
  const generateEmail = async () => {
    setLoading(true);
    try {
      const data = await apiGenerateEmail();
      setEmail(data.email);
      setEmails([]);
    } catch (err) {
      alert('Failed to generate email.');
    }
    setLoading(false);
  };

  // Fetch inbox from backend
  const refreshEmails = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const data = await fetchInbox(email);
      // Only update if emails have changed (length or last email)
      const newEmails = data.emails || [];
      if (
        newEmails.length !== emails.length ||
        (newEmails.length > 0 && emails.length > 0 && JSON.stringify(newEmails[newEmails.length - 1]) !== JSON.stringify(emails[emails.length - 1]))
      ) {
        setEmails(newEmails);
      }
    } catch (err) {
      alert('Failed to fetch emails.');
    }
    setLoading(false);
  };

  // Simulate receiving an email (for demo/testing)
  const simulateEmail = async () => {
    if (!email) return;
    setSimMailLoading(true);
    try {
      await apiSimulateEmail(email);
      await refreshEmails();
    } catch (err) {
      alert('Failed to simulate email.');
    }
    setSimMailLoading(false);
  };

  // Generate email on first load
  useEffect(() => {
    generateEmail();
  }, []);

  // Poll for new emails every 5 seconds
  useEffect(() => {
    if (!email) return;
    const interval = setInterval(() => {
      refreshEmails();
    }, 5000);
    return () => clearInterval(interval);
  }, [email]);

  // Copy email to clipboard
  const copyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);
    }
  };

  // Modal open handler
  const openModal = (mail) => {
    setSelectedMail(mail);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMail(null);
  };

  return (
    <div className="momail-app">
      {/* Header/Logo */}
      <header className="momail-header">
        <div className="momail-logo">
          <span className="logo-icon">📧</span>
          <span className="logo-text">MoMail.in</span>
        </div>
        <nav className="momail-nav">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Status</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Email Card */}
      <div className="email-card">
        <div className="email-card-title">Your Temporary Email Address</div>
        <div className="email-card-address-box">
          <span className="email-card-address">{email || 'Click "Change" to generate an email'}</span>
        </div>
        <div className="email-card-actions">
          <button className="email-action-btn" onClick={generateEmail} disabled={loading}>Change</button>
          <button className="email-action-btn" onClick={copyEmail} disabled={!email}>Copy</button>
          <button className="email-action-btn" onClick={simulateEmail} disabled={!email || simMailLoading}>{simMailLoading ? 'Simulating...' : 'Simulate Email'}</button>
        </div>
        <div className="email-card-inbox">
          <div className="inbox-icon">📥</div>
          <div className="inbox-desc">Your incoming emails will be displayed here...</div>
        </div>
      </div>

      {/* Redesigned Inbox Section */}
      {email && (
        <div className="inbox-section redesigned-inbox">
          <div className="inbox-header-row">
            <h3><span className="inbox-header-icon">📨</span> Inbox for {email}</h3>
            <button className="refresh-btn" onClick={refreshEmails} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh Inbox'}
            </button>
          </div>
          {loading ? (
            <div className="inbox-loading">Loading emails...</div>
          ) : emails.length === 0 ? (
            <div className="inbox-empty">No emails received yet.</div>
          ) : (
            <ul className="inbox-list redesigned-inbox-list inbox-scrollable">
              {emails.map((mail, idx) => (
                <li key={idx} className="inbox-mail redesigned-inbox-mail" onClick={() => openModal(mail)} style={{ cursor: 'pointer' }}>
                  <div className="mail-header">
                    <span className="mail-from">{mail.from}</span>
                    <span className="mail-subject">{mail.subject}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Modal for full email content */}
      {modalOpen && selectedMail && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Email Details</div>
              <button className="modal-close" onClick={closeModal} title="Close">×</button>
            </div>
            <div className="modal-mail-from"><b>From:</b> {selectedMail.from}</div>
            <div className="modal-mail-subject"><b>Subject:</b> {selectedMail.subject}</div>
            <hr className="modal-divider" />
            <div className="modal-mail-body">{selectedMail.body}</div>
          </div>
        </div>
      )}

      {/* MoMail.in Info Section */}
      <section className="momail-info-section">
        <h1>MoMail.in – Get Your Free Temporary Email in Seconds!</h1>
        <h2>Say Goodbye to Spam & Protect Your Real Inbox</h2>
        <p>Tired of spam emails flooding your personal inbox? Use <b>MoMail.in</b>, your fast and free temporary email generator that lets you create a disposable email address valid for 10–15 minutes. No sign-up. No hassle. Just instant privacy.</p>
        <div className="momail-benefits">
          <h3>✅ Why Use MoMail.in?</h3>
          <ul>
            <li>🔒 <b>Stay Anonymous</b> – No registration or personal info needed.</li>
            <li>⏱️ <b>Expires in 10–15 Minutes</b> – Perfect for one-time signups.</li>
            <li>🚀 <b>Instant Inbox</b> – Emails appear live in your browser.</li>
            <li>🧹 <b>Auto-Delete Feature</b> – Mailboxes vanish forever after use.</li>
            <li>📦 <b>Use Anywhere</b> – Sign up on websites, get OTPs, verify accounts.</li>
          </ul>
        </div>
        <div className="momail-how">
          <h3>🔧 How It Works</h3>
          <ol>
            <li>Click "Generate Temporary Email"</li>
            <li>Copy the disposable email address</li>
            <li>Use it on any website or app</li>
            <li>Read incoming emails instantly</li>
            <li>Email auto-deletes in 10–15 minutes!</li>
          </ol>
        </div>
        <div className="momail-when">
          <h3>💼 When to Use MoMail.in?</h3>
          <ul>
            <li>Register on websites without sharing your real email</li>
            <li>Download free resources or software</li>
            <li>Access promotions, coupons, or discount codes</li>
            <li>Sign up for online trials</li>
            <li>Receive OTPs or verifications anonymously</li>
          </ul>
        </div>
        <div className="momail-features">
          <h3>📌 Features at a Glance</h3>
          <table className="features-table">
            <thead>
              <tr><th>Feature</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>Free to Use</td><td>✔ Always 100% free</td></tr>
              <tr><td>Inbox Lifespan</td><td>✔ 10–15 minutes</td></tr>
              <tr><td>Real-Time Updates</td><td>✔ No refresh needed</td></tr>
              <tr><td>No Personal Info</td><td>✔ Totally anonymous</td></tr>
              <tr><td>Works on Any Device</td><td>✔ Mobile, desktop, tablet</td></tr>
            </tbody>
          </table>
        </div>
        <div className="momail-faq">
          <h3>🔍 Frequently Asked Questions</h3>
          <div className="faq-item">
            <b>Q: Is MoMail.in really free?</b>
            <div>A: Yes! MoMail is completely free and will always remain so.</div>
          </div>
          <div className="faq-item">
            <b>Q: Can I receive OTPs or verification codes?</b>
            <div>A: Absolutely. Most websites send OTPs or activation links that you can view directly on our site.</div>
          </div>
          <div className="faq-item">
            <b>Q: How long does my temporary email last?</b>
            <div>A: Each email address is valid for 10 to 15 minutes before it gets deleted permanently.</div>
          </div>
          <div className="faq-item">
            <b>Q: Do I need to sign up?</b>
            <div>A: Nope. No signup, no login, no stress.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

App.propTypes = {};

export default App;