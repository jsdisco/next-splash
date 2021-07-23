export default function Errors({ errors }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ color: 'crimson' }}>Error:</p>
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
    </div>
  );
}
