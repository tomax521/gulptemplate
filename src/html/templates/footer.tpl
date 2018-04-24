<footer>{% set footer = basic %}
		<nav>{% for nav in footer.nav %}
			<a href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.nameTc }}
				{% elseif currentLang=="en" %}{{ nav.nameEn }}{% endif %}
			</a>{% endfor %}
		</nav>
		<ul>{% for soc in footer.social %}
			<a href="{{ soc.path }}" class="{{ soc.class }}"></a>
		{% endfor %}</ul>
		<p>
			{% if currentLang=="zh-hk" %}{{ footer.copyrightTc }}&copy;2018
			{% elseif currentLang=="en" %}{{ footer.copyrightEn }}&copy;2018
		{% endif %}</p>
	</footer>