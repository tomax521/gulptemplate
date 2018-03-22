
  <div id="map" class="googleMap"></div>
  <script>
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2bDvMzdrFl6ZFY-u7Imki-au8677vduM&callback=initGoogle';
    document.getElementsByTagName('head')[0].appendChild(script);
    var map = document.getElementById('map');

    function initGoogle(){
      var option = {
        "zoom":8
      };
      googleMapStart.init(option,map);
    }


    // google map plugin start
    function extend(func, props) {
      for(var prop in props) {
        if(props.hasOwnProperty(prop)) {
            func[prop] = props[prop];
        }
      }
      return func;
    }

    var googleMapStart = extend(function(){
      console.log(googleMapStart.data);
    },
    {
      data: {
        "centerLat":-34.397,
        "centerLng":150.644,
        "zoom":8,
        "markerLat":-34.397,
        "markerLng":150.644
      },
      set: function (data) {
      },
      init: function (data,map) {
        var settings = extend(this.data, data);
        var target = new google.maps.Map(map, {
          center: {lat: settings.centerLat, lng: settings.centerLng},
          zoom: settings.zoom
        });
        googleMapStart.addMarker({lat: settings.markerLat, lng: settings.markerLng}, target);
      },
      addMarker: function (location, map) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      },
      move: function (map) {
        var target = new google.maps.Map(map);
        var marker = new google.maps.Marker({
          position: {lat: -34.097, lng: 150.044},
          map: target
        });
      }
    });
    // google map plugin end
  </script>