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
      if (props.selectedSection.route === 'exhibition') {
        event.preventDefault();
        document.getElementById('exhibition')!.scrollIntoView({ behavior: 'smooth' });
      }
    })
  );

  return (
    <div class="nav-bar">
      <h2>Jenifer Taylor</h2>
      <div class="spacer" />
      {props.sections.map((route, index) => (
        <ul
          key={index}
          onClick$={() => {
            if (props.selectedSection.route !== route.id) {
              props.selectedSection.route = route.id;
            }
          }}
        >
          <li class={route.id === props.selectedSection.route ? 'active-route' : ''}>
            <p>{route.id}</p>
          </li>
        </ul>
      ))}
    </div>
  );
});
