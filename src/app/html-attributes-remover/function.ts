export function removeHtmlAttributes(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  Array.from(doc.body.querySelectorAll("*")).forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      element.removeAttribute(attribute.name);
    });
  });
  return doc.body.innerHTML;
}
