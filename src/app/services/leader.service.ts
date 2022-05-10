import { Injectable } from '@angular/core';
import { Leader} from '../shared/leader'
import { LEADERS  } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders():Leader[]{
    return LEADERS;
  }
  getLeader(id: number): Leader{
return LEADERS.filter((Leader) => {Leader.id===id.toString()}) [0];
  }
  getFeaturedLeader(): Leader {
return LEADERS.filter((Leader) => Leader.featured)[0];
  }
}