<header class="bg-info">
		<a href="javascript:;" class="logo"></a>
		<nav>{% for nav in nav %}
			<a class="text-white" href="{{ nav.path }}">
				{% if currentLang=="zh-hk" %}{{ nav.name_tc }}
				{% elseif currentLang=="en" %}{{ nav.name_en }}{% endif %}
			</a>{% endfor %}
		</nav>
		<div class="lang">{% if currentLang=="zh-hk" %}
				<a class="btnLang text-white" href="javascript:;" data-lang="en">{{ uilang.header_locale_selector_en.en }}</a>
			{% elseif currentLang=="en" %}
				<a class="btnLang text-white" href="javascript:;" data-lang="tc">{{ uilang.header_locale_selector_zh.tc }}</a>
		{% endif %}</div>
	</header> 