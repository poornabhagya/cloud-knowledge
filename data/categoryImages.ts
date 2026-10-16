export const CATEGORY_IMAGES: Record<string, string> = {
  "Strategy and research":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "Financial modelling":
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  "Data and AI":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "Marketing":
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  "Retail operations":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  "Cybersecurity":
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
};

export const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

export function getCoverImage(category: string): string {
  if (CATEGORY_IMAGES[category]) {
    return CATEGORY_IMAGES[category];
  }
  const normalized = category.toLowerCase().trim();
  for (const [cat, url] of Object.entries(CATEGORY_IMAGES)) {
    if (normalized.includes(cat.toLowerCase()) || cat.toLowerCase().includes(normalized)) {
      return url;
    }
  }
  return DEFAULT_FALLBACK_IMAGE;
}
