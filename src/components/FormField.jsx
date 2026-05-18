export default function FormField({ label, value, large, flex = 1, children }) {
  return (
    <div className="form-field" style={{ flex }}>
      {label && <label>{label}</label>}
      {value && (
        <div className={`field-value ${large ? 'large' : ''}`}>
          {value}
        </div>
      )}
      {children}
    </div>
  )
}
