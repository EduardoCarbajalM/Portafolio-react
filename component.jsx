/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ng9lPR9La76
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="py-8 px-4 md:px-6 bg-primary">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary-foreground animate-fade-in">Eduardo Carbajal Mendoza</h1>
            <p className="text-lg text-primary-foreground animate-fade-in delay-200">Desarrollador Web // Manejador de base de datos</p>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                  CV
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
            <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in">
              <p className="text-muted-foreground mb-4">
                Soy un desarrollador web con experiencia en el diseño y desarrollo de aplicaciones web modernas. Me
                apasiona la tecnología y estoy constantemente aprendiendo nuevas habilidades para mejorar mis proyectos.
              </p>
              <p className="text-muted-foreground mb-4">
                Además de mi trabajo como desarrollador, también disfruto de la fotografía y el senderismo en mi tiempo
                libre. Me gusta mantener un equilibrio entre mi vida profesional y personal.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden animate-slide-in-up">
                <img src="/placeholder.svg" alt="Proyecto 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Proyecto 1</h3>
                  <p className="text-muted-foreground mb-4">Descripción breve del proyecto 1.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden animate-slide-in-up delay-200">
                <img src="/placeholder.svg" alt="Proyecto 2" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Proyecto 2</h3>
                  <p className="text-muted-foreground mb-4">Descripción breve del proyecto 2.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden animate-slide-in-up delay-400">
                <img src="/placeholder.svg" alt="Proyecto 3" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Proyecto 3</h3>
                  <p className="text-muted-foreground mb-4">Descripción breve del proyecto 3.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Curriculum Vitae</h2>
            <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in">
              <iframe src="/cv.pdf" title="Curriculum Vitae" className="w-full h-[600px]" />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Certificaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in">
                <img src="/placeholder.svg" alt="Certificado 1" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificado 1</h3>
                <p className="text-muted-foreground mb-4">Descripción breve del certificado 1.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Ver Certificado
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                <img src="/placeholder.svg" alt="Certificado 2" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificado 2</h3>
                <p className="text-muted-foreground mb-4">Descripción breve del certificado 2.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Ver Certificado
                </Link>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in delay-400">
                <img src="/placeholder.svg" alt="Certificado 3" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold mb-2">Certificado 3</h3>
                <p className="text-muted-foreground mb-4">Descripción breve del certificado 3.</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Ver Certificado
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">Lenguajes de Programación</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                <h3 className="text-xl font-bold mb-4">Sistemas Operativos</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Linux</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in delay-400">
                <h3 className="text-xl font-bold mb-4">Frameworks y Bibliotecas</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">Puedes contactarme a través de los siguientes medios:</p>
                <div className="flex items-center space-x-4 animate-fade-in">
                  <Link
                    href="#"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <LinkedinIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <GitGraphIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    <MailIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg p-6 animate-fade-in delay-200">
                <h3 className="text-2xl font-bold mb-4">Envíame un mensaje</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-muted-foreground mb-1">
                      Nombre
                    </label>
                    <Input id="name" type="text" placeholder="Ingresa tu nombre" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-muted-foreground mb-1">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="Ingresa tu correo" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-muted-foreground mb-1">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Escribe tu mensaje" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p>&copy; 2024 Juan Pérez. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <GitGraphIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              <MailIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}