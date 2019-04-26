import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: []
})
export class CustomDatatableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.LoadScript('assets/datatables/task_manager_list.js')
  }
  public LoadScript(url:string){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
