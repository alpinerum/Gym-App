import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.get<Product[]>('http://localhost:3000/products/getProducts', options);
  }
  addProduct(form: any):Observable<Product[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.post<Product[]>('http://localhost:3000/products/addProduct', form, options);
  }
  changeStock(name: any, quantity: number):Observable<Product[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.patch<Product[]>(`http://localhost:3000/products/changeStock/${name}/${quantity}`, options);

  }
  filterProducts(category: any):Observable<Product[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.get<Product[]>(`http://localhost:3000/products/getProducts/${category}`, options);
  }
  deleteProduct(name: any):Observable<Product[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.delete<Product[]>(`http://localhost:3000/products/deleteProduct/${name}`, options);
  }
}
