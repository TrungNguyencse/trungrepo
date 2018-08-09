import { Component, OnInit, Input } from '@angular/core';
declare var $: any;




@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() inputfilm;

  ngOnChanges(){
    if(this.inputfilm){
      console.log(this.inputfilm);
    }
  }
 /* films = [
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  },
   { imgurl: "../assets/img/endlessroom.png", view: "120,003k", sypnosis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis massa a risus varius dictum. Suspendisse consequat ullamcorper arcu, in dapibus tellus dapibus vel. In vitae porttitor ante, cursus.", title: "ENDLESS ROOM"  }
];
/* fake film data*/

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.category-slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
      });
      /*...*/
    })
  }

}
