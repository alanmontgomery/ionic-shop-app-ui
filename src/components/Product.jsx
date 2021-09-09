import { IonBadge, IonCol, IonIcon, IonNote } from "@ionic/react";
import { star } from "ionicons/icons";
import styles from "./Product.module.scss";

export const Product = ({ product, click }) => {

  return (

    <IonCol size="6" onClick={ click }>
      <div className={ styles.productContainer }>
        <div style={{ backgroundImage: `url(${ product.image })` }} className={ styles.coverImage } />
        <h1 className={ `${ styles.productTitle } truncate` }>{ product.title }</h1>

        <div className={ styles.productInfo }>
          <div>
            <IonBadge color="primary">£{ product.price }</IonBadge>
          </div>

          <div className={ styles.productRating }>
            <IonNote>
              <IonIcon icon={ star } />&nbsp;
            </IonNote>
            <IonNote>
              { product.rating.rate }
            </IonNote>
          </div>
        </div>
      </div>
    </IonCol>
  );
}