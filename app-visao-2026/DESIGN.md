# Design System: Projeto Visão 2026
**Project ID:** 6351375299135378689

## 1. Visual Theme & Atmosphere
Professional, authoritative, and modern. The design strongly leans into high-contrast dark modes with vibrant glowing accents to convey a sense of elite performance and focus. The combination of elegant serif fonts for headings and clean sans-serif for UI elements creates a trustworthy, academic yet cutting-edge vibe. It feels like an exclusive, definitive methodology for high-stakes test preparation.

## 2. Color Palette & Roles
* **Vibrant Cyan-Blue** (`#00b4d8`): Primary action color. Used for main CTA buttons, glowing box shadows, and progress indicators.
* **Muted Teal** (`#2CBFBF`): Secondary accent color. Used for badges, icons, gradients, and secondary text highlights.
* **Deep Purple/Lilac** (`#6D28D9`): Special highlight color. Used specifically to draw attention to premium tiers (like the most popular pricing plan) or exclusive features.
* **Deep Navy/Black** (`#050505`): Core dark background color. Creates a deep, infinite canvas for the content.
* **Dark Surface** (`#121212`): Elevated dark surface for cards and containers, slightly lighter than the background.
* **Clean White** (`#ffffff`): Light surface and primary text color in dark mode.
* **Soft Gray** (`#f8fafc`): Light background color for light mode sections.

## 3. Typography Rules
* **Headings (Serif):** `Playfair Display`. Used for large, elegant, and impactful headings. Often mixes regular and italic weights for stylistic emphasis (e.g., "Quer a *melhor* estratégia").
* **Body & UI (Sans-serif):** `Montserrat`. Clean, highly legible. Used heavily in bold/extrabold weights for high-impact statements, buttons, and navigation.

## 4. Component Stylings
* **Buttons:** Primary buttons are either gently rounded (`rounded-lg`) or pill-shaped (`rounded-full`), using the Vibrant Cyan-Blue color with a prominent glowing shadow (`shadow-primary/40`). They feature subtle hover effects (translate Y or scale up).
* **Cards/Containers:** Generously rounded corners (`rounded-2xl`). Dark surfaces feature subtle borders (`border-gray-800`) that illuminate on hover (changing to Teal). Premium cards use the Purple accent for borders and heavy glowing shadows.
* **Badges/Tags:** Pill-shaped, often utilizing a highly transparent background of the Teal color with a matching border and text.

## 5. Layout Principles
* **Whitespace & Structure:** Generous vertical padding between sections (`py-20` to `py-24`). Max-width containers (`max-w-7xl`) keep content centered and readable.
* **Depth & Glows:** Extensive use of blurred background decorative circles to create ambient light. Glow effects on text and glowing drop shadows on key elements create a sense of premium quality and depth.
* **Glassmorphism:** Navigation menus use semi-transparent backgrounds with backdrop blur (`backdrop-blur-md`).
