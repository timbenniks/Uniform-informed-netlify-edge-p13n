import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import { createUniformContext } from "../lib/context/uniformContext";
import getConfig from "next/config";

import "../styles/style.css";

const clientContext = createUniformContext();
const {
  publicRuntimeConfig: { outputType },
} = getConfig();

export default function App({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      outputType={outputType}
      context={serverUniformContext ?? clientContext}
    >
      <Component {...pageProps} />
    </UniformContext>
  );
}
