"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  const faqs = [
    {
      categoria: "General",
      preguntas: [
        {
          pregunta: "¿Cuánto cuesta desarrollar una página web?",
          respuesta:
            "El costo de desarrollar una página web varía dependiendo de varios factores como la complejidad del diseño, funcionalidades requeridas, número de páginas, etc. Ofrecemos soluciones desde sitios web básicos hasta plataformas complejas. Te recomendamos contactarnos para una cotización personalizada basada en tus necesidades específicas.",
        },
        {
          pregunta: "¿Cuánto tiempo tarda el desarrollo de un sitio web?",
          respuesta:
            "El tiempo de desarrollo depende de la complejidad del proyecto. Un sitio web informativo básico puede estar listo en 2-4 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones web pueden tomar de 2 a 4 meses. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado para tu proyecto específico.",
        },
        {
          pregunta: "¿Qué información necesitan para comenzar mi proyecto?",
          respuesta:
            "Para comenzar, necesitamos entender tus objetivos de negocio, público objetivo, preferencias de diseño, y funcionalidades requeridas. También es útil si tienes ejemplos de sitios web que te gusten. Durante nuestra reunión inicial, te guiaremos a través de todas las preguntas necesarias para entender completamente tu visión.",
        },
      ],
    },
    {
      categoria: "Servicios",
      preguntas: [
        {
          pregunta: "¿Qué servicios de mantenimiento ofrecen después del lanzamiento?",
          respuesta:
            "Ofrecemos varios planes de mantenimiento que incluyen actualizaciones de seguridad, copias de seguridad regulares, monitoreo de rendimiento, actualizaciones de contenido y soporte técnico. Podemos personalizar un plan de mantenimiento según tus necesidades específicas para asegurar que tu sitio web funcione de manera óptima.",
        },
        {
          pregunta: "¿Pueden ayudarme con el SEO de mi sitio web?",
          respuesta:
            "Sí, ofrecemos servicios de optimización para motores de búsqueda (SEO). Esto incluye optimización on-page, investigación de palabras clave, optimización técnica, creación de contenido optimizado y análisis de competencia. Nuestro objetivo es mejorar la visibilidad de tu sitio web en los resultados de búsqueda y aumentar el tráfico orgánico.",
        },
        {
          pregunta: "¿Desarrollan aplicaciones móviles?",
          respuesta:
            "Sí, desarrollamos aplicaciones web progresivas (PWA) que funcionan en dispositivos móviles y de escritorio. También podemos desarrollar aplicaciones móviles nativas para iOS y Android según tus necesidades específicas. Evaluamos cada proyecto para recomendar la mejor solución tecnológica.",
        },
      ],
    },
    {
      categoria: "Tecnología",
      preguntas: [
        {
          pregunta: "¿Qué tecnologías utilizan para el desarrollo?",
          respuesta:
            "Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, y bases de datos como MongoDB y PostgreSQL. Para e-commerce, trabajamos con plataformas como Shopify y WooCommerce. Seleccionamos la stack tecnológica más adecuada para cada proyecto según sus requisitos específicos.",
        },
        {
          pregunta: "¿Los sitios web son responsivos para dispositivos móviles?",
          respuesta:
            "Sí, todos nuestros sitios web son completamente responsivos y se adaptan a diferentes tamaños de pantalla, incluyendo smartphones, tablets y computadoras de escritorio. Utilizamos un enfoque de diseño mobile-first para garantizar una experiencia óptima en todos los dispositivos.",
        },
        {
          pregunta: "¿Puedo actualizar el contenido de mi sitio web por mi cuenta?",
          respuesta:
            "Sí, implementamos sistemas de gestión de contenido (CMS) que te permiten actualizar fácilmente el contenido de tu sitio web sin conocimientos técnicos. Proporcionamos capacitación sobre cómo utilizar el CMS y documentación detallada para que puedas gestionar tu sitio web con confianza.",
        },
      ],
    },
    {
      categoria: "Proceso",
      preguntas: [
        {
          pregunta: "¿Cómo es el proceso de desarrollo?",
          respuesta:
            "Nuestro proceso de desarrollo incluye las siguientes etapas: 1) Análisis y planificación, donde definimos los objetivos y requisitos; 2) Diseño, donde creamos wireframes y maquetas visuales; 3) Desarrollo, donde implementamos la solución; 4) Pruebas, para asegurar la calidad; 5) Lanzamiento; y 6) Mantenimiento continuo. Te mantenemos informado durante todo el proceso.",
        },
        {
          pregunta: "¿Cómo manejan los cambios durante el desarrollo?",
          respuesta:
            "Entendemos que los requisitos pueden evolucionar durante el desarrollo. Utilizamos metodologías ágiles que nos permiten adaptarnos a cambios. Los cambios menores se incorporan dentro del alcance del proyecto, mientras que los cambios significativos pueden requerir ajustes en el cronograma o presupuesto, que siempre discutimos contigo antes de implementarlos.",
        },
        {
          pregunta: "¿Ofrecen soporte después del lanzamiento?",
          respuesta:
            "Sí, ofrecemos soporte técnico continuo después del lanzamiento. Tenemos diferentes planes de soporte que incluyen tiempo de respuesta garantizado, monitoreo proactivo y mantenimiento regular. Nuestro objetivo es asegurar que tu sitio web funcione sin problemas y se mantenga actualizado.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preguntas Frecuentes</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Búsqueda */}
      <section className="w-full py-6 md:py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Input type="search" placeholder="Buscar preguntas..." className="pl-10" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            {faqs.map((categoria, i) => (
              <div key={i} className="space-y-4">
                <h2 className="text-2xl font-bold">{categoria.categoria}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {categoria.preguntas.map((faq, j) => (
                    <AccordionItem key={j} value={`item-${i}-${j}`}>
                      <AccordionTrigger className="text-left">{faq.pregunta}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.respuesta}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">¿No encontraste lo que buscabas?</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Contáctanos directamente y responderemos todas tus preguntas
              </p>
            </div>
            <Button asChild>
              <Link href="/contacto">
                Contactar Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

