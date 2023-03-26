import { component$ } from '@builder.io/qwik';
import NavBar from '~/components/nav-bar/navBar';
import About from '~/components/sections/about/about';
import Skills from '~/components/sections/skills/skills';
import Work from '~/components/sections/work/work';

export default component$(() => {
	return (
		<>
		<header>
			<NavBar />
		</header>
		<main class="container">
			<About />
			<Work />
			<Skills />
		</main>
		</>
	);
});
