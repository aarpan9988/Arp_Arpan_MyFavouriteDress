import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
});

export class ContentCardComponent implements OnInit {
  contentList = {
    content: [
      { 
        id: 1, 
        title: 'Content 1', 
        description: 'Description for Content 1', 
        creator: 'Creator 1', 
        image: 'https://example.com/image1.jpg', 
        type: 'Type 1', 
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Content 2', 
        description: 'Description for Content 2', 
        creator: 'Creator 2', 
        image: 'https://example.com/image2.jpg', 
        type: 'Type 2', 
        tags: ['Tag3', 'Tag4'] 
      },
      { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        image: 'https://example.com/image3.jpg', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 4, 
        title: 'Content 4', 
        description: 'Description for Content 4', 
        creator: 'Creator 4', 
        image: 'https://example.com/image4.jpg', 
        type: 'Type 4', 
        tags: ['Tag7', 'Tag8'] 
      },
      { 
        id: 5, 
        title: 'Content 5', 
        description: 'Description for Content 5', 
        creator: 'Creator 5', 
        image: 'https://example.com/image5.jpg', 
        type: 'Type 5', 
        tags: ['Tag9', 'Tag10'] 
      },
      { 
        id: 6, 
        title: 'Content 6', 
        description: 'Description for Content 6', 
        creator: 'Creator 6', 
        image: 'https://example.com/image6.jpg', 
        type: 'Type 6', 
        tags: ['Tag11', 'Tag12'] 
      }
      // Add more content items if needed
    ]
  };
    constructor() {}
    ngOnInit(): void {
      console.log(this.contentList);
  }
}