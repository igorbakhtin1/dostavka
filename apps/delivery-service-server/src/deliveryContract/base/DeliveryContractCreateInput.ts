/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { EnumDeliveryContractStatus } from "./EnumDeliveryContractStatus";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";
import { PerformerProfileWhereUniqueInput } from "../../performerProfile/base/PerformerProfileWhereUniqueInput";

@InputType()
class DeliveryContractCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  terms?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryContractStatus,
  })
  @IsEnum(EnumDeliveryContractStatus)
  @IsOptional()
  @Field(() => EnumDeliveryContractStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PerformerProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PerformerProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => PerformerProfileWhereUniqueInput, {
    nullable: true,
  })
  performerProfile?: PerformerProfileWhereUniqueInput | null;
}

export { DeliveryContractCreateInput as DeliveryContractCreateInput };