## What the Farsight role actually demands

This is primarily a **Staff-level frontend architecture role for a geospatial and 3D situational-awareness platform**. The highest-priority requirements are:

* React 19, advanced TypeScript and reusable component-library architecture
* Browser internals, rendering and performance
* State architecture across Zustand, Redux or MobX
* Frontend system design, standards, code review and architectural resilience
* Geospatial data and mapping with Leaflet/Folium
* 3D models and complex rendering
* AWS S3/Lambda, Docker, Python and PostgreSQL

The product converts drone footage into layered 2D/3D terrain twins, with tracking, monitoring and real-time intelligence in GNSS-denied environments. ([jobs.dou.ua][1])

Your existing React, TypeScript, visualization, streaming and control-plane experience already covers most of the conventional frontend requirements. Your preparation should concentrate on **interview calibration plus geospatial/3D domain expansion**.

# Start with this short list

## 1. GreatFrontend: Staff-level interview preparation

**Start today. Highest interview priority.**

Use:

1. **Front End System Design Playbook**
2. **Data Table — System Design**
3. **News Feed — System Design**
4. **React advanced interview questions**
5. **TypeScript senior interview questions**
6. **JavaScript/browser/Web API/performance questions**

GreatFrontend specifically covers frontend system design, React, TypeScript, state management, networking, browser APIs, storage, performance and security in an in-browser environment. ([GreatFrontEnd][2])

Prioritize these exercises:

* **Data Table system design:** reusable component APIs, flexible renderers, fixed headers, thousands of rows, virtualization and component-library architecture. This maps directly to Farsight’s requirement to build scalable shared components. ([GreatFrontEnd][3])
* **News Feed system design:** streaming updates, pagination, virtualization, caching and rendering performance. Adapt the exercise mentally from social posts to geospatial observations, imagery and intelligence events. ([GreatFrontEnd][4])
* **State-management questions:** be ready to explain boundaries between local UI state, global client state and server state rather than simply defending Zustand or Redux. ([GreatFrontEnd][5])
* **Browser internals:** storage, workers, event loop, rendering, scheduling, caching, `requestAnimationFrame`, `PerformanceObserver` and memory leaks.

**Time:** 60–90 minutes daily until the interview.

---

## 2. Frontend Masters: three-course interview bundle

Take these in this order.

### A. Front-End System Design

This is a 4.5-hour senior-level course covering browser rendering, DOM architecture, state design, network architecture, performance and a simulated design interview. It includes streamed UI updates and network/rendering/JavaScript optimization. ([Frontend Masters][6])

### B. React and TypeScript, v3

This directly matches the vacancy’s advanced TypeScript and component-library requirements:

* discriminated unions;
* reducer typing;
* reusable generics;
* runtime validation with Zod;
* asynchronous data;
* context;
* design-system components;
* polymorphic component APIs. ([Frontend Masters][7])

### C. React Performance, v2

This is updated for React 19 and covers profiling, costly rerenders, virtualization, code splitting, Suspense, resource loading and performance diagnostics. ([Frontend Masters][8])

**Time:** approximately 13 hours total. Complete these before spending significant time on backend courses.

---

## 3. Coursera Plus: Geospatial Visualization, Cloud & Real-Time Pipelines

This is the **closest domain match I found across all seven platforms**, despite Coursera being lower in your preference order.

It is an intermediate, hands-on specialization updated in March 2026. It covers Leaflet, PostGIS, AWS, S3, geospatial visualization, ETL and real-time pipelines. Its projects include a live GPS dashboard using MQTT and Leaflet, spatial querying with PostGIS and cloud processing. ([Coursera][9])

Do only these courses initially:

1. **Build Interactive Maps**
2. **Query Spatial with PostGIS**
3. **Stream Real-Time Geo**
4. Later: **Scale Raster in Cloud**

The real-time course uses simulated GPS messages, MQTT, Leaflet, live map updates and end-to-end latency measurement. That is unusually well aligned with a frontend for live geospatial intelligence. ([Coursera][9])

Do **not** wait to complete the entire specialization before building. Consume each short course and immediately integrate its concepts into your project.

---

## 4. Frontend Masters: Advanced Creative Coding with WebGL & Shaders

Use this as the fastest introduction to the 3D part of the role.

It covers:

