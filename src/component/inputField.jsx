import "./inputField.css";

const InputField = (props) => {
  const { name, label, type, value, onChange, error } = props;

  return (
    <div className={`input-field ${error ? "error" : ""}`}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
