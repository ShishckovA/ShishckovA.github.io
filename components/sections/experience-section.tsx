import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experienceData = [
  {
    role: "ML developer",
    company: "Yandex.Alice",
    period: "June 2021 - Present",
    location: "Moscow, Russia",
    tasks: [
      "Developing and training NLP model for sentence tagging",
      "Backend developing in C++, Python 3",
      "SQL, graph plotting",
      "Collecting data using crowdsourcing",
    ],
  },
  {
    role: "Trainee developer",
    company: "Yandex.Zen publishing platform",
    period: "February - August 2020 (6 months)",
    location: "Moscow, Russia",
    tasks: [
      "Backend development in Java",
      "JOOQ+Postgresql",
      "Frontend development (Typescript+ReactJS)",
      "Python 3 scripts",
    ],
  },
  {
    role: "Project «Study of functional connectomes of patients with Alzheimer’s disease using topological analysis and spectral analysis»",
    company: "NRU HSE",
    period: "2021",
    location: "Moscow, Russia",
    tasks: [
      "Research on the applications of topology in the structural analysis of the brain",
      "Developing a ML algorithm for classifying patients and control group",
      "Graph spectral classifications, developing custom kernel for SVM Classifier",
    ],
  },
  {
    role: "Project «Chek – news aggregator» (Telegram bot)",
    company: "Personal Project",
    period: "2021-2022",
    location: "Moscow, Russia",
    tasks: [
      "Development of a bot that sends a small portion of news in a personalized way",
      "News classification algorithm",
      "Recommendation algorithm",
      "Telegram bot with a user-friendly interface",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <Briefcase className="w-8 h-8 text-emerald-500" /> Опыт работы и проекты
      </h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800"
          >
            <CardHeader>
              <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{exp.role}</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {exp.company} | {exp.location}{" "}
                <span className="text-sm text-slate-500 dark:text-slate-500">({exp.period})</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
