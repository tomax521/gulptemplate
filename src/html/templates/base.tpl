<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title></title>
    <link href="../assets/css/main.css" rel='stylesheet' type='text/css'>


</head>

<body>
    {% include "./header.tpl" %}
    <div class="wrapper">
    {% block content %}

    {% endblock %}
    </div>
    {% include "./footer.tpl" %}
<script src="../assets/js/bundle.js"></script>
</body>
</html>