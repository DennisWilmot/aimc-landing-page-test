import { Check } from 'lucide-react'
import { Badge } from './ui/badge'

const learningPoints = [
  'Understand AI\'s strategic value and how it transforms business models across industries.',
  'Learn to identify high-impact AI opportunities in your organization and prioritize initiatives.',
  'Master the framework for evaluating AI vendors, tools, and platforms for your business needs.',
  'Develop strategies for building or acquiring AI capabilities and managing AI talent.',
  'Navigate the ethical, legal, and regulatory considerations of implementing AI.',
  'Create a roadmap for AI adoption that aligns with your organization\'s goals and culture.',
  'Learn to communicate AI initiatives effectively to boards, stakeholders, and teams.',
  'Understand how to measure AI ROI and build sustainable AI-driven business processes.',
]

const requirements = [
  'This course is designed for business executives, managers, and decision-makers. No technical or programming background is required.',
  'An open mind and willingness to think strategically about how AI can transform your organization and industry.',
]

const topics = ['AI Strategy', 'Business Leadership', 'Digital Transformation']

const includes = [
  '17 hours on-demand video',
  'Certificate of completion',
  'Access on mobile and TV',
  '8 strategic frameworks',
]

export default function CourseDetails() {
  return (
    <div className="space-y-8">
      {/* What you'll learn */}
      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex gap-3">
              <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
        <ul className="space-y-3">
          {requirements.map((req, index) => (
            <li key={index} className="flex gap-2 text-sm leading-relaxed">
              <span className="text-muted-foreground mt-2">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore related topics */}
      <div>
        <h2 className="text-xl font-bold mb-4">Explore related topics</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge key={topic} variant="outline" className="px-4 py-2 text-sm font-normal">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* This course includes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">This course includes:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {includes.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-muted-foreground" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
