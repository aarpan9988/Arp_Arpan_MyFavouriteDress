import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  template: `<ul>    @for (color of contentList; track color) {
    <li>{{ color.id }}</li>    }
  </ul>`,
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();
  colors = ["Red", "Blue", "White"];
  constructor() {
    // Adding at least 3 valid items
    this.contentList.add({ id: 1, title: 'Item 1', description: 'Description 1', creator: 'Creator 1', imgURL: 'image1.jpg', type: 'Type 1' });
    this.contentList.add({ id: 2, title: 'Item 2', description: 'Description 2', creator: 'Creator 2', imgURL: 'image2.jpg', type: 'Type 2' });
    this.contentList.add({ id: 3, title: 'Item 3', description: 'Description 3', creator: 'Creator 3', imgURL: 'image3.jpg', type: 'Type 3' });
  }

  ngOnInit(): void {
    for ( let i=0 ; i<this.contentList.content.length; i++)
    console.log(this.contentList.content[i])
  }
}
