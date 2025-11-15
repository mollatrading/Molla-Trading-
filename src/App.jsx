import React from 'react'
import ProductGrid from './components/ProductGrid'

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Molla Trading</h1>
        <a href="https://wa.me/27842685484" target="_blank" rel="noreferrer" className="bg-green-500 text-white px-4 py-2 rounded">WhatsApp</a>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Stylish clothing for everyone</h2>
            <p className="mb-4 text-lg">Wholesale and retail. Quality fabrics and good prices!</p>
            <div className="space-x-3">
              <a href="#products" className="inline-block bg-red-600 text-white px-4 py-2 rounded">View Products</a>
              <a href="https://wa.me/27842685484" target="_blank" rel="noreferrer" className="inline-block border border-gray-300 px-4 py-2 rounded">Order via WhatsApp</a>
            </div>
            <p className="mt-6 text-sm text-gray-600">Address: 217 Rahima Moosa (Jeppe) Street, Ground Floor, Nadiba Building, Shop 5, Johannesburg</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <img src="/public/assets/product-placeholder.png" alt="hero" className="w-full h-64 object-cover rounded"/>
          </div>
        </section>

        <section id="products" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Products</h3>
          <ProductGrid />
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-bold">Molla Trading</p>
            <p className="text-sm">217 Rahima Moosa (Jeppe) Street, Shop 5</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://wa.me/27842685484" className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M..." /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
