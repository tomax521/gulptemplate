<header>
	<nav>
		{% for nav in basic.nav %}
		<a href="{{ nav.path }}">{{ nav.nameEn }}</a>
		{% endfor %}
	</nav>
	<div class="lang">
		<a href="javascript:;" class="btnLang" data-lang="tc">繁</a>
	</div>
</header> 