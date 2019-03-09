import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';


export interface Client {
  name: string;
  address: string;
  city: string;
  phone: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'address', 'details'];
  dataSource: Client;
  constructor(private readonly clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe( response => {
      const client: Client = {
        name: response.name,
        address: response.address,
        city: response.city,
        phone: response.phone
      };
      this.dataSource = client;
    });
  }

}
