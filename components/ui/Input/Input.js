function Input(type, name, placeholder) {
  return <input name={name} 
                className="input" 
                type={type} 
                placeholder={placeholder}/>;
};

export default Input;