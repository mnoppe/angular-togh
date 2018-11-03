import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HeroService } from 'src/app/shared/service/hero.service';
import { hostElement } from '@angular/core/src/render3/instructions';
import { Hero } from '../hero-list/hero.model';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  id: number;
  editMode = false;
  formHero: FormGroup;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  onSubmit() {
    if (this.editMode) {
      this.heroService.updateHero(this.id, this.formHero.value);
    } else {
      this.heroService.addHero(this.formHero.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddMember() {
    (<FormArray>this.formHero.get('members')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'since': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'to': new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/)),
        'instrument': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteMember(index: number) {
    (<FormArray>this.formHero.get('members')).removeAt(index);
  }

  private initForm() {
    let heroName = '';
    let heroImagePath = '';
    let heroDescription = '';
    const heroMembers = new FormArray([]);

    if (this.editMode) {
      const hero = this.heroService.getHero(this.id);
      heroName = hero.name;
      heroImagePath = hero.imagePath;
      heroDescription = hero.description;
      if (hero['members']) {
        for (const member of hero.members) {
          heroMembers.push(
            new FormGroup({
              'name': new FormControl(member.name, Validators.required),
              'since': new FormControl(member.since, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'to': new FormControl((member.to === null) ? new Date().getFullYear() : member.to, Validators.pattern(/^[1-9]+[0-9]*$/)),
              'instrument': new FormControl(member.instrument, Validators.required)
            })
          );
        }
      }
    }
    this.formHero = new FormGroup({
      'name': new FormControl(heroName, Validators.required),
      'imagePath': new FormControl(heroImagePath, Validators.required),
      'description': new FormControl(heroDescription, Validators.required),
      'members': heroMembers
    });
  }

}
