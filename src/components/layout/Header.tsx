import { useState } from 'react'
import { Moon, SunMedium, Search } from 'lucide-react'
import { HelpCircle } from 'lucide-react'
import SearchModal from '../search/SearchModal'
import type { DefectRecord, Initiative } from '../../types'

interface HeaderProps {
  title: string
  summary: string
  theme: 'light' | 'dark'
  onThemeToggle: () => void
  onHelpClick: () => void
  defects: DefectRecord[]
  initiatives: Initiative[]
  onNavigateToMethod?: (method: string) => void
}

export default function Header({ title, summary, theme, onThemeToggle, onHelpClick, defects, initiatives, onNavigateToMethod }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header className="header-bar">
        <div>
          <p className="eyebrow">Manufacturing problem-solving cockpit</p>
          <h1>{title}</h1>
          <p className="header-summary">{summary}</p>
        </div>
        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={() => setIsSearchOpen(true)}
            title="Search manufacturing data"
          >
            <Search size={18} />
            <span className="sr-only">Search</span>
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={onHelpClick}
            title="Get contextual help for this view"
          >
            <HelpCircle size={18} />
            <span>Help</span>
          </button>
          <button type="button" className="theme-toggle" onClick={onThemeToggle}>
            {theme === 'light' ? <Moon size={18} /> : <SunMedium size={18} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        defects={defects}
        initiatives={initiatives}
        onNavigateToMethod={onNavigateToMethod}
      />
    </>
  )
}
