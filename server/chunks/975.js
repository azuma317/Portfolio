exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 25211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29898))

/***/ }),

/***/ 48870:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 81611))

/***/ }),

/***/ 74984:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9279))

/***/ }),

/***/ 52381:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 29898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Error({ error, reset }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.error(error);
    }, [
        error
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Oh no, something went wrong... maybe refresh?"
        })
    });
}


/***/ }),

/***/ 81611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_public_fonts_ibm_plex_sans_var_woff2_weight_400_variable_font_wibb_display_swap_variableName_font___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15721);
/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_public_fonts_ibm_plex_sans_var_woff2_weight_400_variable_font_wibb_display_swap_variableName_font___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_public_fonts_ibm_plex_sans_var_woff2_weight_400_variable_font_wibb_display_swap_variableName_font___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83710);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9279);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: (next_font_local_target_css_path_app_layout_tsx_import_arguments_src_public_fonts_ibm_plex_sans_var_woff2_weight_400_variable_font_wibb_display_swap_variableName_font___WEBPACK_IMPORTED_MODULE_3___default().variable),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__.TopLoader, {
                    color: `var(--primary)`,
                    easing: "ease",
                    initialPosition: 0.08,
                    crawlSpeed: 200,
                    height: 2.5,
                    crawl: true,
                    showSpinner: false,
                    speed: 200
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__.Providers, {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 9279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Breadcrumbs: () => (/* reexport */ Breadcrumbs),
  Icon: () => (/* reexport */ Icon),
  Label: () => (/* reexport */ Label),
  Layout: () => (/* reexport */ Layout),
  Providers: () => (/* reexport */ Providers),
  ThemeSwitch: () => (/* reexport */ ThemeSwitch),
  Tooltip: () => (/* reexport */ Tooltip),
  TopLoader: () => (/* reexport */ (dist_default()))
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./components/breadcrumbs/index.tsx
/* __next_internal_client_entry_do_not_use__ Breadcrumbs auto */ 


function Breadcrumbs() {
    const pathname = (0,navigation.usePathname)() || "";
    const paths = pathname.split("/").slice(1, -1);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ol", {
            children: paths.map((path)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `${path === "" ? "/" : `/${path}`}`,
                            className: "text-neutral-800 dark:text-neutral-400 capitalize transition-all ease-linear",
                            "area-label": path,
                            children: path === "" ? "home" : path
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "aria-hidden": "true",
                            className: "w-px h-3 bg-neutral-400 rounded-full rotate-12"
                        })
                    ]
                }, path))
        })
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/icon/icons.tsx
/* __next_internal_client_entry_do_not_use__ icons auto */ 

