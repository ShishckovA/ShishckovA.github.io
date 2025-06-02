import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react" // Assuming Linkedin might be added later

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12">
      <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-slate-200 dark:border-slate-700 shadow-lg">
        <AvatarImage src="/images/alexey-shishkov.jpeg" alt="Alexey Shishkov" />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Alexey Shishkov
        </h1>
        <p className="mt-2 text-xl md:text-2xl text-slate-600 dark:text-slate-400">
          4th year student, Faculty of Computer Science, NRU HSE
        </p>
        <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
          I believe that development should contain three main components – intellectual, physical and spiritual. I
          prefer intellectual games and go on mountain hikes. I enjoy table tennis, soccer, and volleyball. I graduated
          from music school (violin) and studied flute for two years. In my free time, I chat with friends, play the
          guitar, or train my cat. I value honesty and openness in people.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-3">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" /> Get in Touch
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ShishckovA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          {/* Placeholder for LinkedIn if available */}
          {/* <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
