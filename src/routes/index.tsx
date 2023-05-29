import { component$ } from '@builder.io/qwik';
import Work from '~/components/sections/work/work';
import './index.css';

export default component$(() => {
  return (
    <main class="container">
      <Work />
    </main>
  );
});
