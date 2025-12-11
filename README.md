# Convite do Otto - 1 Ano

Um convite digital interativo para festa de 1 ano de aniversário com tema Toy Story, otimizado para compartilhamento no WhatsApp e redes sociais.

## Visão Geral

Este é um aplicativo web React responsivo para o convite de aniversário de 1 ano do Otto. O app apresenta:

- Design temático Toy Story com cores vibrantes e animações fluidas
- Otimizado para compartilhamento no WhatsApp (Open Graph meta tags)
- Navegação suave entre seções com scroll animado
- Galeria de fotos interativa com lightbox
- Formulário de confirmação de presença (RSVP)
- Animações personalizadas usando Tailwind CSS
- Layout totalmente responsivo (mobile-first)

## Tecnologias

- **React 19** com TypeScript
- **Vite** como bundler e servidor de desenvolvimento
- **Tailwind CSS** com configuração customizada e tema Toy Story
- **Lucide React** para ícones
- **Open Graph** meta tags para compartilhamento otimizado

## Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento (porta 3000)
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Estrutura do Projeto

```
convite-do-otto/
├── components/          # Componentes de seção
│   ├── BackgroundMusic.tsx  # Música de fundo
│   ├── GiftModal.tsx       # Modal de presente
│   ├── Hero.tsx            # Seção principal
│   ├── InfoSection.tsx     # Detalhes da festa
│   └── RSVP.tsx            # Formulário de RSVP
├── index.html           # HTML principal com Tailwind config
├── index.tsx            # Ponto de entrada React
├── App.tsx              # Componente principal
├── types.ts             # Definições de tipos TypeScript
├── vite.config.ts       # Configuração do Vite
└── public/              # Arquivos estáticos
    └── open-tag-img.jpeg # Imagem para compartilhamento
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:
```
GEMINI_API_KEY=sua_chave_aqui
VITE_SHEETS_URL=https://script.google.com/macros/s/...
```

### Configuração do Vite

- Servidor de desenvolvimento na porta 3000, host 0.0.0.0
- Alias de caminho: `@/` aponta para a raiz do projeto
- Exposição de variáveis de ambiente para API

## Personalização

### Tema Tailwind

O tema Toy Story é configurado inline no `index.html` com:

**Fontes:**
- `font-toy`: Titan One (logo/efeito Toy Story)
- `font-heading`: Fredoka (títulos)
- `font-body`: Nunito (texto do corpo)

**Cores Personalizadas:**
- `toyBlue`: #1D4E89 (azul profundo)
- `toyLightBlue`: #48A7F9 (azul céu)
- `toyYellow`: #F9D948 (amarelo Toy Story)
- `toyRed`: #E63946 (vermelho)
- `toyGreen`: #8CB369 (verde)
- `toyPurple`: #9C27B0 (roxo)
- `toyCloud`: #F0F9FF (azul muito claro)

**Animações Customizadas:**
- `animate-float`: Flutuação suave
- `animate-float-delayed`: Flutuação com delay
- `animate-bounce-slow`: Pulo lento
- `animate-spin-slow`: Rotação lenta
- `animate-pop`: Zoom de entrada

**Padrões de Fundo:**
- `.bg-clouds`: Padrão de nuvens do quarto do Andy
- `.bg-cow`: Padrão de pintas de vaca

### Compartilhamento no WhatsApp

A imagem de compartilhamento está localizada em `public/open-tag-img.jpeg`. Para atualizar:
1. Substitua o arquivo `public/open-tag-img.jpeg`
2. Execute `npm run build`
3. Reimplante o site

As meta tags Open Graph estão configuradas no `index.html` para:
- Título personalizado
- Descrição do evento
- Imagem de visualização
- URL de destino

## Funcionalidades

- **Design Responsivo**: Otimizado para mobile, tablet e desktop
- **Música de Fundo**: Trilha sonora temática (opcional)
- **Modal de Presentes**: Lista de presentes sugeridos
- **Seção Hero**: Apresentação principal com título animado
- **Informações**: Data, hora e local da festa
- **RSVP**: Formulário de confirmação com validação
- **Compartilhamento**: Meta tags otimizadas para redes sociais
- **Animações**: Scroll reveal e transições suaves
- **Mapa**: Localização do evento (via componente MapSection)

## Compartilhamento no WhatsApp

O site inclui meta tags Open Graph para pré-visualização rica:

```html
<meta property="og:title" content="Aniversário do Otto - 1 Ano 🎉" />
<meta property="og:description" content="Venha brincar com a gente nessa aventura especial do Otto! Tema Toy Story. Confirme sua presença!" />
<meta property="og:image" content="https://melodious-pie-7a69b8.netlify.app/open-tag-img.jpeg" />
<meta property="og:url" content="https://melodious-pie-7a69b8.netlify.app/" />
```

## Deploy

O projeto está configurado para ser facilmente implantado em:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**

### Passos para Deploy:

1. Execute `npm run build`
2. Faça upload da pasta `dist/` para sua plataforma
3. Configure as variáveis de ambiente necessárias
4. Implante!

## Conteúdo

Todo o conteúdo de UI está em **português (pt-BR)** conforme o tema da festa. As informações podem ser editadas diretamente nos componentes respectivos.

## Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código (se configurado)

## Licença

Este projeto é privado e foi criado especialmente para o aniversário do Otto.

---
