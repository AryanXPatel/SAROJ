import { notFound } from "next/navigation";
import { products, Product } from "@/lib/products";
import { Metadata, ResolvingMetadata } from "next";
import { Header } from "@/components/header";
import { ProductDetails } from "./_components/product-details"; // We'll create this next

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = products.find((p) => String(p.id) === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  const previousImages = (await parent).openGraph?.images || []

  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'SAROJ',
    },
    sku: `SAROJ-${product.id}`,
    offers: {
      '@type': 'Offer',
      url: `https://thesaroj.in/products/${product.id}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return {
    title: `${product.name} | SAROJ`,
    description: product.description,
    openGraph: {
      title: `${product.name} | SAROJ`,
      description: product.description,
      images: [product.image, ...previousImages],
    },
    other: {
        "structured-data": JSON.stringify(structuredData)
    }
  };
}

export function generateStaticParams() {
    return products.map((product) => ({
        slug: String(product.id),
    }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => String(p.id) === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductDetails product={product} />
    </div>
  );
}
