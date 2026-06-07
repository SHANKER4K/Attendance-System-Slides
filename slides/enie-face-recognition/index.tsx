import React from "react";
import type { DesignSystem, Page, SlideMeta } from "@open-slide/core";

export const notes: (string | undefined)[] = [
  "Assalamu alaykum. Today, we will present what we covered during our internship at ENIE. After that, we will conduct a brief interview about the company. Then, we will present the project we worked on. First, my friend will present the internship phase, and then I will move on to the project.",
  undefined,
  `During the internship, we have seen a great problem of attendance and punctuality issues. Employees frequently arrive late or leave early, making a huge gap in the production system.
There was also a problem in the attendance devices they have, some recognition problems with some employees.
All of that results in wasting time and always starting late, so we needed to fix that problem!`,
  "Regarding the problem we decided to make an improved version of the attendance system ",
  "The project works as follows: First the camera detects the employee check if he is live or fake, align the face image, embed it, recognize him and finally log him",
  `The architecture as follow there is two options:
1- Registering an employee
2- Daily attendance`,
  "We gathered a faces dataset from kaggle for finetune and feature selection, the dataset have some problems that some individuals have less than 4 images so we have to clean them.",
];

export const design: DesignSystem = {
  palette: { bg: "#081626", text: "#E2E8F0", accent: "#794fee" },
  fonts: {
    display:
      '-apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
    body: '"Calibri", system-ui, sans-serif',
  },
  typeScale: { hero: 160, body: 40 },
  radius: 16,
};

const lightBg = "#F8FAFC";
const lightText = "#0D1B2A";
const highlight = "#14B8A6";
const warning = "#F59E0B";
const danger = "#EF4444";
const success = "#22C55E";

const fill = {
  width: "100%",
  height: "100%",
  fontFamily: "var(--osd-font-body)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
} as const;

const MotionStyles = () => (
  <style>
    {`
      @keyframes fadeUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
      @keyframes scaleIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
      @keyframes drawPath { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
      .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
      .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
      .animate-scale-in { animation: scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
      .animate-draw { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawPath 2s ease-out forwards; }
      .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; } .delay-500 { animation-delay: 500ms; } .delay-600 { animation-delay: 600ms; }
      .delay-700 { animation-delay: 700ms; } .delay-800 { animation-delay: 800ms; }
      .justify-text { text-align: justify; text-justify: inter-word; }
    `}
  </style>
);

const SVGDefs = () => (
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
    <marker
      id="arrow-teal"
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill={highlight} />
    </marker>
    <marker
      id="arrow-warning"
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill={warning} />
    </marker>
    <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stopColor={highlight} stopOpacity="0.15" />
      <stop offset="100%" stopColor="#0D1B2A" stopOpacity="0.8" />
    </radialGradient>
    <linearGradient id="marginGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor={highlight} stopOpacity="0.2" />
      <stop offset="100%" stopColor={warning} stopOpacity="0.2" />
    </linearGradient>
  </defs>
);

const DecorativeCircles = () => (
  <div style={{ position: "absolute", top: -100, right: -100, opacity: 0.1 }}>
    <div
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        border: `4px solid ${highlight}`,
        position: "absolute",
        top: 50,
        right: 50,
      }}
      className="animate-scale-in"
    />
    <div
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        border: `2px solid ${highlight}`,
        position: "absolute",
        top: 150,
        right: 150,
      }}
      className="animate-scale-in delay-200"
    />
  </div>
);

const MVar = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <span
    style={{
      fontStyle: "italic",
      fontFamily: '"Cambria Math", "Times New Roman", serif',
      color: color || "inherit",
    }}
  >
    {children}
  </span>
);

const MSub = ({
  base,
  sub,
}: {
  base: React.ReactNode;
  sub: React.ReactNode;
}) => (
  <span>
    {base}
    <span style={{ fontSize: "0.6em", verticalAlign: "sub", marginLeft: 2 }}>
      {sub}
    </span>
  </span>
);

const MSup = ({
  base,
  sup,
}: {
  base: React.ReactNode;
  sup: React.ReactNode;
}) => (
  <span>
    {base}
    <span style={{ fontSize: "0.6em", verticalAlign: "super", marginLeft: 2 }}>
      {sup}
    </span>
  </span>
);

const MFrac = ({
  num,
  den,
}: {
  num: React.ReactNode;
  den: React.ReactNode;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 12px",
    }}
  >
    <div
      style={{ padding: "0 12px 6px 12px", borderBottom: "2px solid #E2E8F0" }}
    >
      {num}
    </div>
    <div style={{ padding: "6px 12px 0 12px" }}>{den}</div>
  </div>
);

const ObservationCard = ({ title, desc, delay, color }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "white",
      padding: "40px",
      borderRadius: 16,
      borderTop: `8px solid ${color}`,
      boxShadow: "0 20px 40px rgba(13, 27, 42, 0.05)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    <h3
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 36,
        fontWeight: 700,
        margin: 0,
        color: lightText,
        lineHeight: 1.2,
      }}
    >
      {title}
    </h3>
    <p
      style={{ fontSize: 28, margin: 0, color: "#475569", lineHeight: 1.5 }}
      className="justify-text"
    >
      {desc}
    </p>
  </div>
);

const ProblemCard = ({ title, desc, delay }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "rgba(255, 255, 255, 0.03)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderLeft: `6px solid ${warning}`,
      padding: "24px 32px",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    }}
  >
    <h4
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 32,
        fontWeight: 700,
        margin: 0,
        color: "var(--osd-text)",
      }}
    >
      {title}
    </h4>
    <p style={{ fontSize: 26, margin: 0, color: "#94A3B8", lineHeight: 1.5 }}>
      {desc}
    </p>
  </div>
);

const TechBox = ({ label, delay }: { label: string; delay: string }) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "var(--osd-bg)",
      color: "var(--osd-text)",
      padding: "24px 40px",
      borderRadius: "var(--osd-radius)",
      fontFamily: "monospace",
      fontSize: 32,
      fontWeight: 600,
      textAlign: "center",
      borderBottom: `4px solid var(--osd-accent)`,
    }}
  >
    {label}
  </div>
);

const InsightBox = ({
  text,
  delay,
  color = highlight,
  bg = "rgba(13, 148, 136, 0.1)",
}: any) => (
  <div
    className={`animate-fade-in ${delay}`}
    style={{
      borderLeft: `6px solid ${color}`,
      padding: "24px 32px",
      background: bg,
      fontSize: 26,
      fontWeight: 600,
      color: color,
      marginTop: "auto",
      borderRadius: "0 12px 12px 0",
    }}
  >
    {text}
  </div>
);

