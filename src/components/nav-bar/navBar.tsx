import { $, component$, useOn } from '@builder.io/qwik';
import type { IRoutes, ISection } from '~/routes';
import './navBar.css';

interface INavBar {
  selectedSection: IRoutes;
  sections: ISection[];
}

export default component$((props: INavBar) => {
  useOn(
    'click',
    $((event) => {
      if (props.selectedSection.route === 'about') {
        event.preventDefault();
        document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
      }
      if (props.selectedSection.route === 'work') {
        event.preventDefault();
        document.getElementById('work')!.scrollIntoView({ behavior: 'smooth' });
      }
      if (props.selectedSection.route === 'skills') {
        event.preventDefault();
        document.getElementById('skills')!.scrollIntoView({ behavior: 'smooth' });
      }
    })
  );

  return (
    <div class="nav-bar">
      <h2>David Taylor</h2>
      <div class="spacer" />
      {props.sections.map((route, index) => (
        <ul key={index} onClick$={() => (props.selectedSection.route = route.id)}>
          <li class={route.id === props.selectedSection.route ? 'active-route' : ''}>
            <p>{route.id}</p>
          </li>
        </ul>
      ))}
    </div>
  );
});
