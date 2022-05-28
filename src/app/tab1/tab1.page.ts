import { Router, ActivatedRoute } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core"
import { Animation, AnimationController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild("button", { read: ElementRef, static: true }) button: ElementRef
  constructor(private animationCtrl: AnimationController, private router:Router, private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) {

    }

    ngOnInit() {
      const s = this.renderer2.createElement('script');
      s.type = 'text/javascript';
      s.src = '//code.tidio.co/kyhevhfcgtszgwwovsmhu0fcmpqnllzq.js';
      s.text = ``;
      this.renderer2.appendChild(this._document.body, s);}
   

    tocontent(){
      this.router.navigate(['/content']);
    }

    toprofesional(){
      this.router.navigate(['/profesional']);
    }

    toubicame(){
      this.router.navigate(['/ubicame']);
    }

    totest(){
      this.router.navigate(['/test']);
    }
}


