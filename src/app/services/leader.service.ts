import { Injectable } from '@angular/core';
import { Leader} from '../shared/leader'
import { LEADERS  } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders():Promise<Leader[]>{
    return new Promise(resolve=>{
      setTimeout(() => resolve(LEADERS),2000)
    })};
  getLeader(id: number): Promise<Leader>{
return new Promise(resolve => { 
  setTimeout(() => resolve(LEADERS.filter((Leader) => {Leader.id===id.toString()}) [0]),2000)
  })};
  
  getFeaturedLeader(): Promise<Leader> {
return new Promise(resolve =>{setTimeout(() =>resolve(LEADERS.filter((Leader) => Leader.featured)[0]),2000);
})}
}