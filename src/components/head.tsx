import React, { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface IHelmet {
  children?: ReactNode;
  title: string;
  description: string;
  url: string;
  metaType: string;
  pageTitle?: string;
  metaImage: string;
}

const Head: React.FC<any> = (props: IHelmet) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${props.title} - Shopfront`}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description} />

        {/* <meta property="fb:app_id" content="{FACEBOOK_APP_ID}" /> */}
        <meta property="og:site_name" content={props.title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="{META_IMAGE}" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={`${props.title} - Findme`} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:domain" content={props.url} />
        <meta name="twitter:image:src" content={props.metaImage} />
        {/* <link rel="shortcut icon" href="{SITE_URL}storage/logo/{SITE_FAVICON}" /> */}
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
      </Helmet>
    </HelmetProvider>
  );
};
export default Head;
