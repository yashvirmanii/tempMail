import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
    {
        slug: "why-use-temporary-email",
        title: "Why Use Temporary Email? Benefits & Use Cases",
        date: "2024-06-01",
        content: `
      <p>Temporary email addresses are a powerful tool for protecting your privacy online. Here are some reasons to use them:</p>
      <ul>
        <li><b>Prevent Spam:</b> Use a disposable address for signups and keep your real inbox clean.</li>
        <li><b>Stay Anonymous:</b> No need to reveal your personal email to unknown sites.</li>
        <li><b>One-Time Use:</b> Great for downloads, trials, and promotions.</li>
        <li><b>Security:</b> Reduce the risk of phishing and data leaks.</li>
      </ul>
      <p>Try MoMail.in today and experience hassle-free, private email!</p>
    `,
    },
    {
        slug: "how-temporary-emails-work",
        title: "How Temporary Email Services Work (Behind the Scenes)",
        date: "2024-06-02",
        content: `
      <p>Temporary email services generate random addresses and provide a short-lived inbox. Here’s how it works:</p>
      <ol>
        <li>You generate a temp email address.</li>
        <li>All emails sent to that address appear instantly in your browser.</li>
        <li>After 10–15 minutes, the inbox and all emails are deleted forever.</li>
      </ol>
      <p>MoMail.in uses secure, in-memory storage and never asks for your personal info.</p>
    `,
    },
    {
        slug: "best-temporary-email-services-selzy",
        title: "Best Temporary Email Services (Selzy)",
        date: "2025-06-01",
        content: `
      <p><b>Source:</b> <a href="https://www.smbguide.com/review/selzy/" target="_blank" rel="noopener">Selzy Review: Features, Pricing, & Alternatives [2025]</a></p>
      <h2>Our Verdict</h2>
      <p>Discover how Selzy's user-friendly email marketing and automation tools can help small businesses in our review, covering features, pros, cons, and more.</p>
      <h3>SMB Guide’s Verdict for Selzy</h3>
      <p>I gave Selzy a <b>7.25 out of 10</b> due to its solid strengths and some notable weaknesses. The affordable pricing plans, including a free option, and the robust marketing automation capabilities really stood out to me. I found the user interface intuitive, making it easy to navigate and use. However, I noticed some limitations in customization and personalization features, which might not meet the needs of people looking for advanced options. The basic reporting tools and limited third-party integrations also posed challenges for those requiring detailed analytics and extensive compatibility. Despite these issues, I still see Selzy as a reliable option, especially for those prioritizing ease of use and automation.</p>
      <h3>Pricing & Plans</h3>
      <ul>
        <li><b>Free:</b> $0/month, up to 1500 emails, 100 contacts, bulk emails, email builder, analytics, 24/7 support, etc.</li>
        <li><b>Lite:</b> $7.50/month, unlimited emails, 500 contacts, all Free features plus more.</li>
        <li><b>Standard:</b> $10/month, all Lite features plus A/B testing, segmentation, etc.</li>
        <li><b>Premium:</b> $220/month, all Standard features plus full campaign management, analytics, training, etc.</li>
      </ul>
      <h3>Marketing Automation Capabilities</h3>
      <p>Selzy offers automation on the Standard plan, with pre-built automation chains and the option to build your own from scratch. Choose one of the pre-built options to customize, or start from scratch with triggers like Add to List, Subscribe to a List, Add new tags, and more. Actions include sending emails, changing fields, adding or deleting subscribers, and more.</p>
      <h3>Email Builder</h3>
      <p>You can create email, SMS, Viber, and Telegram campaigns. There are 75 system templates to choose from, or you can start from scratch. The drag-and-drop editor also allows switching to HTML for granular control.</p>
      <h3>Personalization & Customization</h3>
      <p>The personalization options are available for the subject line. No way to add personalization to the email content itself.</p>
      <h3>Campaign Performance Tracking</h3>
      <p>Reporting options include clicks, opens, sends, and more. You can see the performance of several campaigns or trigger-based emails, compare lists, and users.</p>
      <h3>User Interface and User Experience</h3>
      <p>The user interface is easy to understand and navigate. Everything is clearly laid out on the left side. Analytics data is under Tools.</p>
      <h3>Integrations and Compatibility</h3>
      <p>Selzy offers integrations with HubSpot, Google Analytics, Facebook, and more. Free plan has limited integration capabilities.</p>
      <h3>Customer Support</h3>
      <p>Customer support is available 24/7, even for free users. No phone support, but email support is available. Response time is usually a few hours. There’s also a knowledge base for self-service.</p>
      <h3>Selzy — Unique Features</h3>
      <p>Selzy offers an email marketing course on the standard plan and the option for the Selzy team to plan and execute your email marketing strategy on the Premium plan. This, combined with affordability, makes it stand out from the competition.</p>
      <h3>What the Experts Say About Selzy</h3>
      <ul>
        <li><b>Capterra rating:</b> 4.8/5 (110 reviews)</li>
        <li><b>GetApp rating:</b> 4.8/5 (110 reviews)</li>
        <li><b>G2 rating:</b> 4.7/5 (33 reviews)</li>
      </ul>
      <blockquote>Selzy streamlines our email marketing efforts by allowing us to easily communicate with our new app users about updates, new features, and collaborations with brands. Its automation tools enable us to set up workflows for timely messages, ensuring our users stay informed and engaged. With advanced segmentation, we can target specific user groups, maximizing the relevance and impact of our communications. This ultimately fosters stronger relationships with our users and enhances their overall experience with our app.<br/>— Duygu A., Co-founder – Verified Capterra review</blockquote>
      <blockquote>My overall experience for the Selzy is very good, we love to work with Selzy, it’s make easy process for management of emails and have advance feature of auto respond. It’s cost effective and easy to handle software<br/>— Govind U., Business Development Executive – Verified Capterra review</blockquote>
      <h3>Selzy Alternatives</h3>
      <ul>
        <li><b>MailerLite:</b> More customization, advanced reporting, more integrations. Free plan available. <a href="https://www.smbguide.com/mailerlite/" target="_blank">Learn more</a></li>
        <li><b>Brevo:</b> Advanced SMS marketing, CRM, and segmentation. Free plan available. <a href="https://www.smbguide.com/brevo/" target="_blank">Learn more</a></li>
        <li><b>Mailchimp:</b> Advanced segmentation, predictive insights, multi-channel marketing. Free plan available. <a href="https://www.smbguide.com/mailchimp/" target="_blank">Learn more</a></li>
      </ul>
      <h3>Getting Started with Selzy</h3>
      <p>Selzy stands out with its user-friendly interface, advanced automation workflows, affordable price point, and ease of use. Whether you’re a small business or a seasoned marketer, Selzy’s features are designed to streamline your email marketing efforts and drive results without breaking the bank.</p>
      <p><b>Original article:</b> <a href="https://www.smbguide.com/review/selzy/" target="_blank" rel="noopener">Read on SMB Guide</a></p>
    `,
    },
];

