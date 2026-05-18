import SectionWrapper from '../components/SectionWrapper'
import jobs from '../data/workhistory.json'

export default function WorkHistory() {
  return (
    <div>
      {jobs.map((job, idx) => (
        <div key={job.id} style={{ borderBottom: '3px solid var(--ink)' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            padding: '8px 32px', borderBottom: '2px solid var(--ink)',
            background: 'var(--paper-dark)'
          }}>
            <div>
              <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                W-2 Wage and Tax Statement
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>
                Employee's Wage Record - Position {idx + 1}
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
              <div>OMB No. 1545-0008</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>
                {job.startDate.slice(-4)}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="form-field" style={{ flex: 1, borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
              <label>a - Employer EIN</label>
              <div className="field-value">{job.ein}</div>
            </div>
            <div className="form-field" style={{ flex: 2, borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
              <label>b - Employer name, address</label>
              <div className="field-value">{job.employer}</div>
              <div className="field-value" style={{ fontSize: '12px', color: 'var(--ink-faint)' }}>{job.location}</div>
            </div>
            <div className="form-field" style={{ flex: 1, borderBottom: '1px solid var(--rule)' }}>
              <label>1 - Wages, tips, other compensation</label>
              <div className="field-value large">{job.wages}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="form-field" style={{ flex: 2, borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
              <label>e - Employee name</label>
              <div className="field-value">Ivane Mkheidze</div>
            </div>
            <div className="form-field" style={{ flex: 1, borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
              <label>Position / title</label>
              <div className="field-value">{job.position}</div>
            </div>
            <div className="form-field" style={{ flex: 1, borderBottom: '1px solid var(--rule)' }}>
              <label>2 - Federal income tax withheld</label>
              <div className="field-value">{job.federalTax}</div>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className="form-field" style={{ flex: 1, borderRight: '1px solid var(--rule)' }}>
              <label>Employment period</label>
              <div className="field-value">{job.startDate} - {job.endDate}</div>
            </div>
            <div className="form-field" style={{ flex: 3 }}>
              <label>14 - Other (duties and responsibilities)</label>
              <div style={{ paddingTop: '4px' }}>
                {job.duties.map((d, i) => (
                  <div key={i} className="checkbox-row" style={{ paddingBottom: '2px' }}>
                    <span className="form-checkbox checked" />
                    <span style={{ fontSize: '13px' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}