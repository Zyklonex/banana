import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<div><button type="button">Happy Banana!</button></div>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
