/**
 * Format a price in cents to a CAD display string.
 * e.g. formatCAD(1599) → "$15.99"
 */
export function formatCAD(cents: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}

/**
 * Parse a dollar string back to cents (for menu data defined as $15.99)
 * e.g. parseToCents("15.99") → 1599
 */
export function parseToCents(dollars: string | number): number {
  const num = typeof dollars === "string" ? parseFloat(dollars) : dollars;
  return Math.round(num * 100);
}
