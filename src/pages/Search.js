import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Search = () => {
  return (
    <IonPage>
      <SmallHeader title="Search" />
      <IonContent>
        <LargeHeader title="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
