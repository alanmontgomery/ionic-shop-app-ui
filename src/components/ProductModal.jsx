import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cart, star } from 'ionicons/icons';
import { useRef } from 'react';
import { addToCart } from '../store/CartStore';
import { capitalizeWords } from '../utils';

import styles from "./ProductModal.module.scss";

export const ProductModal = ({ dismiss, product }) => {

  const cartRef = useRef();

  const handleAddToCart = () => {

    cartRef.current.style.display = "inline";
    addToCart(product);

    setTimeout(() => {
      
      cartRef.current.style.display = "none";
    }, 750);

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonTitle>View Product</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={ dismiss }>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="animate__animated animate__faster animate__slideInUp">
            <IonCol size="12">

              <IonCard className={ styles.productCard }>
                <IonCardContent>
                  <div className={ styles.productTopInfo }>
                    <img src={ product.image } alt="product" />
                    <div className={ styles.productDetails }>
                      <IonBadge color="primary">{ capitalizeWords(product.category) }</IonBadge>
                      <h3>{ product.title }</h3>
                    </div>
                  </div>

                  <div className={ styles.productDescription }>
                    <h3>Product Description</h3>
                    <p>{ product.description }</p>
                  </div>

                  <div className={ styles.productDescription }>
                    <h3>Product Rating</h3>
                    <div>
                      <p>{ product.rating.count} people have bought this item from the IonShop and have rated an average of { product.rating.rate }.</p>
                      <IonIcon icon={ star } color="primary" />
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className={ `${ styles.bottom } animate__animated animate__slideInUp` }>
          <IonRow>
            <IonCol size="12">
              <div className={ styles.price }>
                Buy now for
                <IonBadge color="dark" className="ion-padding-left">£{ product.price.toFixed(2) }</IonBadge>
              </div>
              <IonIcon ref={ cartRef } className={ `${ styles.animatedCart } animate__animated animate__slideInUp` } icon={ cart } color="dark" />
              <IonButton onClick={ handleAddToCart }>Add to Cart</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
