/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {RouterModule} from '@angular/router';
import {CustomerRoutes} from './customer.routing';
import {NgModule} from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomerFormComponent} from './form/form.component';
import {CreateCustomerFormComponent} from './form/create/create.form.component';
import {CommonModule} from '../../components/common.module';
import {CustomerDetailComponent} from './detail/customer.detail.component';
import {CustomerDetailFormComponent} from './form/detail/detail.component';
import {CustomerOfficesComponent} from './form/offices/offices.component';
import {CustomerEmployeesComponent} from './form/employees/employees.component';
import {CustomerContactFormComponent} from './form/contact/contact.component';
import {EditCustomerFormComponent} from './form/edit/edit.form.component';
import {CustomerCustomFieldsComponent} from './form/customFields/custom-fields.component';
import {CustomerStatusComponent} from './detail/status/status.component';
import {CustomerActivityComponent} from './detail/activity/activity.component';
import {CustomerIndexComponent} from './detail/customer.index.component';
import {CustomerTaskFormComponent} from './detail/status/form/customer-task.form.component';
import {CustomerExistsGuard} from './customer-exists.guard';
import {CustomersStore, customerStoreFactory} from './store/index';
import {Store} from '@ngrx/store';
import {CustomerNotificationEffects} from './store/effects/notification.effects';
import {CustomerRouteEffects} from './store/effects/route.effects';
import {EffectsModule} from '@ngrx/effects';
import {CustomerApiEffects} from './store/effects/service.effects';
import {CustomerCommandApiEffects} from './store/commands/effects/service.effects';
import {CustomerTasksNotificationEffects} from './store/tasks/effects/notification.effects';
import {CustomerTasksApiEffects} from './store/tasks/effects/service.effects';
import {CustomerTasksRouteEffects} from './store/tasks/effects/route.effects';
import {CustomerPortraitComponent} from './detail/portrait/portrait.component';
import {CustomerIdentificationCardApiEffects} from './store/identityCards/effects/service.effects';
import {CustomerIdentificationCardRouteEffects} from './store/identityCards/effects/route.effects';
import {CustomerIdentificationCardNotificationEffects} from './store/identityCards/effects/notification.effects';
import {CustomerIdentityCardListComponent} from './detail/identityCard/identity-card.list.component';
import {CustomerIdentityCardDetailComponent} from './detail/identityCard/identity-card.detail.component';
import {IdentityCardFormComponent} from './detail/identityCard/form/identity-card-form.component';
import {CreateCustomerIdentificationCardFormComponent} from './detail/identityCard/form/create.form.component';
import {EditCustomerIdentificationCardFormComponent} from './detail/identityCard/form/edit.form.component';
import {CustomerIdentityCardIndexComponent} from './detail/identityCard/identity-card.index.component';
import {IdentityCardExistsGuard} from './detail/identityCard/identity-card-exists.guard';

@NgModule({
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    EffectsModule.run(CustomerApiEffects),
    EffectsModule.run(CustomerRouteEffects),
    EffectsModule.run(CustomerNotificationEffects),
    EffectsModule.run(CustomerTasksApiEffects),
    EffectsModule.run(CustomerTasksRouteEffects),
    EffectsModule.run(CustomerTasksNotificationEffects),
    EffectsModule.run(CustomerCommandApiEffects),
    EffectsModule.run(CustomerIdentificationCardApiEffects),
    EffectsModule.run(CustomerIdentificationCardRouteEffects),
    EffectsModule.run(CustomerIdentificationCardNotificationEffects),
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailFormComponent,
    CustomerContactFormComponent,
    CustomerCustomFieldsComponent,
    CustomerOfficesComponent,
    CustomerEmployeesComponent,
    CustomerFormComponent,
    CreateCustomerFormComponent,
    CustomerTaskFormComponent,
    EditCustomerFormComponent,
    CustomerIndexComponent,
    CustomerDetailComponent,
    CustomerStatusComponent,
    CustomerActivityComponent,
    CustomerPortraitComponent,
    CustomerIdentityCardListComponent,
    CustomerIdentityCardIndexComponent,
    CustomerIdentityCardDetailComponent,
    CreateCustomerIdentificationCardFormComponent,
    EditCustomerIdentificationCardFormComponent,
    IdentityCardFormComponent
  ],
  providers: [
    CustomerExistsGuard,
    IdentityCardExistsGuard,
    { provide: CustomersStore, useFactory: customerStoreFactory, deps: [Store]}
  ]
})
export class CustomerModule {}
