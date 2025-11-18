import { Badge } from './ui/badge'
import { Star } from 'lucide-react'

export default function CourseHeader() {
  return (
    <div className="bg-slate-900 border-b">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-balance text-white">
            AI Masterclass Online Course
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            Learn how executives and business leaders can effectively think about, strategize, and implement AI in their organizations.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-100 border-0">Bestseller</Badge>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-lg font-bold text-amber-500 mr-1">4.7</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-slate-400">(21,115 ratings)</span>
            </div>
            
            <span className="text-sm text-slate-400">12,450 learners</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Presented by <span className="text-white font-medium">NYU</span> and <span className="text-white font-medium">Intellibus</span></span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Last updated 11/2025</span>
            <span>English [Auto], Arabic [Auto], +15 more</span>
          </div>
        </div>
      </div>
    </div>
  )
}
