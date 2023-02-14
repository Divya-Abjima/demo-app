import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `<p>action</p>
  <div class="container">
      <div class="card">
          <img src="" alt="image1">
          <p>Ixion</p>
      </div>
      <div class="card">
          <img src="" alt="image2">
          <p>Apex Legends</p>
      </div>
      <div class="card">
          <img src="" alt="image3">
          <p>Valorant</p>
      </div>
      <div class="card">
          <img src="" alt="image4">
          <p>Getting over it</p>
      </div>
      <div class="card">
          <img src="" alt="image5">
          <p>Among us</p>
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
export class BoardComponent {

}
