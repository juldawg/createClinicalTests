import { Component, OnInit } from '@angular/core';
import { ClinicalTest } from '../clinicalTest';
import { ClinicalTestsCategory } from '../clinicalTestsCategory';
import { ClinicalTestService } from '../clinicalTest.service';

@Component({
  selector: 'app-clinicalTests',
  templateUrl: './clinicalTests.component.html',
  styleUrls: ['./clinicalTests.component.css']
})
export class ClinicalTestsComponent implements OnInit {

  clinicalTests: ClinicalTest[] = [];

  clinicalTestsCategories: ClinicalTestsCategory[] = [];

  onOk(clinicalTest: ClinicalTest,category : string, description : string, result : string): void {
    clinicalTest.category=category;
    clinicalTest.description=description;
    clinicalTest.result=result;
  }

  onDelete(clinicalTest: ClinicalTest): void {
    this.clinicalTests = this.clinicalTests.filter(obj => obj !== clinicalTest);
  }

  onAdd(): void{
    const test: ClinicalTest = {category : "", description : "", result : ""} ;
    this.clinicalTests.push(test);
  }

  getClinicalTests(): void {
    this.clinicalTestsService.getClinicalTests()
        .subscribe(clinicalTests => this.clinicalTests = clinicalTests)
  }

  getClinicalTestsCategories(){
    this.clinicalTestsService.getClinicalTestsCategories()
        .subscribe(x => {
          this.clinicalTestsCategories = x.clinicalTestsCategories;
        });
  }
  constructor(private clinicalTestsService : ClinicalTestService) { }

  ngOnInit(): void {
    this.getClinicalTests();
    this.getClinicalTestsCategories();
  }

}
