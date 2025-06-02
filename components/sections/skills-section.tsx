import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

const skillsData = {
  programming: ["Python 3", "C++", "Java"],
  dataScience: ["Pandas", "MatPlotLib", "Scikit-Learn", "CatBoost", "XGBoost"],
  deepLearning: ["Pytorch", "Transformers", "RL", "Pretrain"],
  math: ["Calculus", "Statistics", "Linear Algebra"],
  web: ["HTML", "Typescript", "ReactJS", "CSS"],
  databases: ["MySQL", "Postgresql", "SQL"],
  tools: ["Jupyter Notebook", "Git", "LaTeX", "Linux", "Bash"],
  apis: ["VK API", "Telegram API"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <Lightbulb className="w-8 h-8 text-amber-500" /> Навыки
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card
            key={category}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800"
          >
            <CardHeader>
              <CardTitle className="capitalize text-xl text-slate-700 dark:text-slate-300">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle className="capitalize text-xl text-slate-700 dark:text-slate-300">Other</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              Writing projects for myself (C++/Python)
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
