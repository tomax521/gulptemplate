<footer>{% set footerNav = nav %}
		<nav>{% for nav in footerNav %}
			<a href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.name_tc | safe }}
				{% elseif currentLang=="en" %}{{ nav.name_en | safe }}{% endif %}
			</a>{% endfor %}
		</nav>
		<ul>{% set footerSocial = social %}{% for soc in footerSocial %}
			<a href="{{ soc.path }}" class="{{ soc.class_name }}"></a>
		{% endfor %}</ul>
		<p>{% if currentLang=="zh-hk" %}{{ uilang.footer_copyright.tc | safe }}
		{% elseif currentLang=="en" %}{{ uilang.footer_copyright.en | safe }}{% endif %}</p>
	</footer>