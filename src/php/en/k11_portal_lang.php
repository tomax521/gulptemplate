<?php

{% for lang in uilang %}$lang['{{ lang.name | safe }}'] = '{{ lang.en | safe }}';
{% endfor %}