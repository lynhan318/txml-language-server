/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from vscode-web-custom-data NPM package

import { type } from "node:os";
import { HTMLDataV1 } from "../../htmlLanguageTypes";

export const htmlData: HTMLDataV1 = {
  version: 1.1,
  tags: [
    {
      name: "button",
      description: {
        kind: "markdown",
        value: "Button",
      },
      attributes: [
        {
          name: "size",
          values: [
            {
              name: "big",
            },
            {
              name: "medium",
            },
            {
              name: "small",
            },
          ],
          description: {
            kind: "markdown",
            value: "Kích thước của button (big/medium/small)",
          },
        },
        {
          name: "type",
          values: [
            {
              name: "primary",
            },
            {
              name: "secondary",
            },
            {
              name: "tertiary",
            },
          ],
          description: "Giao diện của button (primary/secondary/tertiary)",
        },
        {
          name: "loading",
          description: "boolean",
        },
        {
          name: "onTap",
          type: "event",
          description: "Sự kiện khi tap vào button",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Reference",
          url: "https://miniapp.tiki.vn/docs/component/basic/button",
        },
      ],
    },
    {
      name: "badge",
      description: {
        kind: "markdown",
        value: "Badge",
      },
      attributes: [
        {
          name: "text",
          description: "text",
        },
        {
          name: "dot",
          description: "dot",
        },
        {
          name: "overFlowclount",
          description: "number",
        },
        {
          name: "withArrow",
          description: "boolean",
        },
        {
          name: "direction",
          description: "left,middle,right",
        },
        {
          name: "stroke",
          description: "boolean",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/badge",
        },
      ],
    },
    {
      name: "text",
      description: {
        kind: "markdown",
        value: "text",
      },
      attributes: [
        {
          name: "selectable",
          description: "boolean",
        },
        {
          name: "number-of-lines",
          description: "number",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/text",
        },
      ],
    },
    {
      name: "icon",
      description: {
        kind: "markdown",
        value: "icon",
      },
      attributes: [
        {
          name: "type",
          values: [
            {
              name: "home",
            },
            {
              name: "search",
            },
            {
              name: "calendar",
            },
            {
              name: "location",
            },
            {
              name: "setting",
            },
            {
              name: "contact",
            },
            {
              name: "chat",
            },
            {
              name: "info",
            },
            {
              name: "warning",
            },
            {
              name: "success",
            },
            {
              name: "plus",
            },
            {
              name: "minus",
            },
            {
              name: "geometry",
            },
            {
              name: "close",
            },
            {
              name: "close_circle",
            },
            {
              name: "more_horizontal",
            },
            {
              name: "arrow_right",
            },
            {
              name: "arrow_left",
            },
            {
              name: "arrow_down",
            },
            {
              name: "arrow_up",
            },
            {
              name: "bookmark",
            },
            {
              name: "app_home",
            },
            {
              name: "phone_home",
            },
            {
              name: "share",
            },
            {
              name: "warning_glyph",
            },
            {
              name: "success_glyph",
            },
            {
              name: "close_glyph",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "Loại icon hiển thị. Giá trị hợp lệ bao gồm: home, search, calendar, location, setting, contact, chat, info, warning, success, plus, minus, geometry, close, close_circle, more_horizontal, arrow_right, arrow_left, arrow_down, arrow_up, bookmark, app_home, phone_home, share, warning_glyph, success_glyph, close_glyph",
          },
        },
        {
          name: "color",
          description: {
            kind: "markdown",
            value: "mã màu css",
          },
        },
        {
          name: "size",
          description: {
            kind: "markdown",
            value: "number",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/icon",
        },
      ],
    },
    {
      name: "progress",
      description: {
        kind: "markdown",
        value: "Thanh tiến trình",
      },
      attributes: [
        {
          name: "percent",
          description: {
            kind: "markdown",
            value: "number",
          },
        },
        {
          name: "show-info",
          description: {
            kind: "markdown",
            value: "boolean",
          },
        },
        {
          name: "border-radius",
          description: {
            kind: "markdown",
            value: "number/string",
          },
        },
        {
          name: "font-size",
          description: {
            kind: "markdown",
            value: "number/string",
          },
        },
        {
          name: "stroke-width",
          description: {
            kind: "markdown",
            value: "number/string",
          },
        },
        {
          name: "active-color",
          description: {
            kind: "markdown",
            value: "color",
          },
        },
        {
          name: "background-color",
          description: {
            kind: "markdown",
            value: "color",
          },
        },
        {
          name: "active",
          description: "boolean",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/progress",
        },
      ],
    },
    {
      name: "radio-group",
      description: {
        kind: "markdown",
        value: "`radio-group` dùng để nhóm các `radio` lại với nhau",
      },
      attributes: [
        {
          name: "onChange",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện được gọi khi giá trị của các radio bị thay đổi, `event.detail = { value: value }`",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/radio-group",
        },
      ],
    },
    {
      name: "input",
      description: {
        kind: "markdown",
        value: "Dùng để nhập giá trị",
      },
      attributes: [
        {
          name: "type",
          description: {
            kind: "markdown",
            value: `Loại input.
              Hỗ trợ cả iOS và Android: default/number-pad/decimal-pad/numeric/email-address/phone-pad
              Chỉ hỗ trợ iOS: ascii-capable/numbers-and-punctuation/url/name-phone-pad/twitter/web-search
              Chỉ hỗ trợ Android: visible-password`,
          },
        },
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "Giá trị khởi tạo",
          },
        },
        {
          name: "placeholder",
          description: {
            kind: "markdown",
            value: "string",
          },
        },
        {
          name: "placeholder-text-color",
          description: "color",
        },
        {
          name: "disabled",
          description: "boolean",
        },
        {
          name: "maxlength",
          description: "number",
        },
        {
          name: "focus",
          description: "boolean",
        },
        {
          name: "confirm-type",
          description: `Nội dung hiển thị cho phím return (Nhập).
          Hỗ trợ cho cả iOS và Android: done/go/next/search/send
          Chỉ hỗ trợ iOS: default/emergency-call/google/join/route/yahoo
          Chỉ hỗ trợ Android: none/previous`,
        },
        {
          name: "selection-start",
          description:
            "Vị trí bắt đầu của con trỏ. Nó chỉ có hiệu lực trong khi focus là true và cần được sử dụng selection-end",
        },
        {
          name: "selection-end",
          description:
            "Vị trí kết thúc của con trỏ. Nó chỉ có hiệu lực khi focus là true và cần được sử dụng selection-start",
        },
        {
          name: "onInput",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, `event.detail = { value: value }`",
          },
        },
        {
          name: "onConfirm",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`",
          },
        },
        {
          name: "onFocus",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện sẽ được gọi khi input được focus , `event.detail = { value: value }`",
          },
        },
        {
          name: "onBlur",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện sẽ được gọi khi input không được focus nữa , `event.detail = { value: value }`",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/input",
        },
      ],
    },
    {
      name: "radio",
      description: {
        kind: "markdown",
        value: "`radio` dùng để chọn một giá trị",
      },
      attributes: [
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "string",
          },
        },
        {
          name: "checked",
          description: {
            kind: "markdown",
            value: "boolean",
          },
        },
        {
          name: "color",
          description: {
            kind: "markdown",
            value: "color",
          },
        },
        {
          name: "onChange",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked }`",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/radio",
        },
      ],
    },
    {
      name: "switch",
      description: {
        kind: "markdown",
        value: "`switch` dùng để chọn một giá trị",
      },
      attributes: [
        {
          name: "checked",
          description: "boolean",
        },
        {
          name: "color",
          description: "color",
        },
        {
          name: "disabled",
          description: "boolean",
        },
        {
          name: "controlled",
          description: "boolean",
        },
        {
          name: "onChange",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked }`",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/switch",
        },
      ],
    },
    {
      name: "checkbox-group",
      description: {
        kind: "markdown",
        value:
          "`checkbox-group` dùng để nhóm các `checkbox` lại với nhau, value của `checkbox-group` sẽ chứa các value của các `checkbox` được chọn",
      },
      attributes: [
        {
          name: "onChange",
          type: "event",
          description: {
            kind: "markdown",
            value:
              "Sự kiện được gọi khi giá trị của các checkbox bị thay đổi, `event.detail = { value: value }`, giá trị của value là một mảng các value của các `checkbox` được chọn",
          },
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/checkbox-group",
        },
      ],
    },
    {
      name: "checkbox",
      description: {
        kind: "markdown",
        value:
          "checkbox là một component cho phép người dùng chọn một hoặt nhiều phương án",
      },
      attributes: [
        {
          name: "onChange",
          description: {
            kind: "markdown",
            value:
              "Sự kiện được gọi khi giá trị bị thay đổi, `event.detail = { checked: checked, value: value }`",
          },
        },
        {
          name: "color",
          description: "color",
        },
        {
          name: "disabled",
          description: "boolean",
        },
        {
          name: "checked",
          description: "boolean",
        },
        {
          name: "value",
          description: "string",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/checkbox",
        },
      ],
    },
    {
      name: "label",
      description: {
        kind: "markdown",
        value:
          "Để tăng trải nghiệm với các form component, các thành phần bên trong label sẽ được focus khi bấm vào phạm vi của label. Hỗ trợ các component `radio`, `checkbox`, `input` và `switch`, nếu có nhiều component trong label, chỉ component đầu tiên được focus",
      },
      attributes: [],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/basic/label",
        },
      ],
    },
    {
      name: "avatar",
      description: {
        kind: "markdown",
        value:
          "Compnent avatar dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.",
      },
      attributes: [
        {
          name: "size",
          description: "Kích thước avatar (lg/md/xs)",
        },
        {
          name: "src",
          description: "string",
        },
        {
          name: "shape",
          description: "circle/standard",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/advance/avatar",
        },
      ],
    },
    {
      name: "popup",
      description: {
        kind: "markdown",
        value: "Hiển thị popup menu",
      },
      attributes: [
        {
          name: "show",
          description: "boolean",
        },
        {
          name: "animation",
          description: "boolean",
        },
        {
          name: "mask",
          description: "boolean",
        },
        {
          name: "position",
          description: "top/bottom/left/right",
        },
        {
          name: "onClose",
          type: "event",
          description:
            "mask=true, khi click vào mask sẽ trigger function onClose",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/advance/popup",
        },
      ],
    },
    {
      name: "modal",
      description: {
        kind: "markdown",
        value:
          "Khi ứng dụng cần cảnh báo hoặc nhắc nhở hành người dùng, yêu cầu thao tác của người dùng mà không phải chuyển trang, bạn có thể sử dụng modal. Người dùng cần thực hiện các thao tác trên modal trước khi đóng.",
      },
      attributes: [
        {
          name: "show",
          description: "boolean",
        },
        {
          name: "showClose",
          description: "boolean",
        },
        {
          name: "topImageSize",
          description: "sm/md/lg",
        },
        {
          name: "advice",
          description: "close button ở bottom",
        },
        {
          name: "topImage",
          description: "hiển thị hình ảnh ở trên top của modal",
        },
        {
          name: "onButtonClick",
          type: "event",
          description:
            "horifunction sẽ được bind và trigger khi click vào custom buttonontal/vertical",
        },
        {
          name: "buttonsLayout",
          description: "horizontal/vertical",
        },
        {
          name: "buttons",
          description:
            "custom bottom buttons, implement props onButtonClick bind function vào button",
        },
        {
          name: "onModalClose",
          type: "event",
          description: "trigger function này khi click vào close Button",
        },
        {
          name: "onMaskClick",
          type: "event",
          description: "trigger function này khi click vào mask",
        },
        {
          name: "mask",
          description: "boolean",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/advance/modal",
        },
      ],
    },
    {
      name: "image",
      description: {
        kind: "markdown",
        value: "image component để hiển thị hình ảnh",
      },
      attributes: [
        {
          name: "src",
          description: "string",
        },
        {
          name: "resize-mode",
          description:
            "Hỗ trợ thay đổi kích thước ảnh của image khi kích thước của khung hình không khớp với kích thước thật của ảnh. Giá trị mặc định là cover.",
        },
        {
          name: "resize-method",
          description:
            "Cơ chế được sử dụng để thay đổi kích thước hình ảnh. Giá trị mặc định là auto",
        },
        {
          name: "onError",
          type: "event",
          description:
            "Sự kiện được gọi khi hình ảnh tải về thất bại, `event.detail = { errMsg: 'Error message' }`",
        },
        {
          name: "onTap",
          type: "event",
          description: "Sự kiện được gọi khi bấm vào hình ảnh",
        },
        {
          name: "onLoad",
          type: "event",
          description:
            "Sự kiện được gọi khi hình ảnh được tải về thành công, `event.detail = { width, height }`",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/media/image",
        },
      ],
    },
    {
      name: "view",
      description: {
        kind: "markdown",
        value: "view",
      },
      attributes: [],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/view-container/view",
        },
      ],
    },
    {
      name: "scroll-view",
      description: {
        kind: "markdown",
        value:
          "`scroll-view` là một container component có thể scroll được. Thanh scroll ngoài cùng không ảnh hưởng gì đến thanh scroll của `scroll-view`",
      },
      attributes: [
        {
          name: "class",
          description: "string",
        },
        {
          name: "style",
          description: "string",
        },
        {
          name: "scroll-x",
          description: "boolean",
        },
        {
          name: "scroll-y",
          description: "boolean",
        },
        {
          name: "scroll-top",
          description: "number",
        },
        {
          name: "scroll-left",
          description: "number",
        },
        {
          name: "scroll-into-view",
          description:
            "Scroll tới phần tử con với id bằng với giá trị của scroll-into-view. Giá trị của scroll-into-view được ưu tiên hơn scroll-top và scroll-left. scroll-into-view chỉ áp dụng cho thẻ view",
        },
        {
          name: "scroll-with-animation",
          description: "boolean",
        },
        {
          name: "enable-back-to-top",
          description: "boolean",
        },
        {
          name: "shows-vertical-scroll-indicator",
          description: "boolean",
        },
        {
          name: "onScrollToUpper",
          type: "event",
          description:
            "Sự kiện được gọi khi thanh scroll tới vị trí trên đầu hoặc ngoài cùng bên trái của scroll-view",
        },
        {
          name: "onScrollToLower",
          type: "event",
          description:
            "Sự kiện được gọi khi thanh scroll tới vị trí dưới cùng hoặc ngoài cùng bên phải của scroll-viewiện được gọi khi thanh scroll tới vị trí trên đầu hoặc ngoài cùng bên trái của scroll-view",
        },
        {
          name: "onScroll",
          type: "event",
          description:
            "Sự kiện được gọi khi đang scroll, event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth }",
        },
        {
          name: "onTouchStart",
          type: "event",
          description: "Sự kiện được gọi khi bắt đầu chạm vào scroll-view",
        },
        {
          name: "onTouchmove",
          type: "event",
          description:
            "Sự kiện được gọi khi bạn di chuyển trong lúc chạm vào scroll-view",
        },
        {
          name: "onTouchEnd",
          type: "event",
          description: "Sự kiện được gọi khi dừng chạm vào scroll-view.",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url:
            "https://miniapp.tiki.vn/docs/component/view-container/scroll-view",
        },
      ],
    },
    {
      name: "carousel",
      description: {
        kind: "markdown",
        value:
          "carousel là một container componet hỗ trợ các hiệu ứng lướt cho các phần tử bên trong.",
      },
      attributes: [
        {
          name: "indicator-dots",
          description: "boolean",
        },
        {
          name: "indicator-color",
          description: "color",
        },
        {
          name: "indicator-active-color",
          description: "color",
        },
        {
          name: "autoplay",
          description: "boolean",
        },
        {
          name: "current",
          description: "number",
        },
        {
          name: "duration",
          description: "number",
        },
        {
          name: "interval",
          description: "number",
        },
        {
          name: "cell-spacing",
          description: "number",
        },
        {
          name: "circular",
          description: "boolean",
        },
        {
          name: "swipeable",
          description: "boolean",
        },
        {
          name: "width",
          description: "number",
        },
        {
          name: "slide-witdh",
          description: "number",
        },
        {
          name: "onChange",
          type: "event",
          description:
            "	Sự kiện được gọi sau khi item khác được active, event.detail = { current }",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/view-container/carousel",
        },
      ],
    },
    {
      name: "footer",
      description: {
        kind: "markdown",
        value:
          "The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.",
      },
      attributes: [
        {
          name: "tabs",
          description: "array[]",
        },
        {
          name: "swipeable",
          description: "boolean",
        },
        {
          name: "animation",
          description: "boolean",
        },
        {
          name: "initial-tab",
          description: "number",
        },
        {
          name: "tab-height",
          description: "number",
        },
        {
          name: "tab-size",
          description: "number",
        },
        {
          name: "active-text-color",
          description: "color",
        },
        {
          name: "inactive-text-color",
          description: "color",
        },
        {
          name: "active-icon-color",
          description: "color",
        },
        {
          name: "inactive-icon-color",
          description: "color",
        },
        {
          name: "tab-bar-underline-color",
          description: "color",
        },
        {
          name: "tab-bar-active-underline-color",
          description: "color",
        },
        {
          name: "tab-bar-underline-height",
          description: "number",
        },
        {
          name: "tab-bar-background-color",
          description: "color",
        },
        {
          name: "tab-bar-active-background-color",
          description: "color",
        },
        {
          name: "show-tab-bar",
          description: "boolean",
        },
        {
          name: "onTabClick",
          type: "event",
          description:
            "Sự kiện được gọi khi bấm vào tab, event.detail = { index, tab }",
        },
        {
          name: "onChange",
          type: "event",
          description:
            "Sự kiện được gọi khi đổi tab, event.detail = { index, tab }",
        },
      ],
      references: [
        {
          name: "Tiki MiniApp Framework",
          url: "https://miniapp.tiki.vn/docs/component/view-container/tabs",
        },
      ],
    },
  ],
};
