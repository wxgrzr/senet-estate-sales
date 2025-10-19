export function createMapLink(address: string) {
  if (!address) return;
  const encodedAddress = encodeURIComponent(address);
  const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  if (typeof window !== 'undefined') {
    const ua = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod|macintosh/.test(ua)) {
      return appleMapsUrl;
    } else if (/android/.test(ua)) {
      return googleMapsUrl;
    } else {
      return googleMapsUrl;
    }
  }
  // Fallback for SSR
  return googleMapsUrl;
}
