export default function FormHeader() {
  return (
    <div style={{ borderBottom: '3px solid var(--ink)' }}>
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        borderBottom: '2px solid var(--ink)'
      }}>
        <div style={{
          padding: '8px 16px',
          borderRight: '2px solid var(--ink)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '80px'
        }}>
          <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-faint)' }}>Form</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', lineHeight: 1, color: 'var(--accent)' }}>1040</div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)' }}>Portfolio Edition</div>
        </div>

        <div style={{ flex: 1, padding: '8px 16px', borderRight: '2px solid var(--ink)' }}>
          <div style={{ fontSize: '11px', color: 'var(--ink-faint)', marginBottom: '2px' }}>
            Department of the Treasury - Academic & Professional Division
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '0.02em' }}>
            U.S. Individual Portfolio Return
          </div>
          <div style={{ fontSize: '11px', marginTop: '4px', color: 'var(--ink-light)' }}>
            For the academic year Jan. 1-Dec. 31, 2025, or other tax year beginning _______, ending _______
          </div>
        </div>

        <div style={{ padding: '8px 16px', textAlign: 'right', minWidth: '180px' }}>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)' }}>OMB No. 1545-IVANE</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--accent)' }}>2025</div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', marginTop: '4px' }}>IRS Use Only - Do not write in this space</div>
        </div>
      </div>

      <div style={{ display: 'flex', borderBottom: '1px solid var(--rule)' }}>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Your first name and middle initial</label>
          <div className="field-value large">Ivane</div>
        </div>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Last name</label>
          <div className="field-value large">Mkheidze</div>
        </div>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Student ID / Portfolio number</label>
          <div className="field-value">11-18-2002</div>
        </div>
      </div>

      <div style={{ display: 'flex', borderBottom: '1px solid var(--rule)' }}>
        <div className="form-field" style={{ flex: 3 }}>
          <label>Home institution (university or organization)</label>
          <div className="field-value">Western Michigan University - Haworth College of Business</div>
        </div>
        <div className="form-field" style={{ flex: 1 }}>
          <label>Degree status</label>
          <div className="field-value">Master's (In Progress)</div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Field of study</label>
          <div className="field-value">Accounting</div>
        </div>
        <div className="form-field" style={{ flex: 2 }}>
          <label>Concentration / specialization</label>
          <div className="field-value">Business & Personal Tax Returns - CPA Candidate</div>
        </div>
        <div className="form-field" style={{ flex: 1 }}>
          <label>Available for hire</label>
          <div style={{ display: 'flex', gap: '12px', paddingTop: '2px' }}>
            <span className="checkbox-row">
              <span className="form-checkbox checked" /> Yes
            </span>
            <span className="checkbox-row">
              <span className="form-checkbox" /> No
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
