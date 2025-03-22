import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, ShoppingCart, Wrench, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transformamos ideas en soluciones digitales
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Diseño y desarrollo web profesional para potenciar tu presencia online. Soluciones a medida que
                  impulsan tu negocio.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/servicios">Explorar Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Soluciones digitales adaptadas a tus necesidades específicas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card className="bg-muted/40 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Desarrollo Web</h3>
                <p className="text-sm text-muted-foreground">
                  Sitios web modernos, responsivos y optimizados para buscadores.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/40 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">E-commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Tiendas online completas con gestión de productos y pagos.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/40 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Aplicaciones Web</h3>
                <p className="text-sm text-muted-foreground">Sistemas personalizados, dashboards y CRMs a medida.</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/40 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mantenimiento</h3>
                <p className="text-sm text-muted-foreground">
                  Optimización, seguridad y actualizaciones para tu sitio web.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link href="/servicios">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Historias de éxito de quienes confiaron en nosotros
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
                    "RioWeb transformó por completo nuestra presencia digital. El equipo entendió perfectamente nuestras
                    necesidades y entregó un sitio web que superó nuestras expectativas."
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

      {/* Marcas */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Marcas que confían en nosotros</h2>
              <p className="max-w-[900px] text-muted-foreground">Colaboramos con empresas de todos los tamaños</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-12 w-24 bg-muted rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para impulsar tu presencia digital?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Contáctanos hoy mismo y comencemos a trabajar en tu proyecto
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portafolio">Ver Portafolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

