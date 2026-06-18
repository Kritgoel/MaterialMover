# Graph Report - .  (2026-06-18)

## Corpus Check
- Corpus is ~43,350 words - fits in a single context window. You may not need a graph.

## Summary
- 474 nodes · 654 edges · 31 communities (27 shown, 4 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 70 edges (avg confidence: 0.58)
- Token cost: 4,200 input · 2,100 output

## Community Hubs (Navigation)
- [[_COMMUNITY_FastAPI Search Service Core|FastAPI Search Service Core]]
- [[_COMMUNITY_React Frontend Components|React Frontend Components]]
- [[_COMMUNITY_Business & Architecture Concepts|Business & Architecture Concepts]]
- [[_COMMUNITY_BM25 Keyword Search Engine|BM25 Keyword Search Engine]]
- [[_COMMUNITY_Root Package Dependencies|Root Package Dependencies]]
- [[_COMMUNITY_Gemini AI Chat Service|Gemini AI Chat Service]]
- [[_COMMUNITY_Product Model & Image Scripts|Product Model & Image Scripts]]
- [[_COMMUNITY_Auth Middleware & User Model|Auth Middleware & User Model]]
- [[_COMMUNITY_Backend Package Dependencies|Backend Package Dependencies]]
- [[_COMMUNITY_Frontend Package Dependencies|Frontend Package Dependencies]]
- [[_COMMUNITY_Hybrid Search Engine|Hybrid Search Engine]]
- [[_COMMUNITY_Search Service Rationale|Search Service Rationale]]
- [[_COMMUNITY_MongoDB Database Manager|MongoDB Database Manager]]
- [[_COMMUNITY_Product Routes & Mapbox|Product Routes & Mapbox]]
- [[_COMMUNITY_Image Population Scripts|Image Population Scripts]]
- [[_COMMUNITY_API Gateway & Serverless|API Gateway & Serverless]]
- [[_COMMUNITY_Image Fix Scripts|Image Fix Scripts]]
- [[_COMMUNITY_Semantic Search Core|Semantic Search Core]]
- [[_COMMUNITY_Search Service Config|Search Service Config]]
- [[_COMMUNITY_App Init Module|App Init Module]]
- [[_COMMUNITY_Service Startup Script|Service Startup Script]]
- [[_COMMUNITY_Vite Logo Asset|Vite Logo Asset]]
- [[_COMMUNITY_User Model Docs|User Model Docs]]

## God Nodes (most connected - your core abstractions)
1. `KeywordSearchEngine` - 22 edges
2. `GeminiChatService` - 18 edges
3. `SemanticSearchEngine` - 17 edges
4. `HybridSearchEngine` - 16 edges
5. `DatabaseManager` - 15 edges
6. `FastAPI` - 12 edges
7. `HybridSearchRequest` - 10 edges
8. `WebhookProductAdded` - 10 edges
9. `WebhookProductUpdated` - 10 edges
10. `Footer()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Semantic Search (all-MiniLM-L6-v2 Embeddings)` --semantically_similar_to--> `Sentence Transformers all-MiniLM-L6-v2`  [INFERRED] [semantically similar]
  DOCUMENTATION.md → README.md
- `Node.js/Express Backend Service (Port 3000)` --semantically_similar_to--> `Node.js/Express Backend`  [INFERRED] [semantically similar]
  DOCUMENTATION.md → README.md
- `FastAPI Python Search Service (Port 8000)` --semantically_similar_to--> `Python/FastAPI Search Service`  [INFERRED] [semantically similar]
  DOCUMENTATION.md → README.md
- `ndarray` --uses--> `DatabaseManager`  [INFERRED]
  services/search/app/services/search.py → services/search/app/core/database.py
- `Any` --uses--> `DatabaseManager`  [INFERRED]
  services/search/app/services/keyword_search.py → services/search/app/core/database.py

## Import Cycles
- 1-file cycle: `services/search/app/main.py -> services/search/app/main.py`

## Hyperedges (group relationships)
- **Three-Service Microservices Architecture** — documentation_nodejs_backend, documentation_fastapi_search_service, readme_react_vite_frontend [EXTRACTED 1.00]
- **Hybrid Search System (Semantic + BM25 + Gemini Chat)** — documentation_semantic_search, documentation_bm25_search, documentation_ai_material_advisor, documentation_gemini_integration [EXTRACTED 1.00]
- **Three Revenue Streams (Convenience + Visibility + Referrals)** — documentation_transaction_commission, documentation_enterprise_visibility, documentation_contractor_referrals [EXTRACTED 1.00]

## Communities (31 total, 4 thin omitted)

### Community 0 - "FastAPI Search Service Core"
Cohesion: 0.05
Nodes (64): health_check(), lifespan(), FastAPI application for construction materials semantic search, Check API health and return statistics, Hybrid search for construction materials using semantic + keyword matching, Hybrid search for construction materials using JSON request body, Get top 10 recommended product IDs based on hybrid search          Returns only, Rebuild semantic embeddings and BM25 keyword index from scratch (+56 more)

### Community 1 - "React Frontend Components"
Cohesion: 0.10
Nodes (26): Chatbot(), Earth3D(), Footer(), Header(), MapView(), ReactiveStars(), ToastContext, ToastProvider() (+18 more)

### Community 2 - "Business & Architecture Concepts"
Cohesion: 0.07
Nodes (38): AI-Powered Material Advisor Chatbot, BM25 Keyword Search, Business Model: Open Access + Convenience + Visibility, Circular Economy for Construction Materials, Cloudinary Image Upload/Storage, Construction Waste Crisis, Revenue Stream 3: Contractor Referrals, Revenue Stream 2: Enterprise Visibility Plans (+30 more)

### Community 3 - "BM25 Keyword Search Engine"
Cohesion: 0.09
Nodes (22): KeywordSearchEngine, preprocess_text(), BM25 keyword search for construction materials, Rebuild the index from scratch, Add a document to the inverted index, PUBLIC METHOD: Add a new document to BM25 index         Called when friend's ser, PUBLIC METHOD: Update an existing document in BM25 index         Called when fri, Remove a document from the inverted index (+14 more)

### Community 4 - "Root Package Dependencies"
Cohesion: 0.06
Nodes (35): author, dependencies, apt, axios, bcryptjs, cloudinary, cors, dotenv (+27 more)

### Community 5 - "Gemini AI Chat Service"
Cohesion: 0.10
Nodes (15): FunctionCall, ConversationSession, GeminiChatService, Gemini-powered conversational product recommendation service.  Uses the google-g, Holds state for a single user conversation., Manages Gemini chat sessions with tool-calling for product search., Configure the genai client., Inject the HybridSearchEngine from main.py. (+7 more)

### Community 6 - "Product Model & Image Scripts"
Cohesion: 0.09
Nodes (23): MATERIAL_CATEGORIES, mongoose, productSchema, mongoose, path, Product, axios, geocodeAddress() (+15 more)

### Community 7 - "Auth Middleware & User Model"
Cohesion: 0.08
Nodes (19): jwt, mongoose, userSchema, auth, bcrypt, express, googleClient, jwt (+11 more)

### Community 8 - "Backend Package Dependencies"
Cohesion: 0.09
Nodes (21): dependencies, axios, bcryptjs, cloudinary, cors, dotenv, express, express-async-handler (+13 more)

### Community 9 - "Frontend Package Dependencies"
Cohesion: 0.09
Nodes (21): author, dependencies, gsap, react, react-dom, react-router-dom, three, description (+13 more)

### Community 10 - "Hybrid Search Engine"
Cohesion: 0.14
Nodes (9): HybridSearchEngine, Hybrid search combining semantic search and BM25 keyword search, Hybrid search engine that combines:     - Semantic search (Sentence-BERT embeddi, Rebuild BM25 keyword search index, Get statistics from both search engines, Initialize both search engines, Perform hybrid search combining semantic and keyword ranking                  Ar, Combine and normalize scores from both search methods                  Uses min- (+1 more)

### Community 11 - "Search Service Rationale"
Cohesion: 0.14
Nodes (9): Semantic search service for construction materials, Semantic search engine using sentence transformers and cosine similarity, Generate and store embedding for a newly added material         ALSO adds it to, Regenerate embedding for an updated material         Updates both database and i, Initialize model, database connection, and load materials, Rebuild all embeddings from scratch                  Returns:             Succes, Load materials from database and generate embeddings if needed, Generate embeddings for a batch of materials (+1 more)

### Community 12 - "MongoDB Database Manager"
Cohesion: 0.12
Nodes (7): DatabaseManager, MongoDB database operations, Manages MongoDB database operations, Establish MongoDB connection with retry logic, Close MongoDB connection, Retrieve all materials from database (excluding special index documents), Update material embedding in database

### Community 13 - "Product Routes & Mapbox"
Cohesion: 0.14
Nodes (8): auth, axios, express, mapboxService, Product, router, axios, MapboxService

### Community 14 - "Image Population Scripts"
Cohesion: 0.24
Nodes (11): axios, CATEGORY_SEARCH_MAP, mongoose, path, Product, run(), searchUnsplash(), sleep() (+3 more)

### Community 15 - "API Gateway & Serverless"
Cohesion: 0.20
Nodes (9): app, { connectDB }, { createProxyMiddleware }, dns, express, path, serverless, connectDB() (+1 more)

### Community 16 - "Image Fix Scripts"
Cohesion: 0.31
Nodes (9): axios, mongoose, path, run(), searchUnsplash(), sleep(), TITLE_SEARCH_OVERRIDES, uploadToCloudinary() (+1 more)

### Community 17 - "Semantic Search Core"
Cohesion: 0.25
Nodes (5): ndarray, Any, Perform semantic search for materials                  Args:             query:, Calculate cosine similarity between query and all material embeddings, Get search engine statistics

### Community 18 - "Search Service Config"
Cohesion: 0.40
Nodes (3): Application configuration, Validate required settings, Settings

## Knowledge Gaps
- **147 isolated node(s):** `name`, `version`, `description`, `main`, `start` (+142 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HybridSearchEngine` connect `Hybrid Search Engine` to `FastAPI Search Service Core`, `Search Service Rationale`, `BM25 Keyword Search Engine`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `KeywordSearchEngine` connect `BM25 Keyword Search Engine` to `Hybrid Search Engine`, `MongoDB Database Manager`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `GeminiChatService` connect `Gemini AI Chat Service` to `FastAPI Search Service Core`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `KeywordSearchEngine` (e.g. with `HybridSearchEngine` and `.__init__()`) actually correct?**
  _`KeywordSearchEngine` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `GeminiChatService` (e.g. with `ChatMessageRequest` and `FastAPI`) actually correct?**
  _`GeminiChatService` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `SemanticSearchEngine` (e.g. with `HybridSearchEngine` and `.__init__()`) actually correct?**
  _`SemanticSearchEngine` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `HybridSearchEngine` (e.g. with `lifespan()` and `FastAPI`) actually correct?**
  _`HybridSearchEngine` has 7 INFERRED edges - model-reasoned connections that need verification._