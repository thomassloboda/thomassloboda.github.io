import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Github, Instagram, Linkedin, MapPin, Pencil, Radar} from "lucide-react"
import React from "react"

export const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header/Intro Section */}
            <header className="bg-white shadow">
                <div
                    className="container mx-auto px-4 py-6 md:py-8 lg:py-12 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div
                        className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                        <img
                            src="https://thomas.sloboda.fr/assets/profile.png?height=128&width=128"
                            alt="Profile Photo"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Thomas SLOBODA</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl text-primary mt-1">
                            Senior Software Developer - Engineering Manager @SFEIR
                        </h2>
                        <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-3 justify-center md:justify-start">
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-1"/>
                                <span className="text-sm">Lille, FRANCE</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4 justify-center md:justify-start">
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    window.open("https://thomas.sloboda.fr/techradar", "_blank")
                                    return false
                                }}
                            >
                                <Radar className="w-4 h-4 mr-2"/>
                                TechRadar
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    window.open("https://github.com/thomassloboda", "_blank")
                                    return false
                                }}
                            >
                                <Github className="w-4 h-4 mr-2"/>
                                GitHub
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    window.open("https://linkedin.com/in/thomassloboda", "_blank")
                                    return false
                                }}
                            >
                                <Linkedin className="w-4 h-4 mr-2"/>
                                LinkedIn
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    window.open("https://www.sfeir.dev/author/thomas", "_blank")
                                    return false
                                }}
                            >
                                <Pencil className="w-4 h-4 mr-2"/>
                                Blog posts
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    window.open("https://instagram.com/thomassloboda_dev", "_blank")
                                    return false
                                }}
                            >
                                <Instagram className="w-4 h-4 mr-2"/>
                                Instagram
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                        {/* About Me Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">
                                À propos de moi
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Développeur Javascript depuis une dizaine d'années, je suis passionné de technologies
                                web. J'aime
                                apprendre et partager mes connaissances. Je suis curieux et j'aime découvrir de
                                nouvelles choses.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                Aujourd'hui Engineering Manager chez SFEIR, je suis en charge d'accompagner mes
                                collègues dans la
                                construction de leur carrière.
                            </p>
                        </section>

                        {/* Experience Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">
                                Expérience professionnelle
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">
                                                    Senior Front-End Developer - Quality and Product Information
                                                </h3>
                                                <h4 className="text-primary font-medium">Decathlon pour SFEIR</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Développeur front-end expérimenté au sein de la BU Création chez
                                                    Decathlon. Conception et
                                                    réalisation de l'architecture logicielle permettant la mise en place
                                                    d'une application web
                                                    répondant aux standards modernes: communication REST, déploiement
                                                    continu via les Github
                                                    Actions, interface testée, performante et accessible, mise en place
                                                    de monitoring et de
                                                    tracking.
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Participation à des sujets transverses à la BU: mise en place d'un
                                                    serveur d'authentification
                                                    (BFF) et du composant React associé. Partage de connaissances auprès
                                                    des participants de la
                                                    tech dans la BU lors de Slack Weeks.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">React</Badge>
                                                    <Badge variant="secondary">TypeScript</Badge>
                                                    <Badge variant="secondary">NodeJS</Badge>
                                                    <Badge variant="secondary">NestJS</Badge>
                                                    <Badge variant="secondary">Github Actions</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Février 2022 - Présent
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">Technical Leader - Web
                                                    Analytics</h3>
                                                <h4 className="text-primary font-medium">Decathlon pour SFEIR</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Responsable de la Web Analyse pour le e-commerce Decathlon.
                                                    Conception et réalisation de
                                                    l'architecture logicielle permettant la mise en place du suivi des
                                                    performances e-commerce
                                                    d'abord côté client puis côté serveur: création d'une librairie
                                                    cliente déployée sur le site
                                                    e-commerce communicante avec des APIs hébergées sur Cloud Run.
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Aide à la conception du plan de marquage: définition des objectifs
                                                    de parcours client, des
                                                    actions clés à suivre. Gestion du support de production: réception
                                                    des sujets, investigation,
                                                    analyse de la donnée et résolution de problèmes.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">Google Analytics</Badge>
                                                    <Badge variant="secondary">TypeScript</Badge>
                                                    <Badge variant="secondary">NodeJS</Badge>
                                                    <Badge variant="secondary">NestJS</Badge>
                                                    <Badge variant="secondary">Cloud Run</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Octobre 2019 - Février 2022
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">Développeur - Web
                                                    Analytics</h3>
                                                <h4 className="text-primary font-medium">Decathlon pour SFEIR</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Développement et maintien de la solution côté client de Web Analyse
                                                    pour le e-commerce.
                                                    Maintien du plan de marquage existant: création et correctifs sur la
                                                    librairie cliente
                                                    existante. Support de production: réception des sujets,
                                                    investigation, analyse de la donnée et
                                                    résolution de problèmes.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">Google Analytics</Badge>
                                                    <Badge variant="secondary">JavaScript</Badge>
                                                    <Badge variant="secondary">Tag Commander</Badge>
                                                    <Badge variant="secondary">Git</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Janvier 2019 - Octobre 2019
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">Développeur</h3>
                                                <h4 className="text-primary font-medium">xBrainsoft</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Participation au développement de la plateforme xBrain.
                                                    Développement d'interfaces de
                                                    communication avec les technologies serveurs xBrain. Réalisation de
                                                    prototypes clients.
                                                    Réalisation d'une interface de confort pour voiture. Développement
                                                    d'API.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">AngularJS</Badge>
                                                    <Badge variant="secondary">Node.js</Badge>
                                                    <Badge variant="secondary">React</Badge>
                                                    <Badge variant="secondary">HTML/CSS</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Août 2015 - Janvier 2019
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">Développeur</h3>
                                                <h4 className="text-primary font-medium">Oscaro</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Participation au développement de la plateforme xBrain.
                                                    Développement d'interfaces de
                                                    communication avec les technologies serveurs xBrain. Réalisation de
                                                    prototypes clients.
                                                    Réalisation d'une interface de confort pour voiture.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">.Net</Badge>
                                                    <Badge variant="secondary">C#</Badge>
                                                    <Badge variant="secondary">jQuery</Badge>
                                                    <Badge variant="secondary">Knockout</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Juillet 2013 - Août 2015
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <div
                                            className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg">Développeur</h3>
                                                <h4 className="text-primary font-medium">Usilink</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Participation au développement de la plateforme xBrain.
                                                    Développement d'interfaces de
                                                    communication avec les technologies serveurs xBrain. Réalisation de
                                                    prototypes clients.
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    <Badge variant="secondary">.Net</Badge>
                                                    <Badge variant="secondary">C#</Badge>
                                                    <Badge variant="secondary">SQL Server</Badge>
                                                    <Badge variant="secondary">jQuery</Badge>
                                                </div>
                                            </div>
                                            <div
                                                className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right whitespace-nowrap">
                                                Août 2011 - Juillet 2013
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Social Links Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">Liens</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <h3 className="font-bold text-base md:text-lg">Réseaux Sociaux</h3>
                                        <div className="flex flex-col gap-2 mt-3">
                                            <a
                                                href="https://linkedin.com/in/thomassloboda"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-primary hover:underline"
                                            >
                                                <Linkedin className="w-4 h-4 mr-2"/>
                                                linkedin.com/in/thomassloboda
                                            </a>
                                            <a
                                                href="https://github.com/thomassloboda"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-primary hover:underline"
                                            >
                                                <Github className="w-4 h-4 mr-2"/>
                                                github.com/thomassloboda
                                            </a>
                                            <a
                                                href="https://instagram.com/thomassloboda_dev"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-primary hover:underline"
                                            >
                                                <Instagram className="w-4 h-4 mr-2"/>
                                                instagram.com/thomassloboda_dev
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4 pt-5 md:pt-6">
                                        <h3 className="font-bold text-base md:text-lg">Blog & Publications</h3>
                                        <div className="flex flex-col gap-2 mt-3">
                                            <a
                                                href="https://www.sfeir.dev/author/thomas"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-primary hover:underline"
                                            >
                                                <Pencil className="w-4 h-4 mr-2"/>
                                                sfeir.dev/author/thomas
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Skills Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">Langages de Programmation</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>JavaScript</Badge>
                                        <Badge>TypeScript</Badge>
                                        <Badge>HTML</Badge>
                                        <Badge>CSS</Badge>
                                        <Badge>C#</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">Frameworks & Librairies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>React</Badge>
                                        <Badge>Angular</Badge>
                                        <Badge>Node.js</Badge>
                                        <Badge>NestJS</Badge>
                                        <Badge>.NET</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">Outils & Plateformes</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Git</Badge>
                                        <Badge>GitHub</Badge>
                                        <Badge>Google Analytics</Badge>
                                        <Badge>Cloud Run</Badge>
                                        <Badge>SQL Server</Badge>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">Formation</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold">SUPINFO</h3>
                                    <p className="text-sm text-gray-500">2008 - 2011</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">BTS Information (IRIS)</h3>
                                    <p className="text-sm text-gray-500">2006 - 2008</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">BAC Electronique (STI Génie Electronique)</h3>
                                    <p className="text-sm text-gray-500">2004 - 2006</p>
                                </div>
                            </div>
                        </section>

                        {/* Certifications Section */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 border-b pb-2">Certifications</h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-medium">React Niveau 1</h3>
                                    <p className="text-sm text-gray-500">
                                        2023{" "}
                                        <a
                                            href="https://interstate21.com/certificate/?code=4C05Q9Q"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            🔗
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">React Niveau 2</h3>
                                    <p className="text-sm text-gray-500">
                                        2023{" "}
                                        <a
                                            href="https://interstate21.com/certificate/?code=4B08P7I"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            🔗
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">NodeJS Application Developper</h3>
                                    <p className="text-sm text-gray-500">
                                        2022{" "}
                                        <a
                                            href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/b0835ccf-d909-430f-ad22-22ec3bea81e2-thomas-sloboda-4f19eea4-4411-4576-af22-e92f40ebbb87-certificate.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            🔗
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Cypress 101</h3>
                                    <p className="text-sm text-gray-500">
                                        2023{" "}
                                        <a
                                            href="https://www.lambdatest.com/certifications/lambdatest-certified/C101-VPJBFY.png"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            🔗
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Angular Niveau 1</h3>
                                    <p className="text-sm text-gray-500">
                                        2023{" "}
                                        <a
                                            href="https://interstate21.com/certificate/?code=4H19ZQW"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            🔗
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow-inner mt-8 md:mt-12">
                <div className="container mx-auto px-4 py-4 md:py-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Thomas SLOBODA. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

