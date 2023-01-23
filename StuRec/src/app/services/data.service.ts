import { Injectable } from '@angular/core';
import { College } from '../models/college';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  colleges: College[] = [
    {
      id: 'ABC1', collegeName: 'College AABB 1', userEmail: 'AABB@gmail.com', password: 'Password1',
      address: 'Address 123', city: 'City1', state: 'State A', zip: '12345', phone: '9849011122',
      instituteURL: 'AABB.com'
    },
    {
      id: 'ABC2', collegeName: 'College AACC 2', userEmail: 'AABB@gmail.com', password: 'Password2',
      address: 'Address 123', city: 'City2', state: 'State B', zip: '12346', phone: '9849011133',
      instituteURL: 'AACC.com'
    }
  ];

  companies: Company[] = [
    {
      id: 'KKC1', companyName: 'Company AAPP 1', userEmail: 'AAPP@gmail.com', password: 'Password3',
      address: 'Address 456', city: 'Cityk', state: 'StateK', zip: '45451', phone: '7849001122',
      companyURL: 'AAPP.com'
    },
    {
      id: 'KKC2', companyName: 'Company AAQQ 2', userEmail: 'AAQQ@gmail.com', password: 'Password4',
      address: 'Address 457', city: 'CityQ', state: 'StateQ', zip: '45452', phone: '7849001133',
      companyURL: 'AAQQ.com'
    }
  ]
  constructor() { }
}
