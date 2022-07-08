import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  produit: Produit = {};
  constructor(private ps: ProduitService) { }

  ngOnInit(): void {
    this.initProduit();
  }
  ajouterProduit() {
    this.ps.addProduct(this.produit).subscribe(res => {
      this.initProduit();
      this.produit = {};
    })

  }
  supprimerProduit(id = 0) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.initProduit();
    })

  }
  initProduit() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    });
  }
}