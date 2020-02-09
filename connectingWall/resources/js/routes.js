/**
 * Created by jamesskywalker on 09/02/2020.
 */
import Wall from './components/Wall';
import Connections from './components/Connections';

export default {
  mode:'history',

    routes: [
        {
            path:'/',
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
