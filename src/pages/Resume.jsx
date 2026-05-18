import SectionWrapper from '../components/SectionWrapper'

export default function Resume() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '8px 32px', borderBottom: '2px solid var(--ink)',
        background: 'var(--paper-dark)'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Schedule A (Form 1040)</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Itemized Deductions - Qualifications & Credentials</div>
          <div style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Attach to Form 1040. Use if total deductions exceed standard deduction.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
          <div>OMB No. 1545-0074</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>2025</div>
        </div>
      </div>

      <SectionWrapper label="Part I - Education">
        {[
          { num: '1', label: 'M.S. Accounting - Western Michigan University', value: 'In Progress' },
          { num: '2', label: 'B.S. Accounting - Western Michigan University', value: 'Completed - May 2025' },
          { num: '3', label: 'GPA (Bachelor\'s)', value: '4.0' },
          { num: '4', label: 'Relevant coursework', value: 'Audit, Tax, Financial Reporting, Cost Accounting' },
        ].map(({ num, label, value }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label">{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">{value}</span>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Part II - Certifications & Licenses">
        {[
          { num: '5', label: 'CPA Exam - Currently pursuing alongside M.S. Accounting', value: 'In Progress' },
        ].map(({ num, label, value }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label">{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">{value}</span>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Part III - Technical Skills">
        <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
          {[
            { category: 'Software', items: ['', '', '', '', ''] },
            { category: 'Technical', items: ['', '', '', '', ''] },
            { category: 'Soft Skills', items: ['', '', '', '', ''] },
          ].map(({ category, items }) => (
            <div key={category} style={{ flex: 1, borderRight: '1px solid var(--rule)', padding: '8px 12px', minWidth: '200px' }}>
              <div className="section-label" style={{ marginBottom: '8px' }}>{category}</div>
              {items.map((item, i) => (
                <div key={i} className="checkbox-row">
                  <span className="form-checkbox checked" />
                  <span style={{ fontSize: '12px' }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper label="Part IV - Total Itemized Deductions" noBorder>
        {[
          { num: '17', label: '', value: 'B.S. + M.S.' },
          { num: '18', label: '', value: 'See Schedule W-2' },
          { num: '29', label: '', value: 'Highly Qualified' },
        ].map(({ num, label, value }) => (
          <div className="line-item" key={num}>
            <span className="line-number">{num}</span>
            <span className="line-label" style={{ fontWeight: 700 }}>{label}</span>
            <span className="dotted-leader" />
            <span className="line-value">{value}</span>
          </div>
        ))}
        <div style={{ marginTop: '16px', borderTop: '2px solid var(--ink)', paddingTop: '12px', textAlign: 'center' }}>
          <a href="/resume.pdf" target="_blank" style={{
            fontFamily: 'var(--font-form)', fontSize: '12px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            border: '2px solid var(--accent)', padding: '8px 24px',
            color: 'var(--accent)', display: 'inline-block'
          }}>
            [ Download Full Resume - Form PDF ]
          </a>
        </div>
      </SectionWrapper>
    </div>
  )
}