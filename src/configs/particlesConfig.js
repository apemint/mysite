const particlesConfig = {

    'particles': {
        'number': {
            'value': 95,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
        'color':{
            'value':'#ffffff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width':1,
                'color':'#000000'
            },
            'polygon':{
                'nb_sides':4
            },
            'image': {
                'src': 'img/github.svg',
                'width':100,
                'height':100
            }
        },
        'opacity': {
            'value': 0.5,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
            }
        },
        "size": {
            "value": 18,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
    },
    'interactivity': {
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'repulse'
            }
        }
    }
}
export default particlesConfig;