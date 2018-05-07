<?php

{% for lang in uilang %}$lang['{{ lang.name | safe }}'] = '{{ lang.tc | safe }}';
{% endfor %}