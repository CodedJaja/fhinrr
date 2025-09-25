# AI on FHIR

## Deliverables
1. **Part 1 (Python NLP)**: `backend/nlp_to_fhir.py` — maps queries to simulated FHIR requests.
2. **Part 2 (UI)**: `frontend/nextjs` — simple Next.js app with autocomplete, chart, table.
3. **Part 3 (Security)**: `SECURITY.md` — HIPAA/security considerations.

## Run Part 1
```bash
cd backend
pip install -r requirements.txt
python nlp_to_fhir.py
```

## Run Part 2
```bash
cd frontend/nextjs
npm install
npm run dev
```

## Notes
- Backend is illustrative, not a full FHIR server integration.
- UI simulates data, could be extended to call FastAPI.
