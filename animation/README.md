# Ship Transformation Animation - Lunnoa

A powerful Three.js animation visualizing how Lunnoa helps enterprises shed operational burdens and focus on core business.

## Quick Preview

**Open `preview.html` directly in your browser** - no installation required!

```bash
# On Windows, simply double-click preview.html or:
start animation/preview.html
```

## Animation Concept

The animation shows a cargo freighter transformation in 3 phases:

1. **Overburdened (0-5s)**: Ship sits low in water, loaded with operational burdens
2. **Transformation (5-10s)**: Lunnoa AI scanner lifts burdens to the cloud
3. **Optimized (10-15s)**: Ship rises, speeds up - only Core Business remains

### Visual Elements

- 🚢 **Ship**: Represents the enterprise, rises as burdens lift
- 📋 **Compliance** (red): Regulatory processes
- 💰 **Finance** (orange): Financial operations
- 👥 **HR** (purple): Human resources
- 🔒 **Security** (teal): Security operations
- 📊 **Admin** (dark orange): Administrative tasks
- ⭐ **Core Business** (gold): Stays on deck, pulses with energy
- ☁️ **AI Cloud**: Where automated processes live
- 🔵 **Lunnoa Scanner**: Blue scanning effect during transformation

## Integration with Next.js/React

### 1. Install Dependencies

```bash
npm install three @react-three/fiber @react-three/drei
# or with pnpm
pnpm add three @react-three/fiber @react-three/drei
```

### 2. Use the Component

```jsx
import ShipTransformation from './animation/ShipTransformation';

// In your hero section or page
export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <ShipTransformation className="absolute inset-0" />
      
      {/* Your overlay content */}
      <div className="relative z-10">
        {/* Hero text, CTAs, etc. */}
      </div>
    </div>
  );
}
```

### 3. Responsive Usage

```jsx
// Full-page hero background
<ShipTransformation className="fixed inset-0 -z-10" />

// Contained section
<section className="h-[600px] relative">
  <ShipTransformation />
</section>
```

## Customization

### Colors

Edit the color values in `ShipTransformation.jsx`:

```javascript
// Ship colors
color: '#2c3e50'  // Hull
color: '#34495e'  // Deck
color: '#ecf0f1'  // Bridge

// Burden colors
{ color: '#e74c3c', label: 'Compliance' },
{ color: '#f39c12', label: 'Finance' },
// ... etc
```

### Animation Timing

Adjust the cycle duration and phase timing:

```javascript
const cycleTime = time % 15; // 15 second total cycle

if (cycleTime < 5) { /* Phase 1 */ }
else if (cycleTime < 10) { /* Phase 2 */ }
else { /* Phase 3 */ }
```

### Add Your Logo

Replace the scanner sphere with your Lunnoa logo:

```jsx
// In ScanningEffect component
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// Load your logo texture
const logoTexture = useLoader(TextureLoader, '/images/lunnoa_logo.png');
```

## File Structure

```
animation/
├── preview.html           # Standalone preview (open in browser)
├── ShipTransformation.jsx # React component for integration
└── README.md              # This file
```

## Browser Support

- Modern browsers with WebGL support
- Best performance on Chrome, Firefox, Edge
- Mobile devices supported (may have reduced performance)

## Performance Tips

1. Use `dpr={[1, 2]}` for responsive pixel ratio
2. Reduce polygon counts for lower-end devices
3. Consider using `<Suspense>` with a loading fallback

```jsx
import { Suspense } from 'react';

<Suspense fallback={<LoadingSpinner />}>
  <ShipTransformation />
</Suspense>
```
