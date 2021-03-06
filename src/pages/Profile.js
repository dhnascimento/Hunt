import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Profile = () => {
  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent>
        <LargeHeader title="Profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
