<header>
		<nav>{% for nav in nav %}
			<a href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.name_tc }}
				{% elseif currentLang=="en" %}{{ nav.name_en }}{% endif %}
			</a>{% endfor %}
		</nav>
		<div class="lang">{% if currentLang=="zh-hk" %}
				<a href="javascript:;" class="btnLang" data-lang="en">{{ uilang.header_locale_selector_en.en }}</a>
			{% elseif currentLang=="en" %}
				<a href="javascript:;" class="btnLang" data-lang="tc">{{ uilang.header_locale_selector_zh.tc }}</a>
		{% endif %}</div>
	</header> 