import { Link } from 'react-router-dom'
import { usePageTracking } from './usePageTracking'

function CGU() {

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
          Conditions Générales d'Utilisation
        </h1>

        {/* Préambule */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            En accédant et en utilisant ce site, vous acceptez les présentes Conditions Générales d'Utilisation (CGU).
          </p>
        </section>

        {/* Article 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            1️⃣ Objet du service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site propose un <strong>calculateur de calories brûlées</strong> lors de la marche inclinée. 
            Les résultats sont fournis à titre <strong>informatif</strong> et ne constituent pas un avis médical.
          </p>
        </section>

        {/* Article 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            2️⃣ Utilisation du service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Accès libre et gratuit</strong><br/>
            Le service est accessible gratuitement à tous les utilisateurs disposant d'un accès internet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Calculs locaux</strong><br/>
            Toutes les opérations sont effectuées dans votre navigateur. Aucune donnée n'est stockée sur nos serveurs.
          </p>
        </section>

        {/* Article 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            3️⃣ Responsabilité
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>⚠️ Avertissement santé</strong><br/>
            Les résultats fournis sont des <strong>estimations</strong> basées sur des formules scientifiques (ACSM). 
            Avant de débuter toute activité physique intensive, consultez un professionnel de santé.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Limitation de responsabilité</strong><br/>
            Lakbane Numérique ne pourra être tenu responsable de tout dommage direct ou indirect résultant 
            de l'utilisation de ce calculateur.
          </p>
        </section>

        {/* Article 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            4️⃣ Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le code source, le design et les contenus de ce site sont protégés par le droit d'auteur. 
            Toute reproduction non autorisée est interdite.
          </p>
        </section>

        {/* Article 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            5️⃣ Données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site <strong>ne collecte, ne stocke ni ne partage</strong> aucune donnée personnelle. 
            Les valeurs que vous saisissez restent dans votre navigateur.
          </p>
        </section>

        {/* Article 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            6️⃣ Modification des CGU
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lakbane Numérique se réserve le droit de modifier ces CGU à tout moment. 
            Les modifications prendront effet dès leur publication sur le site.
          </p>
        </section>

        {/* Article 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            7️⃣ Loi applicable
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes CGU sont régies par le droit français. 
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📞 Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question concernant ces CGU :<br/>
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

export default CGU
