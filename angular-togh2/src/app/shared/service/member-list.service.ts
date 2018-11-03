import { Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {
  membersChanged = new Subject<Member[]>();
  edit = new Subject<number>();
  private members: Member[] = [];

  constructor() { }

  getMembers() {
    return this.members.slice();
  }

  getMember(index: number) {
    return this.members[index];
  }

  addMembers(members: Member[]) {
    this.members.push(...members);
    this.membersChanged.next(this.members.slice());
  }

  addMember(member: Member) {
    this.members.push(member);
    this.membersChanged.next(this.members.slice());
  }

  updateMember(index: number, member: Member) {
    this.members[index] = member;
    this.membersChanged.next(this.members.slice());
  }

  deleteMember(index: number) {
    this.members.splice(index, 1);
    this.membersChanged.next(this.members.slice());
  }
}
