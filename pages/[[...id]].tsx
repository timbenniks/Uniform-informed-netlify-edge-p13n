import { GetStaticPaths, GetStaticPropsContext } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  RootComponentInstance,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { canvasClient } from "lib/canvasClient";
import { resolveRenderer } from "../components";

const PreviewDevPanel = dynamic(
  () => import("lib/preview/PreviewDevPanel/PreviewDevPanel")
);

export default function Home({
  composition,
  preview,
}: {
  preview: boolean;
  composition: RootComponentInstance;
}) {
  return (
    <>
      <Head>
        <title>{`Le Yolo?${
          composition?._name ? ` | ${composition?._name}` : ""
        }`}</title>
      </Head>
      <div>
        <Composition
          data={composition}
          resolveRenderer={resolveRenderer}
          behaviorTracking="onView"
        >
          <div style={{ paddingTop: "310px" }}>
            <Slot name="content" />
          </div>
        </Composition>
        {preview && (
          <PreviewDevPanel preview={preview} composition={composition} />
        )}
      </div>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context?.params?.id;
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const { preview } = context;
  const { composition } = await canvasClient.getCompositionBySlug({
    slug: slugString ? `/${slugString}` : "/",
    state:
      process.env.NODE_ENV === "development" || preview
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  });

  return {
    props: {
      composition,
      preview: Boolean(preview),
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await canvasClient.getCompositionList({
    state:
      process.env.NODE_ENV === "development"
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  });

  return {
    paths: pages.compositions
      .map((c) => c.composition._slug!)
      .filter((slug) => slug),
    fallback: true,
  };
};
