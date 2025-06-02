import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const achievementsData = [
  "Prizewinner in all-Russian schoolchildren’s competition in mathematics, informatics (regional stage)",
  "Teaching children math, algorithms and programming basics (tutor, preparing for the olympiads)",
  "YaCup’20 in analytics, 2020, 76th place (Final stage)",
  "1st place in the all-Russian Olympiad in mathematics and cryptography, 2019",
  "Olympiad in mathematics «Tournament of Towns», 3rd degree diploma, 2019",
  "Olympiad in mathematics «Polytech», 2nd degree diploma, 2021",
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <Award className="w-8 h-8 text-yellow-500" /> Достижения
      </h2>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
        <CardContent className="pt-6">
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            {achievementsData.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
