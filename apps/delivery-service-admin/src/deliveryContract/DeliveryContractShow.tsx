import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PERFORMERPROFILE_TITLE_FIELD } from "../performerProfile/PerformerProfileTitle";

export const DeliveryContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
