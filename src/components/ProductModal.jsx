import { IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const ProductModal = ({ dismiss, product }) => {

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

              <IonCard>
                <IonCardContent>
                  <IonCardTitle>{ product.title }</IonCardTitle>
                  <IonNote color="white">View product modal</IonNote>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewModal;
