import { Link } from 'react-router-dom'
import { usePageTracking } from './usePageTracking'


function MentionsLegales() {
    usePageTracking()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        
        {/* Bouton retour */}
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold mb-8 transition"
        >
          ← Retour au calculateur
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Mentions Légales
        </h1>

        {/* Éditeur du site */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📝 Éditeur du site
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Lakbane Numérique</strong><br/>
            Micro-entrepreneur<br/>
            📍 Reignac sur Indre, France<br/>
            📧 <a href="mailto:sylvain.feillault@gmail.com" className="text-orange-600 hover:underline">
              sylvain.feillault@gmail.com
            </a><br/>
            🌐 <a href="https://www.lakbanenumerique.fr" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              www.lakbanenumerique.fr
            </a>
          </p>
        </section>

        {/* Hébergement */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🌐 Hébergement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site est hébergé par :<br/>
            <strong>Netlify, Inc.</strong><br/>
            610 22nd Street, Suite 315<br/>
            San Francisco, CA 94107, USA<br/>
            🌐 <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              www.netlify.com
            </a>
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ©️ Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, code source) est la propriété de 
            <strong> Lakbane Numérique</strong>. Toute reproduction, même partielle, est interdite 
            sans autorisation préalable.
          </p>
        </section>

        {/* Données personnelles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🔒 Données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site <strong>ne collecte aucune donnée personnelle</strong>. Les calculs sont effectués 
            localement dans votre navigateur. Aucune information n'est envoyée à un serveur.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🍪 Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site n'utilise <strong>aucun cookie</strong> de suivi ou de publicité.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📞 Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question concernant ces mentions légales :<br/>
            📧 <a href="mailto:sylvain.feillault@gmail.com" className="text-orange-600 hover:underline font-semibold">
              sylvain.feillault@gmail.com
            </a>
          </p>
        </section>

        {/* Footer page */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          Dernière mise à jour : Septembre 2025
        </div>

      </div>
    </div>
  )
}

export default MentionsLegales
