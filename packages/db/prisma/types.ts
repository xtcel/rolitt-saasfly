import type { ColumnType } from "kysely";

import type { LANGUAGE, LOCATION, Status, SubscriptionPlan } from "./enums";

export type Generated<T> =
  T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
  id: string;
  user_id: string;
  type: string;
  provider: string;
  provider_account_id: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
  rolitt_is_setup: Generated<number>;
  rolitt_account_id: string | null;
  rolitt_account_username: string | null;
  rolitt_account_email: string | null;
  rolitt_account_password: string | null;
};
export type casbin_rule = {
  id: Generated<number>;
  ptype: string | null;
  v0: string | null;
  v1: string | null;
  v2: string | null;
  v3: string | null;
  v4: string | null;
  v5: string | null;
};
export type Customer = {
  id: Generated<number>;
  auth_user_id: string;
  name: string | null;
  plan: SubscriptionPlan | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_price_id: string | null;
  stripe_current_period_start: Timestamp | null;
  stripe_current_period_end: Timestamp | null;
  is_canceled: Generated<number | null>;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type EmailCode = {
  id: string;
  email: string;
  code: string;
  ip: string | null;
  failCount: number | null;
  expiredAt: Timestamp;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
  deleted_at: Generated<Timestamp | null>;
};
export type exa_customers = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  customer_name: string | null;
  customer_phone_data: string | null;
  sys_user_id: number | null;
  sys_user_authority_id: number | null;
};
export type exa_file_chunks = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  exa_file_id: number | null;
  file_chunk_number: number | null;
  file_chunk_path: string | null;
};
export type exa_file_upload_and_downloads = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  name: string | null;
  url: string | null;
  tag: string | null;
  key: string | null;
};
export type exa_files = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  file_name: string | null;
  file_md5: string | null;
  file_path: string | null;
  chunk_total: number | null;
  is_finish: number | null;
};
export type jwt_blacklists = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  jwt: string | null;
};
export type Robot = {
  id: string;
  name: string;
  auth_user_id: string;
  location: Generated<LOCATION>;
  language: Generated<LANGUAGE>;
  status: Generated<Status>;
  device_id: string | null;
  device_code: string | null;
  instructions: string | null;
  rolitt_robot_id: string | null;
  rolitt_robot_code: string | null;
  rolitt_robot_api_key: string | null;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type Session = {
  id: string;
  session_token: string;
  user_id: string;
  expires: Timestamp;
};
export type sys_apis = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  path: string | null;
  description: string | null;
  api_group: string | null;
  method: Generated<string | null>;
};
export type sys_authorities = {
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  authority_id: Generated<number>;
  authority_name: string | null;
  parent_id: number | null;
  default_router: Generated<string | null>;
};
export type sys_authority_menus = {
  sys_base_menu_id: number;
  sys_authority_authority_id: number;
};
export type sys_auto_code_histories = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  table_name: string | null;
  package: string | null;
  request: string | null;
  struct_name: string | null;
  business_db: string | null;
  description: string | null;
  templates: string | null;
  Injections: string | null;
  flag: number | null;
  api_ids: string | null;
  menu_id: number | null;
  package_id: number | null;
};
export type sys_auto_code_packages = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  desc: string | null;
  label: string | null;
  template: string | null;
  package_name: string | null;
};
export type sys_base_menu_btns = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  name: string | null;
  desc: string | null;
  sys_base_menu_id: number | null;
};
export type sys_base_menu_parameters = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  sys_base_menu_id: number | null;
  type: string | null;
  key: string | null;
  value: string | null;
};
export type sys_base_menus = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  menu_level: number | null;
  parent_id: number | null;
  path: string | null;
  name: string | null;
  hidden: number | null;
  component: string | null;
  sort: number | null;
  active_name: string | null;
  keep_alive: number | null;
  default_menu: number | null;
  title: string | null;
  icon: string | null;
  close_tab: number | null;
};
export type sys_data_authority_id = {
  sys_authority_authority_id: number;
  data_authority_id_authority_id: number;
};
export type sys_dictionaries = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  name: string | null;
  type: string | null;
  status: number | null;
  desc: string | null;
};
export type sys_dictionary_details = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  label: string | null;
  value: string | null;
  extend: string | null;
  status: number | null;
  sort: number | null;
  sys_dictionary_id: number | null;
};
export type sys_export_template_condition = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  template_id: string | null;
  from: string | null;
  column: string | null;
  operator: string | null;
};
export type sys_export_template_join = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  template_id: string | null;
  joins: string | null;
  table: string | null;
  on: string | null;
};
export type sys_export_templates = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  db_name: string | null;
  name: string | null;
  table_name: string | null;
  template_id: string | null;
  template_info: string | null;
  limit: number | null;
  order: string | null;
};
export type sys_ignore_apis = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  path: string | null;
  method: Generated<string | null>;
};
export type sys_operation_records = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  ip: string | null;
  method: string | null;
  path: string | null;
  status: number | null;
  latency: number | null;
  agent: string | null;
  error_message: string | null;
  body: string | null;
  resp: string | null;
  user_id: number | null;
};
export type sys_user_authority = {
  sys_user_id: number;
  sys_authority_authority_id: number;
};
export type sys_users = {
  id: Generated<number>;
  created_at: Timestamp | null;
  updated_at: Timestamp | null;
  deleted_at: Timestamp | null;
  uuid: string | null;
  username: string | null;
  password: string | null;
  nick_name: Generated<string | null>;
  side_mode: Generated<string | null>;
  header_img: Generated<string | null>;
  base_color: Generated<string | null>;
  authority_id: Generated<number | null>;
  phone: string | null;
  email: string | null;
  enable: Generated<number | null>;
};
export type User = {
  id: string;
  name: string | null;
  email: string;
  email_verified: Timestamp | null;
  password: string | null;
  image: string | null;
};
export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Timestamp;
};
export type DB = {
  accounts: Account;
  casbin_rule: casbin_rule;
  customers: Customer;
  email_codes: EmailCode;
  exa_customers: exa_customers;
  exa_file_chunks: exa_file_chunks;
  exa_file_upload_and_downloads: exa_file_upload_and_downloads;
  exa_files: exa_files;
  jwt_blacklists: jwt_blacklists;
  robots: Robot;
  sessions: Session;
  sys_apis: sys_apis;
  sys_authorities: sys_authorities;
  sys_authority_menus: sys_authority_menus;
  sys_auto_code_histories: sys_auto_code_histories;
  sys_auto_code_packages: sys_auto_code_packages;
  sys_base_menu_btns: sys_base_menu_btns;
  sys_base_menu_parameters: sys_base_menu_parameters;
  sys_base_menus: sys_base_menus;
  sys_data_authority_id: sys_data_authority_id;
  sys_dictionaries: sys_dictionaries;
  sys_dictionary_details: sys_dictionary_details;
  sys_export_template_condition: sys_export_template_condition;
  sys_export_template_join: sys_export_template_join;
  sys_export_templates: sys_export_templates;
  sys_ignore_apis: sys_ignore_apis;
  sys_operation_records: sys_operation_records;
  sys_user_authority: sys_user_authority;
  sys_users: sys_users;
  users: User;
  verification_tokens: VerificationToken;
};
