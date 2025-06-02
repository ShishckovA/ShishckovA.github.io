import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <MessageSquare className="w-8 h-8 text-purple-500" /> Контакты
      </h2>
      <Card className="max-w-lg mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="text-center text-xl text-slate-800 dark:text-slate-200">Свяжитесь со мной</CardTitle>
          <CardDescription className="text-center text-slate-600 dark:text-slate-400">
            Буду рад обсудить возможности сотрудничества или ответить на ваши вопросы.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="mailto:liosha.shishckov@yandex.ru">
              <Mail className="mr-3 h-5 w-5 text-red-500" />
              liosha.shishckov@yandex.ru
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="tel:+79169661519">
              <Phone className="mr-3 h-5 w-5 text-green-500" />
              +7 (916) 966-15-19
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="https://github.com/ShishckovA" target="_blank" rel="noopener noreferrer">
              <Github className="mr-3 h-5 w-5 text-slate-500" />
              github.com/ShishckovA
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
