import React, { useState } from 'react';
import { useSelector } from 'dva';
import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonFooter,
  IonButtons,
  IonBackButton,
  IonApp,
  IonContent,
  IonText,
  IonIcon,
  IonPage,
  IonRow,
  IonButton,
  IonRouterOutlet,
  IonLabel,
  IonBadge,
  IonList,
  IonItem,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonAlert,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
} from '@ionic/react';
import { IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import { IonGrid, IonCol } from '@ionic/react';
import { call, person, settings } from 'ionicons/icons';
import { star, logoVimeo } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

export interface OrderState {
  name: string;
}

const OrderPage: React.FC = props => {
  const changePrimaryColor=(color)=>{
    window.document.querySelector('html').style.setProperty('--ion-color-primary', color);
  }
  const [showAlert1, setShowAlert1] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow class="ion-justify-content-between ion-align-items-center ion-padding-horizontal">
            <span>
              <IonButton size="small" color="primary">
                桌位号:44
                <IonIcon slot="start" icon={star} />
              </IonButton>
            </span>
            <IonButton size="small" color="primary">
              店内就餐
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonRow style={{ height: '100%' }}>
        <IonList>
          <IonItem>
            <IonLabel>销量排行</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>每日限量</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>新推套餐</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonFab vertical="bottom" horizontal="start" edge slot="fixed" style={{ bottom: 15 }}>
            <IonFabButton>
              主题
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton onClick={()=>changePrimaryColor('#2dd36f')}>主题1</IonFabButton>
              <IonFabButton onClick={()=>changePrimaryColor('#ffc409')}>主题2</IonFabButton>
              <IonFabButton onClick={()=>changePrimaryColor('#eb445a')}>主题3</IonFabButton>
            </IonFabList>
          </IonFab>
        </IonList>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => {}}
          onIonScroll={() => {}}
          onIonScrollEnd={() => {}}
        >
          <IonList>
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>日期</IonLabel>
              <IonDatetime
                displayFormat="M"
                value={selectedDate}
                onIonChange={e => setSelectedDate(e.detail.value!)}
              ></IonDatetime>
            </IonItem>
            <IonItem>
              <IonButton onClick={() => setShowAlert1(true)} expand="block">
                Show Alert 1
              </IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
          </IonList>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass="my-custom-class"
            header={'Alert'}
            subHeader={'Subtitle'}
            message={'This is an alert message.'}
            buttons={['OK']}
          />
        </IonContent>
      </IonRow>
      <IonFooter>
        <IonToolbar>
          <IonRow class="ion-justify-content-between ion-align-items-center ion-padding-horizontal">
            <IonButton fill="outline" size="small" color="primary">
              首页
            </IonButton>
            <IonButton fill="outline" size="small" color="primary">
              订单
            </IonButton>
            <IonButton fill="outline" size="small" color="primary">
              我的
            </IonButton>
          </IonRow>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default OrderPage;