const icons = {
    home: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 576 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M277.4 4c6-5.3 15.1-5.3 21.2 0l272 240c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235v197c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V235l-37.4 33c-6.6 5.8-16.8 5.2-22.6-1.4s-5.2-16.8 1.4-22.6l272-240zM96 206.7V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V206.7L288 37.3 96 206.7z"
            })
        }),
    dev: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 448 512",
            fill: "none",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm197.4 140c-6.6 5.9-7.2 16-1.3 22.6l54.5 61.4-54.6 61.4c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3l64-72c5.4-6.1 5.4-15.2 0-21.3l-64-72c-5.9-6.6-16-7.2-22.6-1.3zM188 194.6c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3l-64 72c-5.4 6.1-5.4 15.2 0 21.3l64 72c5.9 6.6 16 7.2 22.6 1.3s7.2-16 1.3-22.6L133.4 256l54.6-61.4z"
                })
            })
        }),
    projects: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 512 512",
            fill: "none",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M384 312.1c4-2.5 7.7-4.9 11.3-7.3C527.1 215.4 519.9 78.3 502.7 9.3c-68.9-17.2-206-24.5-295.4 107.4-2.4 3.6-4.9 7.3-7.3 11.3H78.1l-4.4 8.8-64 128L-1.9 288h120.4c-10.9 24.4-17.9 40.9-17.9 40.9l80.8 80.8s17.2-7 42.6-17.9v122.1l23.2-11.6 128-64 8.8-4.4V312.1zm-32 18.5v83.5l-96 48v-84.5c30.3-13.7 65.4-30.3 96-47zM133.1 256H49.9l48-96h83.3c-16.9 30.7-34 65.8-48.1 96zm5.5 65.6 1.5-3.5c6.3-14.4 15.2-34.4 25.6-56.4 20.9-44.6 46.7-95.6 68-127.1C304.6 30 409.4 24.5 475.7 36.2c11.7 66.3 6.2 171.1-98.4 242-31.5 21.3-82.7 46.6-127.7 67.1-22.2 10.1-42.3 18.8-56.8 25l-3.9 1.6-50.4-50.4zM368 168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-56-24a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
                })
            })
        }),
    writing: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 448 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 80H0v32h448V80H16zm128 160h-16v32h320v-32H144zm-16 160v32h320v-32H128zM0 432v16h32V224H0v208z"
                })
            })
        }),
    arrow: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 12 12",
            ...props,
            fill: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M2.071 11.35.963 10.241l8.239-8.253H2.838L2.852.455h8.992V9.46h-1.548l.014-6.363-8.239 8.252Z"
            })
        }),
    arrowTop: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 448 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "m34.9 289.5-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            })
        }),
    views: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: "currentColor",
                d: "M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"
            })
        }),
    moon: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 512 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2 0 108.9 83.5 198.3 189.9 207.3-27.8 15.7-59.9 24.7-94.1 24.7C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2zm66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3z"
            })
        }),
    sunny: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 512 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M256 0c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16zM0 256c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm400 0c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-8.8 0-16-7.2-16-16zM256 400c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16zM75 75c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6zm0 362c-6.2-6.2-6.2-16.4 0-22.6l56.6-56.6c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L97.6 437c-6.2 6.2-16.4 6.2-22.6 0zm282.8-282.8c-6.2-6.2-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.6 0zm0 203.6c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.6zM336 256a80 80 0 1 0-160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0z"
            })
        }),
    desktop: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 576 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M512 32H64c-17.7 0-32 14.3-32 32v192h512V64c0-17.7-14.3-32-32-32zm64 224v96c0 35.3-28.7 64-64 64H362.9l10.7 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v192zM32 288v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64H32zm202.9 192h106.2l-10.7-64h-84.8l-10.7 64z"
            })
        }),
    bars: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 64h448v64H0V64zm0 160h448v64H0v-64zm448 160v64H0v-64h448z"
            })
        })
};

;// CONCATENATED MODULE: ./components/icon/index.tsx



const Icon = ({ name, width = "1em", height = "1em", className, ...rest })=>{
    const IconComponent = icons[name];
    return /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {
        className: `fill-current ${className}`,
        width: width,
        height: height,
        ...rest
    });
};

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(77688);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(74411);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(60127);
;// CONCATENATED MODULE: ./lib/utils.tsx


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var dist = __webpack_require__(37448);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(26060);
;// CONCATENATED MODULE: ./components/label/index.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.f, {
        ref: ref,
        className: cn(labelVariants(), className),
        ...props
    }));
Label.displayName = dist/* Root */.f.displayName;


;// CONCATENATED MODULE: ./components/layout/drawer.tsx



function Drawer(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: cn("drawer sm:drawer-open"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: props.id,
                type: "checkbox",
                className: "drawer-toggle",
                "aria-label": "Drawer Toggle"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                className: "drawer-side",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute right-0 sm:block w-[1px] h-screen bg-gradient-to-b from-neutral-200 dark:from-neutral-800"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                        htmlFor: props.id,
                        className: "drawer-overlay"
                    }),
                    props.navbar && props.navbar()
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "drawer-content",
                children: props.children
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/static/avatar.jpg
var avatar = __webpack_require__(89061);
;// CONCATENATED MODULE: ./lib/info.tsx



const info_avatar = avatar["default"];
const info_name = "Azuma";
const about = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            "I'm currently based in Fukuoka and deeply involved in a diverse range of exciting ",
            /*#__PURE__*/ _jsx(Link, {
                href: "/projects",
                children: /*#__PURE__*/ _jsx("b", {
                    children: "projects"
                })
            }),
            " and ",
            /*#__PURE__*/ _jsx(Link, {
                href: "/writing",
                children: /*#__PURE__*/ _jsx("b", {
                    children: "interests"
                })
            }),
            "."
        ]
    });
};
const bio = ()=>{
    const yearsSinceStart = new Date().getFullYear() - new Date("2019").getFullYear();
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            "As a software developer, I've been writing code for over ",
            /*#__PURE__*/ _jsxs("b", {
                children: [
                    yearsSinceStart - 1,
                    " years"
                ]
            }),
            ". While my expertise spans across the full software development stack, I am particularly passionate about Infrastracture Development. ",
            /*#__PURE__*/ _jsx(Link, {
                href: "/dev",
                children: /*#__PURE__*/ _jsx("b", {
                    children: "Read on"
                })
            }),
            "."
        ]
    });
};

