<header>
	<nav>
		{% for nav in basic.nav %}
		<a href="{{ nav.path }}">{{ nav.nameTc }}</a>
		{% endfor %}
	</nav>
	<div class="lang">
		<a href="javascript:;" class="btnLang" data-lang="en">Eng</a>
	</div>
</header> 