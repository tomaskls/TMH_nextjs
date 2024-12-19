"use client";

import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Divider,
} from "@nextui-org/react";
import {
    Search,
    Settings,
    FileText,
    Link2,
    BarChart2,
    Smartphone,
    Globe,
    FileCode,
    Bot,
    Key,
    Pen,
    Image,
    Share2,
    MapPin,
    LineChart,
    TrendingUp,
} from 'lucide-react';

export default function SEOPage() {
    const seoServices = [
        {
            title: "Techninė SEO optimizacija",
            icon: <Settings className="w-6 h-6" />,
            description: "Techniniai svetainės patobulinimai geresniems rezultatams",
            items: [
                { title: "Svetainės greičio optimizavimas", icon: <Globe size={20} /> },
                { title: "Mobiliosios versijos optimizavimas", icon: <Smartphone size={20} /> },
                { title: "Svetainės struktūros gerinimas", icon: <FileCode size={20} /> },
                { title: "XML sitemap sukūrimas", icon: <FileText size={20} /> },
                { title: "Robots.txt konfigūravimas", icon: <Bot size={20} /> }
            ]
        },
        {
            title: "Turinio optimizacija",
            icon: <Pen className="w-6 h-6" />,
            description: "Efektyvus turinio optimizavimas ir kūrimas",
            items: [
                { title: "Raktažodžių tyrimas ir analizė", icon: <Key size={20} /> },
                { title: "Turinio kūrimas ir optimizavimas", icon: <FileText size={20} /> },
                { title: "Meta aprašymų rašymas", icon: <Pen size={20} /> },
                { title: "URL struktūros optimizavimas", icon: <Link2 size={20} /> },
                { title: "Paveikslėlių optimizavimas", icon: <Image size={20} /> }
            ]
        },
        {
            title: "Off-page SEO",
            icon: <Share2 className="w-6 h-6" />,
            description: "Išorinių faktorių optimizavimas",
            items: [
                { title: "Nuorodų strategijos kūrimas", icon: <Link2 size={20} /> },
                { title: "Kokybišku backlinks gavimas", icon: <Share2 size={20} /> },
                { title: "Socialinių tinklų optimizacija", icon: <Globe size={20} /> },
                { title: "Google My Business tvarkymas", icon: <MapPin size={20} /> },
                { title: "Lokalios SEO strategijos", icon: <MapPin size={20} /> }
            ]
        },
        {
            title: "Analitika ir stebėjimas",
            icon: <BarChart2 className="w-6 h-6" />,
            description: "Nuolatinis rezultatų sekimas ir analizė",
            items: [
                { title: "Google Analytics įdiegimas", icon: <LineChart size={20} /> },
                { title: "Google Search Console naudojimas", icon: <Search size={20} /> },
                { title: "Pozicijų stebėjimas", icon: <TrendingUp size={20} /> },
                { title: "Konkurentų analizė", icon: <BarChart2 size={20} /> },
                { title: "Reguliarios ataskaitos", icon: <FileText size={20} /> }
            ]
        }
    ];

    const stats = [
        { value: "+82%", label: "Organinė paieška" },
        { value: "+65%", label: "Konversijos" },
        { value: "+93%", label: "Pozicijos Google" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                        SEO sprendimai, kurie augina jūsų verslą
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Padidinkite savo svetainės matomumą ir pritraukite daugiau klientų su mūsų SEO paslaugomis
                    </p>
                    <Button
                        className="border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400"
                        size="lg"
                        variant="bordered"
                    >
                        Užsakyti nemokamą auditą
                    </Button>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                        Mūsų SEO paslaugos
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {seoServices.map((service, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow dark:bg-slate-800"
                            >
                                <CardHeader className="flex justify-between items-start gap-3">
                                    <div className="flex gap-3">
                                        <div className="text-cyan-600 dark:text-cyan-400">{service.icon}</div>
                                        <div>
                                            <p className="text-xl font-semibold dark:text-white">{service.title}</p>
                                            <p className="text-small text-default-500 dark:text-gray-400">{service.description}</p>
                                        </div>
                                    </div>
                                    <Button
                                        className="text-cyan-600 dark:text-cyan-400"
                                        size="sm"
                                        variant="light"
                                    >
                                        Užsakyti auditą
                                    </Button>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <div className="space-y-4">
                                        {service.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="text-cyan-600 dark:text-cyan-400">{item.icon}</div>
                                                <span className="dark:text-gray-300">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 px-4 bg-cyan-50 dark:bg-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                        Kodėl verta investuoti į SEO?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="p-6 dark:bg-slate-900"
                            >
                                <CardBody className="text-center">
                                    <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{stat.value}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button
                            className="border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400"
                            size="lg"
                            variant="bordered"
                        >
                            Sužinoti daugiau
                        </Button>
                    </div>
                </div>
                
            </section>
            <section className="mt-16 py-16 px-4 bg-cyan-100 dark:bg-slate-800">
            <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                        SEO rezultatai, kuriais didžiuojamės
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <TrendingUp className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Vidutiniškai +150% organinės paieškos srautas per 6 mėnesius
                        </span>
                    </div>
                    <Button
                        className="border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400"
                        variant="bordered"
                    >
                        Peržiūrėti sėkmės istorijas
                    </Button>
                </div>
            </section>
        </div>
    );
}