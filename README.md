
# MEAN FULL STACK SCHOOLING TOOLS
https://angular-fqf62s.stackblitz.io

<mat-form-field>
    <button mat-button color="primary" (click)="nextDate()">Primary</button>
  <input matInput [matDatepicker]="picker1" placeholder="Angular forms" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
  <mat-datepicker #picker1></mat-datepicker>
</mat-form-field>

<mat-form-field>
  <input matInput [matDatepicker]="picker2" placeholder="Angular forms (w/ deserialization)"
         [formControl]="serializedDate">
  <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
  <mat-datepicker #picker2></mat-datepicker>
</mat-form-field>

<mat-form-field>
  <input matInput [matDatepicker]="picker3" placeholder="Value binding" [value]="date.value">
  <mat-datepicker-toggle matSuffix [for]="picker3"></mat-datepicker-toggle>
  <mat-datepicker #picker3></mat-datepicker>
</mat-form-field>


<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>

Schooling Tool is a RESTful API server and web application built with the MEAN (Angular 2) stack. It has below features

1) Polling
2) New Posting
3) Dragon


Mongodb:

#LOGIN LOCAL MONGODB by robomongo
mongo
#Create user wxadmin
use wxpro;
db.createUser({ user: 'wxadmin', pwd: 'wxadmin', roles: ['dbAdmin', 'readWrite']});
#Exit
exit
