<footer>{% set footerNav = nav %}
		<nav>{% for nav in footerNav %}
			<a href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.name_zh }}
				{% elseif currentLang=="en" %}{{ nav.name_en }}{% endif %}
			</a>{% endfor %}
		</nav>
		<ul>{% set footerSocial = social %}{% for soc in footerSocial %}
			<a href="{{ soc.path }}" class="{{ soc.class_name }}"></a>
		{% endfor %}</ul>
		<p>{% set footerCopyright = copyright %}
		{% if currentLang=="zh-hk" %}{{ footerCopyright[0].zh }}&copy;2018
		{% elseif currentLang=="en" %}{{ footerCopyright[0].en }}&copy;2018
		{% endif %}</p>
	</footer>