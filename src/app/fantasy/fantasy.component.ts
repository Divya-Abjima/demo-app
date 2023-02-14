import { Component } from '@angular/core';

@Component({
  selector: 'app-fantasy',
  template: `<p>action</p>
  <div class="container">
      <div class="card">
          <img src="https://assets2.rockpapershotgun.com/ixion-header.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/ixion-header.jpg" alt="">
          <p>Ixion</p>
      </div>
      <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHxzj0g79E597_xwvUMXvulOMKlKiuldELTNmhnZ27f5T-gOQLqnEvq4YHgSLa1ICU4w&usqp=CAU" alt="">
          <p>Apex Legends</p>
      </div>
      <div class="card">
          <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/afsxs3xawu4w0o62_1603716952.jpeg" alt="">
          <p>Valorant</p>
      </div>
      <div class="card">
          <img src="https://media.wired.com/photos/5a50025d05e3623774264b9c/125:94/w_1374,h_1033,c_limit/IndieGame-FeatureArt.jpg" alt="">
          <p>Getting over it</p>
      </div>
      <div class="card">
          <img src="https://www.innersloth.com/wp-content/uploads/2021/06/hellowhatanicesurprise.png" alt="">
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
export class FantasyComponent {

}
