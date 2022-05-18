import { Injectable } from '@angular/core';
import { Leader} from '../shared/leader'
import { LEADERS  } from '../shared/leaders';
import {of, Observable} from 'rxjs'
import {delay} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders():Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
    };
  getLeader(id: number): Observable<Leader>{
return of(LEADERS.filter((Leader) => {Leader.id===id.toString()}) [0]).pipe(delay(2000));
  };
  
  getFeaturedLeader(): Observable<Leader> {
return of(LEADERS.filter((Leader) => Leader.featured)[0]).pipe(delay(2000));
}
}