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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { FeedbackListRelationFilter } from "../../feedback/base/FeedbackListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DeliveryContractListRelationFilter } from "../../deliveryContract/base/DeliveryContractListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PerformerProfileWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => FeedbackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeedbackListRelationFilter)
  @IsOptional()
  @Field(() => FeedbackListRelationFilter, {
    nullable: true,
  })
  feedbacks?: FeedbackListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DeliveryContractListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeliveryContractListRelationFilter)
  @IsOptional()
  @Field(() => DeliveryContractListRelationFilter, {
    nullable: true,
  })
  deliveryContracts?: DeliveryContractListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { PerformerProfileWhereInput as PerformerProfileWhereInput };