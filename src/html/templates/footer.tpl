<footer class="bg-info">{% set footerNav = nav %}
		<nav>{% for nav in footerNav %}
			<a class="text-white" href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.name_tc | safe }}
				{% elseif currentLang=="en" %}{{ nav.name_en | safe }}{% endif %}
			</a>{% endfor %}
		</nav>
		<div class="socialBar">{% set footerSocial = social %}{% for soc in footerSocial %}
			<a class="text-white" href="{{ soc.path }}" class="{{ soc.class_name }}"></a>
		{% endfor %}</div>
		<div class="copyright text-white">{% if currentLang=="zh-hk" %}{{ uilang.footer_copyright.tc | safe }}
		{% elseif currentLang=="en" %}{{ uilang.footer_copyright.en | safe }}{% endif %}</div>
	</footer>