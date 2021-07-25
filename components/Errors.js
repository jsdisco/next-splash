export default function Errors({ errors, status = '' }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ color: 'crimson' }}>{status} Error:</p>
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
    </div>
  );
}
