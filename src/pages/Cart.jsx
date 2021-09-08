import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { CategoryStore, ProductStore } from '../store';
import { getCategories, getProducts } from '../store/Selectors';

import styles from "./Home.module.scss";

const Cart = () => {

  const categories = useStoreState(CategoryStore, getCategories);
  const products = useStoreState(ProductStore, getProducts);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cart</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
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
    </IonPage>
  );
};

export default Cart;
