import { execSync } from "child_process";
import { createWriteStream } from "fs";
import { createRequire } from "module";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const { ZipArchive } = require("archiver");

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

execSync("npm run build:tauri", { cwd: root, stdio: "inherit" });

const { version } = require("../package.json");
const zipName = `misc-tools-${version}-windows-x86_64.zip`;
const zipPath = resolve(root, zipName);

await new Promise((done, fail) => {
  const output = createWriteStream(zipPath);
  const archive = new ZipArchive({ zlib: { level: 9 } });

  output.on("close", done);
  archive.on("error", fail);

  archive.pipe(output);
  archive.file(resolve(root, "src-tauri/target/release/misc-tools.exe"), {
    name: "misc-tools.exe",
  });
  archive.file(resolve(root, "src-tauri/THIRD-PARTY-LICENSES.txt"), {
    name: "THIRD-PARTY-LICENSES.txt",
  });
  archive.finalize();
});

console.log(`Generated: ${zipPath}`);
