import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- 数据双向绑定需要的模块
import { HttpModule }    from '@angular/http';  // ajax

import { AppRoutingModule }     from './router/app-routing.module'; // 路由

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroDetailComponent  }  from './compTwo/aT.component'; // 这也是一个组件
import { DashboardComponent  }  from './dashboard/dashboard.component';
import { HeroesComponent }     from './heroComp/heroes.component';
import { HeroService } from './servic/hero.service'; // 服务
import { AppComponent }        from './appComppnent/app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService  // 组件中的服务移动到了这里来
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
