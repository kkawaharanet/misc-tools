export function convertBase64(text: string, inversion?: boolean) {
  if (inversion) {
    return decodeURIComponent(atob(text));
  }
  return btoa(encodeURIComponent(text));
}