const PipelineNode = ({
  x,
  num,
  title,
  sub,
  hasArrow,
}: {
  x: number;
  num: string;
  title: string;
  sub: string;
  hasArrow?: boolean;
}) => (
  <g transform={`translate(${x}, 0)`}>
    <rect
      x="0"
      y="0"
      width="220"
      height="120"
      rx="12"
      fill="rgba(255,255,255,0.05)"
      stroke={highlight}
      strokeWidth="2"
    />
    <text
      x="110"
      y="50"
      fill="white"
      fontSize="24"
      fontFamily="var(--osd-font-display)"
      fontWeight="700"
      textAnchor="middle"
    >
      {title}
    </text>
    <text
      x="110"
      y="90"
      fill="#94A3B8"
      fontSize="20"
      fontFamily="monospace"
      textAnchor="middle"
    >
      {sub}
    </text>
    <circle cx="110" cy="0" r="20" fill={highlight} />
    <text
      x="110"
      y="6"
      fill="#0D1B2A"
      fontSize="16"
      fontWeight="bold"
      textAnchor="middle"
    >
      {num}
    </text>
    {hasArrow && (
      <line
        x1="230"
        y1="60"
        x2="290"
        y2="60"
        stroke="#475569"
        strokeWidth="4"
        markerEnd="url(#arrow)"
      />
    )}
  </g>
);

const PipelineSVG = () => (
  <svg
    width="100%"
    height="240"
    viewBox="0 0 1800 240"
    className="animate-fade-in delay-200"
  >
    <SVGDefs />
    <g transform="translate(50, 60)">
      <PipelineNode x={0} num="01" title="Detection" sub="MTCNN" hasArrow />
      <PipelineNode
        x={300}
        num="02"
        title="Alignment"
        sub="68 Landmarks"
        hasArrow
      />
      <PipelineNode
        x={600}
        num="03"
        title="Anti-Spoofing"
        sub="MiniFAS"
        hasArrow
      />
      <PipelineNode
        x={900}
        num="04"
        title="Embedding"
        sub="FaceNet 512-d"
        hasArrow
      />
      <PipelineNode
        x={1200}
        num="05"
        title="Recognition"
        sub="Cosine Sim."
        hasArrow
      />
      <PipelineNode x={1500} num="06" title="Attendance" sub="CSV / Excel" />
    </g>
  </svg>
);

const StatCard = ({ val, label, delay }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `4px solid ${highlight}`,
      padding: "32px 24px",
      borderRadius: 12,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    <div
      style={{
        fontSize: 56,
        fontFamily: "var(--osd-font-display)",
        fontWeight: 800,
        color: "white",
      }}
    >
      {val}
    </div>
    <div style={{ fontSize: 22, color: "#94A3B8", fontFamily: "monospace" }}>
      {label}
    </div>
  </div>
);

const MetricCompare = ({ metric, softmax, arcface, delay }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      flex: 1,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `4px solid ${highlight}`,
      borderRadius: 12,
      padding: "20px 16px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    <div style={{ fontSize: 20, color: "#94A3B8", fontFamily: "monospace" }}>
      {metric}
    </div>
    <div style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>
      {"InceptionResNetV1 "}
    </div>
    <div
      style={{
        fontSize: 34,
        fontWeight: 800,
        color: "#94A3B8",
      }}
    >
      {softmax}
    </div>
    <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
    <div style={{ fontSize: 14, color: highlight, marginTop: 4 }}>+ArcFace</div>
    <div
      style={{
        fontSize: 34,
        fontWeight: 800,
        color: highlight,
      }}
    >
      {arcface}
    </div>
  </div>
);

