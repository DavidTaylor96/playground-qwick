import { component$ } from '@builder.io/qwik';

interface ISkills {
	id: string;
}

export default component$((props: ISkills) => {
	return (
		<div class="inner-container" id={props.id}>
		<div class="panel-right">
		<article class="right-inner-container">
		<h1 class='right-panel-header'>Skills</h1>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quis aspernatur fugit labore dolores, rerum nostrum officiis maiores pariatur tempora facilis, error quam officia. Sunt deleniti libero nostrum. A, vero.</p>
		</article>
		</div>
		<div class="panel-left">
			<p>
				Hi, I'm <strong>John Doe</strong>. I'm a <strong>UI/UX Designer</strong> and <strong>Front-End Developer</strong> based in New York. I have rich experience in web site design and theming and building. I also have experience in WordPress and Shopify. I am good at creating custom WordPress themes and plugins.
			</p>
			</div>
	</div>
	);
});
