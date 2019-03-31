import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Monkey Time</h1>
				<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Banana</Link>
			<Link activeClassName={style.active} href="/profile/Monkey">Monkey</Link>
			<Link activeClassName={style.active} href="/profile/Kong">Kong</Link>
		</nav>
	</header>
);

export default Header;
