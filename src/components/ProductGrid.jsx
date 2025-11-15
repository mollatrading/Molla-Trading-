// src/components/ProductGrid.jsx
import React from "react";

export default function ProductGrid() {
  return (
    <section style={{ padding: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Products</h2>
      <p style={{ textAlign: "center", color: "#666" }}>
        Product grid coming soon — check back later.
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 12,
        marginTop: 18
      }}>
        {/* placeholders */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{
            border: "1px solid #eee",
            padding: 12,
            borderRadius: 8,
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff"
          }}>
            <span style={{ color: "#999" }}>Product {i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
