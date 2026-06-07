import { type Page, useSlidePageNumber } from "@open-slide/core";

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
      fontSize: 72,
      fontWeight: 800,
      margin: "0 0 16px 0",
      color: "#F8FAFC",
    }}
  >
    {children}
  </h1>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: "absolute",
        left: 120,
        right: 120,
        bottom: 60,
        display: "flex",
        justifyContent: "space-between",
        fontSize: 24,
        color: "#94A3B8",
        fontFamily: "monospace",
      }}
    >
      <span style={{ color: "#14B8A6" }}>●</span>
      <span>
        {current} / {total}
      </span>
    </div>
  );
};

const StatCard = ({ val, label }: { val: string; label: string }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: "4px solid #14B8A6",
      padding: "32px 24px",
      borderRadius: 16,
      textAlign: "center",
      flex: 1,
    }}
  >
    <div style={{ fontSize: 56, fontWeight: 800, color: "#F8FAFC" }}>
      {val}
    </div>
    <div style={{ fontSize: 22, color: "#94A3B8", fontFamily: "monospace" }}>
      {label}
    </div>
  </div>
);

const fill = {
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
} as const;

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: "#081626",
      padding: 120,
      justifyContent: "center",
    }}
  >
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
    `}</style>
    <Title>Minimal Green</Title>
    <p
      className="animate-fade-up delay-100"
      style={{
        fontSize: 40,
        color: "#94A3B8",
        maxWidth: 1000,
        margin: "24px 0 0 0",
        fontFamily: "'Calibri', system-ui, sans-serif",
      }}
    >
      Three colors — dark void, white text, teal accent
    </p>
    <Footer />
  </div>
);

const Content: Page = () => (
  <div
    style={{
      ...fill,
      background: "#081626",
      padding: "80px 120px",
    }}
  >
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
    `}</style>
    <h1
      className="animate-fade-up"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 48px 0",
        color: "#F8FAFC",
      }}
    >
      Key Metrics
    </h1>
    <div
      className="animate-fade-up delay-100"
      style={{ display: "flex", gap: 32, flex: 1 }}
    >
      <StatCard val="423" label="Identities" />
      <StatCard val="512" label="Dimensions" />
      <StatCard val="98.4%" label="Accuracy" />
    </div>
    <div
      className="animate-fade-up delay-200"
      style={{
        marginTop: 48,
        padding: 24,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.1)",
        borderLeft: "6px solid #14B8A6",
        background: "rgba(20, 184, 166, 0.06)",
      }}
    >
      <p
        style={{
          fontSize: 28,
          color: "#F8FAFC",
          margin: 0,
          fontFamily: "'Calibri', system-ui, sans-serif",
          lineHeight: 1.5,
        }}
      >
        Cards use a translucent container with a teal top border. The rest is
        negative space — letting the numbers breathe.
      </p>
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      ...fill,
      background: "#081626",
      padding: 120,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
    `}</style>
    <div
      className="animate-fade-up"
      style={{
        width: 80,
        height: 6,
        borderRadius: 3,
        background: "#14B8A6",
        marginBottom: 48,
      }}
    />
    <h1
      className="animate-fade-up delay-100"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
        fontSize: 120,
        fontWeight: 900,
        color: "#F8FAFC",
        margin: 0,
      }}
    >
      Thank You
    </h1>
    <p
      className="animate-fade-up delay-200"
      style={{
        fontSize: 32,
        color: "#94A3B8",
        marginTop: 24,
        fontFamily: "'Calibri', system-ui, sans-serif",
      }}
    >
      Minimal Green · 3 Colors
    </p>
    <Footer />
  </div>
);

export default [Cover, Content, Closer];
