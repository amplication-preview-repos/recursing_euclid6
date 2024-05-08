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
import { ComplaintItemListRelationFilter } from "../../complaintItem/base/ComplaintItemListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintsPhotoListRelationFilter } from "../../complaintsPhoto/base/ComplaintsPhotoListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumComplaintsBookIssueCategory } from "./EnumComplaintsBookIssueCategory";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentsBookWhereUniqueInput } from "../../paymentsBook/base/PaymentsBookWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { EnumComplaintsBookRefundEligibility } from "./EnumComplaintsBookRefundEligibility";
import { EnumComplaintsBookRefundMode } from "./EnumComplaintsBookRefundMode";
import { EnumComplaintsBookRefundType } from "./EnumComplaintsBookRefundType";
import { IntFilter } from "../../util/IntFilter";

@InputType()
class ComplaintsBookWhereInput {
  @ApiProperty({
    required: false,
    type: () => ComplaintItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComplaintItemListRelationFilter)
  @IsOptional()
  @Field(() => ComplaintItemListRelationFilter, {
    nullable: true,
  })
  complaintItem?: ComplaintItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ComplaintsPhotoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComplaintsPhotoListRelationFilter)
  @IsOptional()
  @Field(() => ComplaintsPhotoListRelationFilter, {
    nullable: true,
  })
  complaintsPhotos?: ComplaintsPhotoListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

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
    enum: EnumComplaintsBookIssueCategory,
  })
  @IsEnum(EnumComplaintsBookIssueCategory)
  @IsOptional()
  @Field(() => EnumComplaintsBookIssueCategory, {
    nullable: true,
  })
  issue_category?:
    | "Order_Cancellation"
    | "Missing_Items"
    | "Inadequate_Quantity"
    | "Food_Quality"
    | "Packaging_Issues"
    | "Delivery_Issues"
    | "Payment_Issues"
    | "Other_Issues";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  issueDescription?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  orderId?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentsBookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentsBookWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentsBookWhereUniqueInput, {
    nullable: true,
  })
  paymentsBook?: PaymentsBookWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  refundAmount?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundEligibility,
  })
  @IsEnum(EnumComplaintsBookRefundEligibility)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundEligibility, {
    nullable: true,
  })
  refund_eligibility?:
    | "No_Refund"
    | "Customer_Refund"
    | "Merchant_Refund"
    | "Both";

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundMode,
  })
  @IsEnum(EnumComplaintsBookRefundMode)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundMode, {
    nullable: true,
  })
  refund_mode?: "Wallet" | "Original_Payment_Method";

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundType,
  })
  @IsEnum(EnumComplaintsBookRefundType)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundType, {
    nullable: true,
  })
  refund_type?: "Full" | "Partial" | "Custom";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  ticketCreationTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  ticketId?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { ComplaintsBookWhereInput as ComplaintsBookWhereInput };
