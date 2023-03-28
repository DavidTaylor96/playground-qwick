import { component$ } from '@builder.io/qwik';
import AboutImage from '../../../assets/images/profile.jpg';
import './about.css';

interface IAbout {
	id: string;
}

export default component$((props: IAbout) => {
	return (
		<div class="inner-container" id={props.id}>
			<div class="panel-right">
				<article class="right-inner-container">
				<h1 class='right-panel-header'>About</h1>
				<p>
					Hi, I'm <strong>John Doe</strong>. I'm a <strong>UI/UX Designer</strong> and <strong>Front-End Developer</strong> based in New York. I have rich experience in web site design and theming and building. I also have experience in WordPress and Shopify. I am good at creating custom WordPress themes and plugins.
				</p>
				</article>
			</div>
			<div class="panel-left">
				<img class="about-image" src={AboutImage} />
				</div>
		</div>
	);
});
