import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home, Home on the range</h1>
		<div><button type="button">Happy Banana!</button></div>
		<div><img src={require('./happybanana.jpg')}/></div>
		<p>This is my first attempting at coding and programming. It is fun and a PAIN IN THE ASS! anything worth having is worth working hard for.</p>
	</div>
);

export default Home;
