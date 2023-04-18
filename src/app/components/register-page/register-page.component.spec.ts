import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class RegisterPageComponent implements OnInit {
  form: any = {
  username: null,
  password: null,
  firstName: null,
  lastName: null
}
constructor(private http: HttpClient,
  private route: Router) { }

ngOnInit(): void {
}

onSubmit(): void {
  const {
    username, password, firstName, lastName
  } = this.form

  console.log(this.form);
  
  this.http.post("https://localhost:7199/api/Login/register", this.form, {responseType: 'text'}).subscribe(data => {
    this.route.navigate(['/login'])
    })
  }
}
