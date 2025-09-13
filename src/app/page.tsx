import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Gamepad2, Users, Zap, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-foreground/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Halma Game</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Hero Section */}
          <div className="mb-16 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Jogue <span className="text-primary">Halma</span> online
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Desafie seus amigos neste clássico jogo de estratégia. Movimente
              suas peças através do tabuleiro e seja o primeiro a alcançar o
              canto oposto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base">
                <Users className="mr-2 h-5 w-5" />
                Criar Partida
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Entrar em Partida
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tempo Real</CardTitle>
                <CardDescription>
                  Comunicação instantânea usando WebSockets para uma experiência
                  fluida
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Multijogador</CardTitle>
                <CardDescription>
                  Jogue com amigos em qualquer lugar do mundo através da
                  internet
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Estratégia</CardTitle>
                <CardDescription>
                  Desenvolva suas habilidades de pensamento estratégico e
                  planejamento
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* How to Play Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Como Jogar
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mova todas as suas peças do canto inicial para o canto
                    oposto do tabuleiro. O primeiro jogador a conseguir isso
                    vence a partida.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Movimentação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As peças podem se mover uma casa adjacente ou saltar sobre
                    outras peças em sequência para avançar mais rapidamente pelo
                    tabuleiro.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estratégia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use saltos múltiplos para se mover rapidamente e bloqueie o
                    caminho do adversário quando possível.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Regras Especiais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Você perde se ainda tiver peças na base após 30 jogadas
                    (tabuleiro 8x8) ou 50 jogadas (tabuleiro 10x10).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025 Halma Game</span>
              <span>•</span>
              <span>Desenvolvido com Next.js</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a
                href="/regras"
                className="hover:text-foreground transition-colors"
              >
                Regras
              </a>
              <a
                href="/sobre"
                className="hover:text-foreground transition-colors"
              >
                Sobre
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
