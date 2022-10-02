import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {
    

   
  
   }

  ngOnInit() {

    // this.animationCtrl.create()
    // .addElement(document.querySelector('.name'))
    // .duration(1500)
    // .iterations(Infinity)
    // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    // .fromTo('opacity', '1', '0.2');
    
    setTimeout(()=>{
      this.router.navigate(['login']);
    }, 8000);
    
  };


}
