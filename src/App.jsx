import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { motion, AnimatePresence } from 'framer-motion'

import cameraTettoLegno from './assets/foto/camera-tetto-legno.webp'
import cameraDoppiaArancione from './assets/foto/camera-doppia-arancione.webp'
import cameraDoppiaVista from './assets/foto/camera-doppia-vista.webp'
import cameraIngresso from './assets/foto/camera-ingresso.webp'
import cameraLettiSingoli from './assets/foto/camera-letti-singoli-gialla.webp'
import bagnoPrivato from './assets/foto/bagno-privato.webp'

import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubRef = useRef(null)
  const aboutRef = useRef(null)
  const roomsRef = useRef(null)
  const restaurantRef = useRef(null)
  const servicesRef = useRef(null)
  const locationRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    const timer = setTimeout(() => setLoading(false), 2000)

    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (loading) return

    const ctx = gsap.context(() => {
      // Hero title animation
      if (heroTitleRef.current) {
        const heroSplit = new SplitType(heroTitleRef.current, { types: 'chars' })
        gsap.from(heroSplit.chars, {
          y: 150,
          rotateX: -90,
          opacity: 0,
          duration: 1.4,
          ease: 'power4.out',
          stagger: { amount: 0.8, from: 'random' },
          delay: 0.3,
        })
      }

      // Hero subtitle
      if (heroSubRef.current) {
        gsap.from(heroSubRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 1.2,
        })
      }

      // Hero image parallax
      gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // About section
      const aboutTitle = aboutRef.current?.querySelector('.about-title')
      if (aboutTitle) {
        const aboutSplit = new SplitType(aboutTitle, { types: 'lines, words' })
        gsap.from(aboutSplit.words, {
          y: 100,
          opacity: 0,
          rotateZ: 3,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      gsap.from('.about-text', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 60%',
        },
      })

      gsap.from('.about-img', {
        scale: 1.3,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 50%',
        },
      })

      // Rooms section
      const roomsTitle = roomsRef.current?.querySelector('.rooms-title')
      if (roomsTitle) {
        gsap.from(roomsTitle, {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: roomsRef.current,
            start: 'top 70%',
          },
        })
      }

      gsap.from('.room-card', {
        y: 150,
        opacity: 0,
        rotation: gsap.utils.wrap([-5, 3, -3, 5, -2, 4]),
        duration: 1,
        ease: 'power3.out',
        stagger: {
          amount: 0.8,
          from: 'edges',
        },
        scrollTrigger: {
          trigger: '.rooms-grid',
          start: 'top 75%',
        },
      })

      // Restaurant section
      gsap.from('.restaurant-title', {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: restaurantRef.current,
          start: 'top 60%',
        },
      })

      gsap.from('.menu-item', {
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.menu-list',
          start: 'top 70%',
        },
      })

      // Services - horizontal scroll effect
      const servicesCards = gsap.utils.toArray('.service-card')
      servicesCards.forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -50 : 50,
          y: 100,
          opacity: 0,
          rotation: i % 2 === 0 ? -8 : 8,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })

      // Location section
      gsap.from('.location-map', {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: locationRef.current,
          start: 'top 60%',
        },
      })

      gsap.from('.distance-item', {
        x: 100,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.distances-list',
          start: 'top 70%',
        },
      })

      // Contact section
      gsap.from('.contact-card', {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
        },
      })

      // Floating elements
      gsap.to('.float-element', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      })

    }, containerRef)

    return () => ctx.revert()
  }, [loading])

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render policy pages
  if (currentPage === 'privacy') {
    return (
      <>
        <PrivacyPolicy
          onNavigateHome={() => navigateToPage('home')}
          onNavigateCookie={() => navigateToPage('cookie')}
        />
        <CookieBanner
          onNavigatePrivacy={() => navigateToPage('privacy')}
          onNavigateCookie={() => navigateToPage('cookie')}
        />
      </>
    )
  }

  if (currentPage === 'cookie') {
    return (
      <>
        <CookiePolicy
          onNavigateHome={() => navigateToPage('home')}
          onNavigatePrivacy={() => navigateToPage('privacy')}
        />
        <CookieBanner
          onNavigatePrivacy={() => navigateToPage('privacy')}
          onNavigateCookie={() => navigateToPage('cookie')}
        />
      </>
    )
  }

  return (
    <div ref={containerRef} className="grain">
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-charcoal)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-fluid-3xl italic" style={{ color: 'var(--color-cream)' }}>
                La Fucina
              </h1>
              <div className="mt-8 w-48 h-[1px] mx-auto overflow-hidden" style={{ backgroundColor: 'var(--color-stone)' }}>
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full"
                  style={{ backgroundColor: 'var(--color-terracotta)' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-header mix-blend-difference">
        <div className="flex justify-between items-center px-6 md:px-12 py-6">
          <a href="#" className="font-display text-xl md:text-2xl italic text-white">
            La Fucina
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 group"
          >
            <span className={`block w-8 h-[2px] bg-white transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-500 ml-auto ${menuOpen ? 'opacity-0 translate-x-4' : ''}`} />
            <span className={`block w-8 h-[2px] bg-white transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-charcoal)' }}
          >
            <div className="text-center">
              {[
                { label: 'Home', ref: heroRef },
                { label: 'Chi Siamo', ref: aboutRef },
                { label: 'Camere', ref: roomsRef },
                { label: 'Ristorante', ref: restaurantRef },
                { label: 'Servizi', ref: servicesRef },
                { label: 'Posizione', ref: locationRef },
                { label: 'Contatti', ref: contactRef },
              ].map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(item.ref)}
                  className="block w-full py-4 font-display text-fluid-2xl italic text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cameraTettoLegno}
            alt="B&B La Fucina - Camera con soffitto in legno nelle Alpi"
            title="Camera con tetto in legno - B&B La Fucina"
            loading="eager"
            width={1920}
            height={1280}
            className="hero-img w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-none">
            <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-4 md:mb-8" style={{ color: 'var(--color-stone)' }}>
              Pontagna — Temù, Alta Valle Camonica
            </p>
            <h1
              ref={heroTitleRef}
              className="font-display text-fluid-hero leading-[0.85] tracking-[-0.02em]"
              style={{ color: 'var(--color-cream)' }}
            >
              La Fucina
            </h1>
            <div ref={heroSubRef} className="mt-8 md:mt-12 ml-0 md:ml-[15vw]">
              <p className="font-accent text-fluid-xl italic max-w-md" style={{ color: 'var(--color-cream)', opacity: 0.8 }}>
                Ospitalità autentica nel cuore delle Alpi,<br />
                dove la montagna incontra la tradizione
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <button onClick={() => scrollTo(roomsRef)} className="btn-primary">
                  <span>Scopri</span>
                </button>
                <button onClick={() => scrollTo(contactRef)} className="btn-outline text-white border-white hover:bg-white hover:text-[var(--color-charcoal)]">
                  Prenota
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/50 [writing-mode:vertical-lr]">Scroll</span>
            <div className="w-[1px] h-16 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-full h-1/2"
                style={{ backgroundColor: 'var(--color-terracotta)' }}
              />
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="float-element absolute top-1/4 right-8 md:right-20 hidden md:block">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-center p-4" style={{ backgroundColor: 'var(--color-terracotta)' }}>
            <span className="font-display text-sm text-white leading-tight">
              Est.<br />2020
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <text x="50%" y="50%" textAnchor="middle" className="font-display text-[200px] fill-current">F</text>
          </svg>
        </div>

        <div className="relative px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 md:col-start-1">
              <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-terracotta)' }}>
                Benvenuti
              </p>
              <h2 className="about-title font-display text-fluid-3xl leading-[1.1] tracking-[-0.02em]" style={{ color: 'var(--color-charcoal)' }}>
                La vostra casa<br />
                <span className="italic">in montagna</span>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12 md:mt-32">
              <div className="about-text space-y-6 font-body text-fluid-base leading-relaxed" style={{ color: 'var(--color-charcoal)', opacity: 0.7 }}>
                <p>
                  <strong style={{ color: 'var(--color-rust)' }}>La Fucina</strong> è un B&B a conduzione familiare
                  nella tranquilla frazione di Pontagna. Struttura nuova, camere accoglienti,
                  comfort moderni.
                </p>
                <p>
                  Al piano terra, il nostro ristorante e pizzeria vi attende con piatti tipici
                  della tradizione camuna e pizze caratteristiche, in un ambiente caldo
                  con vista sul fiume.
                </p>
              </div>

              <div className="about-text mt-12 flex gap-8">
                <div>
                  <span className="font-display text-fluid-2xl" style={{ color: 'var(--color-terracotta)' }}>4.93</span>
                  <p className="font-body text-fluid-xs mt-1" style={{ color: 'var(--color-stone)' }}>Airbnb</p>
                </div>
                <div>
                  <span className="font-display text-fluid-2xl" style={{ color: 'var(--color-terracotta)' }}>327</span>
                  <p className="font-body text-fluid-xs mt-1" style={{ color: 'var(--color-stone)' }}>Recensioni</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="mt-24 md:mt-32 grid grid-cols-12 gap-4 items-end">
            <div className="col-span-7 md:col-span-5 md:col-start-2">
              <div className="about-img overflow-hidden rounded-lg">
                <img
                  src={cameraDoppiaArancione}
                  alt="Camera doppia accogliente del B&B La Fucina"
                  title="Camera doppia con arredamento caldo - B&B La Fucina"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-[40vh] md:h-[60vh] object-cover"
                />
              </div>
            </div>
            <div className="col-span-5 md:col-span-3 md:col-start-8 -mb-16 md:-mb-32">
              <div className="about-img overflow-hidden rounded-lg">
                <img
                  src={bagnoPrivato}
                  alt="Bagno privato moderno del B&B La Fucina"
                  title="Bagno privato con finiture di qualità"
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full h-[30vh] md:h-[45vh] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section ref={roomsRef} className="relative py-32 md:py-48" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
            <div>
              <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-terracotta)' }}>
                Alloggi
              </p>
              <h2 className="rooms-title font-display text-fluid-3xl leading-[1] italic" style={{ color: 'var(--color-cream)' }}>
                Le camere
              </h2>
            </div>
            <p className="font-accent text-fluid-lg italic mt-6 md:mt-0 max-w-sm" style={{ color: 'var(--color-stone)' }}>
              Comfort e calore alpino, con tutti i servizi per un soggiorno indimenticabile
            </p>
          </div>

          <div className="rooms-grid grid grid-cols-12 gap-4 md:gap-6">
            {[
              { img: cameraTettoLegno, title: 'Camera Legno', alt: 'Camera con soffitto in legno - B&B La Fucina Temù', span: 'col-span-12 md:col-span-7' },
              { img: cameraLettiSingoli, title: 'Camera Twin', alt: 'Camera con letti singoli - B&B La Fucina Temù', span: 'col-span-6 md:col-span-5 md:-mt-24' },
              { img: cameraDoppiaVista, title: 'Camera Vista', alt: 'Camera doppia con vista montagna - B&B La Fucina', span: 'col-span-6 md:col-span-4 md:col-start-2 md:mt-12' },
              { img: cameraIngresso, title: 'Camera Classic', alt: 'Camera classica accogliente - B&B La Fucina', span: 'col-span-12 md:col-span-5 md:-mt-16' },
            ].map((room, i) => (
              <div key={i} className={`room-card ${room.span} group`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={room.img}
                    alt={room.alt}
                    title={room.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-[35vh] md:h-[50vh] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="font-display text-fluid-lg italic text-white">{room.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Room features */}
          <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: '◯', label: 'Bagno Privato' },
              { icon: '◯', label: 'Wi-Fi' },
              { icon: '◯', label: 'Balcone' },
              { icon: '◯', label: 'TV' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl mb-3" style={{ color: 'var(--color-terracotta)' }}>{feature.icon}</span>
                <span className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-fluid-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-stone)' }}>A partire da</p>
            <p className="font-display text-fluid-3xl mt-2" style={{ color: 'var(--color-cream)' }}>
              €85<span className="text-fluid-lg" style={{ color: 'var(--color-stone)' }}>/notte</span>
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section ref={restaurantRef} className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: 'var(--color-terracotta)' }}>
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-10" style={{ backgroundColor: 'var(--color-charcoal)' }} />

        <div className="relative px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-cream)', opacity: 0.7 }}>
                Gastronomia
              </p>
              <h2 className="restaurant-title font-display text-fluid-4xl leading-[0.9] tracking-[-0.02em]" style={{ color: 'var(--color-cream)' }}>
                Ristorante<br />
                <span className="italic">&</span> Pizzeria
              </h2>

              <div className="mt-12 space-y-4 font-body text-fluid-base leading-relaxed" style={{ color: 'var(--color-cream)', opacity: 0.85 }}>
                <p>
                  Interni in legno, ampie vetrate, il fiume che scorre di fianco.
                  Le nostre pizze sottili e i piatti tipici locali vi aspettano.
                </p>
              </div>

              <div className="mt-12 flex gap-8">
                <div>
                  <p className="font-body text-fluid-xs uppercase tracking-wider" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Orari</p>
                  <p className="font-display text-fluid-lg mt-1" style={{ color: 'var(--color-cream)' }}>08:00 — 00:00</p>
                </div>
                <div>
                  <p className="font-body text-fluid-xs uppercase tracking-wider" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Servizio</p>
                  <p className="font-display text-fluid-lg mt-1" style={{ color: 'var(--color-cream)' }}>Tutti i giorni</p>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8 mt-16 md:mt-0">
              <div className="menu-list space-y-0">
                {[
                  { name: 'Stinco al forno con polenta', price: '€18' },
                  { name: 'Tagliatelle ai funghi porcini', price: '€14' },
                  { name: 'Cervo con polenta', price: '€20' },
                  { name: 'Pizza La Fucina', price: '€12' },
                  { name: 'Casoncelli alla bergamasca', price: '€13' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="menu-item flex justify-between items-center py-6 border-b"
                    style={{ borderColor: 'rgba(253, 251, 247, 0.2)' }}
                  >
                    <span className="font-accent text-fluid-lg italic" style={{ color: 'var(--color-cream)' }}>{item.name}</span>
                    <span className="font-body text-fluid-sm" style={{ color: 'var(--color-cream)', opacity: 0.7 }}>{item.price}</span>
                  </div>
                ))}
              </div>

              <a
                href="tel:+39036494359"
                className="inline-block mt-12 btn-outline text-white border-white hover:bg-white hover:text-[var(--color-terracotta)]"
              >
                Prenota un tavolo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-32 md:py-48" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
            <h2 className="font-display text-fluid-3xl leading-[1] tracking-[-0.02em]" style={{ color: 'var(--color-charcoal)' }}>
              I nostri<br /><span className="italic">servizi</span>
            </h2>
            <p className="font-accent text-fluid-lg italic md:ml-auto max-w-xs" style={{ color: 'var(--color-stone)' }}>
              Tutto ciò che serve per una vacanza perfetta in montagna
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {[
              { icon: '☀', title: 'Colazione', desc: 'Colazione italiana inclusa ogni mattina', span: 'col-span-6 md:col-span-4' },
              { icon: '◎', title: 'Parcheggio', desc: 'Parcheggio privato gratuito', span: 'col-span-6 md:col-span-3 md:mt-16' },
              { icon: '❄', title: 'Deposito Sci', desc: 'Locale dedicato per attrezzatura', span: 'col-span-6 md:col-span-4 md:col-start-9 md:-mt-8' },
              { icon: '◉', title: 'Noleggio Bici', desc: 'Biciclette per la pista ciclabile', span: 'col-span-6 md:col-span-3 md:col-start-2 md:mt-8' },
              { icon: '◈', title: 'Wi-Fi', desc: 'Connessione veloce ovunque', span: 'col-span-6 md:col-span-4 md:mt-12' },
              { icon: '◇', title: 'Pranzo al Sacco', desc: 'Su richiesta per le escursioni', span: 'col-span-6 md:col-span-3 md:col-start-10' },
            ].map((service, i) => (
              <div
                key={i}
                className={`service-card ${service.span} p-8 md:p-10 rounded-lg transition-all duration-500 hover:-translate-y-2`}
                style={{ backgroundColor: 'var(--color-warm-white)', boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}
              >
                <span className="block text-3xl mb-6" style={{ color: 'var(--color-terracotta)' }}>{service.icon}</span>
                <h3 className="font-display text-fluid-lg mb-2" style={{ color: 'var(--color-charcoal)' }}>{service.title}</h3>
                <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Activities */}
          <div className="mt-32 py-16 border-t border-b" style={{ borderColor: 'var(--color-stone)', opacity: 0.3 }}>
            <p className="font-body text-fluid-xs tracking-[0.3em] uppercase text-center mb-12" style={{ color: 'var(--color-terracotta)' }}>
              Attività nelle vicinanze
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { label: 'Sci alpino', distance: '400m' },
                { label: 'Ciclismo', distance: 'Adiacente' },
                { label: 'Escursioni', distance: 'Vicino' },
                { label: 'Pesca', distance: 'Fiume' },
              ].map((activity, i) => (
                <div key={i} className="text-center">
                  <span className="font-display text-fluid-xl italic" style={{ color: 'var(--color-charcoal)' }}>{activity.label}</span>
                  <span className="block font-body text-fluid-xs mt-1" style={{ color: 'var(--color-stone)' }}>{activity.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="relative py-32 md:py-48" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-terracotta)' }}>
                Location
              </p>
              <h2 className="font-display text-fluid-3xl leading-[1.1]" style={{ color: 'var(--color-cream)' }}>
                Dove<br /><span className="italic">siamo</span>
              </h2>

              <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <p className="font-accent text-fluid-lg italic leading-relaxed" style={{ color: 'var(--color-cream)' }}>
                  Via Saletti 4<br />
                  25050 Temù (BS)<br />
                  Frazione Pontagna
                </p>
              </div>

              <div className="distances-list mt-12 space-y-4">
                {[
                  { place: 'Piste da sci', distance: '400 m' },
                  { place: 'Ponte di Legno', distance: '2.5 km' },
                  { place: 'Passo Tonale', distance: '15 km' },
                  { place: 'Aeroporto BGY', distance: '89 km' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="distance-item flex justify-between items-center py-3 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <span className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>{item.place}</span>
                    <span className="font-display text-fluid-base" style={{ color: 'var(--color-cream)' }}>{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
              <div className="location-map overflow-hidden rounded-lg h-[50vh] md:h-[70vh]" style={{ clipPath: 'inset(0)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.8904!2d10.4827!3d46.2544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47832!2sVia+Saletti+4+25050+Tem%C3%B9!5e0!3m2!1sit!2sit!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mappa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="marquee">
          <div className="marquee__content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-accent text-fluid-2xl italic mx-8" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
                "Ospitalità eccellente" — "Camere pulite" — "Posizione perfetta" — "Ci torneremo" —
              </span>
            ))}
          </div>
          <div className="marquee__content" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-accent text-fluid-2xl italic mx-8" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
                "Ospitalità eccellente" — "Camere pulite" — "Posizione perfetta" — "Ci torneremo" —
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-32 md:py-48" style={{ backgroundColor: 'var(--color-rust)' }}>
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            {/* Left side - Contact info */}
            <div className="col-span-12 md:col-span-5">
              <p className="font-body text-fluid-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-cream)', opacity: 0.7 }}>
                Prenotazioni
              </p>
              <h2 className="font-display text-fluid-3xl leading-[0.95] mb-12" style={{ color: 'var(--color-cream)' }}>
                Contattaci<br /><span className="italic">direttamente</span>
              </h2>

              <div className="space-y-8">
                <a href="tel:+393393562796" className="contact-card flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(253, 251, 247, 0.15)' }}>
                    <span className="text-2xl" style={{ color: 'var(--color-cream)' }}>☏</span>
                  </div>
                  <div>
                    <span className="block font-body text-fluid-xs tracking-wider uppercase mb-1" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Cellulare</span>
                    <span className="block font-display text-fluid-lg" style={{ color: 'var(--color-cream)' }}>+39 339 356 2796</span>
                  </div>
                </a>

                <a href="tel:+39036494359" className="contact-card flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(253, 251, 247, 0.15)' }}>
                    <span className="text-2xl" style={{ color: 'var(--color-cream)' }}>☎</span>
                  </div>
                  <div>
                    <span className="block font-body text-fluid-xs tracking-wider uppercase mb-1" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Telefono fisso</span>
                    <span className="block font-display text-fluid-lg" style={{ color: 'var(--color-cream)' }}>+39 0364 94359</span>
                  </div>
                </a>

                <a href="https://www.airbnb.it/rooms/52588201" target="_blank" rel="noopener noreferrer" className="contact-card flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(253, 251, 247, 0.15)' }}>
                    <span className="text-2xl" style={{ color: 'var(--color-cream)' }}>⌂</span>
                  </div>
                  <div>
                    <span className="block font-body text-fluid-xs tracking-wider uppercase mb-1" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Airbnb</span>
                    <span className="block font-display text-fluid-lg" style={{ color: 'var(--color-cream)' }}>Prenota Online</span>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(253, 251, 247, 0.2)' }}>
                <p className="font-body text-fluid-xs mb-4" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>Metodi di pagamento</p>
                <p className="font-body text-fluid-sm" style={{ color: 'var(--color-cream)', opacity: 0.8 }}>
                  Visa • Mastercard • American Express • Contanti
                </p>
              </div>
            </div>

            {/* Right side - Booking form */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
                <h3 className="font-display text-fluid-xl mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  Richiedi disponibilità
                </h3>
                <p className="font-body text-fluid-sm mb-8" style={{ color: 'var(--color-stone)' }}>
                  Compila il form e ti risponderemo entro 24 ore
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: 'var(--color-warm-white)',
                          borderColor: 'var(--color-stone)',
                          color: 'var(--color-charcoal)',
                        }}
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                        Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: 'var(--color-warm-white)',
                          borderColor: 'var(--color-stone)',
                          color: 'var(--color-charcoal)',
                        }}
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--color-warm-white)',
                        borderColor: 'var(--color-stone)',
                        color: 'var(--color-charcoal)',
                      }}
                      placeholder="email@esempio.com"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                      Telefono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--color-warm-white)',
                        borderColor: 'var(--color-stone)',
                        color: 'var(--color-charcoal)',
                      }}
                      placeholder="+39 ..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                        Check-in *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: 'var(--color-warm-white)',
                          borderColor: 'var(--color-stone)',
                          color: 'var(--color-charcoal)',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                        Check-out *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: 'var(--color-warm-white)',
                          borderColor: 'var(--color-stone)',
                          color: 'var(--color-charcoal)',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                      Numero ospiti *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--color-warm-white)',
                        borderColor: 'var(--color-stone)',
                        color: 'var(--color-charcoal)',
                      }}
                    >
                      <option value="">Seleziona...</option>
                      <option value="1">1 ospite</option>
                      <option value="2">2 ospiti</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-fluid-xs tracking-wider uppercase mb-2" style={{ color: 'var(--color-charcoal)' }}>
                      Note o richieste
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border font-body text-fluid-sm transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                      style={{
                        backgroundColor: 'var(--color-warm-white)',
                        borderColor: 'var(--color-stone)',
                        color: 'var(--color-charcoal)',
                      }}
                      placeholder="Richieste particolari, orario di arrivo previsto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                    style={{ backgroundColor: 'var(--color-rust)' }}
                  >
                    <span>Invia richiesta</span>
                  </button>

                  <p className="font-body text-center" style={{ color: 'var(--color-stone)', fontSize: '0.7rem' }}>
                    Riceverai una conferma via email con disponibilità e preventivo
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-display text-fluid-2xl italic" style={{ color: 'var(--color-cream)' }}>La Fucina</h3>
              <p className="font-body text-fluid-sm mt-4" style={{ color: 'var(--color-stone)' }}>
                B&B • Ristorante • Pizzeria
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-6">
              <p className="font-body text-fluid-xs uppercase tracking-wider mb-4" style={{ color: 'var(--color-terracotta)' }}>Indirizzo</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>
                Via Saletti 4<br />
                25050 Temù (BS)<br />
                Pontagna
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="font-body text-fluid-xs uppercase tracking-wider mb-4" style={{ color: 'var(--color-terracotta)' }}>Orari Ristorante</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>
                Tutti i giorni<br />
                08:00 — 00:00
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="font-body text-fluid-xs" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
              © 2026 B&B La Fucina — La Fucina di Sandrini Massimo
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button
                onClick={() => navigateToPage('privacy')}
                className="font-body text-fluid-xs transition-colors duration-300 hover:opacity-100"
                style={{ color: 'var(--color-stone)', opacity: 0.5 }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateToPage('cookie')}
                className="font-body text-fluid-xs transition-colors duration-300 hover:opacity-100"
                style={{ color: 'var(--color-stone)', opacity: 0.5 }}
              >
                Cookie Policy
              </button>
            </div>
            <p className="font-body text-fluid-xs mt-4 md:mt-0" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
              CIR: IT017184B45AT5NY4H
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      <CookieBanner
        onNavigatePrivacy={() => navigateToPage('privacy')}
        onNavigateCookie={() => navigateToPage('cookie')}
      />
    </div>
  )
}

export default App
