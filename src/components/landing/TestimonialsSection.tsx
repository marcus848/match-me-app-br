
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as experiências de empresas que transformaram seus negócios com nossas soluções.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="font-bold">Ana Silva</h4>
                <p className="text-sm text-gray-500">CEO, Empresa ABC</p>
              </div>
              <p className="text-gray-600 italic">
                "Os dashboards desenvolvidos transformaram completamente nossa visão dos dados. Agora tomamos decisões mais rápidas e assertivas."
              </p>
            </CardContent>
          </Card>
          
          {/* Testimonial 2 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="font-bold">Carlos Mendes</h4>
                <p className="text-sm text-gray-500">Diretor, Empresa XYZ</p>
              </div>
              <p className="text-gray-600 italic">
                "O novo site desenvolvido aumentou significativamente nossa conversão online. O design é moderno e a navegação é intuitiva."
              </p>
            </CardContent>
          </Card>
          
          {/* Testimonial 3 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 mb-3"></div>
                <h4 className="font-bold">Mariana Costa</h4>
                <p className="text-sm text-gray-500">Gerente, Startup 123</p>
              </div>
              <p className="text-gray-600 italic">
                "A consultoria nos ajudou a identificar oportunidades de melhoria nos processos que não estávamos enxergando."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
