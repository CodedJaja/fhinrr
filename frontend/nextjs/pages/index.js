import { useState } from 'react';
import Select from 'react-select';
import { Bar } from 'react-chartjs-2';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const suggestions = [
    { value: 'diabetic over 50', label: 'Diabetic patients over 50' },
    { value: 'hypertensive under 40', label: 'Hypertensive patients under 40' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate backend NLP mapping
    if (query.includes('diabetic')) {
      setResults({
        patients: [
          { name: 'John Doe', age: 60, condition: 'Diabetes' },
          { name: 'Mary Jane', age: 55, condition: 'Diabetes' }
        ]
      });
    } else if (query.includes('hypertensive')) {
      setResults({
        patients: [
          { name: 'Alice Smith', age: 35, condition: 'Hypertension' },
          { name: 'Bob Lee', age: 38, condition: 'Hypertension' }
        ]
      });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>FHIR NLP Demo</h1>
      <form onSubmit={handleSubmit}>
        <Select
          options={suggestions}
          onChange={(opt) => setQuery(opt.value)}
          placeholder="Type or select query..."
        />
        <button type="submit" style={{ marginTop: '1rem' }}>Search</button>
      </form>

      {results && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Results</h2>
          <Bar
            data={{
              labels: results.patients.map(p => p.name),
              datasets: [{
                label: 'Age',
                data: results.patients.map(p => p.age)
              }]
            }}
          />
          <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
            <thead>
              <tr><th>Name</th><th>Age</th><th>Condition</th></tr>
            </thead>
            <tbody>
              {results.patients.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.name}</td><td>{p.age}</td><td>{p.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