const OptionCard = ({ title, req, res, verdict, color, delay }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${color}`,
      borderRadius: 12,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    <h4
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 32,
        color: "white",
        margin: 0,
      }}
    >
      {title}
    </h4>
    <div style={{ fontSize: 24, color: "#94A3B8" }}>
      <span style={{ color, fontWeight: "bold" }}>{"Requires:"}</span> {req}
    </div>
    <div style={{ fontSize: 24, color: "#94A3B8" }}>
      <span style={{ color, fontWeight: "bold" }}>{"Result:"}</span> {res}
    </div>
    <div
      style={{
        background: color,
        color: "#0D1B2A",
        padding: "12px",
        borderRadius: 8,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      {verdict}
    </div>
  </div>
);

const LearningCard = ({ title, items, delay, icon }: any) => (
  <div
    className={`animate-fade-up ${delay}`}
    style={{
      background: "white",
      padding: 40,
      borderRadius: 16,
      boxShadow: "0 20px 40px rgba(13,27,42,0.05)",
      borderTop: `6px solid ${highlight}`,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <div
        style={{
          width: 64,
          height: 64,
          background: "rgba(13, 148, 136, 0.1)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: highlight,
          fontSize: 32,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--osd-font-display)",
          fontSize: 36,
          fontWeight: 700,
          margin: 0,
          color: lightText,
        }}
      >
        {title}
      </h3>
    </div>
    <ul
      style={{
        fontSize: 26,
        lineHeight: 1.6,
        color: "#475569",
        paddingLeft: 32,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {items}
    </ul>
  </div>
);

// ────────────────── Page components ──────────────────

const Slide01Title: Page = () => (
  <div
    style={{
      ...fill,
      padding: "100px 160px",
      justifyContent: "center",
      background: "var(--osd-bg)",
    }}
  >
    <MotionStyles />
    <DecorativeCircles />
    <div
      className="animate-fade-in"
      style={{
        display: "inline-block",
        padding: "12px 24px",
        background: "rgba(13, 148, 136, 0.15)",
        color: highlight,
        borderRadius: 100,
        fontFamily: "monospace",
        fontSize: 24,
        letterSpacing: "0.1em",
        marginBottom: 40,
        width: "fit-content",
      }}
    >
      2025 · 2026
    </div>
    <h1
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: "103px",
        fontWeight: 800,
        lineHeight: 1.1,
        margin: "0 0 24px 0",
        color: "white",
      }}
    >
      Intelligent Attendance Control
      <br />
      System using Face Recognition
      {""}
    </h1>
    <h2
      className="animate-fade-up delay-100"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 52,
        fontWeight: 500,
        color: "var(--osd-accent)",
        margin: "0 0 40px 0",
      }}
    >
      {""}
    </h2>
    <p
      className="animate-fade-up delay-200"
      style={{
        fontSize: 32,
        color: "#94A3B8",
        fontFamily: "monospace",
        margin: "0 0 80px 0",
      }}
    >
      Deep Learning · Computer Vision · ArcFace · PyTorch
    </p>
  </div>
);

const Slide02Context: Page = () => (
  <div style={{ ...fill, background: lightBg, padding: "100px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 80,
        fontWeight: 800,
        margin: "0 0 80px 0",
        color: lightText,
      }}
    >What We Observed</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 40,
        flex: 1,
      }}
    >
      <ObservationCard
        title="Electronic Maintenance"
        desc="Fault diagnosis and rigorous repair of electronic circuits using highly specialized tools."
        color="var(--osd-accent)"
        delay="delay-100"
      />
      <ObservationCard
        title="Solar Panel Production"
        desc="Full manufacturing pipeline starting from raw materials directly to comprehensive quality testing."
        color="#3B82F6"
        delay="delay-200"
      />
      <ObservationCard
        title="IT Infrastructure"
        desc="Dedicated server management, secure internal networks, and strict security protocols."
        color="#8B5CF6"
        delay="delay-300"
      />
    </div>
  </div>
);

const Slide03Problem: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 80,
        fontWeight: 800,
        margin: "0 0 60px 0",
        color: "white",
      }}
    >
      The Real Problem
    </h2>
    <div style={{ display: "flex", gap: 80, flex: 1, alignItems: "center" }}>
      <div
        className="animate-scale-in delay-100"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <svg viewBox="0 0 400 400" width="400" height="400">
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="rgba(239, 68, 68, 0.1)"
            stroke={warning}
            strokeWidth="8"
            strokeDasharray="20 10"
            className="animate-draw"
          />
          <text
            x="200"
            y="180"
            fill="white"
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="var(--osd-font-display)"
          >
            Worker Delays
          </text>
          <text
            x="200"
            y="240"
            fill="white"
            fontSize="32"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="var(--osd-font-display)"
          >
            &amp; Evasion
          </text>
        </svg>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "16px 32px",
            borderRadius: 100,
            fontSize: 24,
            color: warning,
            marginTop: 24,
          }}
        >
          Current System: Bad Attendance
        </div>
      </div>
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <ProblemCard
          title="Attendance and punctuality issues"
          desc="Employees frequently arrive late or leave early, and some even attempt to evade attendance tracking entirely."
          delay="delay-200"
        />
        <ProblemCard
          title="Hardware Failures"
          desc="The devices used by the company are very weak and fragile, resulting in a heavier workload for the IT team."
          delay="delay-300"
        />
        <ProblemCard
          title="Wasted Time"
          desc="Attendance problems cause employees to wait for the IT team to fix problems."
          delay="delay-400"
        />
        {/* <ProblemCard
          title="Reporting Difficulty"
          desc="Generating monthly reports requires exhausting manual data entry."
          delay="delay-500"
        /> */}
      </div>
    </div>
  </div>
);

const Slide04Solution: Page = () => (
  <div style={{ ...fill, background: lightBg, padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 80,
        fontWeight: 800,
        margin: "0 0 60px 0",
        color: lightText,
        textAlign: "center",
      }}
    >
      Proposed Solution
    </h2>
    <div
      className="animate-fade-up delay-100"
      style={{
        background: "var(--osd-accent)",
        color: "white",
        padding: "40px 48px",
        borderRadius: 16,
        fontSize: 44,
        fontFamily: "var(--osd-font-display)",
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 60,
        boxShadow: "0 20px 40px rgba(13, 148, 136, 0.2)",
      }}
    >
      Intelligent Face Recognition Attendance System
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 32,
        marginBottom: 60,
      }}
    >
      <TechBox label="Python" delay="delay-200" />
      <TechBox label="PyTorch" delay="delay-300" />
      <TechBox label="FaceNet" delay="delay-400" />
      <TechBox label="ArcFace" delay="delay-500" />
    </div>
    <div
      style={{
        padding: "0 60px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ul
        className="animate-fade-up delay-600"
        style={{
          fontSize: 32,
          lineHeight: 1.8,
          color: "#334155",
          margin: "0 0 40px 0",
          paddingLeft: 40,
        }}
      >
        <li>
          Automatic attendance registration without requiring manual
          intervention.
        </li>
        <li>
          Exceptional accuracy powered by ArcFace (Deng et al., CVPR 2019).
        </li>
        <li>
          Instant automated CSV / Excel report generation for HR departments.
        </li>
      </ul>
    </div>
  </div>
);

const Slide05Pipeline: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "100px 80px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 80,
        fontWeight: 800,
        margin: "0 0 80px 0",
        color: "white",
      }}
    >
      System Pipeline
    </h2>
    <PipelineSVG />
    <InsightBox
      delay="delay-600"
      color="#94A3B8"
      bg="rgba(255,255,255,0.05)"
      text="Architecture completely implemented via code: MTCNN + FaceNet Backbone + ArcFace Loss directly derived from Deng et al. 2019."
    />
  </div>
);

const Slide06Architecture: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 40px 0",
        color: "white",
      }}
    >
      System Architecture
    </h2>
    <div
      className="animate-fade-up delay-100"
      style={{
        background: "rgba(13, 148, 136, 0.08)",
        border: `1px solid ${highlight}`,
        borderRadius: 16,
        padding: "40px 48px",
        marginBottom: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            background: highlight,
            color: "#0D1B2A",
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          1
        </div>
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 40,
            fontWeight: 700,
            margin: 0,
            color: highlight,
          }}
        >
          Employee Registration (One-Time)
        </h3>
      </div>
      <svg width="100%" height="80" viewBox="0 0 1100 80">
        <SVGDefs />
        <rect
          x="0"
          y="15"
          width="200"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={highlight}
          strokeWidth="2"
        />
        <text
          x="100"
          y="47"
          fill="white"
          fontSize="22"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Camera
        </text>
        <line
          x1="200"
          y1="40"
          x2="260"
          y2="40"
          stroke={highlight}
          strokeWidth="3"
          markerEnd="url(#arrow-teal)"
        />
        <rect
          x="270"
          y="15"
          width="240"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={warning}
          strokeWidth="2"
        />
        <text
          x="390"
          y="47"
          fill="white"
          fontSize="22"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Face Detection
        </text>
        <line
          x1="510"
          y1="40"
          x2="570"
          y2="40"
          stroke={highlight}
          strokeWidth="3"
          markerEnd="url(#arrow-teal)"
        />
        <rect
          x="580"
          y="15"
          width="240"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={success}
          strokeWidth="2"
        />
        <text
          x="700"
          y="47"
          fill="white"
          fontSize="22"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Face Embedding
        </text>
        <line
          x1="820"
          y1="40"
          x2="880"
          y2="40"
          stroke={highlight}
          strokeWidth="3"
          markerEnd="url(#arrow-teal)"
        />
        <rect x="890" y="15" width="200" height="50" rx="8" fill={highlight} />
        <text
          x="990"
          y="47"
          fill="#0D1B2A"
          fontSize="22"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Database
        </text>
      </svg>
    </div>
    <div
      className="animate-fade-up delay-300"
      style={{
        background: "rgba(245, 158, 11, 0.08)",
        border: `1px solid ${warning}`,
        borderRadius: 16,
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            background: warning,
            color: "#0D1B2A",
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          2
        </div>
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 40,
            fontWeight: 700,
            margin: 0,
            color: warning,
          }}
        >
          Daily Attendance (Recurring)
        </h3>
      </div>
      <svg width="100%" height="80" viewBox="0 0 1400 80">
        <SVGDefs />
        <rect
          x="0"
          y="15"
          width="140"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={highlight}
          strokeWidth="2"
        />
        <text
          x="70"
          y="47"
          fill="white"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Camera
        </text>
        <line
          x1="140"
          y1="40"
          x2="190"
          y2="40"
          stroke={warning}
          strokeWidth="3"
          markerEnd="url(#arrow-warning)"
        />
        <rect
          x="200"
          y="15"
          width="180"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={warning}
          strokeWidth="2"
        />
        <text
          x="290"
          y="47"
          fill="white"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Detection
        </text>
        <line
          x1="380"
          y1="40"
          x2="430"
          y2="40"
          stroke={warning}
          strokeWidth="3"
          markerEnd="url(#arrow-warning)"
        />
        <rect
          x="440"
          y="15"
          width="200"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke="#EF4444"
          strokeWidth="2"
        />
        <text
          x="540"
          y="47"
          fill="white"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Anti-Spoofing
        </text>
        <line
          x1="640"
          y1="40"
          x2="690"
          y2="40"
          stroke={warning}
          strokeWidth="3"
          markerEnd="url(#arrow-warning)"
        />
        <rect
          x="700"
          y="15"
          width="200"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={success}
          strokeWidth="2"
        />
        <text
          x="800"
          y="47"
          fill="white"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Embedding
        </text>
        <line
          x1="900"
          y1="40"
          x2="950"
          y2="40"
          stroke={warning}
          strokeWidth="3"
          markerEnd="url(#arrow-warning)"
        />
        <rect
          x="960"
          y="15"
          width="200"
          height="50"
          rx="8"
          fill="#0D1B2A"
          stroke={highlight}
          strokeWidth="2"
        />
        <text
          x="1060"
          y="47"
          fill="white"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Recognition
        </text>
        <line
          x1="1160"
          y1="40"
          x2="1210"
          y2="40"
          stroke={warning}
          strokeWidth="3"
          markerEnd="url(#arrow-warning)"
        />
        <rect x="1220" y="15" width="170" height="50" rx="8" fill={success} />
        <text
          x="1305"
          y="47"
          fill="#0D1B2A"
          fontSize="20"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ✓ Logged
        </text>
      </svg>
    </div>
  </div>
);

const Slide07Dataset: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 60px 0",
        color: "white",
      }}
    >
      Dataset: Labeled Faces in the Wild
    </h2>
    <div style={{ display: "flex", gap: 80, flex: 1 }}>
      <div className="animate-fade-up delay-100" style={{ flex: 1 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: `4px solid ${highlight}`,
              borderRadius: 12,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontFamily: "var(--osd-font-display)",
                fontWeight: 800,
                color: "white",
              }}
            >
              13,000+
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#94A3B8",
                marginTop: 8,
                fontFamily: "monospace",
              }}
            >
              Total Images
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: `4px solid ${highlight}`,
              borderRadius: 12,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontFamily: "var(--osd-font-display)",
                fontWeight: 800,
                color: "white",
              }}
            >
              5,985
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#94A3B8",
                marginTop: 8,
                fontFamily: "monospace",
              }}
            >
              Total images (filtered)
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: `4px solid ${warning}`,
              borderRadius: 12,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontFamily: "var(--osd-font-display)",
                fontWeight: 800,
                color: "white",
              }}
            >
              423
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#94A3B8",
                marginTop: 8,
                fontFamily: "monospace",
              }}
            >
              Filtered Identities
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: `4px solid ${warning}`,
              borderRadius: 12,
              padding: "32px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontFamily: "var(--osd-font-display)",
                fontWeight: 800,
                color: "white",
              }}
            >
              ≥ 5
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#94A3B8",
                marginTop: 8,
                fontFamily: "monospace",
              }}
            >
              Min Images / ID
            </div>
          </div>
        </div>
      </div>
      <div className="animate-fade-up delay-300" style={{ flex: 1.2 }}>
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 40,
            fontWeight: 700,
            margin: "0 0 32px 0",
            color: highlight,
          }}
        >
          Preprocessing Pipeline
        </h3>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 2fr",
              background: "rgba(255,255,255,0.05)",
              padding: "20px 28px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: "bold", color: highlight }}>
              Step
            </div>
            <div style={{ fontSize: 24, fontWeight: "bold", color: highlight }}>
              Description
            </div>
          </div>
          {[
            ["Face Detection", "MTCNN cropping"],
            ["Resizing", "160x160 pixels fixed size"],
            ["Normalization", "Zero mean, unit variance"],
            ["Augmentation", "RandomHorizontalFlip, ColorJitter"],
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 2fr",
                padding: "18px 28px",
                borderBottom:
                  i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
                {row[0]}
              </div>
              <div style={{ fontSize: 22, color: "#94A3B8" }}>{row[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide08AntiSpoofing: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 40px 0",
        color: "white",
      }}
    >
      Face Anti-Spoofing: MiniFAS
    </h2>
    <div
      className="animate-fade-up delay-100"
      style={{
        background: "rgba(245, 158, 11, 0.06)",
        border: `1px solid ${warning}`,
        borderRadius: 16,
        padding: "32px 40px",
        marginBottom: 40,
        display: "flex",
        gap: 80,
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(239, 68, 68, 0.1)",
          border: `3px solid ${danger}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 40, fontWeight: 900, color: danger }}>!</span>
      </div>
      <div>
        <div
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: warning,
            marginBottom: 8,
          }}
        >
          The Problem
        </div>
        <p
          style={{ fontSize: 26, color: "#94A3B8", margin: 0, lineHeight: 1.5 }}
        >
          Biometric systems are vulnerable to{" "}
          <strong style={{ color: "white" }}>presentation attacks</strong> —
          high-quality photos and video replays can fool standard face
          recognition into granting unauthorized access.
        </p>
      </div>
    </div>
    <div style={{ display: "flex", gap: 80, flex: 1 }}>
      <div className="animate-fade-up delay-200" style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 36,
            fontWeight: 700,
            margin: "0 0 24px 0",
            color: highlight,
          }}
        >
          Solution: MiniFAS
        </h3>
        <p
          style={{
            fontSize: 26,
            color: "#94A3B8",
            lineHeight: 1.5,
            margin: "0 0 32px 0",
          }}
        >
          Lightweight Face Anti-Spoofing running via{" "}
          <strong style={{ color: "white" }}>ONNX Runtime</strong> — detects
          liveness in real-time by analyzing texture and depth cues invisible to
          the naked eye.
        </p>
      </div>
      <div className="animate-fade-up delay-300" style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 36,
            fontWeight: 700,
            margin: "0 0 24px 0",
            color: warning,
          }}
        >
          Attack Types Detected
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: 28,
              borderLeft: `6px solid ${danger}`,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white",
                marginBottom: 8,
              }}
            >
              Paper Attacks
            </div>
            <div style={{ fontSize: 24, color: "#94A3B8" }}>
              High-quality printed photographs presented to the camera
              impersonating an authorized person.
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: 28,
              borderLeft: `6px solid ${warning}`,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white",
                marginBottom: 8,
              }}
            >
              Replay Attacks
            </div>
            <div style={{ fontSize: 24, color: "#94A3B8" }}>
              Digital screen displays and pre-recorded video replays placed in
              front of the camera.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide09MTCNN: Page = () => (
  <div style={{ ...fill, background: lightBg, padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 60px 0",
        color: lightText,
      }}
    >
      MTCNN: Detection & Alignment
    </h2>
    <div style={{ display: "flex", gap: 60, flex: 1 }}>
      <div
        className="animate-fade-up delay-100"
        style={{
          flex: 1,
          background: "white",
          padding: 40,
          borderRadius: 16,
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 36,
            color: "var(--osd-accent)",
            margin: "0 0 24px 0",
          }}
        >
          What MTCNN Does
        </h3>
        <ul
          style={{
            fontSize: 26,
            lineHeight: 1.8,
            paddingLeft: 30,
            color: "#334155",
          }}
          className="justify-text"
        >
          <li>
            <strong>P-Net (Proposal Network):</strong> fast scanning to propose
            facial candidate regions.
          </li>
          <li>
            <strong>R-Net (Refine Network):</strong> refines candidates,
            aggressively removing false positives.
          </li>
          <li>
            <strong>O-Net (Output Network):</strong> final high-confidence
            detection + 5 facial landmarks.
          </li>
        </ul>
      </div>
      <div
        className="animate-fade-up delay-200"
        style={{
          flex: 1,
          background: "white",
          padding: 40,
          borderRadius: 16,
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--osd-font-display)",
            fontSize: 36,
            color: "var(--osd-accent)",
            margin: "0 0 24px 0",
          }}
        >
          Why Alignment Matters
        </h3>
        <ul
          style={{
            fontSize: 26,
            lineHeight: 1.8,
            paddingLeft: 30,
            color: "#334155",
          }}
        >
          <li>Applies an Affine Transform (rotation + scale + translation).</li>
          <li>
            Normalizes every face to a fixed 160×160 resolution regardless of
            original pose.
          </li>
        </ul>
        <InsightBox
          delay="delay-300"
          text="Alignment standardizes the input, improving overall recognition accuracy by 2–3% on benchmarks."
        />
      </div>
    </div>
  </div>
);

