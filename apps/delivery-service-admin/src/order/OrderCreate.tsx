import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DeliveryContractTitle } from "../deliveryContract/DeliveryContractTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="pointA" source="pointA" />
        <NumberInput step={1} label="weight" source="weight" />
        <TextInput label="size" source="size" />
        <NumberInput label="remuneration" source="remuneration" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <TextInput label="pointB" source="pointB" />
        <DateTimeInput label="deliveryTime" source="deliveryTime" />
        <TextInput label="Sender" source="sender" />
        <ReferenceArrayInput
          source="deliveryContracts"
          reference="DeliveryContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryContractTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
