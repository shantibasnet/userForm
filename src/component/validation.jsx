const ValidationMessage = ({ message }) => {
  return (
    <div className="validationMessage">
      {message && <span className="error-message">{message}</span>}
    </div>
  );
};

export default ValidationMessage;
