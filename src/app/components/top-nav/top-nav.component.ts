import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface ModelObject {
  name: string
  path: string
  withAnimation: boolean  
}

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
  modelList!: ModelObject[];
  @Output() displayModel = new EventEmitter<string>();
  
  ngOnInit(): void {
      this.modelList = [
        {name: 'Seagull', path: 'models/Seagull_Flying.fbx', withAnimation: true},
        {name: 'Crab', path: 'models/Crab.fbx', withAnimation: true},
        {name: 'Pagoda', path: 'models/Pagoda.fbx', withAnimation: false},
        {name: 'Carriage', path: 'models/Carriage.fbx', withAnimation: false},
        {name: 'Princess', path: 'models/Princess.fbx', withAnimation: false},
        
      ]
  }
  
  onSelectModel(modelPath: string) {
    this.displayModel.emit(modelPath);
  }
}
