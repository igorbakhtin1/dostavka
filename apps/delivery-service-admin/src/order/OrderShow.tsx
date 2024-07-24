import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PERFORMERPROFILE_TITLE_FIELD } from "../performerProfile/PerformerProfileTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="pointA" source="pointA" />
        <TextField label="weight" source="weight" />
        <TextField label="size" source="size" />
        <TextField label="remuneration" source="remuneration" />
        <TextField label="status" source="status" />
        <TextField label="description" source="description" />
        <TextField label="pointB" source="pointB" />
        <TextField label="deliveryTime" source="deliveryTime" />
        <TextField label="Sender" source="sender" />
        <ReferenceManyField
          reference="DeliveryContract"
          target="orderId"
          label="DeliveryContracts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="terms" source="terms" />
            <TextField label="price" source="price" />
            <TextField label="status" source="status" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PerformerProfile"
              source="performerprofile.id"
              reference="PerformerProfile"
            >
              <TextField source={PERFORMERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
