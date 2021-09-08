import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useState } from 'react';
import { CategoriesModal } from '../components/CategoriesModal';
import { CategoryStore, ProductStore } from '../store';
import { getCategories, getProducts } from '../store/Selectors';

import styles from "./Home.module.scss";

const Home = () => {

  const categories = useStoreState(CategoryStore, getCategories);
  const products = useStoreState(ProductStore, getProducts);

  const [ showModal, setShowModal ] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonButton onClick={ () => setShowModal(true) }>Categories</IonButton>
          </IonRow>

          <IonRow>
            { (products.length > 0 && categories.length > 0) && categories.map((category, index) => {

              const coverImage = products.filter(p => p.category === category)[0].image;
              console.log(coverImage);

              return (

                <IonCol key={ index } size="4">
                  <div style={{ backgroundImage: `url(${ coverImage })` }} className={ styles.coverImage } />
                  { category }
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonModal isOpen={ showModal } onDidDismiss={ () => setShowModal(false) } breakpoints={ [0, 0.2, 0.5, 1] } initialBreakpoint={ 0.2 } backdropBreakpoint={ 0.5 }>
        <CategoriesModal close={ () => setShowModal(false) } />
      </IonModal>
    </IonPage>
  );
};

export default Home;
