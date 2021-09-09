import { IonButton, IonCol, IonGrid, IonRow, IonText, useIonRouter } from "@ionic/react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../store";
import { getCategories } from "../store/Selectors";
import { capitalizeWords } from "../utils";

export const CategoriesModal = ({ close }) => {

    const router = useIonRouter();
    const categories = useStoreState(CategoryStore, getCategories);

    const goToCategory = category => {

        close();
        router.push(`/category/${ category }`);
    }

    return (

        <div>
            <IonGrid className="ion-padding ion-margin-top">

                <IonRow>
                    <IonCol size="12">
                        <IonText color="white">Product Categories</IonText>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="12">
                        { categories.map((category, index) => {

                            return (
                                <IonButton onClick={ () => goToCategory(category) } key={ index } color="primary">{ capitalizeWords(category) }</IonButton>
                            );
                        })}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}