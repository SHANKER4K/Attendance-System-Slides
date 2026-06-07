---
name: "Minimal Green"
description: "Three-color minimal theme — dark green bg, teal accent, white text"
---

# Minimal Green

## Palette

| Role   | Value     | Notes              |
| ------ | --------- | ------------------ |
| bg     | `#081626` | very dark green    |
| text   | `#F8FAFC` | near-white primary |
| accent | `#14B8A6` | teal green accent  |

## Typography

- Display font: `'-apple-system', 'BlinkMacSystemFont', 'Inter', system-ui, sans-serif` — weight 800–900.
- Body font: `'Calibri', system-ui, sans-serif` — weight 400–500.
- Type-scale overrides (only what differs from slide-authoring defaults):
  - Hero title: 160 px
  - Body text: 40 px

## Layout

- Content padding: 80 px horizontal, 80–120 px vertical from canvas edges (1920 × 1080).
- Alignment: left-aligned, single column.
- Radius: 16 px for cards and containers.

## Fixed components

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Inter', system-ui, sans-serif",
      fontSize: 72,
      fontWeight: 800,
      margin: '0 0 16px 0',
      color: '#F8FAFC',
    }}
  >
    {children}
  </h1>
);
```

### Footer

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 60,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 24,
        color: '#94A3B8',
        fontFamily: 'monospace',
      }}
    >
      <span style={{ color: '#14B8A6' }}>●</span>
      <span>{current} / {total}</span>
    </div>
  );
};
```

### StatCard (optional, for number-heavy slides)

```tsx
const StatCard = ({ val, label }: { val: string; label: string }) => (
  <div
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderTop: '4px solid #14B8A6',
      padding: '32px 24px',
      borderRadius: 16,
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: 56, fontWeight: 800, color: '#F8FAFC' }}>{val}</div>
    <div style={{ fontSize: 22, color: '#94A3B8', fontFamily: 'monospace' }}>
      {label}
    </div>
  </div>
);
```

## Motion

- Philosophy: **subtle** — fade-up entrances on page load, no looping elements.
- Reusable keyframes:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

Minimal and monochrome with a single teal-green accent. Very dark background abstracts the canvas as a void; white text provides high contrast; teal draws attention to key numbers, borders, and interactive elements. No gradients, no shadows, no decorative emoji. Rounded card containers (16 px) soften the otherwise stark layout.

## Example usage

```tsx
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: '#081626', color: '#F8FAFC', padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Title>Project Title</Title>
    <p style={{ fontSize: 40, color: '#94A3B8', maxWidth: 1000, marginTop: 24 }}>
      A short subtitle that frames the presentation.
    </p>
    <Footer />
  </div>
);

const Numbers: Page = () => (
  <div style={{ width: '100%', height: '100%', background: '#081626', padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 48 }}>
    <Title>Key Metrics</Title>
    <div style={{ display: 'flex', gap: 32 }}>
      <StatCard val="423" label="Identities" />
      <StatCard val="512" label="Dimensions" />
      <StatCard val="98%" label="Accuracy" />
    </div>
    <Footer />
  </div>
);

export default [Cover, Numbers];
```
