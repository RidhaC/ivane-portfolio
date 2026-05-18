export default function SectionWrapper({ label, children, noBorder }) {
  return (
    <div className="form-section" style={noBorder ? { borderBottom: 'none' } : {}}>
      {label && <div className="section-label">{label}</div>}
      {children}
    </div>
  )
}
