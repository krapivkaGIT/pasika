var APP_DATA = {
  "scenes": [
    {
      "id": "0-korpus",
      "name": "korpus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.18035068937277643,
        "pitch": -0.18001747040324645,
        "fov": 1.5121467513872453
      },
      "linkHotspots": [
        {
          "yaw": 1.730903672262798,
          "pitch": 0.1445619593458236,
          "rotation": 0.7853981633974483,
          "target": "3-docharunku"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1338085759862473,
          "pitch": -0.051433562972357905,
          "title": "Кафедра Бджільництва",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Кафедра Бджільництва НУБІП України</span><div><span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\"><br></span></div><div><span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\"><br></span></div>"
        }
      ]
    },
    {
      "id": "1-zumivnuk",
      "name": "zumivnuk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0436559790092828,
        "pitch": -0.24348114892256234,
        "fov": 1.5121467513872453
      },
      "linkHotspots": [
        {
          "yaw": -1.6399149864632516,
          "pitch": 0.07929436555945912,
          "rotation": 0,
          "target": "0-korpus"
        },
        {
          "yaw": 0.561298375307766,
          "pitch": 0.25435309767632575,
          "rotation": 5.497787143782138,
          "target": "2-pasika"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.769539847285971,
          "pitch": -0.003899902939355826,
          "title": "Зимівник",
          "text": "Тут зимують бджоли ....<div><br></div>"
        }
      ]
    },
    {
      "id": "2-pasika",
      "name": "pasika",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.769428876801628,
          "pitch": 0.0164045947390985,
          "rotation": 0,
          "target": "1-zumivnuk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Контрольні ваги",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-docharunku",
      "name": "doCharunku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5465259949779533,
          "pitch": 0.0838553644611757,
          "rotation": 5.497787143782138,
          "target": "0-korpus"
        },
        {
          "yaw": 0.30068609937578294,
          "pitch": 0.262299744345766,
          "rotation": 0,
          "target": "4-charunka"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0426539435545443,
          "pitch": 0.020071925702840332,
          "title": "Для бесвд про бджоли",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-charunka",
      "name": "charunka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4144281547213904,
          "pitch": 0.21787375665742026,
          "rotation": 5.497787143782138,
          "target": "3-docharunku"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5174684147935302,
          "pitch": 0.010182190592397333,
          "title": "ППУ вулик",
          "text": "Text"
        },
        {
          "yaw": -1.7284478353799742,
          "pitch": 0.0295327306452009,
          "title": "Очеретяний вулик",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Pasika",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
