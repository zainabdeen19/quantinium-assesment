# Quantum Wi-Fi – React Native Take-Home Exercise

A small React Native app built with Expo that displays nearby Wi-Fi hotspots, allows users to view hotspot details, and simulates a connection flow.

This project focuses on clean architecture, readable code, and a pragmatic implementation within the given timebox.

---

## Features

- List of nearby Wi-Fi hotspots loaded from a local JSON dataset  
- Hotspot list with a responsive card-based layout  
- Hotspot details screen showing metadata (SSID, provider, signal, channel)  
- Simulated connect flow with loading, success, and error states  
- Stack-based navigation using React Navigation  
- Centralized theming and separated screen styles  
- Runs on Expo Go and Web  

---

## Tech Stack

- **React Native** (Expo managed workflow)
- **TypeScript**
- **Expo**
- **React Navigation (Native Stack)**
- **FlatList** for performant lists
- **Hermes** JS engine (Expo default)

---

## Project Structure

```text
quantum-wifi/
├── assets/
│   ├── data/
│   │   └── hotspots.json
│   └── icons/
├── src/
│   ├── navigation/
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   ├── screens/
│   │   ├── HotspotListScreen.tsx
│   │   ├── HotspotListScreen.styles.ts
│   │   ├── HotspotDetailsScreen.tsx
│   │   └── HotspotDetailsScreen.styles.ts
│   ├── theme/
│   │   └── color.ts
│   └── types/
│       └── hotspot.ts
├── App.tsx
├── index.ts
├── app.json
└── package.json
```
## Prerequisites

Node.js (LTS recommended)

Expo Go app (for iOS / Android)

### Install Dependencies
```text
npm install
```

### Run the App
```text
npx expo start --web
```

### Mobile (Expo Go)
```text
npx expo start
```


Scan the QR code using the Expo Go app.

## Simulated Connection Flow

The Connect button does not perform a real Wi-Fi connection.

Instead, it simulates:

- Loading state
- Success (80% probability)
- Failure (20% probability)

This behavior was intentionally implemented to stay within the scope of the assessment.