* Three.js;
* WebGL;
* GLSL;
* coordinate systems;
* vectors;
* geometry, materials and meshes;
* transformations;
* scene graphs;
* cameras and lighting;
* shaders. ([Frontend Masters][10])

The course is older, but the mathematical and rendering fundamentals remain relevant. Do not focus on its artistic presentation. Translate every exercise into terrain, drone tracks, geospatial layers and object overlays.

**Time:** 4 hours, followed by direct application.

An alternative for more structured TypeScript work is Udemy’s **Three.js and TypeScript**, currently listed as approximately 8.5 hours with strong ratings. ([Udemy][11])

---

## 5. Brilliant: Vectors and Matrices

Run this in parallel for **20–30 minutes per day**.

This is the right mathematical foundation for:

* 2D and 3D coordinate systems;
* translation, rotation and scaling;
* camera transformations;
* interpolation;
* distance and direction;
* vector projections;
* matrices and composed transforms.

The course progresses from vector operations through dot products, bases, matrix transformations, rotations, reflections, matrix composition, determinants and inverses. ([Brilliant][12])

Afterward, selectively take:

* **Trigonometric Functions** for radians, sine, cosine and circular motion; ([Brilliant][13])
* **Polar Coordinate Plane** for bearing, radius, coordinate conversion and rotations. ([Brilliant][14])

Do not spend weeks refreshing elementary algebra before coding. Learn the mathematics concurrently with 3D implementation.

---

## 6. Boot.dev: File Servers and CDNs with S3 and CloudFront — TypeScript

Choose the **TypeScript version**, not Go, for this immediate objective.

It covers:

* large-file handling;
* multipart uploads;
* browser caching;
* S3;
* private buckets and presigned URLs;
* encryption;
* CloudFront;
* streaming;
* replication and resiliency. ([Boot.dev][15])

This matters because a Farsight-like system must handle potentially large imagery, video, orthophotos, terrain assets and 3D models. The vacancy explicitly names S3 and Lambda. ([jobs.dou.ua][1])

Initially do only:

1. File Storage
2. Caching
3. S3
4. Security
5. CDNs

Leave the broader 24-hour AWS course for later. It is hands-on and covers VPC, IAM, EC2, ECS, Lambda, RDS, S3 and CloudFront, but much of it is not needed for the immediate frontend interview. ([Boot.dev][16])

---

## 7. CodeCrafters: Build Your Own HTTP Server in TypeScript

This is a **post-interview or secondary-track exercise**, not the first priority.

It gives you interactive implementation experience with TCP servers and the HTTP protocol, using test-driven stages. TypeScript is supported. ([codecrafters.io][17])

Why it is useful:

* strengthens browser-to-server reasoning;
* improves understanding of requests, headers, compression and file serving;
* sharpens performance and networking explanations;
* gives you systems-level depth beyond conventional React development.

Do not start Redis, Kafka, Docker or Git challenges yet. They are valuable, but they have lower immediate relevance to this vacancy.

# Build one integrated project

## **Geospatial Digital Twin Operations Console**

Do not produce several disconnected tutorial repositories. Build one coherent React/TypeScript system and evolve it.

### Phase 1 — Interview-ready 2D console

Build:

* React 19 + TypeScript;
* Leaflet or MapLibre;
* layer panel;
* GeoJSON terrain and object layers;
* timestamped observations;
* object details drawer;
* filtering and search;
* timeline playback;
* Zustand with clearly defined state domains;
* reusable map controls and data-table components.

Demonstrate:

* advanced component API design;
* discriminated unions for layer and observation types;
* runtime API validation with Zod;
* selector-based state subscriptions;
* list and marker virtualization or clustering;
* Web Workers for expensive parsing;
* performance measurements.

### Phase 2 — Real-time intelligence flow

Add:

* simulated UAV or vehicle position stream;
* MQTT, WebSocket or SSE ingestion;
* track trails;
* connection state and stale-data indicators;
* latency measurement;
* bounded event buffers;
* pause/replay;
* local persistence;
* degraded/offline mode.

### Phase 3 — 3D digital twin

Add:

* Three.js or React Three Fiber;
* terrain mesh or public glTF model;
* 3D markers and tracks;
* camera navigation;
* coordinate transformations;
* layer visibility;
* level-of-detail strategy;
* GPU/render-performance instrumentation.

### Phase 4 — Production architecture

Add:

