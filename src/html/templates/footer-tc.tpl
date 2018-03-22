<footer>
	{% set footer = basic %}
	<nav>
		{% for nav in footer.nav %}
		<a href="{{ nav.path }}">{{ nav.nameTc }}</a>
		{% endfor %}
	</nav>
	<ul>
		{% for soc in footer.social %}
		<a href="{{ soc.path }}" class="{{ soc.class }}"></a>
		{% endfor %}
	</ul>
	<p>{{ footer.copyrightTc }}&copy;2018</p>
</footer>