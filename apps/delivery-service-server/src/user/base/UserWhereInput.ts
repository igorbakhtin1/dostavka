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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../../feedback/base/FeedbackListRelationFilter";
import { PerformerProfileListRelationFilter } from "../../performerProfile/base/PerformerProfileListRelationFilter";

@InputType()
class UserWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

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
    type: () => PerformerProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PerformerProfileListRelationFilter)
  @IsOptional()
  @Field(() => PerformerProfileListRelationFilter, {
    nullable: true,
  })
  performerProfiles?: PerformerProfileListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
