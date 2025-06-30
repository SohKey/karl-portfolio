import { createRouter, createWebHistory } from 'vue-router';

import PortalRunner from '../components/PortalRunner.vue';
import Ruche from '../components/Ruche.vue';
import Winter from '../components/Winter.vue';
import App from '@/App.vue';

const routes = [
  { path: '/portal-runner', name: 'PortalRunner', component: PortalRunner },
  { path: '/ruche', name: 'Ruche', component: Ruche },
  { path: '/winter', name: 'Winter', component: Winter },
  { path: '/', name: 'Karl Tourelle', component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
