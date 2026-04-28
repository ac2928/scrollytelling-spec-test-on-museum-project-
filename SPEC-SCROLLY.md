# SPECIFICATION: Scrollytelling Test - "The 1990s Exhibit"

## 1. VISION
Transform the "1990s: Early Web" section into a high-end scrollytelling experience. The user stays "locked" in a viewport while the story evolves around them.

## 2. DESIGN SYSTEM (Swiss Minimal)
- **Typography:** Sans-serif (Inter or Helvetica), high contrast.
- **Color Palette:** Stark White (#FFFFFF), Deep Black (#1A1A1A), and one accent "Sage" (#87A96B).
- **Layout:** 50/50 Split (Text on left, Visuals on right) or Full-screen Pinned Background.

## 3. SCROLLYTELLING STATES (The "Story")
The section will be divided into 3 "Scroll States":

| State | Scroll Depth | Visual Action | Text Content |
| :--- | :--- | :--- | :--- |
| **01** | 0% - 33% | Background: Retro Desktop (Blurred). Image: Mosaic Browser Logo (Center). | "Exhibit I: The Technical Birth. In 1991, the web was text-only." |
| **02** | 34% - 66% | Background: Unblurs. Image: Shifts to the right. | "The Graphical Revolution. Mosaic introduced images to the browser." |
| **03** | 67% - 100% | Background: Darkens. Image: Fades out, Code Snippet fades in. | "The Foundation. Tables and basic HTML defined the visual grid." |

## 4. TECHNICAL REQUIREMENTS
- **Container:** `.scrolly-container` (height: 300vh to create scroll length).
- **Sticky Element:** `.sticky-visual-wrapper` (top: 0, height: 100vh).
- **Triggers:** Use `IntersectionObserver` or `scroll` event listeners to toggle CSS classes for Opacity and Transform.
- **Responsiveness:** On mobile, stack text above imagery; disable "pinned" effect if screen width < 768px.