const Slide10Embeddings: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 20px 0",
        color: "white",
      }}
    >
      Face Embeddings Explained
    </h2>
    <p
      className="animate-fade-up delay-100 justify-text"
      style={{
        fontSize: 28,
        color: "#94A3B8",
        margin: "0 0 20px 0",
        lineHeight: 1.6,
      }}
    >
      A face is converted into a continuous vector of{" "}
      <strong>512 mathematical features</strong> mapped onto an L2 Normalized
      unit hypersphere. Same identities cluster tightly (low cosine distance),
      while different identities push far apart.
    </p>
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="100%"
        height="450"
        viewBox="0 0 800 450"
        className="animate-fade-in delay-200"
      >
        <SVGDefs />
        <circle
          cx="400"
          cy="225"
          r="200"
          fill="url(#sphereGrad)"
          stroke={highlight}
          strokeWidth="2"
          strokeDasharray="8 8"
          className="animate-draw"
        />
        <text
          x="400"
          y="40"
          fill="#94A3B8"
          fontSize="24"
          textAnchor="middle"
          fontFamily="monospace"
        >
          L2 Normalized Hypersphere
        </text>
        <g transform="translate(250, 120)">
          <circle cx="0" cy="0" r="14" fill={highlight} />
          <circle cx="25" cy="25" r="14" fill={highlight} />
          <circle cx="-15" cy="35" r="14" fill={highlight} />
          <text x="50" y="15" fill={highlight} fontSize="24" fontWeight="bold">
            Identity A
          </text>
        </g>
        <g transform="translate(550, 320)">
          <circle cx="0" cy="0" r="14" fill={warning} />
          <circle cx="-25" cy="-25" r="14" fill={warning} />
          <circle cx="-35" cy="15" r="14" fill={warning} />
          <text x="25" y="15" fill={warning} fontSize="24" fontWeight="bold">
            Identity B
          </text>
        </g>
        <path
          d="M 280 160 Q 400 225 510 290"
          fill="none"
          stroke="#475569"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        <text x="400" y="215" fill="#E2E8F0" fontSize="20" textAnchor="middle">
          High Cosine Distance Separates Clusters
        </text>
      </svg>
    </div>
  </div>
);

