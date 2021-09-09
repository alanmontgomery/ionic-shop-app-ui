import { IonContent, IonGrid, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { CategoriesModal } from '../components/CategoriesModal';
import { Heading } from '../components/Heading';
import { Offer } from '../components/Offer';
import { PopularCategories } from '../components/PopularCategories';
import { TrendingProducts } from '../components/TrendingProducts';

const Home = () => {

  const [ showModal, setShowModal ] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Shop</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <Offer image="/assets/shop.png" heading="Autumn Sale!" text="30% off all products" />
          <Heading heading="Popular Categories" buttonClick={ () => setShowModal(true) } buttonText="See all" />
          <PopularCategories />
          <Offer image="/assets/shop.png" heading="Buy now, pay later." text="Spread the cost of your purchase" />
          <Heading heading="Trending Products" />
          <TrendingProducts />
        </IonGrid>
      </IonContent>

      <IonModal isOpen={ showModal } onDidDismiss={ () => setShowModal(false) } breakpoints={ [0, 0.27, 0.5, 1] } initialBreakpoint={ 0.27 } backdropBreakpoint={ 0.5 }>
        <CategoriesModal close={ () => setShowModal(false) } />
      </IonModal>
    </IonPage>
  );
};

export default Home;
