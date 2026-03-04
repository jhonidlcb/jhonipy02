import { useState } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";



































export default function SoftwareItapua() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<"login" | "register">("login");

    const openAuthModal = (mode: "login" | "register") => {
      setAuthMode(mode);
      setShowAuthModal(true);
    };
  
  return (
    <Layout onAuthClick={openAuthModal}>
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Software Empresarial y Soluciones Tecnológicas en Itapúa
        </motion.h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            El departamento de Itapúa se consolida como el motor económico de Paraguay, y para mantener esa 
            competitividad, las empresas necesitan herramientas digitales a la altura de sus desafíos. 
            El software a medida es la clave para la eficiencia operativa en nuestra región.
          </p>

          <h2>Soluciones empresariales en Itapúa</h2>
          <p>
            Desde Encarnación hasta las colonias unidas, las empresas de Itapúa requieren sistemas que se 
            adapten a su realidad productiva. Ya sea para la gestión de stocks agrícolas, el control de 
            procesos industriales o la administración de servicios comerciales, una solución genérica 
            muchas veces no alcanza para cubrir las particularidades del mercado itapuense.
          </p>

          <p>
            En SoftwarePar desarrollamos aplicaciones que hablan el lenguaje de tu negocio. Entendemos 
            que el flujo de trabajo de una cooperativa en Itapúa es distinto al de una tienda en la capital, 
            y por eso priorizamos la personalización absoluta en cada línea de código que escribimos.
          </p>

          <h2>Facturación electrónica y cumplimiento con la SET</h2>
          <p>
            La transición hacia el SIFEN (Sistema Integrado de Facturación Electrónica Nacional) es obligatoria 
            y estratégica. Ayudamos a las empresas de Itapúa a cumplir con las normativas de la SET de manera 
            transparente y sin fricciones. Nuestro módulo de facturación electrónica se integra con tus 
            sistemas actuales, permitiéndote emitir documentos tributarios electrónicos (DTE) con total seguridad.
          </p>
          
          <p>
            Estar al día con la facturación electrónica en Itapúa no solo te evita sanciones, sino que 
            agiliza tus procesos contables, reduce costos de impresión y papel, y proyecta una imagen 
            de modernidad absoluta ante tus proveedores y clientes.
          </p>

          <h2>Sistemas personalizados y escalables</h2>
          <p>
            Tu empresa en Itapúa está en constante movimiento. Por eso, el software que elijas debe ser 
            capaz de crecer contigo. Diseñamos sistemas modulares y escalables que permiten añadir 
            funcionalidades a medida que tu negocio se expande, asegurando que tu inversión tecnológica 
            mantenga su valor a través de los años.
          </p>
          
          <ul>
            <li><strong>Adaptabilidad:</strong> El software se ajusta a tus procesos, no al revés.</li>
            <li><strong>Seguridad de datos:</strong> Protegemos la información estratégica de tu empresa itapuense.</li>
            <li><strong>Integración total:</strong> Conecta tus diferentes áreas (ventas, stock, contabilidad) en una sola plataforma.</li>
            <li><strong>Acceso remoto:</strong> Gestiona tu negocio en Itapúa desde cualquier lugar con conexión a internet.</li>
          </ul>

          <p>
            Nuestra visión es ser el brazo tecnológico de las empresas que lideran el desarrollo de Itapúa, 
            proporcionando soluciones que eliminan cuellos de botella y potencian la productividad de cada equipo humano.
          </p>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Lleva tu empresa al siguiente nivel</h3>
            <p className="mb-6">
              Es momento de que la tecnología trabaje para ti. Agenda hoy una reunión con nuestros 
              consultores en Itapúa para diseñar el software que transformará tu realidad empresarial.
            </p>
            <Button size="lg" asChild>
              <a href="/#contacto">Consultar Soluciones Empresariales</a>
            </Button>
          </div>
        </div>
      </section>
          
          <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
          <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} mode={authMode} />
    </Layout>
  );
}
