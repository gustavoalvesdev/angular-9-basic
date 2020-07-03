import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name : string = 'First Component'
  data : object = {
    'name' : 'Gustavo',
    'email' : 'gustavoalvesdasilva@outlook.com'
  }
  currency : Number = 19.90

  constructor(private storage : StorageService) { }

  ngOnInit(): void {  
  }

  showAnything(name) : void {
    this.storage.add('test', name)
  }

}
