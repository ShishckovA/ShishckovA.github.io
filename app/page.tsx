import HeroSection from "@/components/sections/hero-section"
import SkillsSection from "@/components/sections/skills-section"
import EducationSection from "@/components/sections/education-section"
import ExperienceSection from "@/components/sections/experience-section"
import AchievementsSection from "@/components/sections/achievements-section"
import ContactSection from "@/components/sections/contact-section"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-stone-900 text-slate-800 dark:text-slate-200">
      <main className="container mx-auto px-4 py-8 md:py-16 space-y-16">
        <HeroSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Alexey Shishkov. All rights reserved.</p>
      </footer>
    </div>
  )
}
