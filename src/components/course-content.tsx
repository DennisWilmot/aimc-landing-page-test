import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const sections = [
  { id: 1, title: 'Week 1', lectures: 26, duration: '3hr 53min' },
  { id: 2, title: 'Week 2', lectures: 21, duration: '2hr 26min' },
  { id: 3, title: 'Week 3', lectures: 19, duration: '2hr 32min' },
  { id: 4, title: 'Week 4', lectures: 23, duration: '2hr 59min' },
  { id: 5, title: 'Week 5', lectures: 17, duration: '2hr 10min' },
  { id: 6, title: 'Week 6 - MCP', lectures: 23, duration: '2hr 50min' },
]

export default function CourseContent() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set())

  const toggleSection = (id: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedSections(newExpanded)
  }

  const totalLectures = sections.reduce((sum, s) => sum + s.lectures, 0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course content</h2>
        <Button variant="link" className="text-primary">
          Expand all sections
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground">
        {sections.length} sections • {totalLectures} lectures • 16h 49m total length
      </p>

      <div className="border rounded-lg overflow-hidden">
        {sections.map((section) => (
          <div key={section.id} className="border-b last:border-b-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {expandedSections.has(section.id) ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
                <span className="font-semibold text-left">{section.title}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {section.lectures} lectures • {section.duration}
              </span>
            </button>
            
            {expandedSections.has(section.id) && (
              <div className="px-4 pb-4 space-y-2 bg-muted/20">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between py-2 text-sm">
                    <span className="text-muted-foreground">Lecture {i + 1}: Sample lesson title</span>
                    <span className="text-muted-foreground">10:23</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
