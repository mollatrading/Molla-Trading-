import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-gray-900 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.svg" alt="Molla Trading logo" className="w-16 h-16 object-contain rounded-md shadow-sm" />
          <div>
            <h1 className="text-2xl font-serif text-red-700">Molla Trading</h1>
            <p className="text-sm text-gray-700">Women's & men's clothing — Wholesale & Retail</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:text-red-700">Products</a>
          <a href="#about" className="hover:text-red-700">About</a>
          <a href="#contact" className="hover:text-red-700">Contact</a>
          <a href="https://www.facebook.com/Teddy.wholesaler/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-red-600 text-white shadow">Facebook</a>
        </nav>

        <button className="md:hidden px-3 py-2 rounded bg-red-600 text-white">Menu</button>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-5xl lg:text-6xl font-serif text-red-700 leading-tight">Premium quality clothing<br className="hidden lg:block"/> for every style.</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">Wholesale and retail of fashionable women's and men's clothing. Competitive pricing, friendly service and fast delivery across Johannesburg.</p>

          <div className="mt-6 flex gap-4">
            <a href="#products" className="inline-block px-6 py-3 rounded bg-red-600 text-white font-semibold shadow">View Collection</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded border border-red-600 text-red-600 font-semibold">Contact Us</a>
          </div>

          <div className="mt-8 text-sm text-gray-700">
            <p><strong>Address:</strong> 217 Rahima Moosa St. (formerly Jeppe Street), Johannesburg — Madiba Building, Ground Floor, Shop No. 5</p>
            <p className="mt-1"><strong>Phone:</strong> +27 84 268 5484 &nbsp; • &nbsp; <strong>Email:</strong> tradingmolla@gmail.com</p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-64 h-96 bg-red-50 rounded-lg shadow-lg flex items-center justify-center">
            <img src="/assets/model.svg" alt="Model in red dress" className="w-full h-full object-contain rounded-lg p-4" />
          </div>
        </div>
      </section>

      <section id="products" className="mt-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-gray-900">Featured products</h3>
        <p className="mt-2 text-gray-700">Hand-picked styles — popular sizes from M to 2XL. Email or WhatsApp to place a bulk order.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3">
              <div className="h-40 bg-gray-50 rounded overflow-hidden flex items-center justify-center">
                <img src={`/assets/product-${i + 1}.svg`} alt={`Product ${i + 1}`} className="object-contain h-full w-full p-4" />
              </div>
              <div className="mt-3">
                <h4 className="font-medium">Style {i + 1}</h4>
                <p className="text-sm text-gray-600">Sizes M - 2XL • R45 wholesale / R60 retail</p>
                <div className="mt-3 flex items-center justify-between">
                  <a href="#contact" className="text-sm text-red-600 font-semibold">Order</a>
                  <span className="text-sm font-semibold">R60</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mt-16 bg-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">About Molla Trading</h3>
          <p className="mt-3 text-gray-700 max-w-3xl">Molla Trading provides modern, affordable clothing for women and men with both wholesale and retail options. We focus on reliable supply, consistent sizing, and quick communication. You can follow our Facebook page for new arrivals and live updates.</p>
        </div>
      </section>

      <section id="contact" className="mt-12 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-3 text-gray-700">Send your enquiry by WhatsApp or the contact form. For bulk orders please include sizes and quantities.</p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p><strong>Address:</strong> 217 Rahima Moosa St. (formerly Jeppe Street), Johannesburg — Madiba Building, Ground Floor, Shop No. 5</p>
              <p><strong>Phone / WhatsApp:</strong> +27 84 268 5484</p>
              <p><strong>Email:</strong> tradingmolla@gmail.com</p>
            </div>

            <div className="mt-6">
              <a href="https://wa.me/27842685484" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 bg-green-600 text-white rounded shadow">Message on WhatsApp</a>
            </div>
          </div>

          <form className="bg-white rounded-lg shadow p-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)'); }}>
            <label className="block">
              <span className="text-gray-700">Your name</span>
              <input className="mt-2 block w-full border rounded px-3 py-2" placeholder="Full name" required />
            </label>

            <label className="block mt-4">
              <span className="text-gray-700">Email or phone</span>
              <input className="mt-2 block w-full border rounded px-3 py-2" placeholder="Email or phone" required />
            </label>

            <label className="block mt-4">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-2 block w-full border rounded px-3 py-2" rows={4} placeholder="Sizes, quantities, or question" required />
            </label>

            <div className="mt-4 flex justify-end">
              <button type="submit" className="px-5 py-2 bg-red-600 text-white rounded">Send message</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mt-12 bg-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700">© {new Date().getFullYear()} Molla Trading. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-red-700">About</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
            <a href="https://www.facebook.com/Teddy.wholesaler/" target="_blank" rel="noreferrer" className="hover:text-red-700">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
                  }
