const InputGroup = (props) => {
  const label = props.label;
  const type = props.type;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        margin: '1rem 0',
      }}
    >
      <label
        style={{
          fontFamily: 'Arial',
          fontSize: '1rem',
          color: '#424242',
          fontWeight: 'bold',
        }}
        htmlFor='name'
      >
        {label}
      </label>
      <input
        type={type}
        id='name'
        style={{
          padding: '0.5rem 1rem',
          outline: 'none',
          border: '1px solid #ddd',
          borderRadius: '0.15rem',
          fontFamily: 'Arial',
          fontSize: '0.9rem',
          color: '#666',
        }}
      />
    </div>
  );
};

export default InputGroup;
