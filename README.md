🚀 Angular 21 Micro Frontend Ecosystem
This project is a scalable, enterprise-grade Micro Frontend (MFE) architecture built with Angular 21 and Native Federation. It utilizes browser-native ES Modules (ESM) and Import Maps for runtime integration, replacing the older Webpack-based Module Federation.

🏗 Architecture Overview
The system is currently composed of two main parts:

Shell (Host): The main container application. It handles the primary layout, navigation, and dynamically orchestrates the loading of remote modules.

Auth (Remote): A standalone micro-app responsible for user authentication, login, and registration.

Future-Proofing: This architecture is designed to support additional remotes (e.g., Product App, Billing, Dashboard) without requiring a full rebuild of the Shell.

🛠 Tech Stack
Framework: Angular 21 (Zoneless/Signals ready)

MFE Orchestration: @angular-architects/native-federation

Build Tool: esbuild (via Angular Application Builder)

Integration: Native Import Maps