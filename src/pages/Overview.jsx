import SectionWrapper from '../components/SectionWrapper'

export default function Overview() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '8px 32px', borderBottom: '2px solid var(--ink)',
        background: 'var(--paper-dark)'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Schedule 1 (Form 1040)</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Additional Income and Adjustments</div>
          <div style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Attach to Form 1040. Report additional income, skills, and personal summary.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
          <div>OMB No. 1545-0074</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>2025</div>
        </div>
      </div>

      <SectionWrapper label="Filing Status">
        <div style={{ marginBottom: '12px', fontSize: '12px', color: 'var(--ink-faint)' }}>
          Check only one box.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
          {[
            'B.S. Accounting - Completed (2025)',
            'M.S. Accounting - In Progress',
            'CPA Candidate - In Progress',
          ].map((item, i) => (
            <span key={i} className="checkbox-row">
              <span className="form-checkbox checked" />
              {item}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper label="Income - Skills & Competencies">
        <div style={{ marginBottom: '8px', fontSize: '11px', color: 'var(--ink-faint)' }}>
          Attach supporting coursework if required.
        </div>
        {[
          { num: '1a', label: '', value: 'Proficient' },
          { num: '1b', label: '', value: 'Proficient' },
          { num: '1c', label: '', value: 'Proficient' },
          { num: '1d', label: '', value: 'Proficient' },
          { num: '1e', label: '', value: 'Advanced' },
          { num: '1f', label: '', value: 'Intermediate' },
          { num: '1g', label: '', value: 'Proficient' },
          { num: '1z', label: '', value: '★★★★☆', bold: true },
        ].map(({ num, label, value, bold }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label" style={bold ? { fontWeight: 700 } : {}}>{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">{value}</span>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Standard Deduction - About Me">
        <div style={{ display: 'flex', gap: '0', borderTop: '1px solid var(--rule)' }}>
          <div className="form-field" style={{ flex: 2, borderRight: '1px solid var(--rule)' }}>
            <label>Personal statement</label>
            <div className="field-value" style={{ lineHeight: '1.8', paddingTop: '4px' }}>
              
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="form-field" style={{ borderBottom: '1px solid var(--rule)' }}>
              <label>GPA (Bachelor's)</label>
              <div className="field-value large">4.0</div>
            </div>
            <div className="form-field" style={{ borderBottom: '1px solid var(--rule)' }}>
              <label>Bachelor's completed</label>
              <div className="field-value">May 2025 - WMU</div>
            </div>
            <div className="form-field" style={{ borderBottom: '1px solid var(--rule)' }}>
              <label>Master's expected</label>
              <div className="field-value">In Progress - WMU</div>
            </div>
            <div className="form-field">
              <label>LinkedIn</label>
              <div className="field-value" style={{ fontSize: '11px' }}>
                <a href="https://www.linkedin.com/in/ivane-mkheidze-500995290/" target="_blank" rel="noreferrer">
                  linkedin.com/in/ivane-mkheidze
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper label="Refund - What I Bring to the Table" noBorder>
        {[
          { num: '34', label: 'Detail-oriented with a 4.0 academic record and strong analytical foundation', value: '✓' },
          { num: '35', label: 'Hands-on experience with business and personal tax return preparation', value: '✓' },
          { num: '36', label: 'Actively pursuing CPA licensure alongside master\'s degree', value: '✓' },
          { num: '37', label: 'Amount you owe me (an interview)', value: '1 coffee chat' },
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
