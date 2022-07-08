import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op = "";
  var1 = 0;
  var2 = 0;
  resultat = 0;
  operateur = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res) => {
      this.op = res.get('op') ?? "";
      this.var1 = Number(res.get('var1') ?? "");
      this.var2 = Number(res.get('var2') ?? "");
      if (this.op == 'plus') {
        this.resultat = this.var1 + this.var2;
        this.operateur = "+";
      } else if (this.op == 'moins') {
        this.resultat = this.var1 - this.var2;
        this.operateur = "-";
      } else if (this.op == 'fois') {
        this.resultat = this.var1 * this.var2;
        this.operateur = "*";
      } else if (this.op == 'div') {
        this.resultat = this.var1 / this.var2;
        this.operateur = "/";
      }
    })
  }
}