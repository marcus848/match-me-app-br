
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, ChartBar, Globe, Users, Database, Laptop, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-700 to-violet-600 text-white pt-24">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Soluções Digitais para o Crescimento do seu Negócio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Desenvolvimento web profissional e análise de dados com Power BI para empresas médias e pequenas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                Solicitar Orçamento
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Tecnologia e Inovação" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </header>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Desenvolvimento Web</h3>
                <p className="text-gray-600">
                  Websites responsivos e aplicações web personalizadas que convertem visitantes em clientes.
                </p>
              </CardContent>
            </Card>
            
            {/* Power BI */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <ChartBar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dashboards Power BI</h3>
                <p className="text-gray-600">
                  Transforme dados em insights valiosos com painéis interativos e relatórios dinâmicos.
                </p>
              </CardContent>
            </Card>
            
            {/* Consultancy */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultoria Digital</h3>
                <p className="text-gray-600">
                  Estratégias personalizadas para otimizar seus processos e melhorar a tomada de decisão.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Nosso Portfólio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos recentes e veja como podemos ajudar o seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Desenvolvimento Web" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-1">E-commerce Moderno</h3>
                <p className="text-gray-500 text-sm mb-3">Desenvolvimento Web</p>
                <p className="text-gray-600 text-sm">
                  Plataforma de e-commerce com integração de pagamentos e sistema de gestão de estoque.
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                  Ver Projeto
                </Button>
              </div>
            </div>
            
            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Dashboard Power BI" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-1">Dashboard Financeiro</h3>
                <p className="text-gray-500 text-sm mb-3">Power BI</p>
                <p className="text-gray-600 text-sm">
                  Dashboard completo para acompanhamento de métricas financeiras e projeções de negócio.
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                  Ver Projeto
                </Button>
              </div>
            </div>
            
            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Aplicação Web" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-1">App de Gestão</h3>
                <p className="text-gray-500 text-sm mb-3">Aplicação Web</p>
                <p className="text-gray-600 text-sm">
                  Sistema de gestão empresarial com múltiplos módulos para controle de operações.
                </p>
              </div>
              <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                  Ver Projeto
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Ver Mais Projetos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20" id="sobre">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Equipe de Tecnologia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">Por que escolher nossos serviços?</h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Experiência Comprovada</h3>
                    <p className="text-gray-600">Anos de experiência fornecendo soluções para empresas de diversos setores.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="rounded-full bg-purple-100 p-2 h-10 w-10 flex items-center justify-center shrink-0">
                    <Database className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Soluções Personalizadas</h3>
                    <p className="text-gray-600">Projetos desenvolvidos de acordo com as necessidades específicas do seu negócio.</p>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Saiba Mais</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
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
      
      {/* Contact */}
      <section className="py-20 bg-purple-700 text-white" id="contato">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Estamos prontos para ajudar a impulsionar seu negócio com soluções digitais personalizadas.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium mb-1">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium mb-1">Empresa</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Como podemos ajudar?</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>Desenvolvimento Web</option>
                      <option>Dashboards Power BI</option>
                      <option>Consultoria</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Especialistas em soluções digitais para empresas que buscam crescimento e inovação.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#servicos" className="text-gray-400 hover:text-white">Desenvolvimento Web</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white">Power BI</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white">Consultoria</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Início</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfólio</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@seudominio.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Sua Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* App Navigation Link */}
      <div className="fixed bottom-5 left-5">
        <Link to="/matches">
          <Button variant="outline" className="bg-white shadow-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
            Acessar App
          </Button>
        </Link>
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
