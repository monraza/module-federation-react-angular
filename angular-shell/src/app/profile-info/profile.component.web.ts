import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';

bootstrapApplication(ProfileComponent).then((appRef) => {
  const element = createCustomElement(ProfileComponent, {
    injector: appRef.injector,
  });
  customElements.define('app-profile-component', element);
});
