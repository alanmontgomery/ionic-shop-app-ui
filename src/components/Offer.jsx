import { IonCol, IonRow } from "@ionic/react";
import styles from "./Offer.module.scss";

export const Offer = ({ image, heading, text }) => (

	<IonRow>
    <IonCol size="12">
      <div className={ styles.offer }>
        <div>
          <h1>{ heading }</h1>
          <p>{ text }</p>
        </div>

        <img src={ image } alt="offer" />
      </div>
    </IonCol>
  </IonRow>
);