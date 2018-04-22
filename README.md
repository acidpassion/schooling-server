
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
