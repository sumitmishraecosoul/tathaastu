import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { formatInr } from "../../data/storeData";

export default function ProductCard({ product }) {
  return (
    <article className="store-card">
      <Link to={`/store/product/${product.slug}`} className="store-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge ? <span className="store-card__badge">{product.badge}</span> : null}
      </Link>
      <div className="store-card__body">
        <Link to={`/store/product/${product.slug}`} className="store-card__title">
          {product.name}
        </Link>
        <div className="store-card__rating">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span>{product.rating}</span>
          <em>({product.reviews})</em>
        </div>
        <div className="store-card__price">
          <strong>{formatInr(product.price)}</strong>
          {product.mrp ? <s>{formatInr(product.mrp)}</s> : null}
        </div>
        <Link to={`/store/product/${product.slug}`} className="store-btn store-btn--primary store-btn--block">
          Add to Cart
        </Link>
      </div>
    </article>
  );
}
