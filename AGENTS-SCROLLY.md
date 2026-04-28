# AGENTS: Scrollytelling Implementation

## Role 1: The Architect (Structural Specialist)
**Responsibility:** Ensures the HTML structure follows the "Slide" hierarchy.
**Focus:** Semantic tags, `div` nesting for sticky positioning, and ensuring the `300vh` scroll container is correctly mapped to the 3 states in the SPEC.

## Role 2: The Stylist (Swiss Minimal Specialist)
**Responsibility:** CSS layout and visual transitions.
**Focus:** - Implementing `position: sticky` and `top: 0`.
- Handling the "Sage" archetype color transitions.
- Ensuring "Museum-style" typography (Exhibit I, II, III).
- Creating smooth `opacity` and `filter: blur()` transitions.

## Role 3: The Interaction Engineer (JS/IntersectionObserver)
**Responsibility:** The "Scrollytelling" engine.
**Focus:** Using the `IntersectionObserver` API or `window.scrollY` to track the user's progress and toggle active classes (e.g., `.is-active`, `.state-2`) on the sticky elements.