;// CONCATENATED MODULE: ./lib/index.tsx



;// CONCATENATED MODULE: ./components/logo/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Logo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...props,
        "aria-label": "Sam Wibb",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            alt: info_name,
            className: "rounded-full grayscale border-solid border-4 border-neutral-200 dark:border-white",
            src: info_avatar,
            placeholder: "blur",
            width: 48,
            priority: true
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-tooltip/dist/index.mjs + 17 modules
var react_tooltip_dist = __webpack_require__(33964);
;// CONCATENATED MODULE: ./components/tooltip/index.tsx




function Tooltip({ content, children, className, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_tooltip_dist/* Provider */.zt, {
        delayDuration: 0,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tooltip_dist/* Root */.fC, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_tooltip_dist/* Trigger */.xz, {
                    asChild: true,
                    children: children
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_tooltip_dist/* Content */.VY, {
                    ...props,
                    className: cn("z-50 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800 px-3 py-1.5 font-sans text-sm text-popover-foreground shadow-md animate-in fade-in-25 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", className),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_tooltip_dist/* Arrow */.Eh, {
                            className: "animate-in fill-neutral-200 dark:fill-neutral-800"
                        }),
                        content
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var next_themes_dist = __webpack_require__(95176);
;// CONCATENATED MODULE: ./components/theme-switch/index.tsx






function ThemeSwitch({ className }) {
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, setTheme } = (0,next_themes_dist/* useTheme */.F)();
    const [checked, setChecked] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    const options = [
        {
            icon: "desktop",
            label: "system"
        },
        {
            icon: "sunny",
            label: "light"
        },
        {
            icon: "moon",
            label: "dark"
        }
    ];
    const getNextTheme = ()=>{
        const currentThemeIndex = options.findIndex((option)=>option.label === theme);
        const nextThemeIndex = (currentThemeIndex + 1) % options.length;
        return options[nextThemeIndex].label;
    };
    const handleClick = ()=>{
        const appTheme = getNextTheme();
        setTheme(appTheme);
        // Update the checked state based on the next theme.
        setChecked(appTheme === "dark");
    };
    const currentOption = options.find((option)=>option.label === theme) || options[0];
    const label = currentOption.label;
    return /*#__PURE__*/ jsx_runtime_.jsx(Tooltip, {
        content: label.charAt(0).toUpperCase() + label.slice(1),
        side: "right",
        sideOffset: 6,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            onClick: handleClick,
            className: cn("btn btn-square btn-ghost mask mask-squircle text-base-foreground hover:text-primary swap swap-rotate", className),
            "aria-label": currentOption.label,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    className: "hidden",
                    checked: checked,
                    onChange: ()=>{}
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    name: currentOption.icon,
                    width: 24,
                    height: 24
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/scroll-to-top/index.tsx
/* __next_internal_client_entry_do_not_use__ ScrollToTop auto */ 

// import { motion, useAnimation, useScroll } from 'framer-motion';


// TODO: Add animation with CSS or Framer Motion
function ScrollToTop({ className, threshold = 500 }) {
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    const toggleVisibility = (0,react_.useCallback)(()=>{
        if (window.scrollY > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [
        threshold
    ]);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, [
        toggleVisibility
    ]);
    return isVisible ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        onClick: scrollToTop,
        className: cn("btn btn-square mask mask-squircle", isVisible ? "opacity-100" : "opacity-0", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                name: "arrowTop",
                width: 24,
                height: 24
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Go to top"
            })
        ]
    }) : null;
}

;// CONCATENATED MODULE: ./components/layout/index.tsx
/* __next_internal_client_entry_do_not_use__ Layout auto */ 













function Layout(props) {
    const [top, setTop] = (0,react_.useState)(true);
    let pathname = (0,navigation.usePathname)() || "/";
    const paths = [
        "/writing",
        "/projects"
    ];
    paths.some((path)=>{
        if (pathname.includes(path)) {
            pathname = path;
            return true;
        }
        return false;
    });
    (0,react_.useEffect)(()=>{
        const scrollHandler = ()=>{
            window.scrollY > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return ()=>window.removeEventListener("scroll", scrollHandler);
    }, [
        top
    ]);
    const closeDrawer = ()=>{
        // Close drawer by clicking on the checkbox
        document.getElementById("landing-drawer").checked = false;
    };
    const Navbar = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-background sm:bg-clear shadow-md sm:shadow-none min-h-screen p-8 sm:pt-10 sm:px-6 md:pt-20 md:px-10 lg:px-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    href: "/",
                    onClick: closeDrawer,
                    className: "mb-8 btn btn-square btn-ghost mask mask-squircle"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "grid gap-y-3 place-items-center",
                    children: [
                        Object.entries(props.items).map(([path, { name, icon, className }])=>{
                            const isActive = path === pathname;
                            return /*#__PURE__*/ jsx_runtime_.jsx(Tooltip, {
                                content: name.charAt(0).toUpperCase() + name.slice(1),
                                side: "right",
                                sideOffset: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: path,
                                    onClick: closeDrawer,
                                    "aria-label": name,
                                    className: cn("btn btn-square btn-link relative transition-all no-underline font-sans", {
                                        "text-base-foreground font-bold": !isActive
                                    }),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "relative p-[15px] flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                name: icon,
                                                width: 24,
                                                height: 24,
                                                className: cn({
                                                }, className)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-4 sr-only",
                                                children: name.charAt(0).toUpperCase() + name.slice(1)
                                            }),
                                            path === pathname ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                                className: "absolute inset-0 bg-base mask mask-squircle z-[-1]",
                                                layoutId: "sidebar",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 250,
                                                    damping: 25
                                                }
                                            }) : null
                                        ]
                                    })
                                }, path)
                            }, name);
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex my-10 w-[20px] h-[.5px] bg-border self-center"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ThemeSwitch, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden absolute bottom-8 sm:bottom-10 md:bottom-20 sm:flex align-middle self-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {})
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Drawer, {
        id: "landing-drawer",
        navbar: ()=>/*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: cn("sm:hidden px-6 py-3 sticky top-0 backdrop-blur-md z-10", !top && "shadow-md"),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                    htmlFor: "landing-drawer",
                    className: "relative left-[-12px] btn btn-square btn-ghost mask mask-squircle",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        name: "bars",
                        width: 32,
                        height: 32
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col p-6 sm:p-10 md:pt-20 md:px-8 lg:px-20 min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed bottom-8 right-8 sm:hidden z-50",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {})
                    }),
                    props.children
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/providers/index.tsx


function Providers({ children, ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(next_themes_dist/* ThemeProvider */.f, {
        attribute: "class",
        ...rest,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/nextjs-toploader/dist/index.js
var nextjs_toploader_dist = __webpack_require__(88737);
var dist_default = /*#__PURE__*/__webpack_require__.n(nextjs_toploader_dist);
;// CONCATENATED MODULE: ./components/top-loader/index.tsx



;// CONCATENATED MODULE: ./components/index.ts
/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,* auto */ 









/***/ }),

/***/ 16549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56554);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);


const navItems = {
    "/": {
        name: "home",
        icon: "home",
        className: ""
    },
    "/dev": {
        name: "developer",
        icon: "dev",
        className: ""
    },
    "/projects": {
        name: "projects",
        icon: "projects",
        className: ""
    },
    "/writing": {
        name: "writing",
        icon: "writing",
        className: ""
    }
};
async function LandingLayout(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__.Layout, {
        items: navItems,
        children: props.children
    });
}


/***/ }),

/***/ 50217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/runner/work/Portfolio/Portfolio/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 60729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/runner/work/Portfolio/Portfolio/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 56554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ *,*,*,*,*,*,*,* auto */ const { createProxy } = __webpack_require__(21313);
module.exports = createProxy("/home/runner/work/Portfolio/Portfolio/components/index.ts");


/***/ }),

/***/ 89061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.05b3bddf.jpg","height":1280,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAK4SN//EABsQAAIBBQAAAAAAAAAAAAAAABESACEiMUJx/9oACAEBAAE/ABazbKorgnk//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAgEBPwBzD//EABcRAAMBAAAAAAAAAAAAAAAAAAACQnH/2gAIAQMBAT8AecP/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 83710:
/***/ (() => {



/***/ })

};
;