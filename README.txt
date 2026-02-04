
PROJECT: SYNERGIA '26 - HORIZON SYMPOSIUM WEBSITE
ORGANIZATION: Association of CSE - MAGNUMOPUS
COLLEGE: Velalar College of Engineering and Technology (VCET)

--- TECHNICAL SPECIFICATIONS ---
Type: Static Web Application (SPA)
Framework: React + Tailwind CSS
Dependencies: React 19, Lucide React (Icons), Google Gemini API (AI Assistant)
Build Tool: Vite / NPM (for production build)

--- HOSTING REQUIREMENTS ---
1. Server: Apache, Nginx, or any standard static web server.
2. Domain: https://www.velalarengg.ac.in/
3. HTTPS: Required for secure API communication (Gemini API).
4. Entry Point: index.html

--- DEPLOYMENT STEPS FOR ADMINS ---
1. Extract the build folder contents to the web root.
2. Ensure URL rewriting is enabled to point all sub-paths to index.html (Standard SPA configuration).
3. The AI Assistant requires an API_KEY environment variable if served via a backend, or it relies on the pre-configured key in the client bundle.

--- CONTACTS ---
Faculty Coordinator: Ms. M. Thilagarani (98401 94577)
Student Coordinator: Mr. R. Murugavel (79041 24423)
