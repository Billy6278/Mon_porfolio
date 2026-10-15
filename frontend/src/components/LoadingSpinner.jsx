function LoadingSpinner({ label = 'Chargement...' }) {
  return (
    <div className="state state--loading">
      <div className="spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}

export default LoadingSpinner;
