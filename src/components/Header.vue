<template>
	<header class="header">
		<h1>
			<g-link
				class="title"
				to="/"
			>{{$static.metaData.title}}</g-link>
		</h1>
		<nav>
			<ul class="nav-list">
				<li>
					<g-link
						class="nav-item"
						to="/"
						exact
					>Home</g-link>
				</li>
				<li>
					<g-link
						class="nav-item"
						to="/blog"
					>Blog</g-link>
				</li>
				<li>
					<g-link
						class="nav-item"
						to="/about"
					>About</g-link>
				</li>
				<li>
					<g-link
						class="nav-item"
						to="/contact"
					>Contact</g-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<static-query>
query {
  metaData {
    title
  }
}
</static-query>

<style lang="scss">
.header {
	padding: 1rem 0 3rem;
}

.title {
	color: #000000;
	font-size: 3rem;
	text-decoration: none;
}

.nav-list {
	display: flex;
	list-style-type: none;
	margin: 0;
}

.nav-item {
	color: #999999;
	font-size: 0.9rem;
	margin-right: 1.3rem;
	text-decoration: none;
}

.nav-item:hover {
	color: #666666;
}

.active {
	color: #333333;
}
</style>

