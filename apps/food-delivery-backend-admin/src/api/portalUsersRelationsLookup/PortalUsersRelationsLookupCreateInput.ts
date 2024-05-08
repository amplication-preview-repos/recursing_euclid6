import { PortalUserWhereUniqueInput } from "../portalUser/PortalUserWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PortalUsersRelationsLookupCreateInput = {
  portalUsers: PortalUserWhereUniqueInput;
  restaurants: RestaurantWhereUniqueInput;
  user_role?: "Owner" | "Manager" | "Staff" | "Account_Manager" | null;
};
