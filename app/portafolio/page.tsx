import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortafolioPage() {
  const proyectos = [
    {
      id: 1,
      categoria: "web",
      titulo: "Sitio Corporativo Moderno",
      cliente: "Empresa ABC",
      descripcion:
        "Rediseño completo del sitio web corporativo con enfoque en la experiencia de usuario y conversión de visitantes.",
      tecnologias: ["React", "Next.js", "Tailwind CSS"],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      categoria: "ecommerce",
      titulo: "Tienda Online de Moda",
      cliente: "Fashion Store",
      descripcion: "Implementación de tienda online con catálogo de productos, carrito de compras y pasarela de pagos.",
      tecnologias: ["Next.js", "Shopify", "Stripe"],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      categoria: "app",
      titulo: "Dashboard de Análisis",
      cliente: "Data Insights",
      descripcion:
        "Aplicación web para visualización y análisis de datos con gráficos interactivos y reportes personalizados.",
      tecnologias: ["React", "D3.js", "Firebase"],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      categoria: "web",
      titulo: "Blog de Contenido",
      cliente: "Media Group",
      descripcion: "Plataforma de blog con sistema de gestión de contenidos, categorías y búsqueda avanzada.",
      tecnologias: ["Next.js", "Sanity CMS", "Vercel"],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      categoria: "ecommerce",
      titulo: "Marketplace de Productos",
      cliente: "Multi Vendors",
      descripcion: "Plataforma de marketplace con múltiples vendedores, sistema de comisiones y gestión de pedidos.",
      tecnologias: ["Next.js", "Stripe Connect", "MongoDB"],
      imagen: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      categoria: "app",
      titulo: "Sistema de Reservas",
      cliente: "Service Booking",
      descripcion: "Aplicación web para gestión de reservas con calendario interactivo y notificaciones automáticas.",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestro Portafolio</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Explora algunos de nuestros proyectos más destacados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 h-auto">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="app">Apps</TabsTrigger>
            </TabsList>
            <TabsContent value="todos" className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {proyectos.map((proyecto) => (
                  <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                ))}
              </div>
            </TabsContent>
            {["web", "ecommerce", "app"].map((categoria) => (
              <TabsContent key={categoria} value={categoria} className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {proyectos
                    .filter((p) => p.categoria === categoria)
                    .map((proyecto) => (
                      <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Testimonios de Clientes</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Lo que dicen nuestros clientes sobre nuestro trabajo
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "El equipo de RioWeb entendió perfectamente nuestra visión y la transformó en una realidad digital
                    que superó nuestras expectativas. El proceso fue fluido y profesional de principio a fin."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-muted h-10 w-10"></div>
                    <div>
                      <p className="text-sm font-medium">Cliente {i}</p>
                      <p className="text-xs text-muted-foreground">Empresa {i}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">¿Listo para crear tu próximo proyecto?</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Contáctanos hoy mismo y hablemos sobre cómo podemos ayudarte
              </p>
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

function ProyectoCard({ proyecto }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={proyecto.imagen || "/placeholder.svg"} alt={proyecto.titulo} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{proyecto.titulo}</CardTitle>
            <CardDescription>{proyecto.cliente}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{proyecto.descripcion}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Ver Detalles
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

