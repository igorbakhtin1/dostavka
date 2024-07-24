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
import { FeedbackCreateNestedManyWithoutPerformerProfilesInput } from "./FeedbackCreateNestedManyWithoutPerformerProfilesInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { DeliveryContractCreateNestedManyWithoutPerformerProfilesInput } from "./DeliveryContractCreateNestedManyWithoutPerformerProfilesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PerformerProfileCreateInput {
  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutPerformerProfilesInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutPerformerProfilesInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutPerformerProfilesInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutPerformerProfilesInput;

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
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => DeliveryContractCreateNestedManyWithoutPerformerProfilesInput,
  })
  @ValidateNested()
  @Type(() => DeliveryContractCreateNestedManyWithoutPerformerProfilesInput)
  @IsOptional()
  @Field(() => DeliveryContractCreateNestedManyWithoutPerformerProfilesInput, {
    nullable: true,
  })
  deliveryContracts?: DeliveryContractCreateNestedManyWithoutPerformerProfilesInput;

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
  user?: UserWhereUniqueInput | null;
}

export { PerformerProfileCreateInput as PerformerProfileCreateInput };
