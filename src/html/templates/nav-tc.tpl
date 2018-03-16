<header>
	<nav>
		{% for mov in tc.header.nav %}
		<a href="{{ mov.path }}">{{ mov.name }}</a>
		{% endfor %}
	</nav>
	<div class="lang">
		<a href="/en">Eng</a>
	</div>
</header> 