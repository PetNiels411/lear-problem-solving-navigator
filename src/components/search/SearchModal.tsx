import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import type { DefectRecord, Initiative } from '../../types'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  defects: DefectRecord[]
  initiatives: Initiative[]
  onNavigateToMethod?: (method: string) => void
}

export default function SearchModal({ isOpen, onClose, defects, initiatives, onNavigateToMethod }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState<'all' | 'defects' | 'initiatives'>('all')

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return { defects: [], initiatives: [] }

    const term = searchTerm.toLowerCase()

    const filteredDefects = defects.filter(defect =>
      defect.title.toLowerCase().includes(term) ||
      defect.category.toLowerCase().includes(term) ||
      defect.severity.toLowerCase().includes(term) ||
      defect.segment.toLowerCase().includes(term) ||
      defect.rootCause.toLowerCase().includes(term)
    )

    const filteredInitiatives = initiatives.filter(initiative =>
      initiative.title.toLowerCase().includes(term) ||
      initiative.method.toLowerCase().includes(term) ||
      initiative.status.toLowerCase().includes(term) ||
      initiative.segment.toLowerCase().includes(term) ||
      initiative.category.toLowerCase().includes(term) ||
      initiative.owner.toLowerCase().includes(term)
    )

    return { defects: filteredDefects, initiatives: filteredInitiatives }
  }, [searchTerm, defects, initiatives])

  const totalResults = searchResults.defects.length + searchResults.initiatives.length

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Search Manufacturing Data</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search issues, initiatives, categories, methods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 font-medium text-sm ${
              selectedTab === 'all'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            All Results ({totalResults})
          </button>
          <button
            onClick={() => setSelectedTab('defects')}
            className={`px-4 py-2 font-medium text-sm ${
              selectedTab === 'defects'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Defects ({searchResults.defects.length})
          </button>
          <button
            onClick={() => setSelectedTab('initiatives')}
            className={`px-4 py-2 font-medium text-sm ${
              selectedTab === 'initiatives'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Initiatives ({searchResults.initiatives.length})
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-96">
          {searchTerm.trim() === '' ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter a search term to find issues and initiatives</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Defects Results */}
              {(selectedTab === 'all' || selectedTab === 'defects') && searchResults.defects.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Defects ({searchResults.defects.length})
                  </h3>
                  <div className="space-y-2">
                    {searchResults.defects.map((defect) => (
                      <div 
                        key={defect.id} 
                        className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        onClick={() => {
                          onNavigateToMethod?.(defect.category.includes('electrical') ? '8d' : 'dmaic')
                          onClose()
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">{defect.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{defect.rootCause}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                              <span>Category: {defect.category}</span>
                              <span>Severity: {defect.severity}</span>
                              <span>Segment: {defect.segment}</span>
                              <span>Status: {defect.status}</span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="text-red-600 dark:text-red-400 font-medium">
                              ${defect.scrapCost?.toLocaleString() || 0} scrap
                            </div>
                            <div className="text-orange-600 dark:text-orange-400">
                              {defect.reworkHours || 0}h rework
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Initiatives Results */}
              {(selectedTab === 'all' || selectedTab === 'initiatives') && searchResults.initiatives.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Initiatives ({searchResults.initiatives.length})
                  </h3>
                  <div className="space-y-2">
                    {searchResults.initiatives.map((initiative) => (
                      <div 
                        key={initiative.id} 
                        className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        onClick={() => {
                          onNavigateToMethod?.(initiative.method.toLowerCase())
                          onClose()
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">{initiative.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{initiative.impactSummary}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                              <span>Method: {initiative.method}</span>
                              <span>Status: {initiative.status}</span>
                              <span>Segment: {initiative.segment}</span>
                              <span>Owner: {initiative.owner}</span>
                              <span>Progress: {initiative.progress}%</span>
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                              initiative.status === 'Open' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              initiative.status === 'In containment' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              initiative.status === 'Closed' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200' :
                              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {initiative.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}