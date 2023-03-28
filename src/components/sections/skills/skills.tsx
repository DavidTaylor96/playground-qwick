import { component$ } from '@builder.io/qwik';
import './skills.css';

interface ISkills {
  id: string;
}

export default component$((props: ISkills) => {
  const skills = [
    'UX/UI Design',
    'Front End Development',
    'Mobile Development',
    'Comunication',
    'Problem Solving',
    'Leadership',
    'Collaboration',
    'Creativity',
    'Adaptability',
  ];
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
        {skills.map((skill, index) => (
          <div key={index} class="skill-container">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
