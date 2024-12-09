import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devshop } from '../interface/devshop';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DevshopService  {

constructor( private http :HttpClient) { }
 
private apiUrl: string  ="http://localhost:4000/api/products"

// obtener todo los productos
getAllProduct():Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl)
}
// obtener todo los productos por colecion

getAllProductLenguage(leguage:string):Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'/coleccion/lenguage/'+leguage)
}
getProduct(name:string,tipo_prod:string):Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'/'+name+'/'+tipo_prod);
 }
 
 getProductColeccion():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrl+'/coleccion')
 }
 getColeccionProd(collecion:string):Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'/coleccion/producto/'+collecion)
 }
//  /coleccion/producto/:prod/:info
 getProcutcInfo(nombre_colecion:string,nombre_prod:string):Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'/coleccion/producto/'+nombre_colecion+'/'+nombre_prod)
 }
}
