import { $, component$, useStore, useOn, useOnWindow, useOnDocument } from '@builder.io/qwik';
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

	useOn(
		'click',
		$((event) => {
			if(router.route === 'about') {
				event.preventDefault();
					document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
			}
			if(router.route === 'work') {
				event.preventDefault();
				document.getElementById('work')!.scrollIntoView({ behavior: 'smooth' });

			}
			if(router.route === 'skills') {
				event.preventDefault();
				document.getElementById('skills')!.scrollIntoView({ behavior: 'smooth' });
			}
		})
	);


	const sections: ISection[] = [
    {
      id: 'about',
      top: 0,
      bottom: 0,
    },
    {
      id: 'work',
      top: 0,
      bottom: 0,
    },
    {
      id: 'skills',
      top: 0,
      bottom: 0,
    },
  ];

  useOnDocument('mount', $(() => {
    // Calculate the top and bottom position of each section relative to the viewport
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.top = element.getBoundingClientRect().top;
        section.bottom = element.getBoundingClientRect().bottom;
      }
    });
  }));

	useOnDocument('scroll', $(() => {
		// Get the current scroll position of the window
		const scrollPosition = window.pageYOffset;
	
		// Find the section that is currently in view
		let currentSection = sections[0];
		sections.forEach((section) => {
			if (section.top <= scrollPosition && section.bottom > scrollPosition) {
				currentSection = section;
			}
		});
	
		// Update the router to reflect the current section
		router.route = currentSection.id;

		console.log(router.route, 'router.route');
		console.log(currentSection.id, 'currentSection.id')
	}));



	return (
		<>
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
