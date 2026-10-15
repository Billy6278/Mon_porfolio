function ErrorMessage({ message, onRetry }) {
  return (
    <div className="state state--error">
      <p>{message}</p>
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          Reessayer
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
