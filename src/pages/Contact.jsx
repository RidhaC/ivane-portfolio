import SectionWrapper from '../components/SectionWrapper'

export default function Contact() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '8px 32px', borderBottom: '2px solid var(--ink)',
        background: 'var(--paper-dark)'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Form W-4</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Employee's Withholding Certificate - Contact & Hire</div>
          <div style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Complete this form to initiate employment discussions with the filer.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
          <div>OMB No. 1545-0074</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>2025</div>
        </div>
      </div>

      <SectionWrapper label="Step 1 - Filer Information">
        <div style={{ display: 'flex' }}>
          <div className="form-field" style={{ flex: 2, borderRight: '1px solid var(--rule)' }}>
            <label>Full legal name</label>
            <div className="field-value">Ivane Mkheidze</div>
          </div>
          <div className="form-field" style={{ flex: 1, borderRight: '1px solid var(--rule)' }}>
            <label>Filing status</label>
            <div className="field-value">
              <span className="checkbox-row"><span className="form-checkbox checked" /> Open to opportunities</span>
            </div>
          </div>
          <div className="form-field" style={{ flex: 1 }}>
            <label>Location</label>
            <div className="field-value">Kalamazoo, MI - Open to relocation</div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper label="Step 2 - Direct Contact">
        {[
          { num: 'a', label: 'Email (primary)', value: 'your.email@wmich.edu', link: 'mailto:your.email@wmich.edu' },
          { num: 'b', label: 'LinkedIn', value: 'linkedin.com/in/ivane-mkheidze', link: 'https://www.linkedin.com/in/ivane-mkheidze-500995290/' },
          { num: 'c', label: 'Location', value: 'Kalamazoo, MI - Open to relocation', link: null },
          { num: 'd', label: 'Response time', value: 'Within 24-48 hours', link: null },
        ].map(({ num, label, value, link }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label">{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">
              {link ? <a href={link} target="_blank" rel="noreferrer">{value}</a> : value}
            </span>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Step 3 - Opportunity Types" noBorder>
        <div style={{ display: 'flex', gap: '0' }}>
          {[
            { type: 'Public Accounting', desc: 'Audit, tax, or advisory roles at a CPA firm', available: true },
            { type: 'Corporate Accounting', desc: 'Internal finance, reporting, or FP&A roles', available: true },
            { type: 'Tax Internship', desc: 'Seasonal or year-round tax preparation roles', available: true },
            { type: 'Part-time / Contract', desc: 'Bookkeeping, tax prep, or consulting engagements', available: true },
          ].map(({ type, desc, available }) => (
            <div key={type} style={{
              flex: 1, borderRight: '1px solid var(--rule)',
              padding: '12px', minWidth: '160px'
            }}>
              <div className="checkbox-row" style={{ marginBottom: '4px' }}>
                <span className={`form-checkbox ${available ? 'checked' : ''}`} />
                <span style={{ fontWeight: 700, fontSize: '12px' }}>{type}</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--ink-faint)', paddingLeft: '20px', lineHeight: '1.5' }}>{desc}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '24px', borderTop: '1px solid var(--rule)', paddingTop: '12px',
          fontSize: '11px', color: 'var(--ink-faint)', lineHeight: '1.6'
        }}>
          Under penalties of perjury, I declare that all information on this form is true, correct, and submitted in good faith.
          The filer (Ivane Mkheidze) will respond to all legitimate inquiries within a reasonable period.
        </div>
      </SectionWrapper>
    </div>
  )
}