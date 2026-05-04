# Star Limp — Logo Assets

Pacote completo de identidade visual para uso no website.

## Estrutura

```
/
├── header-logo.svg              ← logo completo (com onda + "Atacado & Varejo")
├── header-logo.png              ← versão PNG 1440×560 (retina)
├── header-logo-transparent.svg  ← sem fundo, sem onda (pra navbar sobre qualquer cor)
├── header-logo-transparent.png
├── header-logo-compact.svg      ← só "Star✦limp" (navbar mobile / sticky)
├── header-logo-compact.png
├── favicon.svg                  ← favicon vetorial (estrela + onda + bolha)
├── favicon-simple.svg           ← favicon simplificado (só a estrela)
├── favicon.ico                  ← multi-resolução: 16, 32, 48, 64, 128, 256
├── favicon-{16,32,48,64,128,180,192,256,512}.png
├── apple-touch-icon.png         ← 180×180 (iOS home screen)
├── android-chrome-192x192.png   ← Android home screen
└── android-chrome-512x512.png   ← Android splash screen / PWA
```

## Como instalar no website

### 1. Coloque os arquivos na raiz do projeto

Recomendado: pasta `public/` (Next.js, Vite, CRA) ou raiz do site estático.

### 2. Adicione no `<head>` do HTML

```html
<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
```

### 3. Crie um `manifest.json` (opcional, para PWA / Android)

```json
{
  "name": "Star Limp",
  "short_name": "Star Limp",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0098D8",
  "background_color": "#FFFFFF",
  "display": "standalone"
}
```

### 4. Use o logo no header

```html
<!-- Header completo (página inicial / desktop) -->
<img src="/header-logo.svg" alt="Star Limp - Produtos de Limpeza" height="80">

<!-- Header compacto (mobile / navbar sticky) -->
<img src="/header-logo-compact.svg" alt="Star Limp" height="40">

<!-- Header sem fundo (sobre área colorida) -->
<img src="/header-logo-transparent.svg" alt="Star Limp" height="60">
```

## Paleta de cores

| Cor              | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| Azul Star Limp   | `#0098D8` | "Star", estrela, onda, bolhas    |
| Azul claro       | `#5BC0EB` | Highlight interno da estrela     |
| Cinza escuro     | `#2B2B2B` | "limp"                           |
| Cinza médio      | `#555555` | Subtítulo "PRODUTOS DE LIMPEZA"  |
| Preto/quase      | `#1A1A1A` | "Atacado & Varejo"               |

## Notas

- Os SVGs são vetoriais — escalam perfeitamente em qualquer tamanho sem perder qualidade. **Use SVG sempre que possível.**
- Os PNGs são renderizados em 2× pra telas retina/HiDPI.
- O `favicon.ico` tem 6 resoluções embutidas — o navegador escolhe automaticamente a melhor.
