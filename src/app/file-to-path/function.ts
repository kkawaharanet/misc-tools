async function readEntry(entry: FileSystemEntry): Promise<string[]> {
  if (entry.isFile) {
    return [entry.fullPath];
  }

  const dirEntry = entry as FileSystemDirectoryEntry;
  const reader = dirEntry.createReader();
  const paths: string[] = [];

  while (true) {
    const entries = await new Promise<FileSystemEntry[]>((resolve, reject) => {
      reader.readEntries(resolve, reject);
    });
    if (entries.length === 0) break;
    const subPaths = await Promise.all(entries.map(readEntry));
    paths.push(...subPaths.flat());
  }

  return paths;
}

export async function getPathsFromItems(
  items: DataTransferItemList,
): Promise<string[]> {
  const entries: FileSystemEntry[] = [];
  for (let i = 0; i < items.length; i++) {
    const entry = items[i].webkitGetAsEntry();
    if (entry) entries.push(entry);
  }

  const pathArrays = await Promise.all(entries.map(readEntry));
  return pathArrays.flat().sort();
}

interface TreeNode {
  [key: string]: TreeNode;
}

export function buildTreeView(paths: string[]): string {
  const tree: TreeNode = {};

  for (const path of paths) {
    const parts = path.split("/").filter(Boolean);
    let node = tree;
    for (const part of parts) {
      if (!node[part]) node[part] = {};
      node = node[part];
    }
  }

  function render(node: TreeNode, indent: number): string[] {
    const lines: string[] = [];
    const keys = Object.keys(node).sort((a, b) => {
      const aIsDir = Object.keys(node[a]).length > 0;
      const bIsDir = Object.keys(node[b]).length > 0;
      if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
      return a.localeCompare(b);
    });

    for (const key of keys) {
      const isDir = Object.keys(node[key]).length > 0;
      lines.push("  ".repeat(indent) + key + (isDir ? "/" : ""));
      if (isDir) {
        lines.push(...render(node[key], indent + 1));
      }
    }
    return lines;
  }

  return render(tree, 0).join("\n");
}
