import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, ShoppingCart, Wrench, CheckCircle, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServiciosPage() {
  const servicios = [
    {
      id: "web",
      icon: <Code className="h-6 w-6" />,
      title: "Desarrollo de Páginas Web",
      description:
        "Creamos sitios web modernos, responsivos y optimizados para buscadores que representan perfectamente tu marca.",
      beneficios: [
        "Diseño personalizado y único",
        "Optimización para dispositivos móviles",
        "Carga rápida y rendimiento optimizado",
        "SEO integrado desde el inicio",
        "Fácil de administrar y actualizar",
      ],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "apps",
      icon: <Laptop className="h-6 w-6" />,
      title: "Aplicaciones Web",
      description:
        "Desarrollamos aplicaciones web personalizadas que automatizan procesos y mejoran la eficiencia de tu negocio.",
      beneficios: [
        "Soluciones a medida para tu empresa",
        "Interfaces intuitivas y fáciles de usar",
        "Integración con sistemas existentes",
        "Escalabilidad para crecer con tu negocio",
        "Seguridad y protección de datos",
      ],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce",
      description:
        "Implementamos tiendas online completas con gestión de productos, carrito de compras y pasarelas de pago seguras.",
      beneficios: [
        "Catálogo de productos fácil de gestionar",
        "Proceso de compra optimizado",
        "Múltiples opciones de pago",
        "Gestión de inventario",
        "Informes y análisis de ventas",
      ],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mantenimiento",
      icon: <Wrench className="h-6 w-6" />,
      title: "Mantenimiento y Optimización",
      description:
        "Ofrecemos servicios de mantenimiento continuo para garantizar que tu sitio web funcione de manera óptima.",
      beneficios: [
        "Actualizaciones regulares de seguridad",
        "Optimización de velocidad",
        "Copias de seguridad automáticas",
        "Monitoreo de rendimiento",
        "Soporte técnico continuo",
      ],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "medida",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Desarrollo a Medida",
      description:
        "Creamos soluciones digitales personalizadas según tus necesidades específicas y objetivos de negocio.",
      beneficios: [
        "Análisis detallado de requerimientos",
        "Desarrollo iterativo con feedback constante",
        "Soluciones adaptadas a tu modelo de negocio",
        "Tecnologías modernas y escalables",
        "Documentación completa",
      ],
      imagen: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Soluciones digitales adaptadas a tus necesidades específicas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              {servicios.map((servicio) => (
                <TabsTrigger key={servicio.id} value={servicio.id} className="py-2 data-[state=active]:bg-muted">
                  <div className="flex flex-col items-center gap-1">
                    {servicio.icon}
                    <span className="text-xs">{servicio.title.split(" ")[0]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {servicios.map((servicio) => (
              <TabsContent key={servicio.id} value={servicio.id} className="mt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors">
                      {servicio.title}
                    </div>
                    <h2 className="text-3xl font-bold">{servicio.title}</h2>
                    <p className="text-muted-foreground">{servicio.description}</p>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Beneficios</h3>
                      <ul className="space-y-2">
                        {servicio.beneficios.map((beneficio, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild>
                      <Link href="/contacto">
                        Solicitar Cotización
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={servicio.imagen || "/placeholder.svg"}
                      alt={servicio.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Nuestro Proceso de Trabajo</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Metodología probada para entregar proyectos exitosos
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              { num: "01", title: "Análisis", desc: "Entendemos tus necesidades y objetivos" },
              { num: "02", title: "Diseño", desc: "Creamos prototipos y maquetas visuales" },
              { num: "03", title: "Desarrollo", desc: "Implementamos la solución con código limpio" },
              { num: "04", title: "Lanzamiento", desc: "Publicamos y optimizamos tu proyecto" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para comenzar tu proyecto?</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Contáctanos hoy mismo y hablemos sobre cómo podemos ayudarte
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/portafolio">Ver Portafolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

