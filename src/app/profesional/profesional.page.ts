import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.page.html',
  styleUrls: ['./profesional.page.scss'],
})
export class ProfesionalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  tojorge() {
    this.router.navigate(['/jorge']);
  }

  toana() {
    this.router.navigate(['/ana']);
  }
}
