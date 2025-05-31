export function openMapButton(address: string) {
  if (!address) return '';
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  if (typeof window !== 'undefined') {
    window.open(googleMapsUrl, '_blank');
  }
}
