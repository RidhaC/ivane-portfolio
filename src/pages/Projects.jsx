import SectionWrapper from '../components/SectionWrapper'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '8px 32px', borderBottom: '2px solid var(--ink)',
        background: 'var(--paper-dark)'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Schedule C (Form 1040)</div>
<div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Profit or Loss From Business Activity</div>
<div style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Principal business or profession: Business & Personal Tax Returns</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
          <div>OMB No. 1545-0074</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>2025</div>
        </div>
      </div>

      <div style={{ display: 'flex', borderBottom: '1px solid var(--rule)' }}>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Name of proprietor</label>
          <div className="field-value">Ivane Mkheidze</div>
        </div>
        <div className="form-field" style={{ flex: 1 }}>
          <label>Business code</label>
          <div className="field-value">541213 - Tax Preparation Services</div>
        </div>
        <div className="form-field" style={{ flex: 1 }}>
          <label>Accounting method</label>
          <div className="field-value">
            <span className="checkbox-row"><span className="form-checkbox checked" /> Accrual</span>
          </div>
        </div>
      </div>

      <SectionWrapper label="Part I - Gross Project Income">
        {projects.map((p, i) => (
          <div key={p.id} style={{
            border: '1px solid var(--rule)',
            marginBottom: '12px',
            background: 'var(--field-bg)'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: '1px solid var(--rule)',
              padding: '6px 12px',
              background: 'var(--paper-dark)'
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink-faint)' }}>
                LINE {i + 1} &nbsp;|&nbsp; {p.type.toUpperCase()} &nbsp;|&nbsp; {p.year}
              </div>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: 'var(--accent)',
                border: '1px solid var(--accent)', padding: '1px 8px'
              }}>
                GRADE: {p.profit}
              </div>
            </div>
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{p.name}</div>
              <div style={{ fontSize: '13px', color: 'var(--ink-light)', marginBottom: '8px', lineHeight: '1.6' }}>
                {p.description}
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {p.tools.map(t => (
                  <span key={t} style={{
                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.05em', border: '1px solid var(--rule)',
                    padding: '2px 8px', color: 'var(--ink-light)'
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{
              borderTop: '1px solid var(--rule)', padding: '4px 12px',
              fontSize: '10px', color: 'var(--ink-faint)', display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Status: {p.status}</span>
              <span>See attached schedule for details</span>
            </div>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Part II - Expenses Summary" noBorder>
        {[
          { num: '11', label: '', value: 'Various' },
          { num: '18', label: '', value: 'Excel' },
          { num: '22', label: '', value: 'textbooks' },
          { num: '28', label: '', value: '4 semesters' },
          { num: '31', label: '', value: '★★★★★' },
        ].map(({ num, label, value }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label">{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">{value}</span>
          </div>
        ))}
      </SectionWrapper>
    </div>
  )
}
