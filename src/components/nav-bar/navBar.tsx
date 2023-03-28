import { component$ } from '@builder.io/qwik';
import type { IRoutes } from '~/routes';
import './navBar.css';

interface INavBar {
  selectedSection: IRoutes;
}

export default component$((props: INavBar) => {
  const routes: IRoutes[] = [
    {
      route: 'about',
    },
    {
      route: 'work',
    },
    {
      route: 'skills',
    },
  ];

  return (
    <div class="nav-bar">
      <h2>David Taylor</h2>
      <div class="spacer" />
      {routes.map((route, index) => (
        <ul key={index} onClick$={() => (props.selectedSection.route = route.route)}>
          <li class={route.route === props.selectedSection.route ? 'active-route' : ''}>
            <p>{route.route}</p>
          </li>
        </ul>
      ))}
    </div>
  );
});
