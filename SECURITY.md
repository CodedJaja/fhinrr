# Security & HIPAA Compliance Plan

## Authentication & Authorization
- OAuth 2.0 / SMART on FHIR for secure login.
- JWT access tokens, short-lived.

## RBAC
- Roles: Admin, Clinician, Researcher.
- Map to FHIR scopes: patient/*.read, condition/*.read.

## Data Privacy
- TLS 1.2+ in transit, AES-256 at rest.
- De-identify or tokenize PHI.

## Audit Logging
- Log all queries, timestamps, user IDs.
- Central log storage with anomaly detection.

## Deployment Security
- Container hardening (Docker minimal base).
- Secrets in vault, not repo.

