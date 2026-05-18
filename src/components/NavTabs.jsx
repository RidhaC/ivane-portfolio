const tabs = [
  { id: 'overview',     label: 'Overview' },
  { id: 'projects',     label: 'Projects' },
  { id: 'workhistory',  label: 'Work History' },
  { id: 'resume',       label: 'Resume' },
  { id: 'blog',         label: 'Blog' },
  { id: 'contact',      label: 'Contact' },
]

export default function NavTabs({ active, onSelect }) {
  return (
    <nav className="nav-tabs">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          className={`nav-tab ${active === tab.id ? 'active' : ''}`}
          onClick={() => onSelect(tab.id)}
        >
          <span className="tab-box" />
          {String(i + 1).padStart(2, '0')} {tab.label}
        </button>
      ))}
    </nav>
  )
}
