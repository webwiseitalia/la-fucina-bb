import { useEffect } from 'react'
import { siteData } from '../constants/siteData'

export default function PrivacyPolicy({ onNavigateHome, onNavigateCookie }) {
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
            <span className="text-xl" style={{ color: 'var(--color-cream)' }}>🛡</span>
          </div>
          <div>
            <h1 className="font-display text-fluid-2xl" style={{ color: 'var(--color-cream)' }}>Privacy Policy</h1>
            <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>Informativa sul trattamento dei dati personali</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="p-8 md:p-12 rounded-lg" style={{ backgroundColor: 'var(--color-warm-white)', boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}>
          <p className="font-body text-fluid-sm mb-8" style={{ color: 'var(--color-stone)' }}>
            Ultimo aggiornamento: {siteData.policyLastUpdate}
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>1. Titolare del Trattamento</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-display text-fluid-lg mb-2" style={{ color: 'var(--color-charcoal)' }}>{siteData.legalName}</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-stone)' }}>
                📍 {siteData.address.full}<br />
                📞 {siteData.phone}<br />
                📱 {siteData.mobile}
              </p>
              {siteData.cir && (
                <p className="font-body text-fluid-xs mt-2" style={{ color: 'var(--color-stone)' }}>
                  Codice CIR: {siteData.cir}
                </p>
              )}
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>2. Dati Raccolti e Finalità del Trattamento</h2>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base mb-6 space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong>Date di soggiorno e numero ospiti</strong> - per verificare disponibilità</li>
              <li><strong>Messaggio/Note</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: 'rgba(196, 104, 60, 0.1)', borderLeft: '4px solid var(--color-terracotta)' }}>
              <p className="font-body text-fluid-sm font-semibold mb-2" style={{ color: 'var(--color-terracotta)' }}>Finalità:</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                I dati vengono raccolti esclusivamente per:<br />
                • Rispondere alle richieste di prenotazione<br />
                • Fornire informazioni sui nostri servizi<br />
                • Gestire la relazione commerciale
              </p>
            </div>

            <h3 className="font-display text-fluid-lg mb-3" style={{ color: 'var(--color-charcoal)' }}>2.2 Base giuridica del trattamento</h3>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR),
              fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong>
              (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>3. Modalità di Trattamento</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate
              alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi
              non autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>4. Conservazione dei Dati</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
              relazioni commerciali conseguenti:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>5. Comunicazione e Diffusione dei Dati</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base mb-6 space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', borderLeft: '4px solid #dc2626' }}>
              <p className="font-body text-fluid-sm font-semibold mb-2" style={{ color: '#dc2626' }}>I tuoi dati NON verranno MAI:</p>
              <ul className="list-disc list-inside font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>6. Diritti dell'Interessato</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="list-disc list-inside font-body text-fluid-base mb-6 space-y-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-body text-fluid-sm font-semibold mb-2" style={{ color: 'var(--color-charcoal)' }}>Come esercitare i tuoi diritti:</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                Puoi esercitare i tuoi diritti contattandoci telefonicamente o tramite raccomandata A/R all'indirizzo: {siteData.address.full}
              </p>
              <p className="font-body text-fluid-sm mt-2" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>7. Diritto di Reclamo</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
              trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-body text-fluid-sm font-semibold mb-2" style={{ color: 'var(--color-charcoal)' }}>Garante per la protezione dei dati personali:</p>
              <p className="font-body text-fluid-sm" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
                Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--color-terracotta)' }}>www.garanteprivacy.it</a><br />
                Email: garante@gpdp.it<br />
                PEC: protocollo@pec.gpdp.it
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
              consulta la nostra <button onClick={onNavigateCookie} className="underline" style={{ color: 'var(--color-terracotta)' }}>Cookie Policy</button>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>9. Modifiche alla Privacy Policy</h2>
            <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
              saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
              consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="font-display text-fluid-xl mb-4" style={{ color: 'var(--color-charcoal)' }}>10. Contatti</h2>
            <p className="font-body text-fluid-base mb-4" style={{ color: 'var(--color-charcoal)', opacity: 0.8 }}>
              Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
            </p>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="font-body text-fluid-base" style={{ color: 'var(--color-charcoal)' }}>
                📞 <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="underline" style={{ color: 'var(--color-terracotta)' }}>{siteData.phone}</a><br />
                📱 <a href={`tel:${siteData.mobile.replace(/\s/g, '')}`} className="underline" style={{ color: 'var(--color-terracotta)' }}>{siteData.mobile}</a>
              </p>
            </div>
          </section>

          <p className="font-body text-fluid-xs text-center pt-8 border-t" style={{ color: 'var(--color-stone)', borderColor: 'var(--color-stone)', opacity: 0.5 }}>
            Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
          </p>
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
            onClick={onNavigateCookie}
            className="btn-primary"
          >
            <span>Leggi la Cookie Policy</span>
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
            <span className="font-body text-fluid-xs" style={{ color: 'var(--color-terracotta)' }}>Privacy Policy</span>
            <button onClick={onNavigateCookie} className="font-body text-fluid-xs underline" style={{ color: 'var(--color-stone)' }}>Cookie Policy</button>
          </div>
          <p className="font-body text-fluid-xs mt-8" style={{ color: 'var(--color-stone)', opacity: 0.5 }}>
            © 2026 {siteData.legalName} — CIR: {siteData.cir}
          </p>
        </div>
      </footer>
    </div>
  )
}
