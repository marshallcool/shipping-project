import { Component, OnInit, AfterContentInit } from '@angular/core';

import '../../../../node_modules/owl.carousel/dist/owl.carousel';
declare var jQuery: any;

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterContentInit {
  user: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.isAuth();
  }

  $element: any;

  // Slider parallax
  ngAfterContentInit() {
    jQuery('#internal-page-product .owl-carousel-internal-page').owlCarousel({
      stagePadding: 0,
      loop: true,
      margin: 15,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 4
        },
        500: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 4
        },
        1000: {
          items: 4
        }
      }
    });

    jQuery('#nsk-firm .owl-carousel-nsk').owlCarousel({
      stagePadding: 0,
      loop: true,
      margin: 0,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 4
        },
        768: {
          items: 4
        },
        // 1000: {
        //   items: 5
        // },
        1200: {
          items: 4
        },
        1255: {
          items: 6
        }
      }
    });

    jQuery('#reviews-firm .owl-carousel-firms').owlCarousel({
      // stagePadding: 50,
      loop: true,
      margin: 12,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    });
    jQuery('.owl-carousel').owlCarousel({
      // stagePadding: 50,
      loop: true,
      margin: 50,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    });
    const Magnetic: any = {
      elements: [],
      getY: function (event) {
        const yPos = event.pageY - window.innerHeight / 2;
        return yPos;
      },
      getX: function (event) {
        const xPos = event.pageX - window.innerWidth / 2;
        return xPos;
      },
      positionElements: function (event) {
        const elements = Magnetic.elements[0];
        for (let i = 0; i < elements.length; i++) {
          const element = document.getElementById(Magnetic.elements[0][i].id);
          const adjusetedX = (elements[i].speed / 15 * Magnetic.getX(event));
          const adjusetedY = (elements[i].speed / 15 * Magnetic.getY(event));
          element.style.transform = 'translate3d(' + adjusetedX + 'px,0,0)';
        }
      },
      bindEvents: function () {
        this.$element = document.getElementById('parall');
        this.$element.onmousemove = Magnetic.positionElements;
      },
      init: function () {
        this.elements.push(arguments);
        this.bindEvents();
      }
    };
    Magnetic.init(
      {
        id: 'Layer_1',
        speed: 0.15
      },
      {
        id: 'Layer_2',
        speed: 0.25
      }, {
        id: 'Layer_3',
        speed: 0.5
      }, {
        id: 'Layer_4',
        speed: 1.25
      }, {
        id: 'Layer_5',
        speed: 0.75
      }, {
        id: 'Layer_6',
        speed: 0.65
      }, {
        id: 'Layer_7',
        speed: 0.45
      }, {
        id: 'Layer_8',
        speed: 0.75
      }, {
        id: 'Layer_9',
        speed: 0.25
      }, {
        id: 'Layer_10',
        speed: 0.25
      }, {
        id: 'Layer_11',
        speed: 0.25
      }, {
        id: 'Layer_12',
        speed: 0.25
      }, {
        id: 'Layer_13',
        speed: 0.25
      }, {
        id: 'Layer_14',
        speed: 0.25
      }, {
        id: 'Layer_15',
        speed: 1.25
      },
      {
        id: 'Layer_16',
        speed: 1.25
      });
  }

}
