import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `
    <div>
      <h1>{{appTitle}}</h1>
      <pm-products></pm-products>
    </div>
`,
})
export class AppComponent  {
  appTitle = 'Acme Product Management';
}
