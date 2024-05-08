/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerAddressMap } from "../../customerAddressMap/base/CustomerAddressMap";
import { EnumCustomerGender } from "./EnumCustomerGender";
import { UserCustomerLookup } from "../../userCustomerLookup/base/UserCustomerLookup";

@ObjectType()
class Customer {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  additionaldetails!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  anniversary!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [CustomerAddressMap],
  })
  @ValidateNested()
  @Type(() => CustomerAddressMap)
  @IsOptional()
  customerAddressMap?: Array<CustomerAddressMap>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCustomerGender,
  })
  @IsEnum(EnumCustomerGender)
  @IsOptional()
  @Field(() => EnumCustomerGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Other" | "Prefer_not_to_disclose" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isEmailVerified!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMobileVerified!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  mobile!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [UserCustomerLookup],
  })
  @ValidateNested()
  @Type(() => UserCustomerLookup)
  @IsOptional()
  userCustomerLookup?: Array<UserCustomerLookup>;
}

export { Customer as Customer };
