import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { createRequire } from "module";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const { getLicenseFileText } = require("generate-license-file");

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const npmLicenses = await getLicenseFileText(resolve(root, "package.json"));

const rustLicenses = execSync("cargo about generate about.txt.hbs", {
  cwd: resolve(root, "src-tauri"),
  encoding: "utf8",
});

const output = resolve(root, "src-tauri/THIRD-PARTY-LICENSES.txt");
writeFileSync(output, `${npmLicenses}\n\n${rustLicenses}`);
console.log(`Generated: ${output}`);
