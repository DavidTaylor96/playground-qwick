import { component$ } from '@builder.io/qwik';
import './navBar.css'

export default component$(() => {
	return (
		<div class="nav-bar">
      <h2>David Taylor</h2>
      <ul>
        <li><p>About</p></li>
        <li><p>Skills</p></li>
        <li><p>Work</p></li>
      </ul>
		</div>
	);
});
