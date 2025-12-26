import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Bell,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Zap,
  Users,
  Wrench,
  Building2,
  ChevronRight,
  Mail,
  FolderOpen,
  BarChart3,
  Server,
  Lock,
  RefreshCw,
  Smartphone,
  Monitor,
  Apple,
} from "lucide-react";

function PlayStoreIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Platform Section */}
      <PlatformSection />

      {/* Pour Qui Section */}
      <AudienceSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Truck className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold">FleetZen</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#pour-qui" className="text-sm text-muted-foreground transition hover:text-foreground">
            Pour qui ?
          </a>
          <a href="#fonctionnalites" className="text-sm text-muted-foreground transition hover:text-foreground">
            Fonctionnalités
          </a>
          <a href="#tarifs" className="text-sm text-muted-foreground transition hover:text-foreground">
            Tarifs
          </a>
        </div>
        <Button size="sm">Essayer FleetZen</Button>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating elements */}
      <div className="absolute left-10 top-1/4 h-72 w-72 animate-float rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 h-96 w-96 animate-float rounded-full bg-emerald-400/10 blur-3xl [animation-delay:2s]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Badge variant="success" className="mb-6 animate-fade-in-down">
          <Zap className="mr-1 h-3 w-3" />
          Configuration en moins de 5 minutes
        </Badge>

        <h1 className="mb-6 max-w-4xl animate-fade-in-up font-display text-4xl font-bold leading-tight tracking-tight opacity-0 [animation-delay:100ms] sm:text-5xl md:text-6xl lg:text-7xl">
          Ne ratez plus jamais un{" "}
          <span className="text-gradient">contrôle ou un entretien</span> de véhicule
        </h1>

        <p className="mb-8 max-w-2xl animate-fade-in-up text-lg text-muted-foreground opacity-0 [animation-delay:200ms] sm:text-xl">
          FleetZen aide les artisans et petites entreprises à gérer simplement leurs véhicules,
          leurs obligations et leurs documents — sans complexité inutile.
        </p>

        <div className="mb-10 flex animate-fade-in-up flex-col items-start gap-4 opacity-0 [animation-delay:300ms] sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Centralisez vos véhicules</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Recevez des alertes automatiques</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Gagnez du temps et de la tranquillité</span>
          </div>
        </div>

        <div className="flex animate-fade-in-up flex-col items-center gap-6 opacity-0 [animation-delay:400ms]">
          <Button size="lg" className="group">
            Essayer FleetZen
            <ChevronRight className="transition-transform group-hover:translate-x-1" />
          </Button>
          <span className="text-sm text-muted-foreground">Sans engagement</span>
          
          {/* Platform badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition hover:bg-black/80">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-80">Télécharger sur</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition hover:bg-black/80">
              <PlayStoreIcon />
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-80">Disponible sur</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border-2 border-border bg-white px-4 py-2.5 text-foreground transition hover:bg-muted/50">
              <Monitor className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] leading-none text-muted-foreground">Accès</p>
                <p className="text-sm font-semibold">Web App</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 w-full max-w-5xl animate-fade-in-up opacity-0 [animation-delay:500ms]">
          <div className="relative rounded-2xl border border-border/50 bg-white p-2 shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-muted-foreground">app.fleetzen.fr</span>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              <DashboardPreviewCard
                title="Véhicules"
                value="8"
                icon={<Truck className="h-5 w-5" />}
                color="primary"
              />
              <DashboardPreviewCard
                title="À venir (30j)"
                value="3"
                icon={<Clock className="h-5 w-5" />}
                color="warning"
              />
              <DashboardPreviewCard
                title="En retard"
                value="1"
                icon={<AlertTriangle className="h-5 w-5" />}
                color="danger"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DashboardPreviewCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "primary" | "warning" | "danger";
}

function DashboardPreviewCard({ title, value, icon, color }: DashboardPreviewCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    warning: "bg-amber-500/10 text-amber-600",
    danger: "bg-red-500/10 text-red-600",
  };

  return (
    <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="font-display text-3xl font-bold">{value}</p>
        </div>
        <div className={`rounded-xl p-3 ${colorClasses[color]}`}>{icon}</div>
      </div>
    </div>
  );
}

function PlatformSection() {
  const platforms = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "iPhone & iPad",
      description: "Application native optimisée pour iOS",
      badge: "App Store",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Android",
      description: "Application native pour tous vos appareils Android",
      badge: "Google Play",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web & Desktop",
      description: "Accessible depuis n'importe quel navigateur",
      badge: "Web App",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-4">
            <Smartphone className="mr-1 h-3 w-3" />
            Multi-plateforme
          </Badge>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Disponible <span className="text-gradient">partout</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Gérez votre flotte depuis votre bureau ou en déplacement
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mx-auto mb-4 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                  {platform.icon}
                </div>
                <Badge variant="secondary" className="mb-3">
                  {platform.badge}
                </Badge>
                <h3 className="mb-2 font-display text-lg font-semibold">{platform.title}</h3>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Device mockup illustration */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="hidden lg:block">
            <div className="relative">
              {/* Desktop mockup */}
              <div className="rounded-xl border-4 border-gray-800 bg-gray-800 p-2">
                <div className="h-48 w-80 rounded-lg bg-gradient-to-br from-primary/20 to-emerald-100">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <Truck className="mx-auto mb-2 h-10 w-10 text-primary" />
                      <p className="text-xs font-medium text-primary">FleetZen Web</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto h-4 w-24 rounded-b-lg bg-gray-800" />
              <div className="mx-auto h-2 w-32 rounded-b-lg bg-gray-700" />
            </div>
          </div>

          <div className="relative">
            {/* Phone mockup */}
            <div className="rounded-[2rem] border-4 border-gray-800 bg-gray-800 p-2">
              <div className="h-64 w-32 rounded-[1.5rem] bg-gradient-to-br from-primary/20 to-emerald-100">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Truck className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <p className="text-[10px] font-medium text-primary">FleetZen App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    { icon: <Wrench className="h-6 w-6" />, label: "Artisans", sub: "Plombiers, électriciens, chauffagistes" },
    { icon: <Building2 className="h-6 w-6" />, label: "Entreprises de services", sub: "Livraison, maintenance, nettoyage" },
    { icon: <Users className="h-6 w-6" />, label: "TPE", sub: "1 à 20 véhicules" },
  ];

  const painPoints = [
    "des rappels dans votre téléphone",
    "des papiers dans la boîte à gants",
    "un fichier Excel jamais à jour",
  ];

  return (
    <section id="pour-qui" className="relative py-24">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            <Users className="mr-1 h-3 w-3" />
            Pour qui ?
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Conçu pour les petites flottes{" "}
            <span className="text-gradient">professionnelles</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            FleetZen s&apos;adresse aux entreprises qui utilisent leurs véhicules au quotidien
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map((audience, i) => (
            <Card
              key={i}
              className="group border-2 border-transparent bg-white transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary transition-transform group-hover:scale-110">
                  {audience.icon}
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">{audience.label}</h3>
                <p className="text-sm text-muted-foreground">{audience.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-emerald-50 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold">Si vous gérez vos véhicules avec...</h3>
              <ul className="space-y-3">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-primary p-2">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="font-display text-xl font-bold">FleetZen est fait pour vous.</span>
              </div>
              <p className="text-muted-foreground">
                Passez d&apos;une gestion chaotique à un suivi clair et automatisé de votre flotte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    { icon: <AlertTriangle className="h-5 w-5" />, text: "des pannes imprévues" },
    { icon: <BarChart3 className="h-5 w-5" />, text: "des pertes de chiffre d'affaires" },
    { icon: <Zap className="h-5 w-5" />, text: "du stress inutile" },
    { icon: <Shield className="h-5 w-5" />, text: "des risques de non-conformité" },
  ];

  const competitors = ["trop complexes", "trop chers", "surdimensionnés pour les petites entreprises"];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="destructive" className="mb-4">
              <AlertTriangle className="mr-1 h-3 w-3" />
              Le problème
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Les oublis coûtent <span className="text-red-500">cher</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Un contrôle technique en retard, un entretien oublié ou une assurance non suivie peuvent entraîner :
            </p>
            <div className="grid grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-700"
                >
                  {problem.icon}
                  <span className="text-sm font-medium">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-muted to-muted/50" />
            <div className="relative rounded-2xl border border-border/50 bg-white p-8">
              <h3 className="mb-6 font-display text-xl font-semibold text-muted-foreground">
                La plupart des logiciels de gestion de flotte sont :
              </h3>
              <ul className="space-y-4">
                {competitors.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                      ✕
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    "visualiser tous vos véhicules en un coup d'œil",
    "suivre les échéances importantes",
    "recevoir des rappels automatiques",
    "conserver un historique clair et organisé",
  ];

  const benefits = ["Sans formation.", "Sans matériel.", "Sans perte de temps."];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Badge variant="success" className="mb-4">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            La solution
          </Badge>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Une gestion de flotte <span className="text-gradient">simple, claire et efficace</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">FleetZen vous permet de :</p>
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-primary/20 bg-white p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="rounded-lg bg-primary/10 p-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative rounded-3xl border-2 border-primary/20 bg-white p-8 text-center shadow-xl">
                {benefits.map((benefit, i) => (
                  <p
                    key={i}
                    className="mb-2 font-display text-2xl font-bold text-primary last:mb-0 sm:text-3xl"
                  >
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const featureGroups = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Gestion des véhicules",
      features: [
        "Ajoutez et suivez tous vos véhicules",
        "Consultez les informations essentielles",
        "Assignez un conducteur principal",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Suivi des obligations",
      features: [
        "Contrôles techniques",
        "Entretiens périodiques",
        "Assurances",
        "Obligations personnalisées",
      ],
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Alertes automatiques",
      features: [
        "Rappels par email avant chaque échéance",
        "Vue claire des retards et priorités",
      ],
    },
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Documents centralisés",
      features: [
        "Ajoutez factures et documents",
        "Retrouvez tout au même endroit",
        "Historique consultable à tout moment",
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Vue d'ensemble",
      features: [
        "Tableau de bord simple",
        "Vision claire de votre flotte",
        "Décisions plus rapides",
      ],
    },
  ];

  return (
    <section id="fonctionnalites" className="relative py-24">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            <Zap className="mr-1 h-3 w-3" />
            Fonctionnalités
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tout ce dont vous avez <span className="text-gradient">besoin</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((group, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-2 border-transparent bg-white transition-all hover:border-primary/20 hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-primary to-emerald-500 p-4 text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-110">
                  {group.icon}
                </div>
                <CardTitle className="text-xl">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "19",
      description: "1 à 3 véhicules",
      popular: false,
    },
    {
      name: "Pro",
      price: "39",
      description: "4 à 10 véhicules",
      popular: true,
    },
    {
      name: "Business",
      price: "79",
      description: "11 à 20 véhicules",
      popular: false,
    },
  ];

  const included = [
    "Toutes les fonctionnalités incluses",
    "Aucun engagement",
    "Support humain",
  ];

  return (
    <section id="tarifs" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            💸 Tarifs simples
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Des prix adaptés aux{" "}
            <span className="text-gradient">petites entreprises</span>
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative overflow-hidden transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-primary shadow-lg shadow-primary/10"
                  : "border-2 border-transparent bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4">
                  <Badge>Populaire</Badge>
                </div>
              )}
              <CardHeader className="pb-4 pt-8 text-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {plan.name}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground">/ mois</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-8">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Commencer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const trustPoints = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Données hébergées en Europe",
      description: "Vos données sont stockées sur des serveurs européens conformes au RGPD.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Accès sécurisé",
      description: "Connexion chiffrée et authentification sécurisée pour protéger vos informations.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Sauvegardes automatiques",
      description: "Vos données sont sauvegardées automatiquement pour éviter toute perte.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            <Shield className="mr-1 h-3 w-3" />
            Fiable & Sécurisé
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Votre flotte mérite un outil <span className="text-gradient">fiable</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border/50 bg-white p-8 text-center transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary transition-transform group-hover:scale-110">
                {point.icon}
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-500 to-teal-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTItNCAwLTQgMCAyIDIgMiA0LTIgMi0yIDIgMiA0IDQgMiA0IDAgNC0ycy0yLTItMi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Gagnez du temps. Évitez les oublis.
          <br />
          Travaillez l&apos;esprit tranquille.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
          Commencez à utiliser FleetZen dès aujourd&apos;hui et transformez la gestion de votre flotte.
        </p>
        
        <Button
          size="lg"
          className="group mb-8 bg-white text-primary shadow-2xl hover:bg-white/90"
        >
          <Mail className="mr-2 h-5 w-5" />
          Essayer FleetZen gratuitement
          <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>

        {/* App store buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm transition hover:bg-white/20">
            <Apple className="h-5 w-5" />
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-80">Télécharger sur</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm transition hover:bg-white/20">
            <PlayStoreIcon />
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-80">Disponible sur</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm transition hover:bg-white/20">
            <Monitor className="h-5 w-5" />
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-80">Accès</p>
              <p className="text-sm font-semibold">Web App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Truck className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold">FleetZen</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FleetZen. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

