# ReadRod

![ReadRod Logo](./images/ReadRod.jpg)

Uma plataforma web para leitura digital de meus livros e textos pessoais, desenvolvida para proporcionar uma experiência de leitura fácil, sem anúncio ou cadastro, além de ser responsiva.

## 🚀 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Fontes**: Google Fonts (Montserrat, Roboto Serif, DM Serif Display, Poppins)
- **Ícones**: Font Awesome 6.7.2
- **Armazenamento**: JSON para conteúdo dos livros
- **Session Storage**: Para persistência de estado entre páginas

## 📁 Estrutura do Projeto

```
ReadRod/
├── index.html              # Página principal
├── script.js              # Lógica de navegação
├── style.css              # Estilos principais
├── contents/
│   └── contents.json      # Dados dos livros
├── leitura/
│   ├── index.html         # Página de leitura
│   ├── script.js          # Lógica do leitor
│   └── style.css          # Estilos do leitor
├── images/                # Imagens e capas
└── fontawesome-free-6.7.2-web/  # Ícones
```

## 🌐 Acesso Online (deploy)

[![Netlify](https://readrod.netlify.app)](https://readrod.netlify.app)

## 🛠️ Execução Local (Para Desenvolvedores)

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd ReadRod
   ```

2. **Configure um servidor local**
   
   ⚠️ **Importante**: O projeto requer um servidor local devido às políticas CORS dos navegadores.
   
   **Opções disponíveis:**
   ```bash
   # Com Python

   python -m http.server 8000
   (ou)
   python3 -m http.server 8000
   
   # Com extensão do VS Code
   # Instale a extensão "Live Server" e clique com botão direito no index.html da página principal
   # Em seguida clique em "Open with Live Server"
   ```

3. **Acesse a aplicação**
   - Navegue para `http://localhost:8000` no seu navegador
   - A aplicação estará funcionando corretamente

## 📚 Conteúdo Disponível

Atualmente a plataforma inclui:

- **"O Que É Ser Dependente - A Vida Cristã e Seus Aspectos"**
- **"The Best Way To Suffer"** - Coletânea de poesias sobre amor

## 🎯 Funcionalidades Principais

- **Seleção de Livros**: Navegue entre diferentes títulos usando os botões direcionais
- **Visualização de Sinopse**: Cada livro exibe automaticamente título e sinopse
- **Modo Leitura**: Interface limpa e focada para leitura dos capítulos
- **Persistência**: O livro selecionado é mantido entre as sessões

## 📱 Compatibilidade

- **Desktop**: Totalmente funcional
- **Mobile**: Em desenvolvimento (aviso exibido para dispositivos móveis)
- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)

## 👨‍💻 Autor

Desenvolvido por **Vinícius Rod**

## OBS:

  Dentro dos arquivos de desenvolvimento há vários comentários explicativos.
  Se você tem alguma sugestão, sinta-se à vontade para me escrever no LinkedIn: "linkedin.com/in/viniciusrodmusic"
