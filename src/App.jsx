import { useState } from 'react'
import { usePageTracking } from './usePageTracking'


function App() {
  usePageTracking()

  const [inputs, setInputs] = useState({
    age: 30,
    sexe: 'homme',
    poids: 75,
    pente: 12,
    vitesse: 5,
    duree: 30
  })
  const [calories, setCalories] = useState(null)

  const calculer = () => {
  const v = inputs.vitesse * 1000 / 60
  const grade = inputs.pente / 100
  const VO2 = 0.1 * v + 1.8 * v * grade + 3.5
  let kcal = VO2 * inputs.poids / 1000 * 5 * inputs.duree
  if (inputs.sexe === 'femme') kcal *= 0.95
  setCalories(Math.round(kcal))

  // 🔥 TRACKER L'ÉVÉNEMENT
  ReactGA.event({
    category: 'Calcul',
    action: 'Calculer calories',
    label: `${Math.round(kcal)} kcal`,
    value: Math.round(kcal)
  })
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">

      {/* ===== HERO ===== */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Brûle <span className="text-orange-600">3x plus de calories</span><br/>
            en marchant ! 🔥
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            La marche inclinée est le secret des sportifs pour brûler un max de graisses
            sans détruire tes articulations.
          </p>
          <a href="#calculateur" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg py-4 px-8 rounded-full hover:scale-105 transition-transform shadow-lg">
            Calculer mes calories →
          </a>
        </div>
      </section>

      {/* ===== POURQUOI ÇA MARCHE ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Pourquoi la marche inclinée ? 🚶‍♂️
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Bénéfice 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Brûle plus de graisses
              </h3>
              <p className="text-gray-700">
                À 12% de pente, tu brûles <strong>3x plus de calories</strong> qu'une marche normale, 
                tout en ciblant les fessiers et les cuisses.
              </p>
            </div>

            {/* Bénéfice 2 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="text-5xl mb-4">🦵</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Zéro impact sur les genoux
              </h3>
              <p className="text-gray-700">
                Contrairement à la course, tes articulations ne souffrent pas. 
                Parfait pour <strong>perdre du poids sans se blesser</strong>.
              </p>
            </div>

            {/* Bénéfice 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                30 min suffisent
              </h3>
              <p className="text-gray-700">
                Pas besoin de faire 1h de cardio. <strong>30 minutes à bonne intensité</strong>, 
                et tu as fait le job !
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CALCULATEUR ===== */}
      <section id="calculateur" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              🔥 Calculateur de Calories
            </h2>
            <p className="text-gray-600">
              Découvre combien tu brûles en temps réel
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Âge</label>
                <input 
                  type="number" 
                  value={inputs.age}
                  onChange={(e) => setInputs({...inputs, age: +e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Sexe</label>
                <select 
                  value={inputs.sexe}
                  onChange={(e) => setInputs({...inputs, sexe: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white cursor-pointer"
                >
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Poids (kg)</label>
                <input 
                  type="number" 
                  value={inputs.poids}
                  onChange={(e) => setInputs({...inputs, poids: +e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Pente (%)</label>
                <input 
                  type="number" 
                  value={inputs.pente}
                  onChange={(e) => setInputs({...inputs, pente: +e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Vitesse (km/h)</label>
                <input 
                  type="number" 
                  step="0.5"
                  value={inputs.vitesse}
                  onChange={(e) => setInputs({...inputs, vitesse: +e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2">Durée (min)</label>
                <input 
                  type="number" 
                  value={inputs.duree}
                  onChange={(e) => setInputs({...inputs, duree: +e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                />
              </div>

            </div>

            <button 
              onClick={calculer}
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              CALCULER 🔥
            </button>
          </div>

          {/* Résultat */}
          {calories !== null && (
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 text-center text-white animate-bounce-in">
              <p className="text-xl mb-2 opacity-90">Tu as brûlé</p>
              <h2 className="text-7xl font-bold mb-2">{calories}</h2>
              <p className="text-3xl font-semibold">calories 🔥</p>
              <p className="mt-4 text-lg opacity-90">
                Soit l'équivalent de {Math.round(calories / 140)} pains au chocolat 🥐
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ===== COMPARATIF ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Comparaison avec d'autres cardios
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Activité</th>
                  <th className="py-4 px-6 text-center">Calories / 30min</th>
                  <th className="py-4 px-6 text-center">Impact articulaire</th>
                  <th className="py-4 px-6 text-center">Difficulté</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-orange-50 transition">
                  <td className="py-4 px-6 font-semibold">🚶‍♂️ Marche inclinée (12%)</td>
                  <td className="py-4 px-6 text-center font-bold text-orange-600">300-400</td>
                  <td className="py-4 px-6 text-center">✅ Très faible</td>
                  <td className="py-4 px-6 text-center">⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-orange-50 transition">
                  <td className="py-4 px-6">🏃 Course à pied</td>
                  <td className="py-4 px-6 text-center">350-450</td>
                  <td className="py-4 px-6 text-center">❌ Élevé</td>
                  <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-orange-50 transition">
                  <td className="py-4 px-6">🚴 Vélo d'appartement</td>
                  <td className="py-4 px-6 text-center">200-300</td>
                  <td className="py-4 px-6 text-center">✅ Faible</td>
                  <td className="py-4 px-6 text-center">⭐⭐</td>
                </tr>
                <tr className="hover:bg-orange-50 transition">
                  <td className="py-4 px-6">🚣 Rameur</td>
                  <td className="py-4 px-6 text-center">250-350</td>
                  <td className="py-4 px-6 text-center">⚠️ Moyen (dos)</td>
                  <td className="py-4 px-6 text-center">⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-6">
            * Pour une personne de 75kg - Valeurs moyennes
          </p>
        </div>
      </section>

      {/* ===== CONSEILS ===== */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Comment optimiser ta séance ? 💡
          </h2>
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                1️⃣ Commence progressivement
              </h3>
              <p className="text-gray-700">
                Débute à <strong>5-8% de pente</strong> si tu débutes, puis augmente chaque semaine. 
                L'objectif : atteindre 12-15% à 5 km/h.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                2️⃣ Garde une posture droite
              </h3>
              <p className="text-gray-700">
                Ne te penche pas en avant ! Garde le dos droit, engage tes abdos, 
                et ne t'accroche pas au tapis (sauf léger appui si besoin).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                3️⃣ Vise 3-4 séances / semaine
              </h3>
              <p className="text-gray-700">
                <strong>30 minutes minimum</strong> pour des résultats visibles. 
                Tu peux aller jusqu'à 45-60 min si tu es à l'aise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                4️⃣ À jeun = turbo brûle-graisse
              </h3>
              <p className="text-gray-700">
                Le matin avant le petit-déj, ton corps puise directement dans les graisses. 
                Mais hydrate-toi bien ! 💧
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Questions fréquentes 🤔
          </h2>

          <div className="space-y-4">
            
            <details className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl cursor-pointer group">
              <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                Est-ce que ça marche vraiment pour maigrir ?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Oui ! La marche inclinée est un excellent moyen de créer un déficit calorique. 
                Combinée à une alimentation équilibrée, tu verras des résultats en 4-6 semaines.
              </p>
            </details>

            <details className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl cursor-pointer group">
              <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                Quelle pente choisir si je débute ?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Commence à <strong>5-6%</strong> pendant 20 minutes. Augmente progressivement 
                jusqu'à 12% sur 4 semaines.
              </p>
            </details>

            <details className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl cursor-pointer group">
              <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                Puis-je le faire tous les jours ?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Oui, c'est un exercice à faible impact. Mais écoute ton corps : 
                <strong>3-5 fois/semaine</strong> c'est idéal pour progresser sans te surentraîner.
              </p>
            </details>

            <details className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl cursor-pointer group">
              <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                C'est mieux que la course ?
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Ça dépend de ton objectif ! La marche inclinée préserve mieux tes articulations 
                et cible davantage les fessiers. La course brûle légèrement plus, mais avec plus d'impact.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
<footer className="bg-gray-900 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4">
      🔥 Calculateur Marche Inclinée
    </h3>
    <p className="text-gray-400 mb-6">
  Créé avec passion pour t'aider à atteindre tes objectifs fitness.<br/>
  <span className="text-xs text-gray-500">
    Ce site utilise Google Analytics pour améliorer l'expérience utilisateur.
  </span>
</p>

    <div className="flex justify-center gap-6 text-sm text-gray-400 flex-wrap">
      <a 
        href="mailto:sylvain.feillault@gmail.com" 
        className="hover:text-orange-500 transition"
      >
        📧 Contact
      </a>
      <span>•</span>
      <a 
        href="/mentions-legales" 
        className="hover:text-orange-500 transition"
      >
        Mentions légales
      </a>
      <span>•</span>
      <a 
        href="/cgu" 
        className="hover:text-orange-500 transition"
      >
        CGU
      </a>
      <span>•</span>
      <a 
        href="https://www.lakbanenumerique.fr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition font-semibold"
      >
        🚀 Créé par Lakbane Numérique
      </a>
    </div>
    <p className="mt-6 text-gray-500 text-sm">
      © 2025 - Tous droits réservés
    </p>
  </div>
</footer>


    </div>
  )
}

export default App
