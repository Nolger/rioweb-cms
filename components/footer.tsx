import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">RioWeb</span>
              <span className="text-xl font-light tracking-tight">CMS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transformamos ideas en soluciones digitales. Desarrollo web profesional y personalizado para tu negocio.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/portafolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios#web"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#apps"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aplicaciones Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#ecommerce"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#mantenimiento"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#medida"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Desarrollo a Medida
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">+57 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">info@rioweb.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">Riohacha, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} RioWeb CMS. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terminos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}