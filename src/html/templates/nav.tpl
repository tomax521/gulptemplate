<header>
	<nav>
		{% for mov in en.header.nav %}
		<a href="{{ mov.path }}">{{ mov.name }}</a>
		{% endfor %}
	</nav>
	<div class="lang">
		<a href="/tc">繁</a>
	</div>
</header> 