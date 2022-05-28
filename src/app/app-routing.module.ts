import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'profesional',
    loadChildren: () => import('./profesional/profesional.module').then( m => m.ProfesionalPageModule)
  },
  {
    path: 'ubicame',
    loadChildren: () => import('./ubicame/ubicame.module').then( m => m.UbicamePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'jorge',
    loadChildren: () => import('./jorge/jorge.module').then( m => m.JorgePageModule)
  },
  {
    path: 'ana',
    loadChildren: () => import('./ana/ana.module').then( m => m.AnaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
