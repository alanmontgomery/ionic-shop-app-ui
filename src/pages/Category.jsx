import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useParams } from 'react-router';
import { CategoryStore, ProductStore } from '../store';
import { getCategories, getCategoryProducts, getProducts } from '../store/Selectors';

import styles from "./Home.module.scss";

const Category = () => {

  const { name } = useParams();
  const products = useStoreState(ProductStore, getCategoryProducts(name));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-padding">
          <IonRow>
            { products.map((product, index) => {

              return (

                <IonCol key={ index } size="4">
                  <IonCol key={ index } size="4">
                    <div style={{ backgroundImage: `url(${ product.image })` }} className={ styles.coverImage } />
                    { product.title }
                  </IonCol>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Category;
