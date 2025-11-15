// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  if (!product) return null;
  const { title, priceStock, priceRetail, colors, image } = product;

  return (
    <article style={{
      border: "1px solid #eee",
      borderRadius: 8,
      overflow: "hidden",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      minHeight: 160
    }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
        <img
          src={image}
          alt={title}
          style={{ maxWidth: "100%", maxHeight: 120, objectFit: "contain" }}
        />
      </div>

      <div style={{ padding: 10 }}>
        <h3 style={{ margin: "6px 0", fontSize: 14 }}>{title}</h3>
        <div style={{ fontSize: 13, color: "#444" }}>
          <div>Stock: {priceStock}</div>
          <div>Retail: {priceRetail}</div>
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
          {colors && colors.join(", ")}
        </div>
      </div>
    </article>
  );
}
