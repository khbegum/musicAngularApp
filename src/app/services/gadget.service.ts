import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Gadget} from '../model/gadget.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GadgetService {
  gadgets:Gadget[]=[];
serviceUrl:string="http://localhost:3004/api/gadgets/"
  constructor(private http:HttpClient) { }
  getGadgets():Observable<Gadget[]>{
    return this.http.get<Gadget[]>(this.serviceUrl);
  }
  getGadgetById(_id):Observable<Gadget[]>{
    return this.http.get<Gadget[]>(this.serviceUrl+_id);
  }
  updateGadgetById(id,newGadget){
    return this.http.put(this.serviceUrl+id,newGadget);

  }
  addGadget(name,type,colour,cost,poster,description){
alert(name);
let newGadget={name:name,type:type,colour:colour,cost:cost,poster:poster,description:description}
return this.http.post(this.serviceUrl,newGadget);
  }
  deleteGadget(gadget){
alert(gadget._id);
return this.http.delete(this.serviceUrl+gadget._id);
  }
}
