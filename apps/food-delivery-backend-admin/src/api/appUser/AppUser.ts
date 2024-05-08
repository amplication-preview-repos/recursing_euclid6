import { AccessLog } from "../accessLog/AccessLog";
import { CouponRedemption } from "../couponRedemption/CouponRedemption";
import { CustomerPreference } from "../customerPreference/CustomerPreference";
import { CustomerSubscription } from "../customerSubscription/CustomerSubscription";
import { ErrorLog } from "../errorLog/ErrorLog";
import { Favourite } from "../favourite/Favourite";
import { Notification } from "../notification/Notification";
import { NotificationSetting } from "../notificationSetting/NotificationSetting";
import { OrderHistory } from "../orderHistory/OrderHistory";
import { Report } from "../report/Report";
import { Reservation } from "../reservation/Reservation";
import { Reward } from "../reward/Reward";
import { SettlementsBreakup } from "../settlementsBreakup/SettlementsBreakup";
import { SsoLookup } from "../ssoLookup/SsoLookup";
import { Subscription } from "../subscription/Subscription";
import { UserCustomerLookup } from "../userCustomerLookup/UserCustomerLookup";
import { UserFeedback } from "../userFeedback/UserFeedback";
import { UsersHashtagsMap } from "../usersHashtagsMap/UsersHashtagsMap";

export type AppUser = {
  accessLogs?: Array<AccessLog>;
  account_status?: "Live" | "Is_Disabled" | "Is_Deleted" | null;
  couponRedemptions?: Array<CouponRedemption>;
  createdAt: Date | null;
  customerPreferences?: Array<CustomerPreference>;
  customerSubscriptions?: Array<CustomerSubscription>;
  errorLogs?: Array<ErrorLog>;
  favourites?: Array<Favourite>;
  id: string;
  notifications?: Array<Notification>;
  notificationSettings?: Array<NotificationSetting>;
  orderHistory?: Array<OrderHistory>;
  profilePicUrl: string | null;
  reports?: Array<Report>;
  reservations?: Array<Reservation>;
  rewards?: Array<Reward>;
  settlementsBreakup?: Array<SettlementsBreakup>;
  ssoLookup?: Array<SsoLookup>;
  subscriptions?: Array<Subscription>;
  updatedAt: Date | null;
  userCustomerLookup?: Array<UserCustomerLookup>;
  userFeedbacks?: Array<UserFeedback>;
  usersHashtagsMap?: Array<UsersHashtagsMap>;
};
