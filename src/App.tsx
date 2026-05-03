import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-950">
      {/* Header */}
      <header className="bg-orange-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">🍲 Africa Food Restaurant</h1>
          <p className="text-orange-200 mt-2">Saveurs authentiques d'Afrique</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bienvenue !</h2>
          <p className="text-lg text-amber-100 mb-8">
            Découvrez les meilleures saveurs culinaires africaines dans une ambiance chaleureuse et accueillante.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Voir le Menu
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white mt-12 py-6 text-center">
        <p>&copy; 2026 Africa Food Restaurant. Tous droits réservés.</p>
      </footer>
    </div>
  )
}