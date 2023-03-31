import { $, component$, useOnDocument, useStore } from '@builder.io/qwik';
import NavBar from '~/components/nav-bar/navBar';
import About from '~/components/sections/about/about';
import Skills from '~/components/sections/skills/skills';
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
    route: 'about',
  });

  const sections = useStore<ISection[]>([
    {
      id: 'about',
    },
    {
      id: 'work',
    },
    {
      id: 'skills',
    },
  ]);

	useOnDocument('scroll', $(() => {
		const scrollPosition = window.scrollY + window.innerHeight / 2;
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
	}));


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
      <header>
        <NavBar selectedSection={router} sections={sections} />
      </header>
      <main class="container">
        <About id="about" />
        <Work id="work" />
        <Skills id="skills" />
      </main>
    </>
  );
});
