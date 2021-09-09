import { IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useParams } from 'react-router';
import { Product } from '../components/Product';
import { ProductStore } from '../store';
import { getCategoryProducts } from '../store/Selectors';
import { capitalizeWords } from '../utils';

const Category = () => {

  const { name } = useParams();
  const products = useStoreState(ProductStore, getCategoryProducts(name));

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
            <IonTitle size="large">{ capitalizeWords(name) }</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-padding">

        <IonBreadcrumbs>
          <IonBreadcrumb>Home</IonBreadcrumb>
        </IonBreadcrumbs>

          <IonRow className={ styles.searchContainer }>
            <IonCol size="12">
              <IonSearchbar animated placeholder="Search for a product" />
            </IonCol>
          </IonRow>

          <IonRow>
            { products.map((product, index) => {

              return <Product product={ product } key={ `product_${ index }` } />;
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Category;
