import { IonRow } from "@ionic/react";
import { useStoreState } from "pullstate";
import { ProductStore } from "../store";
import { getProducts } from "../store/Selectors";
import { Product } from "./Product";

export const TrendingProducts = () => {

  const products = useStoreState(ProductStore, getProducts);

  return (
    <IonRow className="ion-margin-bottom ion-padding-bottom">
      { products.map((product, index) => {

        if (index === 4 || index === 13) {

          return <Product product={ product } key={ `trending_${ index }` } />;
        }
      })}
    </IonRow>
  );
}