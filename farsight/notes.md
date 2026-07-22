# Notes

## Desc

Farsight Vision develops AI-powered geospatial intelligence solutions for defence and security operations. The platform transforms raw aerial and sensor data into real-time 3D environments, actionable analytics, and AI-assisted operational scenarios, enabling enhanced situational awareness, mission planning, and faster decision-making for both human operators and autonomous systems.
We operate at the intersection of computer vision and GIS, and if that interests you, read on.

***

Does it mean that solutions are used only for defence and security? And not for attack? Attack is the defence.

AI - Computer Vision.
What is raw aerial data? (latitude, longitude, altitude)
What is sensor data? - distance? warmth? is it lidar? What are the sensors that are used in Drones? What kind of drones providing the footage? Big, high altitude, reconnaissance type.

What is real time 3D environment?
How does real time 3D environment being implemented?
- it's Web Based (with map library + 3D rendering)
- it's Cloud Based
- how is real time done? is it web sockets, is it something else? what about web workers?
- what client storage could be used?
- What about WebGL? What about HTML5? What about regular DOM? React is probably for regular DOM.
- What leaflet/folium is based on ?
- What data pipeline would look like?

Backend-side
  ???

Client-side
  - input (stream, payload)
  - data processing (receiving, parsing, validating, massaging/transforming)
  - rendering (skip DOM, render WebGL, HTML)
  - rendering UI (React/Virtual DOM/DOM)

What is actionable analytics?
- besides some GEO data, we have multiple other sources of data that we receive from cloud backend API/HTTP (objects, actions, users, missions, operations, logs, reports); human operators + autonomous systems
- what enables situation awareness? what does terrain includes? does it include "live" objects? or static (non-live objects?).

On a battlefield there are command and control applications/platforms/solution. Where does Farsight Solutions stand out ? How Farsigh Solutions fit into broader ecosystem? Do you focus on having one product being integrated into other platforms or providing full platform with multiple product and maybe provide

Where Farsight products/company are

### What kind of technology stack Farsight Vision uses for their products? For AI-powered geospatial intelligence solutions

## Role

We're looking for a Frontend Developer to join our young, fast-paced product team. You'll contribute to rapid development and prototyping, focusing on quickly building new features and launching a new platform version soon.

Frontend dev responsible for client side
Basically "rendering" data
- UI;
- Maps/3D rendering;
- Turn data into actionable interface;

### How big is the team? Who is on the team? What are the products? Projects? Demos? Production vs Demo? Who are the customers?

## Deep expert knowledge of browser internals (LocalStorage, SessionStorage, etc.) and performance optimization techniques.

- caching assets
- cache workers
- web workers for non DOM related things; (to offload the main thread); JS is single threaded language; (interpreted language)
- client-side storage  ?

## Proven ability to architect complex applications using TypeScript, including advanced typings and design patterns.

- strong typing; strict typing;
- design patterns:
  - MVC
  - MVVM
  - Services -> Rendering
  - Logic -> View
  - Modularity
  - Feature based
  - locality
  - functions over  classes/object composition
  - dependency injection (via input params, etc.) (for testing)
  - testable code;
  - reusability, dry patterns;
  - Component based patterns; SOLID principles (single responsibility, open-closed principle, liskov substitute principle, inverse ... ?, dependency injection )

## Expert experience in evaluating, implementing, and managing state management solutions (Zustand, Redux, MobX) in large-scale applications.

Zustand vs Redux vs Mobx
Redux is very raw and low level state management library. Usually a separate library for state management is needed for complex state management.
By default, you would use react hooks for localized state management on a component level.

## - Define and implement complex, scalable frontend architecture, ensuring high quality and maintainable code.

- I've started multiple projects and grew them from start to medium and big size projects with multiple products. For the last 8 years I've mostly built multi tenant platforms and systems, different kind of users, different levels of users, 
