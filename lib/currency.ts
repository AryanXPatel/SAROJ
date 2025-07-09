// Currency conversion utilities

export function convertUSDToINR(usdAmount: number): number {
  return usdAmount // Prices are already in INR
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPrice(price: number): string {
  return formatINR(price)
}