* S3 presigned upload for imagery and 3D assets;
* CloudFront delivery;
* PostgreSQL/PostGIS;
* spatial queries and bounding-box loading;
* Docker;
* tests and CI;
* architecture decision records;
* performance budget;
* frontend telemetry.

Use public terrain data, public imagery and completely simulated tracking data.

# Execution order

## Next 7–10 days

|    Order | Work                                                              |
| -------: | ----------------------------------------------------------------- |
|        1 | GreatFrontend system design and senior React/TypeScript questions |
|        2 | Frontend Masters: Front-End System Design                         |
|        3 | Start the 2D Geospatial Operations Console                        |
|        4 | Frontend Masters: React and TypeScript v3                         |
|        5 | Coursera: Build Interactive Maps                                  |
|        6 | Coursera: Stream Real-Time Geo                                    |
|        7 | Frontend Masters: React Performance v2                            |
| Parallel | Brilliant Vectors and Matrices, 20–30 minutes daily               |

## Following 2–4 weeks

1. Add PostGIS and bounding-box spatial queries.
2. Complete WebGL/Three.js fundamentals.
3. Add the 3D terrain view.
4. Complete the targeted Boot.dev S3/CloudFront chapters.
5. Add architecture documentation, testing and performance evidence.

## Deprioritize for now

* generic Linux, Docker, Python and SQL fundamentals;
* Go courses;
* DSA courses;
* CodeCrafters Redis/Kafka;
* complete GIS specializations focused mainly on desktop ArcGIS;
* generic React beginner courses;
* certificates for their own sake.

The highest-ROI sequence is:

> **GreatFrontend → Frontend Masters architecture/React performance → geospatial project → Coursera real-time GIS → WebGL/Three.js → Brilliant mathematics → targeted AWS/S3.**

[1]: https://jobs.dou.ua/companies/farsight-vision/vacancies/350415/ "Senior Frontend Developer в Farsight Vision, за кордоном, віддалено | DOU"
[2]: https://www.greatfrontend.com/?utm_source=chatgpt.com "GreatFrontEnd: The great way to prepare for Front End Interviews"
[3]: https://www.greatfrontend.com/questions/system-design/data-table?utm_source=chatgpt.com "Data Table | Front End System Design"
[4]: https://www.greatfrontend.com/interviews/study/gfe75/questions/system-design/news-feed-facebook?utm_source=chatgpt.com "News Feed (e.g. Facebook) | Front End System Design Question"
[5]: https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?utm_source=chatgpt.com "How do you decide between using React state, context, and external state managers? | Quiz Interview Questions with Solutions"
[6]: https://frontendmasters.com/courses/frontend-system-design/ "Front-End System Design: Advanced UI, Performance & Architecture Techniques to Ace Interviews | Frontend Masters"
[7]: https://frontendmasters.com/courses/react-typescript-v3/ "Write more maintainable, error-free code with React & TypeScript. | Frontend Masters"
[8]: https://frontendmasters.com/courses/react-performance-v2/ "Build High-Performance React Apps | Frontend Masters"
[9]: https://www.coursera.org/specializations/geospatial-visualization-cloud-pipelines "Geospatial Visualization, Cloud & Real-Time Pipelines | Coursera"
[10]: https://frontendmasters.com/courses/webgl-shaders/?utm_source=chatgpt.com "Learn Advanced Creative Coding with WebGL and Shaders | WebGL Course | Frontend Masters"
[11]: https://www.udemy.com/course/threejs-tutorials/?utm_source=chatgpt.com "Three.js and TypeScript"
[12]: https://brilliant.org/courses/vectors/?utm_source=chatgpt.com "Practice Vectors and Matrices | Brilliant"
[13]: https://brilliant.org/courses/trigonometric-functions/?utm_source=chatgpt.com "Practice Trigonometric Functions | Brilliant"
[14]: https://brilliant.org/courses/polar-coordinate-plane/?utm_source=chatgpt.com "Practice Polar Coordinate Plane | Brilliant"
[15]: https://www.boot.dev/courses/learn-file-servers-s3-cloudfront-typescript?utm_source=chatgpt.com "Learn File Servers and CDNs with S3 and CloudFront [Full Course] | Boot.dev"
[16]: https://www.boot.dev/courses/learn-aws?utm_source=chatgpt.com "Learn AWS [Full Course] | Boot.dev"
[17]: https://codecrafters.io/challenges?utm_source=chatgpt.com "Challenges | CodeCrafters"
