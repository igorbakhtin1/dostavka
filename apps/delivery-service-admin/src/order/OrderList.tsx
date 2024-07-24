import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
