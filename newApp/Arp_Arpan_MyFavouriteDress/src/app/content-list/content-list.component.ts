import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
   
  
  constructor(){
  this.contentArray.push(
    
      { 
        id: 1, 
        title: 'Content 1', 
        description: 'Description for Content 1', 
        creator: 'Creator 1', 
        imgURL: 'https://th.bing.com/th/id/R.4fc853a0ba16699313a93391c7416f4b?rik=uHMVensdv7JncA&riu=http%3a%2f%2fdzasv7x7a867v.cloudfront.net%2fproduct_photos%2f46820830%2fQQ_E5_9B_BE_E7_89_8720161226102324_original.jpg&ehk=%2bRgXk1t0Bx%2baR%2fRwo%2b9e21H%2fcovKeGvnFMG8RmOAOSU%3d&risl=&pid=ImgRaw&r=0', 
        type: "", 
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Content 2', 
        description: 'Description for Content 2', 
        creator: 'Creator 2', 
        imgURL: 'https://i.pinimg.com/736x/44/2e/d8/442ed81d01e50c0483232da0701f0fcb.jpg', 
        type: 'Type 2', 
        tags: [] 
      },
      { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: '', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://i.pinimg.com/originals/dd/62/03/dd6203c8eec897e6ab629cfc1a3bc1f9.jpg', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },  { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://i.pinimg.com/originals/b6/6e/d3/b66ed34831b228acf942ddb1756f87f8.jpg', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 3, 
        title: 'Content 3', 
        description: 'Description for Content 3', 
        creator: 'Creator 3', 
        imgURL: 'https://example.com/image3.jpg', 
        type: 'Type 3', 
        tags: ['Tag5', 'Tag6'] 
      }
     );
    

   
    




    
    
    
      // Add more content items if needed
    }

}
