import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Experience the stunning art of Jennifer Taylor, renowned for her metal sculptures in the Scottish Highlands. Discover her Aviemore exhibition and explore the creativity of the Highlands."
        />
        <meta
          name="keywords"
          content="Highland Art, Aviemore Exhibition, Metal Sculptures, Jennifer Taylor Art, Creative Highlands, Scottish Highland Art Exhibition"
        />
        <meta property="og:title" content="Jennifer Taylor Art" />
        <meta
          property="og:description"
          content="Experience the stunning exhibition done by Jennifer Taylor..."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/shopify-customerio/tools/image_attachment/image/custom_resized_ac4ca835-bc6f-4264-a460-2ee0d4d76e62.jpg"
        />
        <meta property="og:url" content="https://taylored-art.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>Jennifer Taylor Art</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
