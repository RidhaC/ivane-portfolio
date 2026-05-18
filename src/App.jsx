import { useState } from 'react'
import FormHeader from './components/FormHeader'
import NavTabs from './components/NavTabs'
import Overview from './pages/Overview'
import Projects from './pages/Projects'
import WorkHistory from './pages/WorkHistory'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const pages = {
  overview:    <Overview />,
  projects:    <Projects />,
  workhistory: <WorkHistory />,
  resume:      <Resume />,
  blog:        <Blog />,
  contact:     <Contact />,
}

export default function App() {
  const [active, setActive] = useState('overview')

  return (
    <div>
      <FormHeader />
      <NavTabs active={active} onSelect={setActive} />
      <main>
        {pages[active]}
      </main>
      <footer style={{
        borderTop: '2px solid var(--ink)',
        padding: '8px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '10px',
        color: 'var(--ink-faint)',
        background: 'var(--paper-dark)'
      }}>
        <span>For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.</span>
        <span>Cat. No. IVANE2025 &nbsp;&nbsp; Form <strong>1040</strong> (2025)</span>
      </footer>
    </div>
  )
}
