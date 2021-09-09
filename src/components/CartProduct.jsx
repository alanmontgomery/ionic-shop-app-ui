import { IonBadge, IonCol, IonIcon, IonNote } from "@ionic/react";
import { star } from "ionicons/icons";
import styles from "./CartProduct.module.scss";

export const CartProduct = ({ product, click, fromHome = false }) => {

  return (

    <IonCol size="12" onClick={ click } className={ !fromHome ? "animate__animated animate__faster animate__slideInRight" : null }>
      <div className={ styles.productContainer }>

		<div className={ styles.productInfo }>
          <div>
            <IonBadge color="primary">£{ product.price.toFixed(2) }</IonBadge>
          </div>
        </div>
		<h1 className={ `${ styles.productTitle } truncate` }>{ product.title }</h1>
		<div style={{ backgroundImage: `url(${ product.image })` }} className={ styles.coverImage } />
      </div>
    </IonCol>
  );
}