const Slide11Softmax: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 16px 0",
        color: "white",
      }}
    >
      Face Recognition
    </h2>
    <p
      className="animate-fade-up delay-100"
      style={{
        fontSize: 28,
        color: "#94A3B8",
        margin: "0 0 48px 0",
        lineHeight: 1.5,
      }}
    >
      Once embeddings are extracted, the system compares each query face against
      the enrolled gallery to identify the person
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 32,
        flex: 1,
      }}
    >
      <div
        className="animate-fade-up delay-200"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: highlight,
            fontFamily: "monospace",
            marginBottom: 16,
          }}
        >
          STEP 1 · ENCODE
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            flex: 1,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${highlight}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              Capture Face
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              Camera grabs a frame and MTCNN detects the face
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${highlight}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              512-dim Embedding
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              InceptionResNetV1 produces a compact feature vector
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${highlight}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              L2 Normalize
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              Projects onto the unit hypersphere for consistent comparison
            </div>
          </div>
        </div>
      </div>
      <div
        className="animate-fade-up delay-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: warning,
            fontFamily: "monospace",
            marginBottom: 16,
          }}
        >
          STEP 2 · COMPARE
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${warning}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              Cosine Similarity
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              C(X,Y) = (X · Y) / (||X|| · ||Y||)
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${warning}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              Gallery Search
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              Query embedding matched against all enrolled employees
            </div>
          </div>
        </div>
      </div>
      <div
        className="animate-fade-up delay-400"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: success,
            fontFamily: "monospace",
            marginBottom: 16,
          }}
        >
          STEP 3 · DECIDE
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "rgba(34, 197, 94, 0.08)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${success}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              Match Found ✓
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              Similarity ≥ threshold → employee identified → attendance logged
            </div>
          </div>
          <div
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              padding: 16,
              borderRadius: 10,
              borderLeft: `4px solid ${danger}`,
            }}
          >
            <div style={{ fontSize: 22, color: "white", fontWeight: 600 }}>
              Unknown ✗
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>
              Below threshold → person not recognised → access denied
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="animate-fade-up delay-500"
      style={{
        marginTop: 32,
        padding: 24,
        borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: highlight,
              fontFamily: "var(--osd-font-display)",
            }}
          >
            85–95%
          </div>
          <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
            Intra-Class Similarity (same person)
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: warning,
              fontFamily: "var(--osd-font-display)",
            }}
          >
            0–40%
          </div>
          <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 4 }}>
            Inter-Class Similarity (different people)
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide12Geometry: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 20px 0",
        color: "white",
      }}
    >
      ArcFace: Geometric Intuition
    </h2>
    <p
      className="animate-fade-up delay-100 justify-text"
      style={{
        fontSize: 28,
        color: "#94A3B8",
        margin: "0 0 40px 0",
        lineHeight: 1.6,
      }}
    >
      ArcFace shifts optimization from Euclidean dot-product space to{" "}
      <strong>angular space</strong>. By adding margin{" "}
      <MVar color="white">m</MVar> to the angle <MVar color="white">θ</MVar>,
      the model is mathematically forced to be more confident about the correct
      class.
    </p>
    <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
      <svg
        width="100%"
        height="500"
        viewBox="0 0 800 500"
        className="animate-fade-in delay-200"
      >
        <SVGDefs />
        <circle
          cx="200"
          cy="400"
          r="350"
          fill="url(#sphereGrad)"
          stroke={highlight}
          strokeWidth="2"
        />
        <circle cx="200" cy="400" r="8" fill="#E2E8F0" />
        <line
          x1="200"
          y1="400"
          x2="520"
          y2="400"
          stroke={highlight}
          strokeWidth="4"
          markerEnd="url(#arrow-teal)"
        />
        <text x="540" y="405" fill={highlight} fontSize="28" fontWeight="bold">
          W₁ (Correct)
        </text>
        <line
          x1="200"
          y1="400"
          x2="200"
          y2="80"
          stroke={warning}
          strokeWidth="4"
          markerEnd="url(#arrow-warning)"
        />
        <text x="180" y="60" fill={warning} fontSize="28" fontWeight="bold">
          W₂
        </text>
        <line
          x1="200"
          y1="400"
          x2="450"
          y2="200"
          stroke="#E2E8F0"
          strokeWidth="4"
          markerEnd="url(#arrow)"
        />
        <text x="470" y="190" fill="#E2E8F0" fontSize="28" fontWeight="bold">
          x (Embedding)
        </text>
        <path
          d="M 350 400 A 150 150 0 0 0 315 305"
          fill="none"
          stroke={highlight}
          strokeWidth="3"
        />
        <text x="360" y="360" fill={highlight} fontSize="26">
          θ₁ + m
        </text>
        <path
          d="M 295 325 A 120 120 0 0 0 200 280"
          fill="none"
          stroke={warning}
          strokeWidth="3"
        />
        <text x="240" y="285" fill={warning} fontSize="26">
          θ₂
        </text>
      </svg>
    </div>
  </div>
);

