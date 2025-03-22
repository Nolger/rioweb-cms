import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NosotrosPage() {
  const tecnologias = [
    { nombre: "React", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "Tailwind CSS", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "MongoDB", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "PostgreSQL", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "Firebase", logo: "/placeholder.svg?height=80&width=80" },
    { nombre: "Vercel", logo: "/placeholder.svg?height=80&width=80" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Nosotros</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Conoce más sobre RioWeb CMS y nuestro equipo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors">
                Nuestra Historia
              </div>
              <h2 className="text-3xl font-bold">Cómo comenzamos</h2>
              <p className="text-muted-foreground">
                RioWeb CMS nació en 2018 con una visión clara: crear soluciones digitales que realmente impacten en el
                crecimiento de nuestros clientes. Lo que comenzó como un pequeño equipo de desarrolladores apasionados,
                ha crecido hasta convertirse en una agencia digital completa con clientes en todo el país.
              </p>
              <p className="text-muted-foreground">
                Nuestra filosofía siempre ha sido poner al cliente en el centro de todo lo que hacemos. Entendemos que
                cada proyecto es único y requiere soluciones personalizadas que se adapten a objetivos específicos.
              </p>
              <p className="text-muted-foreground">
                A lo largo de los años, hemos perfeccionado nuestros procesos y ampliado nuestras capacidades para
                ofrecer servicios integrales que abarcan desde el diseño hasta el desarrollo y mantenimiento continuo.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=600" alt="Nuestra Historia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors">
                  Misión
                </div>
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento y éxito de nuestros
                  clientes, a través de un servicio personalizado y de alta calidad que supere expectativas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors">
                  Visión
                </div>
                <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser reconocidos como líderes en el desarrollo de soluciones digitales, destacando por nuestra
                  innovación, calidad y compromiso con el éxito de nuestros clientes, creando experiencias digitales que
                  marquen la diferencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Nuestros Valores</h2>
              <p className="max-w-[900px] text-muted-foreground">Principios que guían nuestro trabajo diario</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              { titulo: "Excelencia", desc: "Buscamos la perfección en cada detalle de nuestro trabajo" },
              { titulo: "Innovación", desc: "Exploramos constantemente nuevas tecnologías y enfoques" },
              { titulo: "Compromiso", desc: "Nos involucramos profundamente con cada proyecto" },
              { titulo: "Transparencia", desc: "Comunicación clara y honesta en todo momento" },
              { titulo: "Colaboración", desc: "Trabajamos en equipo con nuestros clientes" },
              { titulo: "Adaptabilidad", desc: "Nos ajustamos a las necesidades cambiantes" },
            ].map((valor, i) => (
              <Card key={i} className="bg-muted/40 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{valor.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{valor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Tecnologías que Utilizamos</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Herramientas modernas para crear soluciones robustas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 mt-12">
            {tecnologias.map((tech, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="relative h-20 w-20">
                  <Image src={tech.logo || "/placeholder.svg"} alt={tech.nombre} fill className="object-contain" />
                </div>
                <span className="text-sm font-medium">{tech.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">¿Quieres trabajar con nosotros?</h2>
              <p className="max-w-[900px] text-muted-foreground">Contáctanos hoy mismo y cuéntanos sobre tu proyecto</p>
            </div>
            <Button asChild>
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

