import "server-only";

export type GoogleReview = {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
  reviewUrl?: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  reviews: GoogleReview[];
};

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string };
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

const placeId = process.env.GOOGLE_PLACE_ID;
const apiKey = process.env.GOOGLE_PLACES_API_KEY;

/** Link zum Google-Unternehmensprofil (Bewertungsübersicht). */
export const googleReviewsUrl =
  process.env.GOOGLE_REVIEWS_URL ||
  (placeId
    ? `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`
    : "https://www.google.com/maps/search/?api=1&query=USLU+Estrich+%26+Bodentechnik+Bergkamen");

/**
 * Lädt echte Bewertungen über die Google Places API (New).
 * Ohne GOOGLE_PLACE_ID / GOOGLE_PLACES_API_KEY oder bei Fehlern wird `null`
 * zurückgegeben – es werden niemals Platzhalter-Bewertungen angezeigt.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  if (!placeId || !apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=de`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 60 * 60 * 24 },
      },
    );
    if (!res.ok) return null;

    const data = (await res.json()) as PlacesResponse;
    if (typeof data.rating !== "number" || !data.userRatingCount) return null;

    const reviews = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google-Nutzer",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 0,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime,
        reviewUrl: r.googleMapsUri,
      }))
      .filter((r) => r.rating > 0);

    return { rating: data.rating, total: data.userRatingCount, reviews };
  } catch {
    return null;
  }
}
