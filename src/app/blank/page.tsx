import { Page } from "../../components/page/Page";

export default function Blank() {
  const version = import.meta.env.VERSION as string;
  return (
    <Page title="Blank">
      <p>misc-tools {version}</p>
      <p>
        <a href="https://kkawahara.net">kkawahara.net</a>
      </p>
    </Page>
  );
}
