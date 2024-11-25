import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { Model3Component } from "./component/model/model3/model3.component";
import { ModelYComponent } from "./component/model/model-y/model-y.component";
import { ModelxComponent } from "./component/model/modelx/modelx.component";
import { ModelsComponent } from "./component/model/models/models.component";
import { ExperieciaComponent } from "./component/experiecia/experiecia.component";
import { EnergiaSolarComponent } from "./component/energia-solar/energia-solar.component";
import { SomosTeslaComponent } from "./component/somos-tesla/somos-tesla.component";
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Model3Component, ModelYComponent, ModelxComponent, ModelsComponent, ExperieciaComponent, EnergiaSolarComponent, SomosTeslaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teslaCopia';
}
