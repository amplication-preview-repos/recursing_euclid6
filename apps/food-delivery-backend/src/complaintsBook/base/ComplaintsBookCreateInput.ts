/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintItemCreateNestedManyWithoutComplaintsBooksInput } from "./ComplaintItemCreateNestedManyWithoutComplaintsBooksInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  IsNumber,
  IsInt,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput } from "./ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput";
import { EnumComplaintsBookIssueCategory } from "./EnumComplaintsBookIssueCategory";
import { PaymentsBookWhereUniqueInput } from "../../paymentsBook/base/PaymentsBookWhereUniqueInput";
import { Decimal } from "decimal.js";
import { EnumComplaintsBookRefundEligibility } from "./EnumComplaintsBookRefundEligibility";
import { EnumComplaintsBookRefundMode } from "./EnumComplaintsBookRefundMode";
import { EnumComplaintsBookRefundType } from "./EnumComplaintsBookRefundType";

@InputType()
class ComplaintsBookCreateInput {
  @ApiProperty({
    required: false,
    type: () => ComplaintItemCreateNestedManyWithoutComplaintsBooksInput,
  })
  @ValidateNested()
  @Type(() => ComplaintItemCreateNestedManyWithoutComplaintsBooksInput)
  @IsOptional()
  @Field(() => ComplaintItemCreateNestedManyWithoutComplaintsBooksInput, {
    nullable: true,
  })
  complaintItem?: ComplaintItemCreateNestedManyWithoutComplaintsBooksInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput)
  @IsOptional()
  @Field(() => ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput, {
    nullable: true,
  })
  complaintsPhotos?: ComplaintsPhotoCreateNestedManyWithoutComplaintsBooksInput;

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
    | "Other_Issues"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  issueDescription?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  orderId!: string;

  @ApiProperty({
    required: true,
    type: () => PaymentsBookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentsBookWhereUniqueInput)
  @Field(() => PaymentsBookWhereUniqueInput)
  paymentsBook!: PaymentsBookWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  refundAmount?: Decimal | null;

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
    | "Both"
    | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundMode,
  })
  @IsEnum(EnumComplaintsBookRefundMode)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundMode, {
    nullable: true,
  })
  refund_mode?: "Wallet" | "Original_Payment_Method" | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundType,
  })
  @IsEnum(EnumComplaintsBookRefundType)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundType, {
    nullable: true,
  })
  refund_type?: "Full" | "Partial" | "Custom" | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  ticketId!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { ComplaintsBookCreateInput as ComplaintsBookCreateInput };