const externalLinks = [
    {
        url: "https://selzy.com/en/blog/best-temporary-email/",
        title: "Best Temporary Email Services (Selzy)",
    },
    {
        url: "https://atomicmail.io/blog/best-temporary-email-top-free-services-overview",
        title: "Best Temporary Email – Top Free Services in 2025 (AtomicMail)",
    },
    {
        url: "https://blog.mystrika.com/the-complete-guide-to-temporary-disposable-email-services/",
        title: "The Complete Guide to Temporary Disposable Email Services (MyStrika)",
    },
    {
        url: "https://www.acrelia.com/en/blog/post/how-temporary-email-addresses-affect-your-email-marketing",
        title: "How Temporary Email Addresses Affect Your Email Marketing (Acrelia)"
    },
    {
        url: "https://www.iplocation.net/enhancing-security-with-temp-mail-the-ultimate-guide-to-spam-protection-and-efficient-workflow",
        title: "Enhancing Security with Temp Mail: The Ultimate Guide (IPLocation)"
    },
    {
        url: "https://vocal.media/writers/the-ultimate-guide-to-temporary-email-protecting-your-privacy-in-the-digital-age",
        title: "The Ultimate Guide to Temporary Email: Protecting Your Privacy (Vocal Media)"
    },
    {
        url: "https://tempmail.so/blog/how-to-choose-right-temporary-email-service",
        title: "How to Choose the Right Temporary Email Service (TempMail.so)"
    }
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
        title: `${post.title} | MoMail.in Blog`,
        description: post.content.replace(/<[^>]+>/g, '').slice(0, 160),
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return notFound();
    return (
        <div className="momail-app" style={{ minHeight: "100vh", background: "#f8fafc" }}>
            <header className="momail-header">
                <div className="momail-logo">
                    <span className="logo-icon">📧</span>
                    <span className="logo-text">MoMail.in</span>
                </div>
                <nav className="momail-nav">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <a href="#">Status</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <main className="main-content" style={{ maxWidth: 1200, display: 'flex', flexDirection: 'row', gap: 40 }}>
                {/* Main Blog Content */}
                <section style={{ flex: 2, minWidth: 0 }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: 18,
                        boxShadow: '0 4px 32px 0 rgba(33, 150, 243, 0.08)',
                        padding: '40px 32px 32px 32px',
                        marginBottom: 36,
                        marginTop: 24,
                        maxWidth: 800,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <div style={{ color: '#888', fontSize: '1.01rem', marginBottom: 10 }}>{post.date}</div>
                        <h1 style={{ fontSize: '2rem', color: '#2196f3', fontWeight: 800, marginBottom: 18 }}>{post.title}</h1>
                        <article style={{ color: '#444', fontSize: '1.13rem', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: post.content }} />
                        <div style={{ marginTop: 32 }}>
                            <Link href="/blog" style={{ color: '#2eaf6a', fontWeight: 600, fontSize: '1.05rem' }}>← Back to Blog</Link>
                        </div>
                    </div>
                </section>
                {/* Sidebar: Featured Resources */}
                <aside style={{ flex: 1, minWidth: 260, maxWidth: 340 }}>
                    <div style={{
                        background: '#e3f0fd',
                        borderRadius: 16,
                        boxShadow: '0 2px 12px 0 rgba(33,150,243,0.07)',
                        padding: '28px 20px',
                        marginBottom: 32,
                        marginTop: 40,
                    }}>
                        <h2 style={{ color: '#2196f3', fontWeight: 700, fontSize: '1.12rem', marginBottom: 16, textAlign: 'center' }}>Featured Resources</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {externalLinks.map((link) => (
                                <li key={link.url} style={{ marginBottom: 14 }}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'underline', wordBreak: 'break-all' }}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
} 