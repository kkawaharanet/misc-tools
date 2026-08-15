export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export class FileBase64 {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly dataUrl: string,
  ) {}

  public static async create(file: File): Promise<FileBase64> {
    const dataUrl = await readFileAsDataUrl(file);
    return new FileBase64(file.name, file.type, dataUrl);
  }
}

export function normalizeToDataUrl(
  input: string,
  fallbackMimeType = "application/octet-stream",
): string {
  const trimmed = input.trim();
  if (trimmed.startsWith("data:")) {
    return trimmed;
  }
  return `data:${fallbackMimeType};base64,${trimmed}`;
}

export class DecodedFile {
  constructor(
    public readonly name: string,
    public readonly type: string,
    public readonly url: string,
  ) {}

  public static async create(
    input: string,
    name: string,
  ): Promise<DecodedFile> {
    const dataUrl = normalizeToDataUrl(input);
    const blob = await (await fetch(dataUrl)).blob();
    const url = URL.createObjectURL(blob);
    return new DecodedFile(name, blob.type, url);
  }
}
