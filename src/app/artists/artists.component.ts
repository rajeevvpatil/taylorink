import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})

export class ArtistsComponent implements OnInit {

  public taylorDescription: string =  `"As a tattoo artist, I am constantly pushing myself to improve my craft and bring my clients the best tattoo experience possible. `+
  `I'm Taylor, and I specialize in freestyle tattooing, which allows me to create custom designs on the spot.`+
  ` This gives me the freedom to really tap into my creativity and come up with one-of-a-kind tattoos.`+
  ` I take great pride in my work and strive to deliver high-quality tattoos that you will love for years to come. `+
  `Whether you want for a small and simple tattoo or a large and complex piece of art, I will help bring your tattoo vision to life."`;
  constructor() { }

  ngOnInit(): void {
  }

}
