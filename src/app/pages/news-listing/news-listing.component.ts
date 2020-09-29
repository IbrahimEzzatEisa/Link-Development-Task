import { Component, OnInit } from '@angular/core';
 import category from '../../../category.json';
 import article from '../../../artical.json'


 interface Category {
  id: Number;
  name: String;

}

// article
interface Artical {
  sourceID: Number;
  id: Number;
  showOnHomepage: boolean;
  title: String;
  description: String;
  urlToImage: String;
  publishedAt: String;
  content: String;

}

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})


export class NewsListingComponent implements OnInit {


  
  // category array
      categorys: Category [] = category;

      // artical 
      articales: Artical []= article

      // image prop
      image: String;

  constructor() { }

  ngOnInit() {
    //  this.image= this.article.
    this.articales.map(item =>{
      item.urlToImage = item.urlToImage;
      this.image = item.urlToImage
       console.log(this.image)
      return item;

    })
  }

}
