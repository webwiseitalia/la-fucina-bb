import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteData } from '../constants/siteData'

export default function CookieBanner({ onNavigatePrivacy, onNavigateCookie }) {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(siteData.cookieConsentKey)
    if (!consent) {
      // Small delay before showing banner
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'rejected')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998]"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(26, 26, 26, 0.4)',
            }}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div
              className="max-w-4xl mx-auto rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                boxShadow: '0 -4px 30px rgba(0,0,0,0.15)',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-terracotta)' }}
                >
                  <span className="text-2xl">🍪</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className="font-display text-fluid-lg mb-2"
                    style={{ color: 'var(--color-charcoal)' }}
                  >
                    Utilizziamo i cookie
                  </h3>
                  <p
                    className="font-body text-fluid-sm leading-relaxed"
                    style={{ color: 'var(--color-charcoal)', opacity: 0.7 }}
                  >
                    Questo sito utilizza solo cookie tecnici necessari al funzionamento.
                    Non utilizziamo cookie di profilazione o tracciamento.
                    Per maggiori informazioni consulta la nostra{' '}
                    <button
                      onClick={() => {
                        setShowBanner(false)
                        onNavigatePrivacy()
                      }}
                      className="underline"
                      style={{ color: 'var(--color-terracotta)' }}
                    >
                      Privacy Policy
                    </button>{' '}
                    e la{' '}
                    <button
                      onClick={() => {
                        setShowBanner(false)
                        onNavigateCookie()
                      }}
                      className="underline"
                      style={{ color: 'var(--color-terracotta)' }}
                    >
                      Cookie Policy
                    </button>
                    .
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 w-full md:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 md:flex-none px-6 py-3 rounded-lg font-body text-fluid-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-charcoal)',
                      color: 'var(--color-warm-white)',
                    }}
                  >
                    Rifiuta
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none px-6 py-3 rounded-lg font-body text-fluid-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-charcoal)',
                      color: 'var(--color-warm-white)',
                    }}
                  >
                    Accetta
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
