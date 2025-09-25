import re
import json

def nlp_to_fhir(query: str):
    query = query.lower()
    conditions, age_filter = [], None

    if "diabetic" in query or "diabetes" in query:
        conditions.append("diabetes")
    if "hypertension" in query:
        conditions.append("hypertension")

    m = re.search(r"(over|older than) (\d+)", query)
    if m:
        age_filter = {">": int(m.group(2))}
    m = re.search(r"(under|younger than) (\d+)", query)
    if m:
        age_filter = {"<": int(m.group(2))}

    simulated = {
        "resource": "Patient",
        "filters": {"conditions": conditions, "age": age_filter}
    }

    fhir_example = []
    if conditions:
        for cond in conditions:
            fhir_example.append(f"/Condition?code={cond}")
    if age_filter:
        fhir_example.append("/Patient?age=" + list(age_filter.keys())[0] + str(list(age_filter.values())[0]))

    return {"input": query, "simulated_search": simulated, "fhir_examples": fhir_example}

if __name__ == "__main__":
    examples = [
        "Show me all diabetic patients over 50",
        "List hypertensive patients younger than 40",
        "Find diabetic and hypertensive patients"
    ]
    for q in examples:
        print(json.dumps(nlp_to_fhir(q), indent=2))
