import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { CartStore, CategoryStore, ProductStore } from '../store';
import { getCart, getCategories, getProducts } from '../store/Selectors';

import styles from "./Cart.module.scss";

const Cart = () => {

  const cart = useStoreState(CartStore, getCart);

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

          { cart.length < 1 &&
                
            <IonRow className={ styles.emptyCartContainer }>
              <IonCol size="10" className="ion-text-center">
                <div className={ styles.text }>

                  <img src="/assets/cart.png" alt="no cart" />
                  <h1>Hang on there!</h1>
                  <p>Your cart is empty</p>
                  <IonButton color="primary" routerLink="/home">Shop now &rarr;</IonButton>
                </div>
                {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_kqjmcwdh.json"  background="transparent"  speed="1"  style={{ width: "400px", height: "400px", margin: "0 auto", marginTop: "-8rem" }}  loop  autoplay></lottie-player> */}
              </IonCol>
            </IonRow>      
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
