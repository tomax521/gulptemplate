<header>
		<nav>{% for nav in basic.nav %}
			<a href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.nameTc }}
				{% elseif currentLang=="en" %}{{ nav.nameEn }}{% endif %}
			</a>{% endfor %}
		</nav>
		<div class="lang">{% if currentLang=="zh-hk" %}
				<a href="javascript:;" class="btnLang" data-lang="en">Eng</a>
			{% elseif currentLang=="en" %}
				<a href="javascript:;" class="btnLang" data-lang="tc">繁</a>
		{% endif %}</div>
	</header> 