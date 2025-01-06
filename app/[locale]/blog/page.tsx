'use client'
import React from "react"
import { Button } from "@nextui-org/react"
import { Card, CardBody } from "@nextui-org/react"
import { Code, Globe, LineChart, Mail, Shield, Star, CheckCircle, Wallet } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcija */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Paverskite savo idėjas į išskirtinę internetinę svetainę
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Kuriame modernius ir efektyvius skaitmeninius sprendimus, kurie padeda verslams augti. Per pirmus metus mūsų sukurtos svetainės vidutiniškai padidino klientų konversijas 40%.
        </p>
        <Button color="primary" size="lg">
          Sužinoti daugiau
        </Button>
      </section>

      {/* Privalumų sekcija */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ką gausite pasirinkę mus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              description="Naudojame Next.js ir React, užtikrinančius puikų svetainės greitį. Mūsų svetainių įkėlimo laikas - vidutiniškai 1.2 sekundės."
              icon={<Code />}
              title="Greitis ir efektyvumas"
            />
            <FeatureCard 
              description="Mūsų optimizuotos svetainės pasiekia TOP10 Google rezultatuose per pirmus 3-6 mėnesius."
              icon={<LineChart />}
              title="Geresni SEO rezultatai"
            />
            <FeatureCard 
              description="90 dienų garantija kodui ir dizainui. Operatyvus klaidų taisymas ir atnaujinimai be papildomų mokesčių."
              icon={<Shield />}
              title="Garantuota kokybė"
            />
            <FeatureCard 
              description="Nuo dizaino iki SEO - viską rasite vienoje vietoje. 95% klientų lieka su mumis ilgiau nei metus."
              icon={<Star />}
              title="Visapusis aptarnavimas"
            />
            <FeatureCard 
              description="Kas savaitę gaunate progreso ataskaitas ir turite prieigą prie projekto valdymo įrankių."
              icon={<CheckCircle />}
              title="Skaidrus procesas"
            />
            <FeatureCard 
              description="Mokėkite dalimis be papildomų mokesčių. Pirmas mokėjimas - tik 30% projekto vertės."
              icon={<Wallet />}
              title="Lankstus mokėjimas"
            />
            <FeatureCard 
              description="12 mėn. nemokamas talpinimas, SSL sertifikatas ir techninis palaikymas - $500 vertės paslauga nemokamai."
              icon={<Globe />}
              title="Metai be rūpesčių"
            />
          </div>
        </div>
      </section>

      {/* Kontaktų sekcija */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Gaukite nemokamą projekto įvertinimą
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Per 24 valandas paruošime detalų pasiūlymą su preliminariu biudžetu ir terminais. Jokių įsipareigojimų.
          </p>
          <Button className="gap-2" color="primary" size="lg">
            <Mail className="w-5 h-5" />
            Gauti pasiūlymą
          </Button>
        </div>
      </section>
    </div>
  )
}

// Privalumų kortelės komponentas
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardBody className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardBody>
    </Card>
  )
}

export default HomePage