import { component$ } from '@builder.io/qwik';
import KFC from '../../../assets/images/kfc.png';
import Edinbrugh from '../../../assets/images/edinburghUniversity.png';
import Medayo from '../../../assets/images/Medayo.png';
import ScottishEnterprise from '../../../assets/images/scottishEnterPrise.png';
import Waitrose from '../../../assets/images/waitrose.png';
import SRUC from '../../../assets/images/sruc.png';
import Zonal from '../../../assets/images/zonal.png';
import './work.css';

interface IWork {
  id: string;
}

export default component$((props: IWork) => {
  return (
    <div class="inner-container" id={props.id}>
      <div class="panel-right">
        <article class="right-inner-container">
          <h1 class="right-panel-header">Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus totam magni
            perspiciatis cumque vel repellat deleniti ut, temporibus maxime deserunt. Ipsa nemo
            ipsum temporibus distinctio quas voluptas animi non.
          </p>
        </article>
      </div>
      <div class="panel-left">
        <div class="outer-image-container">
          <div class="image-container">
            <img src={KFC} alt="KFC" />
          </div>
          <div class="image-container">
            <img src={Edinbrugh} alt="Edinbrugh" />
          </div>
          <div class="image-container">
            <img src={Medayo} alt="Medayo" class="image-scale" />
          </div>
          <div class="image-container">
            <img src={Waitrose} alt="Waitrose" class="image-scale" />
          </div>
          <div class="image-container">
            <img src={ScottishEnterprise} alt="ScottishEnterprise" />
          </div>

          <div class="image-container">
            <img src={SRUC} alt="SRUC" />
          </div>
          <div class="image-container">
            <img src={Zonal} alt="Zonal" />
          </div>
        </div>
      </div>
    </div>
  );
});