const Slide13Math: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 60px 0",
        color: "white",
      }}
    >
      ArcFace: The Mathematics
    </h2>
    <div
      className="animate-scale-in delay-100"
      style={{
        background: "rgba(255,255,255,0.05)",
        padding: "40px",
        borderRadius: 24,
        marginBottom: 60,
        border: "2px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: '"Cambria Math", "Times New Roman", serif',
          fontSize: 44,
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <MVar>L</MVar> <span>=</span> <span>−log</span>
        <MFrac
          num={
            <MSup
              base={<MVar>e</MVar>}
              sup={
                <span>
                  <MVar>s</MVar> · cos(
                  <MSub base={<MVar>θ</MVar>} sub={<MVar>y_i</MVar>} /> +{" "}
                  <MVar color={highlight}>m</MVar>)
                </span>
              }
            />
          }
          den={
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <MSup
                base={<MVar>e</MVar>}
                sup={
                  <span>
                    <MVar>s</MVar> · cos(
                    <MSub base={<MVar>θ</MVar>} sub={<MVar>y_i</MVar>} /> +{" "}
                    <MVar color={highlight}>m</MVar>)
                  </span>
                }
              />
              <span>+</span>
              <span style={{ fontSize: "1.2em" }}>Σ</span>
              <MSup
                base={<MVar>e</MVar>}
                sup={
                  <span>
                    <MVar>s</MVar> · cos(
                    <MSub base={<MVar>θ</MVar>} sub={<MVar>j</MVar>} />)
                  </span>
                }
              />
            </div>
          }
        />
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 60,
        flex: 1,
      }}
    >
      <ul
        className="animate-fade-up delay-200"
        style={{
          fontSize: 30,
          lineHeight: 1.8,
          color: "#E2E8F0",
          paddingLeft: 30,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <li>
          <strong>
            <MVar>θ</MVar>
            <MSub base="" sub={<MVar>y_i</MVar>} /> :
          </strong>{" "}
          Angle between embedding and correct weight.
        </li>
        <li>
          <strong style={{ color: highlight }}>
            <MVar>m</MVar>
            {" = 0.3 rad :"}
          </strong>{" "}
          Additive angular margin (~28.6°).
        </li>
        <li>
          <strong>
            <MVar>s</MVar>
            {" = 30 :"}
          </strong>{" "}
          Scale factor amplifies logits after L2 norm.
        </li>
      </ul>
    </div>
  </div>
);

// --- ResNet slide removed as it doesn't match the report ---

const Slide14Comparison: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 48px 0",
        color: "white",
      }}
    >
      ArcFace Loss vs Triplet Loss
    </h2>
    <div style={{ display: "flex", gap: 48, flex: 1 }}>
      <div
        className="animate-fade-up delay-200"
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontFamily: "var(--osd-font-display)",
            color: warning,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Triplet Loss
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#94A3B8",
            marginBottom: 24,
            lineHeight: 1.5,
            fontFamily: "monospace",
          }}
        >
          d(same) + α {"<"} d(different)
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <li
            className="animate-fade-up delay-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 20,
              borderRadius: 10,
              borderLeft: `4px solid ${danger}`,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                marginBottom: 6,
              }}
            >
              Local Comparisons
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.5 }}>
              Compares only images within the mini-batch, unaware of the broader
              embedding space. Cannot leverage global structure.
            </div>
          </li>
          <li
            className="animate-fade-up delay-400"
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 20,
              borderRadius: 10,
              borderLeft: `4px solid ${danger}`,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                marginBottom: 6,
              }}
            >
              Increased Iteration Steps
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.5 }}>
              Generating many triplets slows training and creates a heavy
              forward/backward pass, especially with large databases.
            </div>
          </li>
          <li
            className="animate-fade-up delay-500"
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: 20,
              borderRadius: 10,
              borderLeft: `4px solid ${danger}`,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                marginBottom: 6,
              }}
            >
              Margin Tuning
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.5 }}>
              The margin threshold is critical to performance and non-trivial to
              tune, requiring careful experimentation.
            </div>
          </li>
        </ul>
      </div>
      <div
        className="animate-fade-up delay-200"
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontFamily: "var(--osd-font-display)",
            color: highlight,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          ArcFace
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#94A3B8",
            marginBottom: 32,
            lineHeight: 1.5,
            fontFamily: "monospace",
          }}
        >
          ArcFace: Additive Angular Margin Loss — directly optimises the
          geodesic distance on the embedding hypersphere
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <li
            className="animate-fade-up delay-400"
            style={{
              background: "rgba(13, 148, 136, 0.08)",
              padding: 20,
              borderRadius: 10,
              borderLeft: `4px solid ${highlight}`,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                marginBottom: 6,
              }}
            >
              Stable Training Process
            </div>
            <div style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.5 }}>
              Directly optimizes the geodesic distance margin, resulting in
              smoother optimization and more consistent convergence. Eliminates
              the need for complex triplet mining and margin tuning heuristics.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide15Transfer: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 20px 0",
        color: "white",
      }}
    >
      Transfer Learning & Fine-Tuning
    </h2>
    <p
      className="animate-fade-up delay-100"
      style={{
        fontSize: 28,
        color: "#94A3B8",
        margin: "0 0 40px 0",
        lineHeight: 1.6,
      }}
    >
      Training from scratch requires millions of images and immense compute.
      Transfer learning leverages an <strong>InceptionResNetV1</strong> backbone
      pretrained on VGGFace2 (3.3M faces).
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 32,
        flex: 1,
        marginBottom: 40,
      }}
    >
      <OptionCard
        title="1. From Scratch"
        req="3.3M+ images, 50+ GPU hrs"
        res="Good but sub-optimal"
        verdict="✗ Not Feasible"
        color={danger}
        delay="delay-200"
      />
      <OptionCard
        title="2. Pretrained As-Is"
        req="Nothing, ready to use"
        res="Bad confidence scores."
        verdict="~ Acceptable"
        color={warning}
        delay="delay-300"
      />
      <OptionCard
        title="3. Fine-Tune"
        req="2 GPU hrs (Colab)"
        res="Best specific accuracy"
        verdict="✓ Industry Standard"
        color={success}
        delay="delay-400"
      />
    </div>
    <InsightBox
      delay="delay-600"
      color={highlight}
      bg="rgba(13, 148, 136, 0.1)"
      text="Strategy: Freeze early layers (universal textures). Unfreeze block8 + embeddings. Train only 4.4% of parameters using custom ArcFace loss!"
    />
  </div>
);

