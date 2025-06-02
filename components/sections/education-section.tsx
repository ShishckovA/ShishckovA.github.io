import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const educationData = [
  {
    institution: "NRU HSE (National Research University Higher School of Economics)",
    degree: "Faculty of Computer Science, Applied Mathematics and Informatics",
    period: "2019 – 2023",
    details: [
      "Current GPA: 9.03 out of 10",
      "Machine learning course: 9 out of 10",
      "Deep learning course: 10 out of 10",
    ],
  },
  {
    institution: 'School "Gymnasium in the South-West No1543"',
    degree: "Advanced study of mathematics",
    period: "2012 – 2019",
    details: ["Final grade in the math extended course: 5 out of 5"],
  },
  {
    institution: "Summer school for future programmers Universum",
    degree: "Munich, Germany",
    period: "August 2019",
    details: [
      "Successful completion of the school",
      "Fully written browser extension that replaces ads with funny images",
      "Teamwork, team leading",
    ],
  },
  {
    institution: "Summer school of informatics",
    degree: "Laagna, Estonia",
    period: "August 2018",
    details: ["Algorithmic parallel A'", "Final grades: 5, 4+ out of 5"],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <GraduationCap className="w-8 h-8 text-sky-500" /> Образование
      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800"
          >
            <CardHeader>
              <CardTitle className="text-xl text-slate-800 dark:text-slate-200">{edu.institution}</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {edu.degree} <span className="text-sm text-slate-500 dark:text-slate-500">({edu.period})</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
