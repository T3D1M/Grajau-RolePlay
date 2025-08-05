"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Skull,
  ShieldCheck,
  Flag,
  PartyPopper,
  Handshake,
} from 'lucide-react';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const themesData = [
    {
      id: 'cidadao',
      icon: Briefcase,
      title: 'Vida de Cidadão',
      description: 'Trabalhe em diversas profissões, compre imóveis, monte seu negócio e viva uma vida comum, ou não!'
    },
    {
      id: 'crime',
      icon: Skull,
      title: 'O Mundo do Crime',
      description: 'Envolva-se em assaltos, sequestros, tráfico e construa seu império no submundo do Grajau.'
    },
    {
      id: 'lei',
      icon: ShieldCheck,
      title: 'Defensores da Ordem',
      description: 'Seja um policial, bombeiro ou médico e mantenha a paz e a segurança na cidade.'
    },
    {
      id: 'corridas',
      icon: Flag,
      title: 'A Adrenalina das Ruas',
      description: 'Participe de corridas ilegais, aposte alto, tunne seus veículos e torne-se o rei das pistas do Grajau.'
    },
    {
      id: 'eventos',
      icon: PartyPopper,
      title: 'Comunidade Vibrante',
      description: 'Organize ou participe de encontros de carros, shows, festas e eventos exclusivos com a comunidade.'
    },
    {
      id: 'social',
      icon: Handshake,
      title: 'Construa Laços',
      description: 'Faça amizades, crie gangues, junte-se a facções e molde as relações sociais do Grajau.'
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-8 py-8 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl font-bold text-foreground"
              >
                <TypeAnimation
                  sequence={[
                    'Grajau RolePlay',
                    2000,
                    'Grajau RP',
                    2000,                                                          
                    'Grajau RolePlay'
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: 'inline-block' }}
                />
              </motion.div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <motion.a href="#home" className="text-muted-foreground hover:text-red-500 transition-colors duration-300">Início</motion.a>
              <motion.a href="#about" className="text-muted-foreground hover:text-red-500 transition-colors duration-300">Sobre</motion.a>
              <motion.a href="#features" className="text-muted-foreground hover:text-red-500 transition-colors duration-300">Recursos</motion.a>
              <motion.a href="#vip-plans" className="text-muted-foreground hover:text-red-500 transition-colors duration-300">Planos VIP</motion.a>
            </nav>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
            <Button asChild className="bg-gradient-to-br from-red-500 to-gray-800 text-white font-semibold shadow-md hover:from-red-600 hover:to-gray-900 transition-all duration-300">
              <a href="https://discord.gg/hmS2vW3t" target="_blank" rel="noopener noreferrer">
                Junte-se Agora!
              </a>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="relative h-[calc(100vh-6rem)] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('img/fundo.jpg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
              Bem-vindo ao <span className="text-red-400">Grajau RolePlay</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Mergulhe em uma experiência de roleplay imersiva e dinâmica na vibrante cidade do Grajau. Crie sua história, faça suas escolhas e viva a aventura!
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
              <Button asChild size="lg" className="bg-gradient-to-br from-red-500 to-gray-800 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:from-red-600 hover:to-gray-900 transition-all duration-300">
                <a href="https://discord.gg/hmS2vW3t" target="_blank" rel="noopener noreferrer">
                  Comece Sua Jornada
                </a>
              </Button>
            </motion.div>

            <div className="absolute bottom-6 right-6 flex flex-row space-x-4 md:space-x-6">
              <motion.a
                href="https://discord.gg/hmS2vW3t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <FaDiscord size={36} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/grajaurp.sp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <FaInstagram size={36} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@grajaurp3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <FaTiktok size={36} />
              </motion.a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center mb-12 text-foreground">
              Sobre o <span className="text-red-500">Grajau RolePlay</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/05/GTA-V-Los-Santos.jpg" alt="Imersão Total" className="rounded-xl shadow-lg w-full h-auto object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.3 }} className="space-y-6 text-lg text-muted-foreground">
                <p>Grajaú RolePlay é muito mais do que um simples servidor — é uma comunidade viva e pulsante, onde cada jogador tem a liberdade de criar e viver sua própria história. Aqui, cada escolha importa, e cada trajetória é única...</p>
                <p>Nossa equipe está sempre presente e comprometida em oferecer uma experiência justa, imersiva e divertida para todos. Trabalhamos constantemente para manter o equilíbrio do servidor, escutando a comunidade e aprimorando cada detalhe para garantir que você viva o melhor do RolePlay.</p>
                <Button asChild variant="outline" className="mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                  <a href="https://discord.gg/hmS2vW3t" target="_blank" rel="noopener noreferrer">
                    Saiba Mais
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          {/* Seção de recursos (pode ser preenchida posteriormente) */}
        </section>

        {/* Recursos Section */}
        <section id="themes" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-foreground"
            >
              Crie Sua História: <span className="text-red-500">Recursos do Grajau RP</span>
            </motion.h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
              onMouseLeave={() => setHoveredCard(null)}
            >
              {themesData.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`bg-card p-6 rounded-xl shadow-lg border-2 border-border transition-all duration-300 text-center flex flex-col items-center justify-center
                    ${hoveredCard === theme.id ? 'border-red-500 scale-105' : 'border-gray-700'}
                    ${hoveredCard && hoveredCard !== theme.id ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}
                  `}
                  onMouseEnter={() => setHoveredCard(theme.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {theme.icon && <theme.icon size={48} className="text-red-500 mb-4" />}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{theme.title}</h3>
                  <p className="text-muted-foreground text-sm">{theme.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP Plans Section */}
        <section id="vip-plans" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center mb-12 text-foreground">
              PLANOS VIP - <span className="text-red-500">SERVIDOR GRAJAU RP</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Planos VIP - Bronze */}
              <Card className="shadow-lg p-6 text-center border-2 border-gray-700 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-red-400 mb-2">BRONZE</CardTitle>
                  <p className="text-4xl font-extrabold text-foreground mb-4">R$55</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-muted-foreground text-left mx-auto max-w-[200px] list-disc list-inside">
                    <li>150k de dinheiro inicial</li>
                    <li>Salário: 500</li>
                    <li>5.000 Gemas</li>
                    <li>2 vagas na garagem</li>
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-br from-red-500 to-gray-800 text-white font-semibold shadow-md hover:from-red-600 hover:to-gray-900 transition-all duration-300 mt-6">
                    <a href="https://discord.gg/eBWXqSJk" target="_blank" rel="noopener noreferrer">
                      Adquirir Bronze
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Planos VIP - Prata */}
              <Card className="shadow-lg p-6 text-center border-2 border-gray-700 hover:border-red-500 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-b-lg">
                  Mais Popular
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-red-500 mb-2">PRATA</CardTitle>
                  <p className="text-4xl font-extrabold text-foreground mb-4">R$80</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-muted-foreground text-left mx-auto max-w-[200px] list-disc list-inside">
                    <li>250k de dinheiro inicial</li>
                    <li>Salário: 1000</li>
                    <li>11.000 Gemas</li>
                    <li>4 vagas na garagem</li>
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-br from-red-500 to-gray-800 text-white font-semibold shadow-md hover:from-red-600 hover:to-gray-900 transition-all duration-300 mt-6">
                    <a href="https://discord.gg/eBWXqSJk" target="_blank" rel="noopener noreferrer">
                      Adquirir Prata
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Planos VIP - Ouro */}
              <Card className="shadow-lg p-6 text-center border-2 border-gray-700 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-red-600 mb-2">OURO</CardTitle>
                  <p className="text-4xl font-extrabold text-foreground mb-4">R$130</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-muted-foreground text-left mx-auto max-w-[200px] list-disc list-inside">
                    <li>500k de dinheiro inicial</li>
                    <li>Salário: 1500</li>
                    <li>22.500 Gemas</li>
                    <li>6 vagas na garagem</li>
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-br from-red-500 to-gray-800 text-white font-semibold shadow-md hover:from-red-600 hover:to-gray-900 transition-all duration-300 mt-6">
                    <a href="https://discord.gg/eBWXqSJk" target="_blank" rel="noopener noreferrer">
                      Adquirir Ouro
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Planos VIP - Diamante */}
              <Card className="shadow-lg p-6 text-center border-2 border-gray-700 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-red-700 mb-2">DIAMANTE</CardTitle>
                  <p className="text-4xl font-extrabold text-foreground mb-4">R$180</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-muted-foreground text-left mx-auto max-w-[200px] list-disc list-inside">
                    <li>1.200.000 de dinheiro inicial</li>
                    <li>Salário: 2000</li>
                    <li>35.000 Gemas</li>
                    <li>8 vagas na garagem</li>
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-br from-red-500 to-gray-800 text-white font-semibold shadow-md hover:from-red-600 hover:to-gray-900 transition-all duration-300 mt-6">
                    <a href="https://discord.gg/eBWXqSJk" target="_blank" rel="noopener noreferrer">
                      Adquirir Diamante
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-lg text-center text-muted-foreground mt-12">
              Para adquirir seu plano, entre em contato com a staff pelo discord!
            </motion.p>
          </div>
        </section>      
      </main>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Grajau RolePlay. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );                                     {/*Desenvolvido por T3D1M|GIT-HUB */}
}