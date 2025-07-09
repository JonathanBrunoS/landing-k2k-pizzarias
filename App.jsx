import { useState } from 'react'
import React from 'react';

import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import {
  Pizza,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Smartphone,
  MessageCircle,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Flame,
  ShoppingCart,
  Clock,
  Star,
  Building2,
  Lightbulb,
  Zap,
  BookOpen,
  Award,
  Rocket,
  Eye,
  Brain,
  Heart
} from 'lucide-react'
import './App.css'
import heroPizza from './assets/hero-pizza.jpg'
import pizzaChef from './assets/pizza-chef.jpg'
import digitalMarketing from './assets/digital-marketing.jpg'
import k2kLogoSemFundo from './assets/k2k-logo-sem-fundo.png'

function App() {
  const [activeTab, setActiveTab] = useState('problema')

  const stats = [
    { icon: TrendingUp, value: '7,2%', label: 'Crescimento do setor em 2024' },
    { icon: DollarSign, value: '28%', label: 'Taxa máxima do iFood' },
    { icon: Pizza, value: '92%', label: 'Das pizzarias tiveram lucro em 2024' },
    { icon: Users, value: '50mil+', label: 'Pizzarias no Brasil' }
  ]

  const problems = [
    {
      title: 'Falta de Posicionamento Claro',
      description: 'Competimos com inúmeras agências que oferecem os mesmos serviços, sendo apenas "mais uma agência de marketing"',
      icon: Eye
    },
    {
      title: 'Comunicação Genérica',
      description: 'Mensagens amplas que não ressoam profundamente com nenhum segmento específico',
      icon: MessageCircle
    },
    {
      title: 'Dificuldade de Escala',
      description: 'Cada cliente de nicho diferente exige novo aprendizado, impedindo processos padronizados',
      icon: BarChart3
    },
    {
      title: 'Operação Engessada',
      description: 'Diversidade de demandas consome tempo e recursos, impedindo especialização',
      icon: Zap
    }
  ]

  const opportunities = [
    {
      title: 'Mercado Robusto',
      description: 'Crescimento de 7,2% em 2024 com 92% das pizzarias lucrando',
      value: 'R$ 50 mil+',
      subtitle: 'pizzarias no Brasil'
    },
    {
      title: 'Dor Latente',
      description: 'Dependência do iFood com taxas de até 28% sobre cada pedido',
      value: 'R$ 33.600',
      subtitle: 'economia anual possível'
    },
    {
      title: 'Falta de Profissionalização',
      description: 'Maioria carece de estratégias de marketing digital profissional',
      value: '80%+',
      subtitle: 'sem marketing estruturado'
    },
    {
      title: 'Alta Gratidão',
      description: 'Resolver problema crítico gera fidelidade e indicações',
      value: '6-18 meses',
      subtitle: 'LTV estimado'
    }
  ]

  const metodoPhasesDetailed = [
    {
      id: 'fundacao',
      title: 'Fundação Digital',
      icon: Target,
      description: 'Onboarding estruturado e padronizado',
      benefits: [
        'Google Meu Negócio otimizado',
        'Instagram Profissional estratégico',
        'Cardápio Digital com engenharia',
        'Produção de conteúdo visual'
      ],
      businessValue: 'Onboarding padronizado que otimiza tempo da equipe e garante qualidade. Engenharia de cardápio nos posiciona como consultores estratégicos.'
    },
    {
      id: 'aquisicao',
      title: 'Estratégia Anti-iFood',
      icon: Smartphone,
      description: 'Demonstração clara de ROI para o cliente',
      benefits: [
        'Tráfego pago em horários estratégicos',
        'Migração de clientes do iFood',
        'Cupons exclusivos para vendas diretas',
        'Construção de base própria de clientes'
      ],
      businessValue: 'Diferencial competitivo único. ROI claro aumenta retenção. Modelo escalável de tráfego pago.'
    },
    {
      id: 'fidelizacao',
      title: 'Fidelização Inteligente',
      icon: MessageCircle,
      description: 'Receita recorrente e estável',
      benefits: [
        'CRM com disparos automatizados',
        'Chatbot com IA 24h',
        'Estratégias de ticket médio',
        'Programas de fidelidade'
      ],
      businessValue: 'Garante recorrência e estabilidade da receita. Tecnologia de ponta agrega valor percebido.'
    }
  ]

  const courseDetails = [
    {
      title: 'Técnicas de Vendas para Delivery',
      description: 'Como converter mais pedidos via telefone e WhatsApp, up-selling e cross-selling',
      icon: Smartphone
    },
    {
      title: 'Atendimento Humanizado',
      description: 'Construir relacionamento, transformar pedido em experiência, incentivar recompra',
      icon: Heart
    },
    {
      title: 'Gestão de Objeções',
      description: 'Lidar com reclamações, dúvidas e objeções comuns no processo de venda',
      icon: Brain
    },
    {
      title: 'Uso de Ferramentas',
      description: 'Treinamento no uso de CRM e chatbots para otimizar atendimento e vendas',
      icon: BookOpen
    }
  ]

  const financialProjections = [
    {
      clients: '10 pizzarias',
      monthlyRevenue: 'R$ 10.000 - R$ 25.000',
      annualRevenue: 'R$ 120.000 - R$ 300.000'
    },
    {
      clients: '25 pizzarias',
      monthlyRevenue: 'R$ 25.000 - R$ 62.500',
      annualRevenue: 'R$ 300.000 - R$ 750.000'
    },
    {
      clients: '50 pizzarias',
      monthlyRevenue: 'R$ 50.000 - R$ 125.000',
      annualRevenue: 'R$ 600.000 - R$ 1.500.000'
    }
  ]

  const nextSteps = [
    {
      phase: 'Validação Interna',
      description: 'Alinhamento com diretoria e workshop com equipe',
      icon: Users
    },
    {
      phase: 'Estruturação',
      description: 'Criação de playbooks e desenvolvimento do curso',
      icon: BookOpen
    },
    {
      phase: 'Marketing Focado',
      description: 'Revisão do site e produção de conteúdo de autoridade',
      icon: Rocket
    },
    {
      phase: 'Projeto Piloto',
      description: 'Validação com 3 pizzarias parceiras',
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-24 h-auto flex items-center justify-center">
              <img src={k2kLogoSemFundo} alt="K2K Agência Digital Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <Badge className="bg-orange-500 text-white border-orange-500">
            <Building2 className="w-4 h-4 mr-2" />
            Apresentação Interna
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPizza})` }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-orange-500 text-white border-orange-500">
            <Flame className="w-4 h-4 mr-2" />
            Proposta Estratégica
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            A Virada de Chave da
            <span className="text-orange-400 block">K2K Agência Digital</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Por que <strong>nichar para pizzarias</strong> é a estratégia mais inteligente 
            para nosso crescimento exponencial e liderança de mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
              <Rocket className="w-5 h-5 mr-2" />
              Ver a Estratégia
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Analisar Números
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Mercado que Vamos Dominar</h2>
            <p className="text-xl text-gray-600">Dados que comprovam o potencial do nicho de pizzarias</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Opportunity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que Precisamos Mudar <span className="text-orange-500">Agora</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos trouxe até aqui não nos levará ao próximo nível. 
              É hora de focar e se especializar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8">
            <Button
              variant={activeTab === 'problema' ? "default" : "outline"}
              className={`m-2 ${activeTab === 'problema' ? 'bg-red-500 hover:bg-red-600' : ''}`}
              onClick={() => setActiveTab('problema')}
            >
              <Eye className="w-4 h-4 mr-2" />
              Problemas da Generalização
            </Button>
            <Button
              variant={activeTab === 'oportunidade' ? "default" : "outline"}
              className={`m-2 ${activeTab === 'oportunidade' ? 'bg-green-500 hover:bg-green-600' : ''}`}
              onClick={() => setActiveTab('oportunidade')}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Oportunidade das Pizzarias
            </Button>
          </div>

          {activeTab === 'problema' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <problem.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-red-800">{problem.title}</h3>
                    <p className="text-sm text-red-600">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'oportunidade' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{opportunity.value}</div>
                    <div className="text-sm text-green-500 mb-4">{opportunity.subtitle}</div>
                    <h3 className="text-lg font-semibold mb-3 text-green-800">{opportunity.title}</h3>
                    <p className="text-sm text-green-600">{opportunity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Método Acelera Fornalha */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500 text-white border-orange-500">
              <Flame className="w-4 h-4 mr-2" />
              Método Acelera Fornalha
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nosso Produto de Recorrência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um método estruturado que garante resultados para o cliente e 
              previsibilidade de receita para a K2K
            </p>
          </div>

          <div className="space-y-8">
            {metodoPhasesDetailed.map((phase, index) => (
              <Card key={phase.id} className="border-orange-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                        <phase.icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Fase {index + 1}: {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">O que entregamos:</h4>
                      <ul className="space-y-2">
                        {phase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-lg text-orange-800">Valor para a K2K:</h4>
                      <p className="text-orange-700 text-sm">{phase.businessValue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curso de Vendas */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-blue-600 border-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Novo Produto
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Curso de Vendas para Vendedores de Pizzarias
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Uma nova linha de receita escalável e um diferencial competitivo único
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Módulos do Curso:</h3>
              <div className="space-y-4">
                {courseDetails.map((module, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <p className="text-sm opacity-90">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Benefícios Estratégicos:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Nova fonte de receita com alta margem</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Atrai leads qualificados para o Método Acelera Fornalha</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Fortalece relacionamento com clientes existentes</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Posiciona K2K como educadora e autoridade no nicho</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projeções Financeiras */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Projeções de Crescimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potencial de receita com ticket médio entre R$ 1.000 - R$ 2.500/mês por pizzaria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialProjections.map((projection, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-orange-600">{projection.clients}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-900">Receita Mensal</div>
                    <div className="text-2xl font-bold text-green-600">{projection.monthlyRevenue}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Receita Anual</div>
                    <div className="text-2xl font-bold text-green-600">{projection.annualRevenue}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Mercado Total:</strong> Mais de 50 mil pizzarias no Brasil
            </p>
            <p className="text-sm text-gray-500">
              Mesmo com 1% de market share, teríamos 500 clientes ativos
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Próximos Passos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plano de ação para implementar a estratégia de nichagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <Card key={index} className="border-orange-200 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.phase}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              O Futuro da K2K é Especializado
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Esta é nossa chance de construir uma marca de referência, 
              com um produto de alto valor e impacto real
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Foco Estratégico</h3>
                <p className="text-sm opacity-75">Especialização que gera resultados</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Crescimento Exponencial</h3>
                <p className="text-sm opacity-75">Receita previsível e escalável</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Liderança de Mercado</h3>
                <p className="text-sm opacity-75">Referência nacional em pizzarias</p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-12 py-4">
              <Rocket className="w-5 h-5 mr-2" />
              Vamos Acelerar a Fornalha!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-24 h-auto flex items-center justify-center">
                <img src={k2kLogoSemFundo} alt="K2K Agência Digital Logo" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Construindo a melhor agência do Brasil para pizzarias desde 2017.
            </p>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-center text-sm text-gray-400">
              &copy; 2025 K2K Agência Digital. Apresentação estratégica interna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

