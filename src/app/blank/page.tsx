import { Flex, Link, Text } from "@radix-ui/themes";

export default function Blank() {
  const version = import.meta.env.VERSION as string;
  return (
    <>
      <title>Blank</title>
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100%"
        gap="2"
      >
        <Text>misc-tools {version}</Text>
        <Link href="https://kkawahara.net">kkawahara.net</Link>
      </Flex>
    </>
  );
}
