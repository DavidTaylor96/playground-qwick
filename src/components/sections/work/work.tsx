import { component$ } from '@builder.io/qwik';
import './work.css';

export default component$(() => {
  return (
    <section class="inner-container">
      <section class="panel-right">
        <article class="right-inner-container">
          <h1 class="right-panel-header">Jennifer Taylor</h1>
          <p>
            Having been a hairstylist for over 40 years, I privately created art in various mediums.
            My friends have collected my works, from oil and acrylic paintings to clay and metal
            pieces. It was during metalwork classes that I transitioned from sculpting hair to the
            bigger challenge of working with metal, bringing sculptures to life using pieces of
            scrap others had no use for. Since retiring from hairdressing five years ago, I've honed
            my craft. Initially, I worked on projects for my own home. Now, I sell metal sculptures.
          </p>
          <br />
          <p>
            <strong>COME JOIN!,</strong> on Friday 2nd and Saturday 3rd of June at:{' '}
            <i>St John's church hall, Rothiemurchus, Avimore</i>
          </p>
        </article>
      </section>
      <section class="panel-left">
        <img
          class="exhibition-image"
          src="https://storage.googleapis.com/shopify-customerio/tools/image_attachment/image/custom_resized_ac4ca835-bc6f-4264-a460-2ee0d4d76e62.jpg"
          loading="lazy"
          alt="image of artist"
        />
      </section>
    </section>
  );
});
