import { IonButton, IonCol, IonRow } from "@ionic/react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../store";
import { getCategories } from "../store/Selectors";
import { capitalizeWords } from "../utils";

import styles from "./PopularCategories.module.scss";

export const PopularCategories = () => {

  const categories = useStoreState(CategoryStore, getCategories);

  return (
    <IonRow className={ styles.categoriesContainer }>
      <IonCol size="12" className={ styles.categories }>
        { categories.map((category, index) => {

          if (index === 0 || index === 2) {
            return <IonButton key={ `popular_${ index }` } fill="outline" routerLink={ `/category/${ category }`}>{ capitalizeWords(category) }</IonButton>;
          } else return null;
        })}
      </IonCol>
    </IonRow>
  );
}