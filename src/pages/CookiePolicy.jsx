import { useEffect } from 'react'
import { siteData } from '../constants/siteData'

export default function CookiePolicy({ onNavigateHome, onNavigatePrivacy }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Header */}
      <header className="py-8 px-6 md:px-12" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 font-body text-fluid-xs tracking-wider uppercase mb-6 transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-stone)' }}
        >
          <span>←</span> Torna alla Home
        </button>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-terracotta)' }}>
            <span className="text-xl" style={{ color: 'var(--color-cream)' }}>🍪</span>
          </div>
          <div>
            <h1 className="font-display text-fluid-2xl" style={{ color: 'var(--color-cream)' }}>Cookie Policy</h1>
            <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>Informativa sull'utilizzo dei cookie</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--color-warm-white)', boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}>
          <p className="font-body text-fluid-sm mb-8" style={{ color: 'var(--color-stone)' }}>
            Ultimo aggiornamento: {siteData.policyLastUpdate}
          </p>

          {/* Privacy-Friendly Notice */}
          <div className="p-6 rounded-lg mb-12" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderLeft: '4px solid #22c55e' }}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-display text-fluid-lg mb-2" style={{ color: '#22c55e' }}>Sito Privacy-Friendly</p>
                <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento.
                  <strong> Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>.
                  La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>1. Cosa sono i Cookie</h2>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
              quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
              informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>2. Tipologie di Cookie</h2>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.1 Cookie Tecnici</h3>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
              questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-body text-fluid-sm font-semibold mb-2" style={{ color: 'var(--color-terracotta)' }}>Cookie tecnici utilizzati su questo sito:</p>
              <ul className="list-disc list-inside font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare la preferenza dell'interfaccia</li>
              </ul>
              <p className="font-body text-fluid-xs mt-4" style={{ color: 'var(--color-stone)' }}>
                Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
              </p>
            </div>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.2 Cookie Analitici</h3>
            <div className="p-4 rounded-lg mb-6 flex items-center gap-3" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
              <span className="text-xl">⊘</span>
              <div>
                <p className="font-body text-fluid-sm font-semibold" style={{ color: '#dc2626' }}>NON UTILIZZATI</p>
                <p className="font-body text-fluid-xs" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                </p>
              </div>
            </div>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.3 Cookie di Profilazione</h3>
            <div className="p-4 rounded-lg mb-6 flex items-center gap-3" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
              <span className="text-xl">⊘</span>
              <div>
                <p className="font-body text-fluid-sm font-semibold" style={{ color: '#dc2626' }}>NON UTILIZZATI</p>
                <p className="font-body text-fluid-xs" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                </p>
              </div>
            </div>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.4 Cookie di Terze Parti</h3>
            <div className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
              <span className="text-xl">⊘</span>
              <div>
                <p className="font-body text-fluid-sm font-semibold" style={{ color: '#dc2626' }}>NON UTILIZZATI</p>
                <p className="font-body text-fluid-xs" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                  Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>3. Cookie Utilizzati su Questo Sito</h2>
            <p className="font-body text-fluid-base mb-6" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-cream)' }}>
                    <th className="p-3 text-left font-display" style={{ color: 'var(--color-charcoal)' }}>Nome Cookie</th>
                    <th className="p-3 text-left font-display" style={{ color: 'var(--color-charcoal)' }}>Tipologia</th>
                    <th className="p-3 text-left font-display" style={{ color: 'var(--color-charcoal)' }}>Finalità</th>
                    <th className="p-3 text-left font-display" style={{ color: 'var(--color-charcoal)' }}>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-stone)' }}>
                    <td className="p-3 font-body" style={{ color: 'var(--color-charcoal)' }}>{siteData.cookieConsentKey}</td>
                    <td className="p-3 font-body"><span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--color-terracotta)', color: 'white' }}>Tecnico</span></td>
                    <td className="p-3 font-body" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                    <td className="p-3 font-body" style={{ color: 'var(--color-charcoal)' }}>1 anno</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 rounded-lg mt-6" style={{ backgroundColor: 'rgba(196, 104, 60, 0.1)', borderLeft: '4px solid var(--color-terracotta)' }}>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                <strong>Nota importante:</strong> I cookie tecnici come "{siteData.cookieConsentKey}" sono essenziali per il funzionamento del sito e non richiedono il
                consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>4. Come Gestire i Cookie</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
              del tuo browser.
            </p>
            <p className="font-body text-fluid-base font-semibold mb-3" style={{ color: 'var(--color-charcoal)' }}>
              Disabilitare i cookie tramite il browser:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base mb-6 space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>

            <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', borderLeft: '4px solid #eab308' }}>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                qualità dell'esperienza di navigazione.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>5. Link a Siti Esterni</h2>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
              il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>6. Aggiornamenti della Cookie Policy</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
              attraverso un avviso pubblicato su questa pagina.
            </p>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
              sito.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>7. Base Normativa</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Questa Cookie Policy è redatta in conformità a:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>8. Contatti</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
            </p>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-display text-fluid-lg mb-2" style={{ color: 'var(--color-charcoal)' }}>{siteData.legalName}</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                {siteData.address.full}<br />
                Tel: <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="underline" style={{ color: 'var(--color-terracotta)' }}>{siteData.phone}</a>
              </p>
            </div>
          </section>

          {/* Zero Tracking Badge */}
          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#22c55e' }}>
              <span className="text-3xl text-white">✓</span>
            </span>
            <h3 className="font-display text-fluid-xl mb-2" style={{ color: '#22c55e' }}>Zero Tracciamento</h3>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button
            onClick={onNavigateHome}
            className="btn-outline"
          >
            Torna alla Home
          </button>
          <button
            onClick={onNavigatePrivacy}
            className="btn-primary"
          >
            <span>Leggi la Privacy Policy</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-fluid-xl italic mb-2" style={{ color: 'var(--color-cream)' }}>{siteData.shortName}</h3>
          <p className="font-body text-fluid-sm mb-4" style={{ color: 'var(--color-stone)' }}>{siteData.tagline}</p>
          <p className="font-body text-fluid-xs" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
            {siteData.address.full}
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <button onClick={onNavigateHome} className="font-body text-fluid-xs underline" style={{ color: 'var(--color-stone)' }}>Home</button>
            <button onClick={onNavigatePrivacy} className="font-body text-fluid-xs underline" style={{ color: 'var(--color-stone)' }}>Privacy Policy</button>
            <span className="font-body text-fluid-xs" style={{ color: 'var(--color-terracotta)' }}>Cookie Policy</span>
          </div>
          <p className="font-body text-fluid-xs mt-8" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
            © 2026 {siteData.legalName} — CIR: {siteData.cir}
          </p>
        </div>
      </footer>
    </div>
  )
}
