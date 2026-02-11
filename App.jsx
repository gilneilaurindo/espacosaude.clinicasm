import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, MapPin, Phone, Instagram, 
  Calendar, ChevronRight, ChevronLeft, Zap, Linkedin, 
  Info, Check, Waves, Activity, Dumbbell, UserCheck, Play, 
  Send, CheckCircle, ClipboardList, Sliders, TrendingUp, Clock, User, ChevronDown, Sun, Moon, Sunrise, CalendarDays, Share2
} from 'lucide-react';

// --- COMPONENTES VISUAIS & UTILITÁRIOS ---

// 0. Preloader (Animação de Entrada com LED Branco)
const Preloader = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onFinish, 800); 
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#082f49] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-4 ${exiting ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
      
      {/* Efeitos de Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#0084d1]/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg">
        {/* Logo com Efeito LED Branco INTENSO */}
        <div className="relative mb-8 p-6">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
          <img 
            src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" 
            alt="Logo Loading"
            className="w-32 md:w-48 h-auto relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-float-gentle"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest mb-8 animate-fade-in-up w-full text-center drop-shadow-lg">
          ESPAÇO <span className="text-sky-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">SAÚDE</span>
        </h1>

        <div className="w-48 md:w-64 h-1.5 bg-[#0c4a6e] rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.2)] mx-auto">
          <div className="absolute left-0 top-0 h-full w-full bg-white origin-left animate-progress-fill rounded-full shadow-[0_0_15px_white]"></div>
        </div>

        <p className="mt-4 text-white/80 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase animate-pulse">
          Carregando experiência...
        </p>
      </div>
    </div>
  );
};

// 1. Toast de Notificação
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#0084d1] text-white px-4 md:px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 animate-fade-in-up border border-sky-400 backdrop-blur-md w-[90vw] md:w-max max-w-md">
      <Info size={18} className="text-white shrink-0" />
      <span className="text-xs md:text-sm font-medium truncate">{message}</span>
    </div>
  );
};

