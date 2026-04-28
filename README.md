# Scrollytelling & Spec-Driven Development Test
**Topic:** The Evolution of Web Design (1990s Deep Dive)

## Live Demo
https://ac2928.github.io/scrollytelling-spec-test-on-museum-

---

## Project Overview
This project is a standalone test assignment demonstrating **Scrollytelling**—a narrative web design technique where the user’s scroll depth controls the pacing and visual state of the story. 

I utilized this small-scale project to practice **Spec-Driven Development (SDD)**, an industry-standard workflow for managing complex AI-assisted builds.

## The Spec-Driven Process
Following the "Senior Engineer" methodology, I orchestrated the build through three distinct architectural phases:

1. **The Specification (SPEC-SCROLLY.md):** Before writing code, I defined three distinct "Scroll States" (Exhibit I, II, and III). This mapped specific content to specific scroll percentages (0%, 33%, 66%).
   
2. **The Expert Agents (AGENTS-SCROLLY.md):** I utilized specialized AI personas—an **Architect** for HTML structure, a **Stylist** for Swiss Minimal aesthetics, and an **Interaction Engineer** for the IntersectionObserver logic.

3. **The Implementation (SPRINT.md):** The site was built in modular sprints, ensuring that the "Pinned Media" logic remained separate from the narrative content.

## Design & Technique
- **Swiss Minimal Style:** Focused on a clean grid, high-contrast typography, and a "Sage" archetype accent.
- **Pinned Narrative:** Uses `position: sticky` and `IntersectionObserver` to keep visual exhibits in the viewport while text slides past.
- **Authority Archetype:** Uses museum-style labeling ("Exhibit I") to establish a scholarly tone, consistent with the "Evolution of Web Design" theme.

## Reflection
By adopting a Spec-Driven approach, I was able to implement a complex, state-based scrollytelling page with high technical precision. This workflow compressed the development time while ensuring the final product remained aligned with the initial design specifications.

---
**Course:** Web Development  
**Assignment:** Scrollytelling - Spec Driven Development  
**Date:** April 28, 2026