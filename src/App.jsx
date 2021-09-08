import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, grid, home, search } from "ionicons/icons";
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect } from 'react';
import { fetchCategories, fetchProducts } from './utils';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Category from './pages/Category';

const App = () => {

  useEffect(() => {
    
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/search">
              <Search />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/category/:name">
              <Category />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={ grid } />
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <IonIcon icon={ search } />
            </IonTabButton>

            <IonTabButton tab="cart" href="/cart">
              <IonIcon icon={ cart } />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
