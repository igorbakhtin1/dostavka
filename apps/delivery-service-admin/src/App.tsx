import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { PerformerProfileList } from "./performerProfile/PerformerProfileList";
import { PerformerProfileCreate } from "./performerProfile/PerformerProfileCreate";
import { PerformerProfileEdit } from "./performerProfile/PerformerProfileEdit";
import { PerformerProfileShow } from "./performerProfile/PerformerProfileShow";
import { DeliveryContractList } from "./deliveryContract/DeliveryContractList";
import { DeliveryContractCreate } from "./deliveryContract/DeliveryContractCreate";
import { DeliveryContractEdit } from "./deliveryContract/DeliveryContractEdit";
import { DeliveryContractShow } from "./deliveryContract/DeliveryContractShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DeliveryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="PerformerProfile"
          list={PerformerProfileList}
          edit={PerformerProfileEdit}
          create={PerformerProfileCreate}
          show={PerformerProfileShow}
        />
        <Resource
          name="DeliveryContract"
          list={DeliveryContractList}
          edit={DeliveryContractEdit}
          create={DeliveryContractCreate}
          show={DeliveryContractShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
