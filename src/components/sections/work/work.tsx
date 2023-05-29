import { component$ } from '@builder.io/qwik';
import Exhibition from '../../../assets/images/Art-execution.png';
import './work.css';

interface IWork {
  id: string;
}

export default component$((props: IWork) => {
  return (
    <div class="inner-container" id={props.id}>
      <div class="panel-right">
        <article class="right-inner-container">
          <h1 class="right-panel-header">Jennifer Taylor</h1>
          <p>
            Hi, I'm <strong>Jennifer Taylor</strong>. As an <strong>artist</strong> and{' '}
            <strong>sculptor</strong> based in the Scottish Highlands, my work is focused on
            creating <strong>amazing art</strong> that captures the beauty of nature and highland
            life. My sculptures, deeply influenced by the surrounding landscapes, aim to convey the
            authenticity and the spirit of this remarkable region.
          </p>
          <br />
          <p>
            <strong>COME JOIN!,</strong> on Friday 2nd and Saturday 3rd of June at:{' '}
            <i>St John's church hall, Rothiemurchus, Avimore</i>
          </p>
        </article>
      </div>
      <div class="panel-left">
        <img class="exhibition-image" src={Exhibition} />
      </div>
    </div>
  );
});
