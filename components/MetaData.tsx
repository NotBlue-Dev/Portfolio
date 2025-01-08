import { NextSeo } from "next-seo";
import useWindowLocation from "context/useWindowLocation";

// import Head from "next/head";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string;
  suffix?: string;
};

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();
  const faviconHref = "/favicon-dark.ico";

  return (
    <NextSeo
      title={title + (suffix ? ` - ${suffix}` : "")}
      description={description || "Enzo Dubocage"}
      canonical={currentURL}
      additionalLinkTags={[
        {
          rel: "icon",
          href: faviconHref,
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-192x192.png",
          sizes: "192x192",
        },
      ]}
      openGraph={{
        type: "website",
        url: currentURL,
        title: title + (suffix ? ` - ${suffix}` : ""),
        description: description || "Jatin Sharma",
        profile: {
          firstName: "Enzo",
          lastName: "Dubocage",
          gender: "Male",
          username: "notblue",
        },
        article: {
          tags: keywords?.split(","),
          authors: ["https://linkedin.com/in/enzo-dubocage"],
        },
        images: [
          {
            url: previewImage ?? "",
            width: 1200,
            height: 630,
            alt: title,
            type: "image/jpeg",
          },
        ],
        siteName: "notblue.fr",
      }}
    />
  );
}