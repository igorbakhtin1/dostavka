import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { PerformerProfileTitle } from "../performerProfile/PerformerProfileTitle";

export const DeliveryContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="terms" multiline source="terms" />
        <NumberInput label="price" source="price" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="performerProfile.id"
          reference="PerformerProfile"
          label="PerformerProfile"
        >
          <SelectInput optionText={PerformerProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
