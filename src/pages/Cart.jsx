import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartProduct } from '../components/CartProduct';
import { Heading } from '../components/Heading';
import { CartStore } from '../store';
import { getCart } from '../store/Selectors';

import styles from "./Cart.module.scss";

const Cart = () => {

  const cart = useStoreState(CartStore, getCart);
  const [ amount, setAmount ] = useState(0);

  useEffect(() => {

    var total = 0.00;
    cart.forEach(product => total += product.price);
    setAmount(total.toFixed(2));
  }, [ cart ]);

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
              </IonCol>
            </IonRow>      
          }

          { cart.length > 0 &&
            <>
              <IonRow className={ styles.cartContainer }>
                <IonCol size="12">
                  <Heading heading={ `You have ${ cart.length } products in your cart. Your total comes to £${ amount }.` } />
                </IonCol>
              </IonRow>

              <IonRow>
                { cart.map((product, index) => {

                  return <CartProduct product={ product } key={ index } />;
                })}
              </IonRow>
            </>
          }
        </IonGrid>

        { cart.length > 0 &&
          <IonGrid className={ styles.bottom }>
            <IonRow>
              <IonCol size="12">
                <IonButton color="primary" expand="block">Checkout (£{ amount })</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        }
      </IonContent>
    </IonPage>
  );
};

export default Cart;
