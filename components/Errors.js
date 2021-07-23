export default function Errors({ errors }) {
  return (
    <div>
      <p style={{ color: 'crimson' }}>Error:</p>
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
    </div>
  );
}
