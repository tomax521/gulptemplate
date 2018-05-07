<?php

{% for lang in uilang %}$lang['{{ lang.name | safe }}'] = '{{ lang.sc | safe }}';
{% endfor %}