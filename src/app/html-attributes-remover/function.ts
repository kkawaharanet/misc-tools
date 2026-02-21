export function removeHtmlAttributes(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  Array.from(div.querySelectorAll("*")).forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      element.removeAttribute(attribute.name);
    });
  });
  return div.innerHTML;
}
