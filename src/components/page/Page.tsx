import React from "react";

export interface PageProps {
  title?: string;
  children?: React.ReactNode;
}

export function Page(props: PageProps) {
  return (
    <>
      {props.title && <title>{props.title}</title>}
      {props.children}
    </>
  );
}
