import SectionWrapper from '../components/SectionWrapper'
import posts from '../data/posts.json'

export default function Blog() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '8px 32px', borderBottom: '2px solid var(--ink)',
        background: 'var(--paper-dark)'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Schedule E (Form 1040)</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px' }}>Supplemental Income - Writings & Commentary</div>
          <div style={{ fontSize: '11px', color: 'var(--ink-light)' }}>Report income or loss from writings, thoughts, and professional observations.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', color: 'var(--ink-faint)' }}>
          <div>OMB No. 1545-0074</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--accent)' }}>2025</div>
        </div>
      </div>

      <SectionWrapper label="Part I - Income From Writings">
        {posts.map((post, i) => (
          <div key={post.id} style={{
            borderBottom: '1px solid var(--rule)', paddingBottom: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink-faint)' }}>LINE {i + 1}</span>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.05em', border: '1px solid var(--rule)',
                    padding: '1px 6px', color: 'var(--ink-light)'
                  }}>{post.category}</span>
                  <span style={{ fontSize: '10px', color: 'var(--ink-faint)' }}>{post.date}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{post.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--ink-light)', lineHeight: '1.6' }}>{post.summary}</div>
              </div>
              <div style={{
                marginLeft: '24px', textAlign: 'right', fontSize: '10px',
                color: 'var(--ink-faint)', flexShrink: 0
              }}>
                <div>Read time</div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)' }}>{post.readTime}</div>
              </div>
            </div>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper label="Part II - Summary" noBorder>
        {[
          { num: '24', label: '', value: `${posts.length} entries` },
          { num: '26', label: '', value: 'Positive' },
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