// 2. Modal de Agendamento
const SchedulingModal = ({ onClose, onSuccess, initialModality = "" }) => {
  const [loading, setLoading] = useState(false);
  const [selectedModality, setSelectedModality] = useState(initialModality);
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  const modalities = [
    { id: 'natacao', label: 'Natação', icon: <Waves size={18} /> },
    { id: 'hidro', label: 'Hidro', icon: <Activity size={18} /> },
    { id: 'pilates', label: 'Pilates', icon: <UserCheck size={18} /> },
    { id: 'musculacao', label: 'Treino', icon: <Dumbbell size={18} /> },
  ];

  const periods = [
    { id: 'manha', label: 'Manhã', icon: <Sunrise size={16}/> },
    { id: 'tarde', label: 'Tarde', icon: <Sun size={16}/> },
    { id: 'noite', label: 'Noite', icon: <Moon size={16}/> },
  ];

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0284c7]/80 backdrop-blur-sm animate-fade-in p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-2xl w-full max-w-lg relative animate-bounce-subtle border-4 border-[#0084d1] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-[#0084d1] transition-colors bg-slate-100 rounded-full p-2 hover:bg-sky-50"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#0084d1]">Agende sua Visita</h3>
          <p className="text-slate-500 text-xs md:text-sm mt-1">Personalize sua experiência em poucos cliques.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">O que você quer praticar?</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {modalities.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedModality(m.id)}
                  className={`flex flex-col items-center justify-center p-2 md:p-3 rounded-xl border-2 transition-all ${
                    selectedModality === m.id 
                    ? 'border-[#0084d1] bg-sky-50 text-[#0084d1] ring-2 ring-sky-200 ring-offset-1' 
                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-sky-200 hover:bg-white'
                  }`}
                >
                  <div className={`mb-1 ${selectedModality === m.id ? 'text-[#0084d1]' : 'text-slate-400'}`}>{m.icon}</div>
                  <span className="text-xs font-bold">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Melhor horário?</label>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {periods.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPeriod(p.id)}
                  className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 md:p-3 rounded-xl border transition-all justify-center ${
                    selectedPeriod === p.id 
                    ? 'border-[#0084d1] bg-sky-50 text-[#0084d1] font-bold' 
                    : 'border-slate-200 text-slate-600 hover:border-sky-300'
                  }`}
                >
                  {p.icon}
                  <div className="text-center md:text-left">
                    <span className="block text-xs font-bold">{p.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Para quando?</label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="date" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0084d1] text-sm text-slate-600 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">Seu Nome</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0084d1] text-sm" placeholder="Nome completo" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase">WhatsApp</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0084d1] text-sm" placeholder="(DD) 99999-9999" />
              </div>
            </div>
          </div>

          <div className="bg-sky-50 p-3 md:p-4 rounded-xl flex items-center gap-3 border border-sky-100">
            <div className="bg-white p-2 rounded-full shadow-sm text-[#0084d1] shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs text-sky-900 leading-tight">
                <span className="font-bold">Lembrete:</span> Avisaremos no WhatsApp <span className="font-bold underline decoration-[#0084d1]">5 min antes</span>.
              </p>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading || !selectedModality}
            className={`w-full font-bold py-3 md:py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2 text-sm md:text-base ${
              loading || !selectedModality 
              ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
              : 'bg-[#0084d1] hover:bg-sky-600 text-white animate-pulse-slow shadow-sky-300'
            }`}
          >
            {loading ? "Confirmando..." : "Confirmar Agendamento"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
};

// 3. Modal de Sucesso
const SuccessModal = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0284c7]/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl text-center max-w-sm w-full transform transition-all animate-bounce-subtle border-4 border-green-100 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24} /></button>
        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
          <CheckCircle size={40} className="md:w-12 md:h-12 text-green-500 animate-check-stroke" strokeWidth={3} />
        </div>
        <h3 className="text-2xl font-bold text-[#0084d1] mb-2">Tudo Certo!</h3>
        <p className="text-slate-500 mb-6 text-sm md:text-base">Recebemos sua solicitação. Voltando para o site em instantes...</p>
        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 animate-progress-bar"></div>
        </div>
        <button onClick={onClose} className="mt-6 text-sm text-slate-400 hover:text-[#0084d1] underline">Voltar agora</button>
      </div>
    </div>
  );
};

// 4. Slider de Comparação
const ComparisonSlider = ({ onInteract }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, position)));
    }
  };

  const handleMouseDown = () => { setIsDragging(true); onInteract?.(); };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => { if (isDragging) handleMove(e.clientX); };
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [isDragging]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/20 cursor-col-resize group select-none border-2 md:border-4 border-white"
         ref={containerRef} onTouchMove={handleTouchMove}>
      <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" alt="Bem Estar" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#0084d1]/90 backdrop-blur text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">DEPOIS: Equilíbrio</div>
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img 
          src="https://images.unsplash.com/photo-1513253822776-384b4502712d?auto=format&fit=crop&q=80&w=1000" 
          alt="Tensão" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 sepia-[.3] hue-rotate-180" 
        />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-800/80 backdrop-blur text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">ANTES: Tensão</div>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-[#0084d1] hover:scale-110 transition-transform" onMouseDown={handleMouseDown}>
          <Activity size={20} className="md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};

// 5. Card Tilt
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.02)`;
  };
  const handleMouseLeave = () => { if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)'; };
  return <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>;
};

