import { Component } from '@angular/core';

@Component({
  selector: 'app-brain-teasers',
  template: `<p>action</p>
  <div class="container">
      <div class="card">
          <img src="" alt="image1">
          <p>1</p>
      </div>
      <div class="card">
          <img src="" alt="image2">
          <p>2</p>
      </div>
      <div class="card">
          <img src="" alt="image3">
          <p>3</p>
      </div>
      <div class="card">
          <img src="" alt="image4">
          <p>4</p>
      </div>
      <div class="card">
          <img src="" alt="image5">
          <p>5</p>
      </div>
                      
  </div>
  `,
  styles: [`p {
    color: white;
}
.container {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    margin: auto;
    justify-content: space-evenly;
}
.card {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 15%;
    margin:40px;
    padding:10px;
}
.card p {
    text-align: center;
}
img {
    height: 200px;
}
.card:hover {
    box-shadow: 0px 3px 5px rgba(255, 255, 255, 0.695);
}`]
})
export class BrainTeasersComponent {

}
