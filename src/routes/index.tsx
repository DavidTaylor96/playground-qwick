import { $, component$, useOnDocument, useStore } from '@builder.io/qwik';
import Work from '~/components/sections/work/work';
import './index.css';

export interface IRoutes {
  route: string;
}

export interface ISection {
  id: string;
}

export default component$(() => {
  const router = useStore<IRoutes>({
    route: 'exhibition',
  });

  const sections = useStore<ISection[]>([
    {
      id: 'exhibition',
    },
  ]);

  useOnDocument(
    'scroll',
    $(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const exhibition = document.getElementById('exhibition')!.getBoundingClientRect();
      if (scrollPosition >= exhibition.top && scrollPosition <= exhibition.bottom) {
        router.route = 'exhibition';
      }
    })
  );

  return (
    <>
      <div class="scroll-indicator">
        {sections.map((section) => (
          <div
            key={section.id}
            class={`scroll-indicator-bar ${section.id === router.route ? 'active' : ''}`}
          />
        ))}
      </div>
      <main class="container">
        <Work id="exhibition" />
      </main>
    </>
  );
});