const Slide16Results: Page = () => (
  <div style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}>
    <MotionStyles />
    <h2
      className="animate-fade-up"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 72,
        fontWeight: 800,
        margin: "0 0 40px 0",
        color: "white",
      }}
    >
      System Results & Performance
    </h2>
    <div
      style={{
        display: "flex",
        gap: 16,
        marginBottom: 60,
      }}
    >
      <StatCard val="423" label="Training Identities" delay="delay-100" />
      <StatCard val="512" label="Embedding Dimensions" delay="delay-200" />
      <MetricCompare
        metric="R@1"
        softmax="0.9241"
        arcface="0.9794"
        delay="delay-300"
      />
      <MetricCompare
        metric="R@5"
        softmax="0.9772"
        arcface="0.9902"
        delay="delay-300"
      />
      <MetricCompare
        metric="mAP"
        softmax="0.9466"
        arcface="0.9840"
        delay="delay-300"
      />
    </div>
    <div style={{ display: "flex", gap: 60, flex: 1 }}>
      <div
        className="animate-fade-up delay-500"
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: 32,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontFamily: "var(--osd-font-display)",
            color: "white",
            marginBottom: 24,
          }}
        >
          Training Curve (ArcFace Loss)
        </div>
        <svg
          width="100%"
          height="280"
          viewBox="0 0 500 190"
          style={{ overflow: "visible" }}
        >
          <line
            x1="55"
            y1="15"
            x2="490"
            y2="15"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="55"
            y1="61.9"
            x2="490"
            y2="61.9"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="55"
            y1="118.4"
            x2="490"
            y2="118.4"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="55"
            y1="175"
            x2="490"
            y2="175"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="55"
            y1="15"
            x2="55"
            y2="175"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          <line
            x1="55"
            y1="175"
            x2="490"
            y2="175"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          <text x="9" y="19" fill="#94A3B8" fontSize="12">
            8
          </text>
          <text x="9" y="65" fill="#94A3B8" fontSize="12">
            4
          </text>
          <text x="9" y="121" fill="#94A3B8" fontSize="12">
            1
          </text>
          <text x="9" y="179" fill="#94A3B8" fontSize="12">
            0
          </text>
          <text
            x="272"
            y="188"
            fill="#94A3B8"
            fontSize="14"
            textAnchor="middle"
          >
            60 Epochs
          </text>
          <text
            x="495"
            y="15"
            fill="white"
            fontSize="12"
            fontFamily="monospace"
            textAnchor="start"
          >
            Train
          </text>
          <text
            x="495"
            y="30"
            fill={warning}
            fontSize="12"
            fontFamily="monospace"
            textAnchor="start"
          >
            Val
          </text>
          <path
            d="M55.0 19.6 L62.4 80.2 L69.7 121.6 L77.1 144.2 L84.5 141.4 L91.9 154.8 L99.2 157.3 L106.6 148.6 L114.0 151.4 L121.4 148.5 L128.7 161.0 L136.1 160.7 L143.5 154.7 L150.8 151.4 L158.2 158.2 L165.6 164.0 L173.0 154.3 L180.3 160.5 L187.7 158.7 L195.1 152.8 L202.5 152.1 L209.8 158.3 L217.2 159.7 L224.6 169.0 L231.9 163.7 L239.3 166.1 L246.7 167.9 L254.1 162.0 L261.4 164.7 L268.8 164.4 L276.2 169.5 L283.6 158.0 L290.9 171.0 L298.3 168.1 L305.7 169.0 L313.1 157.7 L320.4 168.3 L327.8 165.4 L335.2 166.7 L342.5 171.4 L349.9 165.8 L357.3 166.6 L364.7 160.6 L372.0 173.4 L379.4 173.0 L386.8 167.2 L394.2 161.3 L401.5 164.4 L408.9 162.0 L416.3 170.7 L423.6 165.7 L431.0 171.5 L438.4 168.7 L445.8 161.4 L453.1 162.3 L460.5 173.7 L467.9 164.3 L475.3 173.2 L482.6 168.0 L490.0 173.2"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.0 59.4 L62.4 131.3 L69.7 149.1 L77.1 157.0 L84.5 159.9 L91.9 157.1 L99.2 156.3 L106.6 154.9 L114.0 156.1 L121.4 165.6 L128.7 161.1 L136.1 159.7 L143.5 157.3 L150.8 157.0 L158.2 159.6 L165.6 161.6 L173.0 162.6 L180.3 169.7 L187.7 171.1 L195.1 157.5 L202.5 160.9 L209.8 162.7 L217.2 152.0 L224.6 162.4 L231.9 161.2 L239.3 159.5 L246.7 170.3 L254.1 165.9 L261.4 160.3 L268.8 170.8 L276.2 167.2 L283.6 163.5 L290.9 157.2 L298.3 166.2 L305.7 168.2 L313.1 168.8 L320.4 170.9 L327.8 161.4 L335.2 159.3 L342.5 158.9 L349.9 167.0 L357.3 159.5 L364.7 169.1 L372.0 167.4 L379.4 156.4 L386.8 166.2 L394.2 170.4 L401.5 154.6 L408.9 159.0 L416.3 162.6 L423.6 158.2 L431.0 157.9 L438.4 158.4 L445.8 166.3 L453.1 166.1 L460.5 164.2 L467.9 161.9 L475.3 161.8 L482.6 167.1 L490.0 151.6"
            fill="none"
            stroke={warning}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

