import { IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonRouterLink, useIonModal } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Product } from '../components/Product';
import { ProductStore } from '../store';
import { getCategoryProducts } from '../store/Selectors';
import { capitalizeWords } from '../utils';

import styles from "./Category.module.scss";

const Category = () => {

  const pageRef = useRef();
  const { name } = useParams();
  const products = useStoreState(ProductStore, getCategoryProducts(name));
  const [ selectedProduct, setSelectedProduct ] = useState(false);

  const handleShowModal = product => {

    setSelectedProduct(product);
    present({
      
      presentingElement: pageRef.current
    });
  }

  const [ present, dismiss ] = useIonModal(ProductModal, {

    dismiss: () => dismiss(),
    product: selectedProduct
  });

  useIonViewWillEnter(() => {

    document.querySelector("ion-tab-bar").style.display = "none";
  });

  useIonViewWillLeave(() => {

    document.querySelector("ion-tab-bar").style.display = "";
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ capitalizeWords(name) }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonTitle size="large">{ capitalizeWords(name) }</IonTitle> */}
            <IonBreadcrumbs>
              <IonBreadcrumb color="dark">
                <IonRouterLink routerLink="/home" routerDirection="back" color="dark">Shop</IonRouterLink>
              </IonBreadcrumb>
              <IonBreadcrumb color="primary" active>{ capitalizeWords(name) }</IonBreadcrumb>
            </IonBreadcrumbs>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-padding">

          <IonRow className={ styles.searchContainer }>
            <IonCol size="12">
              <IonSearchbar animated placeholder="Search for a product" />
            </IonCol>
          </IonRow>

          <IonRow>
            { products.map((product, index) => {

              return <Product product={ product } key={ `product_${ index }` } click={ () => handleShowModal(product) } />;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Category;
