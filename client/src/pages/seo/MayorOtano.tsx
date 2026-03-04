import { useState } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";



































export default function MayorOtano() {
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
          Sistemas de Turnos y Gestión en Mayor Otaño
        </motion.h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            La modernización de la atención al público en Mayor Otaño es fundamental para el crecimiento de consultorios, 
            estéticas y centros de servicios profesionales. La implementación de tecnología local permite una gestión 
            más eficiente y una mejor experiencia para el ciudadano.
          </p>

          <h2>Sistema de turnos online para consultorios</h2>
          <p>
            ¿Todavía gestionas tus citas con cuaderno y bolígrafo? En Mayor Otaño, los profesionales de la salud 
            y el bienestar están dando el salto digital. Nuestros sistemas de turnos online permiten que tus pacientes 
            reserven su espacio desde la comodidad de su hogar, sin necesidad de llamadas telefónicas constantes.
          </p>

          <p>
            Un sistema de gestión bien implementado en tu consultorio de Mayor Otaño reduce las inasistencias 
            gracias a recordatorios automáticos por WhatsApp o correo electrónico, optimizando tu agenda diaria 
            y permitiéndote enfocarte en lo que realmente importa: la atención a tus pacientes.
          </p>

          <h2>Ventajas de digitalizar tu atención al público</h2>
          <p>
            Digitalizar no es solo cambiar el papel por la pantalla; es transformar la manera en que interactúas 
            con tu comunidad en Itapúa. Al ofrecer opciones modernas de reserva, estás demostrando innovación 
            y respeto por el tiempo de tus clientes.
          </p>
          <ul>
            <li><strong>Disponibilidad 24/7:</strong> Tus clientes pueden agendar turnos incluso fuera de horario comercial.</li>
            <li><strong>Base de datos centralizada:</strong> Accede a la historia y preferencias de tus clientes en un solo clic.</li>
            <li><strong>Reducción de errores:</strong> Evita superposiciones de horarios y malentendidos en la comunicación.</li>
            <li><strong>Análisis de datos:</strong> Conoce cuáles son tus servicios más solicitados y en qué horarios.</li>
          </ul>

          <p>
            En Mayor Otaño, la cercanía con el cliente es vital. Un software bien diseñado potencia ese vínculo, 
            haciendo que cada interacción sea fluida y profesional.
          </p>

          <h2>Soporte técnico cercano y continuo</h2>
          <p>
            Sabemos que la tecnología puede generar dudas. Por eso, en SoftwarePar ofrecemos un soporte técnico 
            presencial y remoto diseñado específicamente para los profesionales de Mayor Otaño e Itapúa. 
            No eres un número más en una lista de tickets; eres un socio estratégico a quien apoyamos 
            en cada paso de su transformación digital.
          </p>

          <p>
            Nuestra garantía es la continuidad operativa de tu sistema. Si surge un inconveniente, 
            nuestro equipo en la región responde con la rapidez que tu negocio necesita, asegurando 
            que la atención en tu local de Mayor Otaño nunca se detenga.
          </p>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">¿Listo para modernizar tu atención?</h3>
            <p className="mb-6">
              Implementa hoy mismo el sistema de turnos que pondrá a tu consultorio en Mayor Otaño 
              al siguiente nivel de eficiencia y profesionalismo.
            </p>
            <Button size="lg" asChild>
              <a href="/#contacto">Digitalizar Mi Negocio Ahora</a>
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
