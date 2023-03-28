import { $, component$, useOnDocument } from '@builder.io/qwik';
import './skills.scss';

interface ISkills {
  id: string;
}

export default component$((props: ISkills) => {
  useOnDocument(
    'mouseover',
    $((event) => {
      // TODO: pause the animation when the mouse is over the sphere
      const sphere = document.getElementById('sphere')!;
      if (event.target === sphere) {
        sphere.classList.add('paused');
      }
    })
  );

  useOnDocument(
    'mouseleave',
    $((event) => {
      // TODO: resume the animation when the mouse leaves the sphere
      const sphere = document.getElementById('sphere')!;
      if (event.target === sphere) {
        sphere.classList.remove('paused');
      }
    })
  );

  return (
    <div class="inner-container" id={props.id}>
      <div class="panel-right">
        <article class="right-inner-container">
          <h1 class="right-panel-header">Skills</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quis aspernatur fugit
            labore dolores, rerum nostrum officiis maiores pariatur tempora facilis, error quam
            officia. Sunt deleniti libero nostrum. A, vero.
          </p>
        </article>
      </div>
      <div class="panel-left">
        <div id="sphere">
          <div class="skill-item">
            <p>UX/UI Design</p>
          </div>
          <div class="skill-item">
            <p>Front End Development</p>
          </div>
          <div class="skill-item">
            <p>Mobile Development</p>
          </div>
          <div class="skill-item">
            <p>Comunication</p>
          </div>
          <div class="skill-item">
            <p>Problem Solving</p>
          </div>
          <div class="skill-item">
            <p>Leadership</p>
          </div>
          <div class="skill-item">
            <p>Collaboration</p>
          </div>
          <div class="skill-item">
            <p>Creativity</p>
          </div>
          <div class="skill-item">
            <p>Adaptability</p>
          </div>
        </div>
      </div>
    </div>
  );
});
