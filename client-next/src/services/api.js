const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api';

export async function generateEmail() {
    const res = await fetch(`${API_BASE}/generate`, { method: 'POST' });
    return res.json();
}

export async function fetchInbox(email) {
    const res = await fetch(`${API_BASE}/inbox/${encodeURIComponent(email)}`);
    return res.json();
}

export async function simulateEmail(email) {
    return fetch(`${API_BASE}/inbox/${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            subject: 'Demo Email',
            from: 'demo@momail.in',
            body: 'This is a simulated email for testing.'
        })
    });
} 