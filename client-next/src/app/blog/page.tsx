import Link from "next/link";
import React from "react";

const posts = [
    {
        slug: "best-temporary-email-services-selzy",
        title: "Best Temporary Email Services (Selzy)",
        date: "2025-06-01",
        excerpt: "A comprehensive review of Selzy's email marketing platform, including features, pricing, pros, cons, and expert verdict.",
    },
    {
        slug: "best-temporary-email-top-free-services-atomicmail",
        title: "Best Temporary Email – Top Free Services in 2025 (AtomicMail)",
        date: "2025-05-15",
        excerpt: "A review of the top free temporary email services for 2025, comparing features, privacy, and usability.",
    },
    {
        slug: "complete-guide-temporary-disposable-email-mystrika",
        title: "The Complete Guide to Temporary Disposable Email Services (MyStrika)",
        date: "2025-04-20",
        excerpt: "A comprehensive guide to how disposable email services work, their benefits, and risks.",
    },
    {
        slug: "how-temporary-email-addresses-affect-marketing-acrelia",
        title: "How Temporary Email Addresses Affect Your Email Marketing (Acrelia)",
        date: "2025-03-10",
        excerpt: "How disposable emails impact email marketing, deliverability, and list hygiene.",
    },
    {
        slug: "enhancing-security-with-temp-mail-iplocation",
        title: "Enhancing Security with Temp Mail: The Ultimate Guide (IPLocation)",
        date: "2025-02-18",
        excerpt: "A guide to using temp mail for privacy, spam protection, and efficient online workflows.",
    },
    {
        slug: "ultimate-guide-temporary-email-vocalmedia",
        title: "The Ultimate Guide to Temporary Email: Protecting Your Privacy (Vocal Media)",
        date: "2025-01-25",
        excerpt: "How temporary email services protect your privacy and how to use them safely.",
    },
    {
        slug: "choose-right-temporary-email-service-tempmailso",
        title: "How to Choose the Right Temporary Email Service (TempMail.so)",
        date: "2024-12-10",
        excerpt: "A checklist for choosing the best temporary email provider for your needs.",
    },
];

export const metadata = {
    title: "Blog | MoMail.in - Temporary Email Tips & Guides",
    description: "Read the latest articles, guides, and tips about temporary email, privacy, and online security from MoMail.in.",
    keywords: [
        "temporary email",
        "temp mail",
        "disposable email",
        "free email",
        "anonymous email",
        "spam protection",
        "email privacy",
        "one-time email",
        "burner email",
        "email security",
        "online privacy",
        "email verification",
        "fake email",
        "email marketing",
        "email tips",
        "email guide",
        "MoMail",
        "MoMail.in",
        "temporary inbox",
        "email generator",
        "no signup email",
        "email for verification",
        "protect inbox",
        "avoid spam",
        "secure email",
        "privacy tools",
        "disposable",
        "momail.in",
        "momail.in blog",
        "momail.in blog posts",
        "momail.in blog articles",
        "momail.in blog posts",
    ]
};

export default function BlogPage() {
    return (
        <div style={{ background: "#fff", minHeight: "100vh" }}>
            <header style={{ borderBottom: "1px solid #e5e7eb", padding: "32px 0 16px 0", marginBottom: 32 }}>
                <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", fontSize: "1.6rem", fontWeight: 700, color: "#2196f3", gap: 10 }}>
                        <span style={{ fontSize: "2.1rem" }}>📧</span>
                        <span style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontWeight: 700, letterSpacing: "-1px" }}>MoMail.in</span>
                    </div>
                    <nav style={{ display: "flex", gap: 24 }}>
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                    </nav>
                </div>
            </header>
            <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 48px 16px" }}>
                <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#222", marginBottom: 8, textAlign: "center" }}>MoMail Blog</h1>
                <h2 style={{ color: "#2196f3", fontSize: "1.15rem", fontWeight: 600, marginBottom: 32, textAlign: "center" }}>
                    Tips, guides, and news about temporary email, privacy, and online security.
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
                    {posts.map((post) => (
                        <div key={post.slug} style={{
                            background: "#f8fafc",
                            borderRadius: 16,
                            boxShadow: "0 2px 8px 0 rgba(33,150,243,0.06)",
                            padding: "28px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            border: "1px solid #e5e7eb"
                        }}>
                            <div style={{ color: "#888", fontSize: "0.98rem", marginBottom: 4 }}>{post.date}</div>
                            <h2 style={{ fontSize: "1.18rem", fontWeight: 700, margin: 0, color: "#2196f3" }}>
                                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "#2196f3" }}>{post.title}</Link>
                            </h2>
                            <p style={{ color: "#444", fontSize: "1.05rem", margin: 0 }}>{post.excerpt}</p>
                            <div style={{ marginTop: 8 }}>
                                <Link href={`/blog/${post.slug}`} style={{ color: "#2eaf6a", fontWeight: 600 }}>Read more →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
} 