/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

type APICallback<T> = {
  success?: (res: any) => void;
  fail?: (error: Error) => any;
  complete?: () => any;
} & T;
declare namespace my {
  const SDKVersion: string;
  function getAuthCode(options: {
    scopes: string[];
    success?: (res: any) => void;
    fail?: (error: Error) => any;
    complete?: () => any;
  });
  function getUserInfo(options: {
    success?: (res: any) => void;
    fail?: (error: Error) => any;
    complete?: () => any;
  }): void;
  function payment(options: APICallback<{}>): void;
  function request(options: {
    url: string;
    method:
      | "POST"
      | "GET"
      | "PUT"
      | "post"
      | "get"
      | "put"
      | "delete"
      | "DELETE";
    success?: (res: any) => void;
    fail?: (error: Error) => any;
    complete?: () => any;
  }): void;

  function navigateTo(options: {
    url: string;
    success?: (res: any) => void;
    fail?: (error: Error) => any;
    complete?: () => any;
  }): void;
  function navigateBack(options: {
    delta: 0 | 1;
    success?: (res: any) => void;
    fail?: (error: Error) => any;
    complete?: () => any;
  }): void;
  function reLaunch(options: APICallback<{ url: string }>): void;
  function navigateToMiniApp(
    options: APICallback<{
      appId: string;
      appMeta?: any;
      path?: string;
      extraData?: string;
    }>
  ): void;
  function navigateBackMiniApp(
    options: APICallback<{
      appMeta?: any;
    }>
  ): void;
  function onAppHide(options: () => void);
  function onAppShow(options: () => void);
  function onAppError(options: () => void);
  function offAppShow(options: () => void);
  function offAppHide(options: () => void);
  function offAppError(options: () => void);
  function onUnhandledrejection(options: () => void);
  function onUnhandledRejection(options: () => void);
  function getSystemInfo(options: APICallback<{}>);
  function hideKeyboard(event: any);
  function alert(
    options: APICallback<{
      title?: string;
      content?: string;
      buttonText?: string;
    }>
  );
  function confirm(
    options: APICallback<{
      title?: string;
      content?: string;
      confirmButtonText?: string;
      cancelButtonText?: string;
    }>
  );
  function showLoading(
    options: APICallback<{
      content?: string;
      delay?: number;
    }>
  ): void;
  function hideLoading(options: APICallback<{}>): void;
  function showToast(
    options: APICallback<{
      type?: "success" | "fail";
      content: string;
      buttonText: string;
      duration?: number;
    }>
  ): void;
  function hideToast(options: APICallback<{}>): void;
  function prompt(
    options: APICallback<{
      message?: string;
      placeholder?: string;
      align?: string;
      okButtonText?: string;
      cancelButtonText?: string;
    }>
  ): void;
  function showActionSheet(
    options: APICallback<{
      title?: string;
      items: string[];
      destructiveBtnIndex?: number;
      cancelButtonText?: string;
    }>
  ): void;
  function createAnimation(options: {
    duration?: number;
    timeFunction?:
      | "linear"
      | "ease"
      | "ease-in"
      | "ease-out"
      | "ease-in-out"
      | "step-start"
      | "step-end";
    initialValue?: number;
    value?: number;
  }): void;
  function startPullDownRefresh(options: APICallback<{}>): void;
  function stopPullDownRefresh(options: APICallback<{}>): void;
  function getTitleColor(options: APICallback<{}>): void;
  function hideBackHome(): void;
  function hideNavigationBarLoading(): void;
  function setNavigationBar(
    options: APICallback<{
      title?: string;
      image?: string;
      titleBarColor?: string;
      borderBottomColor?: string;
      reset?: boolean;
    }>
  ): void;
  function showNavigationBarLoading(): void;
  function showTabBar(options: APICallback<{ animation?: boolean }>);
  function showTabBarRedDot(options: APICallback<{ index: boolean }>);
  function hideTabBarRedDot(options: APICallback<{ index: boolean }>);
  function setTabBarItem(
    options: APICallback<{
      index?: number;
      text: string;
      iconPath: string;
      selectionIconPath: string;
    }>
  );
  function setTabBarBadge(
    options: APICallback<{
      index: number;
      text: string;
    }>
  );
  function removeTabBarBadge(
    options: APICallback<{
      index: number;
      text: string;
    }>
  );
  function hideTabBar(
    options: APICallback<{
      animation?: true;
    }>
  );
  function setTabBarStyle(
    options: APICallback<{
      color: string;
      selectedColor: string;
      backgroundColor: string;
      borderStyle: string;
    }>
  );
}
