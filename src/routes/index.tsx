import { $, component$, useStore, useOn, useOnDocument } from '@builder.io/qwik';
import NavBar from '~/components/nav-bar/navBar';
import About from '~/components/sections/about/about';
import Skills from '~/components/sections/skills/skills';
import Work from '~/components/sections/work/work';
import './index.css';

export interface IRoutes {
  route: string;
}

interface ISection {
  id: string;
  top: number;
  bottom: number;
}

export default component$(() => {
  const router = useStore<IRoutes>({
    route: 'about',
  });

  const sections = useStore<ISection[]>([
    {
      id: 'about',
      top: 0,
      bottom: 100,
    },
    {
      id: 'work',
      top: 100,
      bottom: 200,
    },
    {
      id: 'skills',
      top: 200,
      bottom: 300,
    },
  ]);
  useOnDocument(
    'scroll',
    $(() => {
      const scrollPosition = window.scrollY;
      const about = document.getElementById('about')!.getBoundingClientRect();
      const work = document.getElementById('work')!.getBoundingClientRect();
      const skills = document.getElementById('skills')!.getBoundingClientRect();

      if (scrollPosition >= about.top && scrollPosition <= about.bottom) {
        router.route = 'about';
      }
      if (scrollPosition >= work.top && scrollPosition <= work.bottom) {
        router.route = 'work';
      }
      if (scrollPosition >= skills.top && scrollPosition <= skills.bottom) {
        router.route = 'skills';
      }
    }),
  );

  useOn(
    'click',
    $((event) => {
      console.log('---------------- router.route', router.route);
      if (router.route === 'about') {
        event.preventDefault();
        document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
      }
      if (router.route === 'work') {
        event.preventDefault();
        document.getElementById('work')!.scrollIntoView({ behavior: 'smooth' });
      }
      if (router.route === 'skills') {
        event.preventDefault();
        document.getElementById('skills')!.scrollIntoView({ behavior: 'smooth' });
      }
    }));

  return (
    <>
      <div class="scroll-indicator">
        {/* TODO: repeat for the about of seciton that we have */}
        {sections.map((section) => (
          <div
            key={section.id}
            class={`scroll-indicator-bar ${section.id === router.route ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      <header>
        <NavBar selectedSection={router} />
      </header>
      <main class="container">
        <About id="about" />
        <Work id="work" />
        <Skills id="skills" />
      </main>
    </>
  );
});
