import { useState } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";



































export default function CarlosAntonioLopez() {
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
          Desarrollo Web en Carlos Antonio López, Itapúa
        </motion.h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            En la pujante localidad de Carlos Antonio López, Itapúa, la presencia digital no es solo una opción, 
            es una necesidad para cualquier negocio que busque crecer en el mercado actual. 
            Como especialistas en desarrollo web regional, entendemos los desafíos únicos de las empresas en el nordeste de Itapúa.
          </p>

          <h2>¿Por qué tu negocio necesita presencia online?</h2>
          <p>
            Hoy en día, cuando un cliente potencial en Carlos Antonio López busca un servicio, lo primero que hace es consultar en su teléfono. 
            Si tu empresa no aparece con una página web profesional, estás perdiendo oportunidades valiosas frente a la competencia. 
            Una web no es solo un folleto digital; es una herramienta de ventas que trabaja las 24 horas del día, los 7 días de la semana.
          </p>

          <p>
            Desde pequeños emprendimientos hasta grandes empresas agrícolas o de servicios en la zona, 
            una identidad digital sólida genera confianza instantánea. En SoftwarePar, nos especializamos en crear 
            sitios que no solo se ven bien, sino que están optimizados para que los habitantes de Itapúa te encuentren fácilmente.
          </p>

          <h2>Beneficios de tener una página web profesional</h2>
          <ul>
            <li><strong>Credibilidad inmediata:</strong> Un sitio web bien diseñado le dice a tus clientes que eres un profesional serio.</li>
            <li><strong>Alcance regional:</strong> Posiciona tu marca en todo el departamento de Itapúa y más allá.</li>
            <li><strong>Automatización:</strong> Ahorra tiempo con formularios de contacto y respuestas automáticas.</li>
            <li><strong>Disponibilidad:</strong> Tu negocio nunca cierra en internet.</li>
          </ul>

          <p>
            Muchos negocios locales dependen únicamente de redes sociales, pero tener tu propio dominio (.com o .com.py) 
            te otorga propiedad y control total sobre tu marca, algo fundamental para la estabilidad a largo plazo 
            de cualquier empresa en Carlos Antonio López.
          </p>

          <h2>Cómo trabajamos con empresas locales</h2>
          <p>
            Nuestro proceso es cercano y transparente. No somos una agencia distante; somos vecinos de Itapúa que 
            queremos ver crecer a nuestra comunidad. Empezamos con un diagnóstico gratuito de tus necesidades actuales 
            para luego diseñar una solución tecnológica que se adapte perfectamente a tu presupuesto y objetivos.
          </p>

          <p>
            Ya sea que necesites una landing page sencilla para mostrar tus servicios o un sistema de gestión complejo, 
            nuestro equipo en Itapúa está listo para acompañarte en cada paso, desde el registro del dominio 
            hasta el lanzamiento y el mantenimiento posterior.
          </p>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¡Impulsa tu negocio hoy mismo!</h3>
            <p className="mb-6">
              No dejes que la competencia te tome la delantera en el mercado digital de Itapúa. 
              Estamos listos para crear la página web que tu empresa en Carlos Antonio López merece.
            </p>
            <Button size="lg" asChild>
              <a href="/#contacto">Solicitar Mi Web Profesional Ahora</a>
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