// --- APP PRINCIPAL ---

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [modalState, setModalState] = useState('closed'); 
  const [preSelectedModality, setPreSelectedModality] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const showInfo = (msg) => setToastMessage(msg);
  
  const openForm = (modality = "") => {
    setPreSelectedModality(modality);
    setModalState('form');
    setIsMenuOpen(false);
  };
  
  const handleFormSuccess = () => setModalState('success');
  const closeModal = () => {
    setModalState('closed');
    setPreSelectedModality("");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Clínica Espaço Saúde',
          text: 'Conheça a melhor clínica de saúde e bem-estar da região! Agende sua aula experimental.',
          url: window.location.href,
        });
        showInfo("Link compartilhado com sucesso!");
      } catch (err) {
        // Se cancelar ou erro
      }
    } else {
      window.open(`https://wa.me/?text=Olha%20que%20incr%C3%ADvel%20a%20Cl%C3%ADnica%20Espa%C3%A7o%20Sa%C3%BAde:%20${window.location.href}`, '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      document.documentElement.style.setProperty('--scroll', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      id: 0, 
      key: 'natacao',
      title: "Natação", 
      icon: <Waves />, 
      text: "Técnica e respiração.", 
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1000", 
      details: "Metodologia exclusiva para confiança na água." 
    },
    { id: 1, key: 'pilates', title: "Pilates", icon: <UserCheck />, text: "Controle e postura.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800", details: "Aparelhos Cadillac e Reformer de última geração." },
    { id: 2, key: 'hidro', title: "Hidro", icon: <Activity />, text: "Movimento sem dor.", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=800", details: "Ideal para reabilitação e terceira idade." },
    { id: 3, key: 'musculacao', title: "Treino", icon: <Dumbbell />, text: "Força e resistência.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800", details: "Área de musculação completa e climatizada." },
  ];

  return (
    <div className="font-sans text-[#0c4a6e] bg-sky-50 antialiased overflow-x-hidden selection:bg-[#0084d1] selection:text-white pb-20 md:pb-0">
      
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
      
      {modalState === 'form' && <SchedulingModal onClose={closeModal} onSuccess={handleFormSuccess} initialModality={preSelectedModality} />}
      {modalState === 'success' && <SuccessModal onClose={closeModal} />}

      {/* Header - Totalmente Responsivo & Centralizado */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center pt-2 px-2 md:pt-6 md:px-4`}>
        <div className={`bg-white/95 md:bg-white/90 backdrop-blur-xl border border-sky-100 shadow-xl rounded-full px-4 py-2 md:px-2 flex items-center transition-all duration-500 w-full md:w-full max-w-5xl ${scrolled ? 'shadow-2xl' : ''} relative justify-between`}>
          
          {/* Logo Centralizada no Mobile (Absolute) / Esquerda no Desktop (Static) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:flex md:items-center cursor-pointer z-10" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" 
                alt="Logo Espaço Saúde"
                className="h-8 md:h-10 w-auto object-contain"
              />
              <span className="font-bold text-base md:text-xl tracking-tight text-[#0084d1] whitespace-nowrap">
                ESPAÇO SAÚDE
              </span>
            </div>
          </div>

          {/* Botões e Menu */}
          <div className="flex items-center gap-2 ml-auto z-20">
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center bg-sky-50 rounded-full p-1 mr-2">
              <a href="#experience" className="px-5 py-2 rounded-full text-sm font-medium text-[#0084d1] hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all">Experiência</a>
              <a href="#testimonials" className="px-5 py-2 rounded-full text-sm font-medium text-[#0084d1] hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all">Alunos</a>
              <button onClick={handleShare} className="px-4 py-2 rounded-full text-sm font-medium text-[#0084d1] hover:bg-white hover:text-sky-600 hover:shadow-sm transition-all flex items-center gap-1">
                <Share2 size={16} /> <span className="hidden lg:inline">Compartilhar</span>
              </button>
            </div>
            
            {/* CTA Principal (Apenas Desktop - Mobile tem o flutuante) */}
            <button onClick={() => openForm()} className="hidden md:flex bg-[#0084d1] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:bg-[#0284c7] hover:scale-105 transition-all items-center gap-2">
              Agendar <ArrowRight size={14}/>
            </button>

            {/* Menu Mobile Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 text-[#0084d1] bg-sky-50 rounded-full hover:bg-sky-100 transition-colors shadow-sm"
            >
              {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-fade-in flex flex-col items-center text-center">
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-lg font-bold text-[#0084d1] border-b border-sky-100">Experiência</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-lg font-bold text-[#0084d1] border-b border-sky-100">Modalidades</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-lg font-bold text-[#0084d1] border-b border-sky-100">Depoimentos</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-lg font-bold text-[#0084d1] border-b border-sky-100">Profissionais</a>
          <button onClick={() => { handleShare(); setIsMenuOpen(false); }} className="w-full py-4 text-lg font-medium text-[#0084d1] flex items-center justify-center gap-2 mt-2">
            <Share2 size={20} /> Compartilhar App
          </button>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#082f49] pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom mix-blend-overlay" alt="Background Studio" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#082f49] via-[#0c4a6e]/90 to-[#0284c7]/40"></div>
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sky-200 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0084d1] animate-pulse"></span> Conceito Wellness 2026
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight drop-shadow-lg">
              Não é só exercício.<br/> É o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0084d1] to-cyan-300">santuário.</span>
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8 md:mb-10 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              Desconecte-se do ruído. Reconecte-se com o poder do seu corpo em um ambiente projetado para performance e paz mental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => openForm()} className="bg-[#0084d1] hover:bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto">
                Iniciar Transformação <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 backdrop-blur transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                <Play size={18} fill="currentColor" /> Ver o Espaço
              </button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 hidden md:block">
             <TiltCard className="mx-auto w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl text-white">
                <div className="flex justify-between items-start mb-8">
                  <div><p className="text-sm text-sky-200">Alunos Ativos</p><p className="text-3xl font-bold">1.240+</p></div>
                  <div className="bg-emerald-500 p-2 rounded-full shadow-lg shadow-emerald-500/30"><Activity size={24} /></div>
                </div>
                <div className="h-2 bg-[#0c4a6e]/50 rounded-full overflow-hidden"><div className="h-full bg-[#0084d1] w-[85%] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div></div>
                <p className="text-xs text-right mt-2 text-sky-300">85% Meta atingida</p>
             </TiltCard>
          </div>
        </div>
      </section>

      {/* Experience & Slider */}
      <section id="experience" className="py-16 md:py-24 bg-sky-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e] mb-4">Veja a diferença. Sinta a mudança.</h2>
             <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">Nosso método não foca apenas na estética, mas na funcionalidade.</p>
          </div>
          <ComparisonSlider onInteract={() => showInfo("Arraste para comparar!")} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
            {[
              { 
                title: "Diagnóstico", 
                desc: "Avaliamos sua biomecânica antes de qualquer exercício.",
                icon: <ClipboardList size={24} /> 
              },
              { 
                title: "Personalização", 
                desc: "Seu treino é adaptado às suas dores e objetivos.",
                icon: <Sliders size={24} />
              },
              { 
                title: "Evolução", 
                desc: "Monitoramento constante para garantir progressão segura.",
                icon: <TrendingUp size={24} />
              }
            ].map((item, i) => (
              <div key={i} className="text-center group hover:-translate-y-2 transition-transform duration-300 cursor-pointer p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#0084d1] mb-4 md:mb-6 group-hover:bg-[#0084d1] group-hover:text-white transition-all border border-sky-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg md:text-xl text-[#0c4a6e] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed px-2 md:px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
           <div className="relative z-10 text-center lg:text-left">
             <span className="text-[#0084d1] font-bold tracking-widest text-xs md:text-sm uppercase">Nossas Modalidades</span>
             <h2 className="text-3xl md:text-5xl font-bold text-[#0c4a6e] mt-4 mb-8">Escolha como quer <br className="hidden md:block"/> mover o mundo.</h2>
             <div className="space-y-3 md:space-y-4">
               {services.map((s) => (
                 <div key={s.id} onMouseEnter={() => setActiveService(s.id)} className={`p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 group text-left ${activeService === s.id ? 'bg-[#0c4a6e] text-white border-[#0c4a6e] shadow-xl shadow-sky-900/20 scale-102 md:scale-105' : 'bg-white text-slate-500 border-sky-100 hover:border-sky-300'}`}>
                   <div className={`p-2 md:p-3 rounded-xl transition-colors shrink-0 ${activeService === s.id ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0084d1]'}`}>{s.icon}</div>
                   <div className="flex-1">
                     <h3 className={`font-bold text-base md:text-lg ${activeService === s.id ? 'text-white' : 'text-[#0c4a6e]'}`}>{s.title}</h3>
                     <p className={`text-xs md:text-sm ${activeService === s.id ? 'text-sky-200' : 'text-slate-400'}`}>{s.text}</p>
                   </div>
                   <ChevronRight className={`transition-transform ${activeService === s.id ? 'translate-x-2 text-[#0084d1]' : 'opacity-0'}`} />
                 </div>
               ))}
             </div>
           </div>
           <div className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-4 border-white mt-8 lg:mt-0">
              {services.map((s) => (
                <div key={s.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === s.id ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/90 to-transparent flex items-end p-6 md:p-10">
                    <div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{s.title}</h3>
                      <p className="text-sky-100 mb-4 text-sm md:text-base">{s.details}</p>
                      <button 
                        onClick={() => openForm(s.key)} 
                        className="mt-2 text-white border-b border-[#0084d1] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#0084d1] transition-colors"
                      >
                        Agendar Aula Teste
                      </button>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="testimonials" className="py-16 md:py-24 bg-[#082f49] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0084d1]/10 rounded-l-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem vive a transformação</h2>
            <p className="text-sky-200 text-sm md:text-base">Histórias reais de alunos que encontraram seu equilíbrio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Mariana Souza", role: "Aluna de Natação", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", text: "Perdi o medo da água em 3 semanas. A paciência dos instrutores é incrível!" },
              { name: "Ricardo Alves", role: "Aluno de Musculação", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", text: "A estrutura é impecável. Nunca vi uma academia tão limpa e organizada." },
              { name: "Carla Dias", role: "Aluna de Pilates", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", text: "Minhas dores nas costas sumiram. O Dr. Patrocínio fez um diagnóstico perfeito." }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors">
                 <div className="flex items-center gap-4 mb-4 md:mb-6">
                   <img src={t.img} alt={t.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#0084d1]" />
                   <div>
                     <p className="font-bold text-base md:text-lg">{t.name}</p>
                     <p className="text-xs md:text-sm text-[#0084d1]">{t.role}</p>
                   </div>
                 </div>
                 <p className="text-sky-100 italic text-sm md:text-base">"{t.text}"</p>
                 <div className="flex text-yellow-400 mt-4 gap-1">
                   {[...Array(5)].map((_, idx) => <CheckCircle key={idx} size={14} fill="currentColor" className="text-yellow-400" />)}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#0c4a6e] w-full md:w-auto">Mentes brilhantes.<br/>Corpos saudáveis.</h2>
            <button className="text-[#0084d1] font-bold hover:underline flex items-center gap-1 mx-auto md:mx-0">Ver todos <ArrowRight size={16}/></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Patrocínio", role: "Fisioterapeuta", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
              { name: "Ana Clara", role: "Coord. Natação", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Carlos Mendes", role: "Personal Trainer", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400" },
              { name: "Júlia Costa", role: "Pilates Master", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
            ].map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96 shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl">{member.name}</h3>
                  <p className="text-sky-300 text-sm font-medium mb-3">{member.role}</p>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <button className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-[#0084d1] transition-colors"><Linkedin size={16}/></button>
                    <button className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-[#0084d1] transition-colors"><Instagram size={16}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#082f49] text-white pt-16 md:pt-24 pb-8 md:pb-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0084d1]/30 via-[#082f49] to-[#082f49] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20">
            <div className="text-center lg:text-left">
              <div className="mb-6 flex items-center justify-center lg:justify-start gap-2">
                <img 
                  src="https://raw.githubusercontent.com/gilneilaurindo/espacosaude.clinicasm/main/Captura%20de%20tela%202026-02-11%20111104.png" 
                  alt="Logo Espaço Saúde"
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
                />
                <span className="font-bold text-xl tracking-tight text-white/90">ESPAÇO SAÚDE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Pronto para viver <br className="hidden md:block"/>o seu melhor?</h2>
              <p className="text-sky-100 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">Agende uma consultoria gratuita e descubra qual modalidade vai transformar sua rotina.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => openForm()} className="bg-white text-[#0c4a6e] px-8 py-4 rounded-full font-bold hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Phone size={20} className="text-[#0084d1]"/> Falar no WhatsApp
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <MapPin size={20} /> Ver Localização
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm text-sky-200 text-center md:text-left">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">A Clínica</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Profissionais</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Planos e Preços</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Horários</h4>
                <ul className="space-y-3">
                  <li className="flex flex-col md:flex-row justify-between"><span>Seg - Sex</span> <span className="text-white">06:00 - 22:00</span></li>
                  <li className="flex flex-col md:flex-row justify-between"><span>Sábado</span> <span className="text-white">08:00 - 14:00</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sky-300 gap-4 text-center">
            <p>© 2026 Clínica Espaço Saúde. Design Experience.</p>
            <div className="flex gap-6 justify-center"><a href="#" className="hover:text-white">Termos</a><a href="#" className="hover:text-white">Privacidade</a></div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE (MOBILE ONLY) - "Agendar" */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden animate-fade-in-up w-full px-4 flex justify-center pointer-events-none">
        <button 
          onClick={openForm} 
          className="pointer-events-auto bg-[#0084d1] text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform border-2 border-white/20"
        >
          <Calendar size={20} /> Agendar Agora
        </button>
      </div>

      <style>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 20s linear infinite alternate; }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-bounce-subtle { animation: bounceSubtle 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes bounceSubtle { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-check-stroke { stroke-dasharray: 100; stroke-dashoffset: 100; animation: dash 1s ease-in-out forwards 0.3s; }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        .animate-progress-bar { animation: progress 3.5s linear forwards; }
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-ping-slow { animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-float-gentle { animation: float 3s ease-in-out infinite; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .animate-progress-fill { animation: fillWidth 2s ease-out forwards; }
        @keyframes fillWidth { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
};

export default App;
