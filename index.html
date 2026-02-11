<!DOCTYPE html>
<html lang="pt-PT" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espaço Saúde - Clínica de Bem-Estar</title>
    
    <!-- Tailwind CSS (via CDN para funcionar sem instalação) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Configurações de Cores Personalizadas -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0084d1', // Azul Claro da Logo
                        secondary: '#082f49', // Azul Escuro Fundo
                        dark: '#0c4a6e', // Texto Escuro
                        surface: '#f0f9ff', // Fundo Claro
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>

    <!-- Ícones Lucide -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        /* Estilos extras para scrollbar e animações manuais */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #0084d1; border-radius: 4px; }
        
        .clip-path-inset {
            clip-path: inset(0 var(--clip-pos, 50%) 0 0);
        }
        
        .tilt-card {
            transition: transform 0.1s ease-out;
            transform-style: preserve-3d;
        }

        /* Animação do Preloader */
        #preloader.fade-out {
            opacity: 0;
            transform: translateY(-100%);
            pointer-events: none;
        }
    </style>
</head>
<body class="font-sans text-dark bg-surface antialiased overflow-x-hidden">

    <!-- PRELOADER -->
    <div id="preloader" class="fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-4">
        <!-- Efeito de Fundo -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center text-center w-full max-w-lg">
            <!-- Logo LED -->
            <div class="relative mb-8 p-6">
                <div class="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
                <img src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" alt="Logo" class="w-32 md:w-48 h-auto relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-float">
            </div>
            
            <h1 class="text-3xl md:text-5xl font-bold text-white tracking-widest mb-8 drop-shadow-lg">
                ESPAÇO <span class="text-sky-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">SAÚDE</span>
            </h1>

            <!-- Barra de Progresso -->
            <div class="w-48 md:w-64 h-1.5 bg-dark rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.2)] mx-auto">
                <div id="progress-bar" class="absolute left-0 top-0 h-full w-0 bg-white rounded-full shadow-[0_0_15px_white] transition-all duration-[2000ms] ease-out"></div>
            </div>
            <p class="mt-4 text-white/80 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase animate-pulse">Carregando experiência...</p>
        </div>
    </div>

    <!-- TOAST NOTIFICATION (Escondido por padrão) -->
    <div id="toast" class="fixed top-24 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 md:px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 border border-sky-400 backdrop-blur-md w-[90vw] md:w-max max-w-md transition-all duration-300 opacity-0 translate-y-[-20px] pointer-events-none">
        <i data-lucide="info" class="w-5 h-5 text-white shrink-0"></i>
        <span id="toast-message" class="text-xs md:text-sm font-medium truncate">Mensagem aqui</span>
    </div>

    <!-- HEADER / NAV -->
    <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center pt-2 px-2 md:pt-6 md:px-4">
        <div id="nav-container" class="bg-white/95 md:bg-white/90 backdrop-blur-xl border border-sky-100 shadow-xl rounded-full px-4 py-2 md:px-2 flex items-center transition-all duration-500 w-full md:w-full max-w-5xl justify-between">
            
            <!-- Logo Mobile Centralizada -->
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:flex md:items-center cursor-pointer z-10" onclick="window.scrollTo(0,0)">
                <div class="flex items-center gap-2">
                    <img src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" alt="Logo" class="h-8 md:h-10 w-auto object-contain">
                    <span class="font-bold text-base md:text-xl tracking-tight text-primary whitespace-nowrap">ESPAÇO SAÚDE</span>
                </div>
            </div>

            <!-- Botões Direita -->
            <div class="flex items-center gap-2 ml-auto z-20">
                <!-- Menu Desktop -->
                <div class="hidden md:flex items-center bg-surface rounded-full p-1 mr-2">
                    <a href="#experience" class="px-5 py-2 rounded-full text-sm font-medium text-primary hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all">Experiência</a>
                    <a href="#testimonials" class="px-5 py-2 rounded-full text-sm font-medium text-primary hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all">Alunos</a>
                    <button onclick="shareLink()" class="px-4 py-2 rounded-full text-sm font-medium text-primary hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all flex items-center gap-1">
                        <i data-lucide="share-2" class="w-4 h-4"></i> <span class="hidden lg:inline">Compartilhar</span>
                    </button>
                </div>

                <!-- CTA Desktop -->
                <button onclick="openModal()" class="hidden md:flex bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:bg-[#0284c7] hover:scale-105 transition-all items-center gap-2">
                    Agendar <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>

                <!-- Menu Mobile Toggle -->
                <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-primary bg-surface rounded-full hover:bg-sky-100 transition-colors shadow-sm">
                    <i id="menu-icon" data-lucide="menu" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- MENU MOBILE OVERLAY -->
    <div id="mobile-menu" class="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 hidden flex-col items-center text-center animate-fade-in transition-all">
        <a href="#experience" onclick="toggleMobileMenu()" class="w-full py-4 text-lg font-bold text-primary border-b border-sky-100">Experiência</a>
        <a href="#services" onclick="toggleMobileMenu()" class="w-full py-4 text-lg font-bold text-primary border-b border-sky-100">Modalidades</a>
        <a href="#testimonials" onclick="toggleMobileMenu()" class="w-full py-4 text-lg font-bold text-primary border-b border-sky-100">Depoimentos</a>
        <a href="#team" onclick="toggleMobileMenu()" class="w-full py-4 text-lg font-bold text-primary border-b border-sky-100">Profissionais</a>
        <button onclick="openModal(); toggleMobileMenu()" class="w-full py-4 text-lg font-bold text-white bg-primary rounded-xl mt-4 shadow-lg flex items-center justify-center gap-2">
            Agendar Agora <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </button>
        <button onclick="shareLink(); toggleMobileMenu()" class="w-full py-4 text-lg font-medium text-primary flex items-center justify-center gap-2 mt-2">
            <i data-lucide="share-2" class="w-5 h-5"></i> Compartilhar App
        </button>
    </div>

    <!-- HERO SECTION -->
    <section class="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-secondary pt-24 md:pt-0">
        <!-- Background -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-60 scale-110" style="animation: slow-zoom 20s infinite alternate;" alt="Background">
            <div class="absolute inset-0 bg-gradient-to-r from-secondary via-dark/90 to-primary/40"></div>
            <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div class="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sky-200 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Conceito Wellness 2026
                </div>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
                    Não é só exercício.<br> É o seu <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">santuário.</span>
                </h1>
                <p class="text-base md:text-lg text-sky-100 mb-8 md:mb-10 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                    Desconecte-se do ruído. Reconecte-se com o poder do seu corpo em um ambiente projetado para performance e paz mental.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button onclick="openModal()" class="bg-primary hover:bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto">
                        Iniciar Transformação <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                    <button onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})" class="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 backdrop-blur transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                        <i data-lucide="play" class="w-5 h-5 fill-current"></i> Ver o Espaço
                    </button>
                </div>
            </div>

            <!-- Card Tilt 3D (Desktop Only) -->
            <div id="hero-card" class="relative mt-8 lg:mt-0 hidden md:block tilt-card mx-auto w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white cursor-pointer">
                <div class="flex justify-between items-start mb-8">
                    <div><p class="text-sm text-sky-200">Alunos Ativos</p><p class="text-3xl font-bold">1.240+</p></div>
                    <div class="bg-emerald-500 p-2 rounded-full shadow-lg shadow-emerald-500/30"><i data-lucide="activity" class="w-6 h-6"></i></div>
                </div>
                <div class="h-2 bg-dark/50 rounded-full overflow-hidden"><div class="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div></div>
                <p class="text-xs text-right mt-2 text-sky-300">85% Meta atingida</p>
            </div>
        </div>
    </section>

    <!-- EXPERIENCE SLIDER -->
    <section id="experience" class="py-16 md:py-24 bg-surface relative">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-dark mb-4">Veja a diferença. Sinta a mudança.</h2>
                <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">Nosso método não foca apenas na estética, mas na funcionalidade.</p>
            </div>

            <!-- Slider Container -->
            <div id="comparison-container" class="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/20 border-2 md:border-4 border-white select-none touch-none">
                <!-- Imagem DEPOIS (Fundo) -->
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" alt="Bem Estar" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute top-4 right-4 md:top-6 md:right-6 bg-primary/90 backdrop-blur text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">DEPOIS: Equilíbrio</div>
                
                <!-- Imagem ANTES (Sobreposta com Clip-path) -->
                <div id="before-image" class="absolute inset-0 w-full h-full clip-path-inset">
                    <img src="https://images.unsplash.com/photo-1513253822776-384b4502712d?auto=format&fit=crop&q=80&w=1000" alt="Tensão" class="absolute inset-0 w-full h-full object-cover grayscale contrast-125 sepia-[.3] hue-rotate-180">
                    <div class="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-800/80 backdrop-blur text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">ANTES: Tensão</div>
                </div>

                <!-- Slider Handle -->
                <div id="slider-handle" class="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] left-1/2">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-primary hover:scale-110 transition-transform">
                        <i data-lucide="activity" class="w-5 h-5 md:w-6 md:h-6"></i>
                    </div>
                </div>
            </div>

            <!-- Ícones Informativos -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
                <div class="text-center group p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none cursor-pointer" onclick="showToast('Avaliação completa inclusa na matrícula')">
                    <div class="w-14 h-14 md:w-16 md:h-16 mx-auto bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all border border-sky-100">
                        <i data-lucide="clipboard-list" class="w-6 h-6 md:w-8 md:h-8"></i>
                    </div>
                    <h3 class="font-bold text-lg md:text-xl text-dark mb-2">Diagnóstico</h3>
                    <p class="text-sm text-slate-600 leading-relaxed px-2 md:px-4">Avaliamos sua biomecânica antes de qualquer exercício.</p>
                </div>
                <div class="text-center group p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none cursor-pointer" onclick="showToast('Treinos adaptados para sua necessidade')">
                    <div class="w-14 h-14 md:w-16 md:h-16 mx-auto bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all border border-sky-100">
                        <i data-lucide="sliders" class="w-6 h-6 md:w-8 md:h-8"></i>
                    </div>
                    <h3 class="font-bold text-lg md:text-xl text-dark mb-2">Personalização</h3>
                    <p class="text-sm text-slate-600 leading-relaxed px-2 md:px-4">Seu treino é adaptado às suas dores e objetivos.</p>
                </div>
                <div class="text-center group p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none cursor-pointer" onclick="showToast('Acompanhamento mensal de resultados')">
                    <div class="w-14 h-14 md:w-16 md:h-16 mx-auto bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all border border-sky-100">
                        <i data-lucide="trending-up" class="w-6 h-6 md:w-8 md:h-8"></i>
                    </div>
                    <h3 class="font-bold text-lg md:text-xl text-dark mb-2">Evolução</h3>
                    <p class="text-sm text-slate-600 leading-relaxed px-2 md:px-4">Monitoramento constante para garantir progressão segura.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="py-16 md:py-24 bg-white overflow-hidden">
        <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div class="relative z-10 text-center lg:text-left">
                <span class="text-primary font-bold tracking-widest text-xs md:text-sm uppercase">Nossas Modalidades</span>
                <h2 class="text-3xl md:text-5xl font-bold text-dark mt-4 mb-8">Escolha como quer <br class="hidden md:block"> mover o mundo.</h2>
                <div class="space-y-3 md:space-y-4">
                    <!-- Item de Serviço: Natação -->
                    <div class="service-item p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 group text-left border-sky-100 hover:border-sky-300 bg-white" onclick="selectService(0, 'Natação')">
                        <div class="p-2 md:p-3 rounded-xl bg-sky-50 text-primary transition-colors shrink-0 group-hover:bg-primary group-hover:text-white"><i data-lucide="waves" class="w-5 h-5"></i></div>
                        <div class="flex-1">
                            <h3 class="font-bold text-base md:text-lg text-dark group-hover:text-primary">Natação</h3>
                            <p class="text-xs md:text-sm text-slate-400">Técnica e respiração.</p>
                        </div>
                        <i data-lucide="chevron-right" class="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                    <!-- Item de Serviço: Pilates -->
                    <div class="service-item p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 group text-left border-sky-100 hover:border-sky-300 bg-white" onclick="selectService(1, 'Pilates')">
                        <div class="p-2 md:p-3 rounded-xl bg-sky-50 text-primary transition-colors shrink-0 group-hover:bg-primary group-hover:text-white"><i data-lucide="user-check" class="w-5 h-5"></i></div>
                        <div class="flex-1">
                            <h3 class="font-bold text-base md:text-lg text-dark group-hover:text-primary">Pilates</h3>
                            <p class="text-xs md:text-sm text-slate-400">Controle e postura.</p>
                        </div>
                        <i data-lucide="chevron-right" class="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                    <!-- Item de Serviço: Hidro -->
                    <div class="service-item p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 group text-left border-sky-100 hover:border-sky-300 bg-white" onclick="selectService(2, 'Hidroginástica')">
                        <div class="p-2 md:p-3 rounded-xl bg-sky-50 text-primary transition-colors shrink-0 group-hover:bg-primary group-hover:text-white"><i data-lucide="activity" class="w-5 h-5"></i></div>
                        <div class="flex-1">
                            <h3 class="font-bold text-base md:text-lg text-dark group-hover:text-primary">Hidroginástica</h3>
                            <p class="text-xs md:text-sm text-slate-400">Movimento sem dor.</p>
                        </div>
                        <i data-lucide="chevron-right" class="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                </div>
            </div>
            
            <!-- Imagem Dinâmica -->
            <div class="relative h-[400px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-4 border-white mt-8 lg:mt-0 group">
                <img id="service-image" src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition-opacity duration-500" alt="Serviço">
                <div class="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent flex items-end p-6 md:p-10">
                    <div>
                        <h3 id="service-title" class="text-white text-2xl md:text-3xl font-bold mb-2">Natação</h3>
                        <p id="service-desc" class="text-sky-100 mb-4 text-sm md:text-base">Metodologia exclusiva para confiança na água.</p>
                        <button onclick="openModal('Natação')" class="mt-2 text-white border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Agendar Aula Teste</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-secondary text-white pt-16 md:pt-24 pb-8 md:pb-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20">
                <div class="text-center lg:text-left">
                    <div class="mb-6 flex items-center justify-center lg:justify-start gap-2">
                        <img src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" alt="Logo" class="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90">
                        <span class="font-bold text-xl tracking-tight text-white/90">ESPAÇO SAÚDE</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Pronto para viver <br class="hidden md:block">o seu melhor?</h2>
                    <p class="text-sky-100 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">Agende uma consultoria gratuita e descubra qual modalidade vai transformar sua rotina.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onclick="window.open('https://wa.me/', '_blank')" class="bg-white text-dark px-8 py-4 rounded-full font-bold hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                            <i data-lucide="phone" class="w-5 h-5 text-primary"></i> Falar no WhatsApp
                        </button>
                    </div>
                </div>
                <!-- Links Rodapé -->
                <div class="grid grid-cols-2 gap-8 text-sm text-sky-200 text-center md:text-left">
                    <div>
                        <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="hover:text-white transition-colors">A Clínica</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Profissionais</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Planos e Preços</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Horários</h4>
                        <ul class="space-y-3">
                            <li class="flex flex-col md:flex-row justify-between"><span>Seg - Sex</span> <span class="text-white">06:00 - 22:00</span></li>
                            <li class="flex flex-col md:flex-row justify-between"><span>Sábado</span> <span class="text-white">08:00 - 14:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sky-300 gap-4 text-center">
                <p>© 2026 Clínica Espaço Saúde. Design Experience.</p>
                <div class="flex gap-6 justify-center"><a href="#" class="hover:text-white">Termos</a><a href="#" class="hover:text-white">Privacidade</a></div>
            </div>
        </div>
    </footer>

    <!-- BOTÃO FLUTUANTE MOBILE -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-full px-4 flex justify-center pointer-events-none">
        <button onclick="openModal()" class="pointer-events-auto bg-primary text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform border-2 border-white/20">
            <i data-lucide="calendar" class="w-5 h-5"></i> Agendar Agora
        </button>
    </div>

    <!-- MODAL AGENDAMENTO -->
    <div id="modal-agendamento" class="fixed inset-0 z-[110] hidden items-center justify-center bg-primary/80 backdrop-blur-sm p-4 overflow-y-auto" onclick="closeModal(event)">
        <div class="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl w-full max-w-lg relative animate-bounce-subtle border-4 border-primary my-auto" onclick="event.stopPropagation()">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors bg-slate-100 rounded-full p-2">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-primary">Agende sua Visita</h3>
                <p class="text-slate-500 text-sm mt-1">Preencha os dados para garantir sua vaga.</p>
            </div>

            <form onsubmit="handleFormSubmit(event)" class="space-y-4">
                <!-- Modalidade Visual -->
                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2 ml-1">O que você quer praticar?</label>
                    <div class="grid grid-cols-2 gap-2">
                        <button type="button" class="modality-btn flex flex-col items-center p-3 rounded-xl border border-slate-200 hover:border-primary hover:bg-sky-50 transition-all" onclick="selectModality(this, 'natacao')">
                            <i data-lucide="waves" class="w-5 h-5 mb-1 text-primary"></i> <span class="text-xs font-bold text-slate-600">Natação</span>
                        </button>
                        <button type="button" class="modality-btn flex flex-col items-center p-3 rounded-xl border border-slate-200 hover:border-primary hover:bg-sky-50 transition-all" onclick="selectModality(this, 'pilates')">
                            <i data-lucide="user-check" class="w-5 h-5 mb-1 text-primary"></i> <span class="text-xs font-bold text-slate-600">Pilates</span>
                        </button>
                        <button type="button" class="modality-btn flex flex-col items-center p-3 rounded-xl border border-slate-200 hover:border-primary hover:bg-sky-50 transition-all" onclick="selectModality(this, 'hidro')">
                            <i data-lucide="activity" class="w-5 h-5 mb-1 text-primary"></i> <span class="text-xs font-bold text-slate-600">Hidro</span>
                        </button>
                        <button type="button" class="modality-btn flex flex-col items-center p-3 rounded-xl border border-slate-200 hover:border-primary hover:bg-sky-50 transition-all" onclick="selectModality(this, 'musculacao')">
                            <i data-lucide="dumbbell" class="w-5 h-5 mb-1 text-primary"></i> <span class="text-xs font-bold text-slate-600">Treino</span>
                        </button>
                    </div>
                    <input type="hidden" id="selected-modality" required>
                </div>

                <!-- Data e Inputs -->
                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2 ml-1">Para quando?</label>
                    <div class="relative">
                        <i data-lucide="calendar-days" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"></i>
                        <input type="date" required class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4">
                    <div class="relative">
                        <i data-lucide="user" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"></i>
                        <input required type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Nome completo">
                    </div>
                    <div class="relative">
                        <i data-lucide="phone" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"></i>
                        <input required type="tel" class="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="WhatsApp (DD) 99999-9999">
                    </div>
                </div>

                <!-- Lembrete -->
                <div class="bg-sky-50 p-3 rounded-xl flex items-center gap-3 border border-sky-100">
                    <div class="bg-white p-2 rounded-full shadow-sm text-primary"><i data-lucide="clock" class="w-4 h-4"></i></div>
                    <div><p class="text-xs text-sky-900 leading-tight"><span class="font-bold">Lembrete:</span> Avisaremos no WhatsApp <span class="font-bold underline decoration-primary">5 min antes</span>.</p></div>
                </div>

                <button type="submit" class="w-full bg-primary hover:bg-[#0284c7] text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    Confirmar Agendamento <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </form>
        </div>
    </div>

    <!-- MODAL SUCESSO -->
    <div id="modal-sucesso" class="fixed inset-0 z-[120] hidden items-center justify-center bg-primary/90 backdrop-blur-md p-4">
        <div class="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl text-center max-w-sm w-full transform transition-all border-4 border-green-100 relative">
            <button onclick="closeSuccessModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-6 h-6"></i></button>
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-lucide="check-circle" class="w-10 h-10 text-green-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-2">Tudo Certo!</h3>
            <p class="text-slate-500 mb-6 text-sm">Recebemos sua solicitação. Voltando para o site em instantes...</p>
            <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div class="h-full bg-green-500 w-full transition-all duration-[3000ms] ease-linear"></div>
            </div>
            <button onclick="closeSuccessModal()" class="mt-6 text-sm text-slate-400 hover:text-primary underline">Voltar agora</button>
        </div>
    </div>

    <!-- SCRIPTS LÓGICOS -->
    <script>
        // Inicializa ícones
        lucide.createIcons();

        // Lógica do Preloader
        window.addEventListener('load', () => {
            const bar = document.getElementById('progress-bar');
            bar.style.width = '100%';
            setTimeout(() => {
                document.getElementById('preloader').classList.add('fade-out');
            }, 2500);
        });

        // Lógica do Slider Antes/Depois
        const sliderContainer = document.getElementById('comparison-container');
        const beforeImage = document.getElementById('before-image');
        const sliderHandle = document.getElementById('slider-handle');
        let isDragging = false;

        function updateSlider(x) {
            const rect = sliderContainer.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            beforeImage.style.setProperty('--clip-pos', (100 - pos) + '%');
            sliderHandle.style.left = pos + '%';
        }

        sliderContainer.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => { if(isDragging) updateSlider(e.clientX) });
        
        // Touch support
        sliderContainer.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => { if(isDragging) updateSlider(e.touches[0].clientX) });

        // Lógica de Modais
        function openModal(preSelect = '') {
            document.getElementById('modal-agendamento').classList.remove('hidden');
            document.getElementById('modal-agendamento').classList.add('flex');
            // Resetar seleção se necessário
            document.querySelectorAll('.modality-btn').forEach(btn => {
                btn.classList.remove('border-primary', 'bg-sky-50', 'ring-2', 'ring-sky-200');
                btn.classList.add('border-slate-200');
            });
        }

        function closeModal(e) {
            if (e && e.target !== e.currentTarget) return;
            document.getElementById('modal-agendamento').classList.add('hidden');
            document.getElementById('modal-agendamento').classList.remove('flex');
        }

        function selectModality(btn, value) {
            document.getElementById('selected-modality').value = value;
            document.querySelectorAll('.modality-btn').forEach(b => {
                b.classList.remove('border-primary', 'bg-sky-50', 'ring-2', 'ring-sky-200');
                b.classList.add('border-slate-200');
            });
            btn.classList.remove('border-slate-200');
            btn.classList.add('border-primary', 'bg-sky-50', 'ring-2', 'ring-sky-200');
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            // Simular envio
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Enviando...';
            setTimeout(() => {
                closeModal();
                document.getElementById('modal-sucesso').classList.remove('hidden');
                document.getElementById('modal-sucesso').classList.add('flex');
                btn.innerHTML = originalText;
                setTimeout(closeSuccessModal, 3000);
            }, 1500);
        }

        function closeSuccessModal() {
            document.getElementById('modal-sucesso').classList.add('hidden');
            document.getElementById('modal-sucesso').classList.remove('flex');
        }

        // Lógica de Menu Mobile
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        // Toast Logic
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-[-20px]');
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-20px]');
            }, 3000);
        }

        // Share Logic
        async function shareLink() {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Clínica Espaço Saúde',
                        text: 'Venha conhecer o melhor espaço de bem-estar!',
                        url: window.location.href
                    });
                } catch (err) {}
            } else {
                window.open(`https://wa.me/?text=Olha%20que%20legal: ${window.location.href}`, '_blank');
            }
        }

        // Tilt Card Effect (Desktop)
        const card = document.getElementById('hero-card');
        if(card) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
            });
        }

        // Services Tab Logic (Simples)
        const servicesData = [
            { title: "Natação", desc: "Metodologia exclusiva para confiança na água.", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1000" },
            { title: "Pilates", desc: "Aparelhos Cadillac e Reformer de última geração.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000" },
            { title: "Hidroginástica", desc: "Ideal para reabilitação e terceira idade.", img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=1000" }
        ];

        function selectService(index, name) {
            const data = servicesData[index];
            const img = document.getElementById('service-image');
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = data.img;
                document.getElementById('service-title').innerText = data.title;
                document.getElementById('service-desc').innerText = data.desc;
                img.style.opacity = '1';
            }, 300);
            
            // Highlight active item logic can be added here
            showToast(`Visualizando: ${name}`);
        }
    </script>
</body>
</html>
