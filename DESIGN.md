# JSON Crack Design System

## Typography
- **Primary Font**: `Inter`, `system-ui`, `-apple-system`, `BlinkMacSystemFont` (Clean, legible sans-serif for UI)
- **Monospace Font**: `Fira Code`, `JetBrains Mono`, `Consolas` (For code editor and data nodes)
- **Scale**:
  - H1: 2rem (32px), bold
  - H2: 1.5rem (24px), semibold
  - Body: 1rem (16px), regular
  - Node Label: 0.875rem (14px), medium
  - Node Content: 0.75rem (12px), regular (Monospace)

## Colors
- **Backgrounds**:
  - Dark Mode (Default): `#1A1B1E` (Mantine Dark)
  - Editor Background: `#141517`
  - Node Background: `#2C2E33`
- **Text**:
  - Primary Text: `#C1C2C5` (Mantine Dark text)
  - Muted Text: `#909296`
- **Accents**:
  - Brand Primary (Cyan/Blue): `#00E5FF` (For active nodes, connections, or primary buttons)
  - Brand Secondary (Purple): `#B388FF`
  - Hover States: `rgba(255, 255, 255, 0.05)`

## Spacing & Layout
- **Grid Unit**: 4px
- **Padding**:
  - Standard container: 16px
  - Node padding: 8px 12px
- **Radius**:
  - Node: 4px (Flat, subtle rounding)
  - Buttons: 4px

## The Workbench Rule
- Surfaces are flat at rest. Backgrounds distinguish regions (editor vs. graph).
- Depth is only used when a node is dragged, or for dropdown menus. Nodes should be flat borders or solid colors without drop shadows at rest.

## Framework Context
- `@mantine/core` provides the base components and theme engine.
- `styled-components` is used for custom styling and overrides.
- `reaflow` is used for the graph rendering.
