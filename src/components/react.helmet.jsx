import React from "react";
import { Helmet } from "react-helmet";

export default function ReactHelmet({ page, descContent, keywordsContent }) {
  return (
    <Helmet>
      <title> {page} | ZORA E-Commerce</title>
      <meta name="description" content={descContent} />
      <meta name="keywords" content={keywordsContent} />
    </Helmet>
  );
}
