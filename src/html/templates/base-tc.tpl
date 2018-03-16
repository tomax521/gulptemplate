<!DOCTYPE html>
<html lang="{% block pageLang %}en{% endblock %}">
  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="description">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">
    <title>{% block pageTitle %}Title{% endblock %}</title>
    {% block pageStyle %}<link rel="stylesheet" type="text/css" href="/assets/css/main.css">{% endblock %}
  </head>
  <body>
    {% include "./nav-tc.tpl" %}
    {% block content %}
    {% endblock %}
    {% include "./footer-tc.tpl" %}
    {% block pageScript %}<script src="/assets/js/bundle.js"></script>{% endblock %}

    
   <!--    {% set email = test %}
      {% block title %}
        <h1>{{email.title}}</h1>
      {% endblock %} -->
  </body>
</html>