const Slide17Learnings: Page = () => (
  <div
    className="flex h-screen justify-center items-center"
    style={{ ...fill, background: "var(--osd-bg)", padding: "80px 120px" }}
  >
    <MotionStyles />

    <h1
      className="animate-fade-up text-8xl font-bold text-white mb-8"
      style={{
        fontSize: 128,
        fontFamily: "var(--osd-font-display)",
        color: highlight,
      }}
    >
      {" "}
      Project Showcase
    </h1>
  </div>
);

const Slide18ThankYou: Page = () => (
  <div
    style={{
      ...fill,
      background: "var(--osd-bg)",
      padding: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <MotionStyles />
    <DecorativeCircles />
    <div
      className="animate-scale-in"
      style={{
        fontFamily: "var(--osd-font-display)",
        fontSize: 180,
        fontWeight: 900,
        color: "white",
        marginBottom: 24,
        letterSpacing: "-2px",
      }}
    >
      Thank You
    </div>
    <div
      className="animate-fade-up delay-200"
      style={{
        width: 120,
        height: 8,
        background: highlight,
        borderRadius: 4,
        marginBottom: 60,
      }}
    />
    <div
      className="animate-fade-up delay-300"
      style={{
        fontSize: 40,
        color: "#E2E8F0",
        fontWeight: 600,
        marginBottom: 24,
        fontFamily: "var(--osd-font-display)",
      }}
    >
      {""}
    </div>
    <div
      className="animate-fade-in delay-500"
      style={{
        fontSize: 26,
        color: "#64748B",
        fontFamily: "monospace",
        letterSpacing: "2px",
      }}
    >
      Face Recognition Attendance System · ArcFace · FaceNet · MTCNN · PyTorch
    </div>
  </div>
);

export const meta: SlideMeta = { title: "Face Recognition System" };
export default [
  Slide01Title,
  Slide02Context,
  Slide03Problem,
  Slide04Solution,
  Slide05Pipeline,
  Slide06Architecture,
  Slide07Dataset,
  Slide09MTCNN,
  Slide08AntiSpoofing,
  Slide10Embeddings,
  Slide11Softmax,
  Slide12Geometry,
  // Slide13Math,
  // Slide14Comparison,
  // Slide15Transfer,
  Slide16Results,
  Slide17Learnings,
  Slide18ThankYou,
] satisfies Page[];
