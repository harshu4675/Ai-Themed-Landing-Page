import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      label: "API Calls Today",
      value: "124,892",
      change: "+12.5%",
      icon: "📊",
      positive: true,
    },
    {
      label: "Active Models",
      value: "8",
      change: "+2",
      icon: "🧠",
      positive: true,
    },
    {
      label: "Avg Response Time",
      value: "12ms",
      change: "-3ms",
      icon: "⚡",
      positive: true,
    },
    {
      label: "Error Rate",
      value: "0.02%",
      change: "-0.01%",
      icon: "✅",
      positive: true,
    },
  ];

  const recentActivity = [
    {
      action: "Model deployed",
      model: "GPT-4 Fine-tuned",
      time: "2 min ago",
      status: "success",
    },
    {
      action: "API key created",
      model: "Production Key",
      time: "15 min ago",
      status: "success",
    },
    {
      action: "Training completed",
      model: "Custom Classifier",
      time: "1 hour ago",
      status: "success",
    },
    {
      action: "Webhook triggered",
      model: "Slack Integration",
      time: "2 hours ago",
      status: "info",
    },
    {
      action: "Usage alert",
      model: "80% quota used",
      time: "5 hours ago",
      status: "warning",
    },
  ];

  const models = [
    {
      name: "Text Generation v2",
      type: "GPT-4 Fine-tuned",
      calls: "45.2K",
      status: "Active",
    },
    {
      name: "Sentiment Analyzer",
      type: "Custom Classifier",
      calls: "32.1K",
      status: "Active",
    },
    {
      name: "Image Captioner",
      type: "Vision Model",
      calls: "28.7K",
      status: "Active",
    },
    {
      name: "Code Assistant",
      type: "Codex Fine-tuned",
      calls: "18.9K",
      status: "Training",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-dark)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Dashboard Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border-color)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <div style={{ display: "flex", gap: "32px" }}>
          {["overview", "models", "api-keys", "analytics", "settings"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "none",
                  border: "none",
                  color:
                    activeTab === tab
                      ? "var(--primary-light)"
                      : "var(--text-secondary)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "8px 0",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid var(--primary)"
                      : "2px solid transparent",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize",
                }}
              >
                {tab.replace("-", " ")}
              </button>
            ),
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              padding: "10px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            🔔
          </button>
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "var(--gradient-primary)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            👤
          </div>
          <button onClick={handleLogout} className="btn btn-ghost btn-small">
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            Welcome back, John! 👋
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
            Here's what's happening with your AI models today.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-lg)",
                padding: "28px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{stat.icon}</span>
                <span
                  style={{
                    padding: "4px 10px",
                    background: stat.positive
                      ? "rgba(16, 185, 129, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                    color: stat.positive ? "var(--accent-green)" : "#ef4444",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {stat.change}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "24px",
          }}
        >
          {/* Models Table */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-lg)",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                }}
              >
                Your Models
              </h2>
              <button className="btn btn-primary btn-small">+ New Model</button>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    Type
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    API Calls
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr
                    key={index}
                    style={{ borderBottom: "1px solid var(--border-color)" }}
                  >
                    <td style={{ padding: "16px 0", fontWeight: 600 }}>
                      {model.name}
                    </td>
                    <td
                      style={{
                        padding: "16px 0",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {model.type}
                    </td>
                    <td
                      style={{
                        padding: "16px 0",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {model.calls}
                    </td>
                    <td style={{ padding: "16px 0" }}>
                      <span
                        style={{
                          padding: "4px 12px",
                          background:
                            model.status === "Active"
                              ? "rgba(16, 185, 129, 0.1)"
                              : "rgba(139, 92, 246, 0.1)",
                          color:
                            model.status === "Active"
                              ? "var(--accent-green)"
                              : "var(--primary-light)",
                          borderRadius: "var(--radius-full)",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        {model.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Activity */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-lg)",
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              Recent Activity
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  style={{ display: "flex", gap: "16px", alignItems: "start" }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      marginTop: "6px",
                      background:
                        activity.status === "success"
                          ? "var(--accent-green)"
                          : activity.status === "warning"
                            ? "#f59e0b"
                            : "var(--accent-cyan)",
                      boxShadow: `0 0 10px ${
                        activity.status === "success"
                          ? "var(--accent-green)"
                          : activity.status === "warning"
                            ? "#f59e0b"
                            : "var(--accent-cyan)"
                      }`,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: "4px" }}>
                      {activity.action}
                    </div>
                    <div
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {activity.model}
                    </div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.8rem",
                        marginTop: "4px",
                      }}
                    >
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            { icon: "🚀", title: "Deploy Model", desc: "Push to production" },
            { icon: "📊", title: "View Analytics", desc: "See detailed stats" },
            { icon: "🔑", title: "API Keys", desc: "Manage access" },
            { icon: "📚", title: "Documentation", desc: "Read the docs" },
          ].map((action, index) => (
            <button
              key={index}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {action.icon}
              </span>
              <div
                style={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                {action.title}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {action.desc}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
