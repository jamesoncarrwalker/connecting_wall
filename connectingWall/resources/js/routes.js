/**
 * Created by jamesskywalker on 09/02/2020.
 */
import Wall from './components/Wall';
import Welcome from './components/Welcome';
import Connections from './components/Connections';
import Lost from './components/Lost';

export default {
  mode:'history',
    linkActiveClass: 'strong',

    routes: [
        {
          path:'*',
        component: Lost
        },
        {
            path:'/',
            component: Welcome,
            name: 'home'

        },
        {
            path:'/wall',
            component: Wall,
            name: 'wall'
        },
        {
            path:'/connections',
            component: Connections,
            name: 'connections'
        }
    ]
};
