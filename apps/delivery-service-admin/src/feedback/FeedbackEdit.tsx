import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PerformerProfileTitle } from "../performerProfile/PerformerProfileTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
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
