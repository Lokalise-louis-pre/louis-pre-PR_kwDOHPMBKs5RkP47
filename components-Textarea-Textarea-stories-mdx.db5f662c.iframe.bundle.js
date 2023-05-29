"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[693],{"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>d});const d=c=>(e,s)=>!c.includes(e)&&s(e)},"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@lokalise/styled/dist/tokens/variants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>e});const e=(t,a,c)=>n=>a["function"==typeof t?t(n):n[t]??c]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Textarea/Textarea.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Textarea_stories,defaultStory:()=>defaultStory,rows:()=>rows,withError:()=>withError});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),useInputErrorMessages=__webpack_require__("./src/components/InputErrorMessage/useInputErrorMessages.ts"),InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),theme=__webpack_require__("./src/utils/theme/index.ts");const Textarea=styled_components_browser_esm.ZP.textarea.withConfig({displayName:"Textarea",componentId:"sc-1wf9llw-0"})(["",";padding:",";max-width:100%;"],inputStyle.gf,(0,theme.W0)(3)),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Textarea__Container",componentId:"sc-1wf9llw-1"})(["width:100%;display:grid;gap:",";grid-template-columns:minmax(50px,1fr);"],(0,theme.W0)(1));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=(0,react.forwardRef)(((_ref,ref)=>{let{error,rows=3,...props}=_ref;const{isInvalid,errorMessages}=(0,useInputErrorMessages.A)(error);return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Textarea,{...props,ref,rows,error:isInvalid,"aria-invalid":isInvalid,"aria-errormessage":errorMessages.length>0?errorMessages.map((err=>err.id)).join(" "):void 0}),errorMessages.length>0&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{children:errorMessages})]})}));Textarea_Textarea.displayName="Textarea";try{Textarea_Textarea.displayName="Textarea",Textarea_Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea_Textarea.__docgenInfo,name:"Textarea",path:"src/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(Textarea_Textarea,{onChange:e=>{updateArgs({value:e.target.value})},...args})};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const rows=Template.bind({});rows.storyName="Rows",rows.args={rows:10},rows.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const withError=Template.bind({});withError.storyName="With Error",withError.args={error:"Please enter a valid input"},withError.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = e => {\n    updateArgs({\n      value: e.target.value\n    });\n  };\n\n  return <Textarea onChange={handleChange} {...args} />;\n}"}};const componentMeta={title:"Components/Forms/Textarea",parameters:{controls:{sort:"requiredFirst"}},component:Textarea_Textarea,argTypes:{value:{control:{type:"text"}},error:{control:{type:"text"}},disabled:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","rows","withError"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Forms/Textarea",component:Textarea_Textarea,parameters:{controls:{sort:"requiredFirst"}},argTypes:{value:{control:{type:"text"}},error:{control:{type:"text"}},disabled:{control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"textarea",children:"Textarea"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Textarea designed for longer and larger text input that may span multiple lines."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Textarea } from '@lokalise/louis';\n\nexport default () => {\n\tconst [value, setValue] = useState();\n\treturn <Textarea value={value} onChange={(e) => setValue(e.target.value)} />;\n};\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4029%3A21039",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Textarea"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Textarea_Textarea,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"rows",children:"Rows"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Rows",args:{rows:10},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-error",children:"With Error"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"With Error",args:{error:"Please enter a valid input"},children:Template.bind({})})})]})}}};const Textarea_stories=componentMeta},"./src/components/InputErrorMessage/InputErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>InputErrorMessage});__webpack_require__("./node_modules/react/index.js");var BoxImportant=__webpack_require__("./src/foundations/icons/BoxImportant.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Error=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__Error",componentId:"sc-1wn0241-0"})(["font-family:",";"," color:",";display:grid;gap:",";grid-template-columns:min-content auto;align-items:center;"],(0,theme.S3)("font.family.graphik"),(0,theme.cp)("message"),(0,theme.S3)("color.background.action.danger.default"),(0,theme.W0)(1)),MultiErrorContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__MultiErrorContainer",componentId:"sc-1wn0241-1"})(["display:grid;gap:",";"],(0,theme.W0)(1)),IconContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__IconContainer",componentId:"sc-1wn0241-2"})(["align-self:flex-start;font-size:16px;display:flex;align-items:center;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isInputMessage=error=>(error=>"object"==typeof error&&null!==error)(error)&&"string"==typeof error.message&&"string"==typeof error.id,normalizeChildren=(children,id)=>{if(null===children)return[];if(errors=children,Array.isArray(errors)&&errors.every(isInputMessage))return children;var errors;return[...new Set("string"==typeof children?[children]:children)].map(((message,index)=>({message,id:[id,index].filter((x=>void 0!==x)).join("-")})))},InputErrorMessage=_ref=>{let{children,id,className}=_ref;if(null===children)return null;const uniqueErrors=normalizeChildren(children,id);return 0===uniqueErrors.length?null:(0,jsx_runtime.jsx)(MultiErrorContainer,{"aria-live":"assertive",className,children:uniqueErrors.map((child=>!!child.message&&(0,jsx_runtime.jsxs)(Error,{id:`${child.id}`,children:[(0,jsx_runtime.jsx)(IconContainer,{children:(0,jsx_runtime.jsx)(BoxImportant.m,{color:"red.400"})}),child.message]},`${child.id}`)))})};InputErrorMessage.displayName="InputErrorMessage";try{InputErrorMessage.displayName="InputErrorMessage",InputErrorMessage.__docgenInfo={description:"",displayName:"InputErrorMessage",props:{children:{defaultValue:null,description:"One or more error message objects with error text to render and ID.",name:"children",required:!0,type:{name:"DeprecatedMessages | InputErrorMessage[]"}},id:{defaultValue:null,description:"**Deprecated**: Should not provide `id` when providing error message objects\n@deprecated in favor of error message objects",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"]={docgenInfo:InputErrorMessage.__docgenInfo,name:"InputErrorMessage",path:"src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputErrorMessage/useInputErrorMessages.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useInputErrorMessages});var hooks=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const useInputErrorMessages=error=>{const errorId=(0,hooks.H)()("error-id"),isInvalid=Array.isArray(error)?error.length>0:!!error,errorMessages=(error=>{switch(typeof error){case"boolean":case"undefined":return[];case"string":return[error];default:return[...new Set(error)]}})(error).map(((message,index)=>({message,id:`${errorId}-${index}`})));return{isInvalid,errorMessages}}},"./src/foundations/icons/BoxImportant.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>BoxImportant});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoxImportant=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{fillRule:"evenodd",clipRule:"evenodd",d:"M2 10c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8Zm7.20371 4.0062h1.59999v-1.6H9.20371v1.6Zm0-3.1999h1.59999V6.00627H9.20371v4.80003Z"})})};BoxImportant.displayName="BoxImportant";try{BoxImportant.displayName="BoxImportant",BoxImportant.__docgenInfo={description:"",displayName:"BoxImportant",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.200"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.300"'},{value:'"red.200"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.300"'},{value:'"green.200"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.300"'},{value:'"yellow.200"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.300"'},{value:'"background.primary"'},{value:'"background.input"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.disabled"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"content.buttonText1"'},{value:'"content.buttonText2"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'},{value:'"inherit"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/BoxImportant.tsx#BoxImportant"]={docgenInfo:BoxImportant.__docgenInfo,name:"BoxImportant",path:"src/foundations/icons/BoxImportant.tsx#BoxImportant"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.200"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.300"'},{value:'"red.200"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.300"'},{value:'"green.200"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.300"'},{value:'"yellow.200"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.300"'},{value:'"background.primary"'},{value:'"background.input"'},{value:'"background.secondary"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.disabled"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"content.buttonText1"'},{value:'"content.buttonText2"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Fd:()=>SvgIconStop,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,p5:()=>SvgIconCircle,uJ:()=>SvgRoot,wq:()=>SvgIconLinearGradient,x:()=>SvgIconDefs});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/excludeProps.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/index.ts");const reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.$_)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: ${_ref=>{let{color:svgColor,...props}=_ref;return colorHelper("color",svgColor,props)}};
	fill: ${_ref2=>{let{fill,...props}=_ref2;return colorHelper("fill",fill,props)}};
	stroke: ${_ref3=>{let{stroke,...props}=_ref3;return colorHelper("stroke",stroke,props)}};
	font-size: ${props=>props.size};
`,commonExcludedProps=["fill","color","stroke"],SvgRoot=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.svg.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles),SvgIconPath=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.path.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconPath",componentId:"sc-4ot8tf-1"})(["",";"],commonStyles),SvgIconRect=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.rect.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconRect",componentId:"sc-4ot8tf-2"})(["",";"],commonStyles),SvgIconG=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.g.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconG",componentId:"sc-4ot8tf-3"})(["",";"],commonStyles),SvgIconCircle=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.circle.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconCircle",componentId:"sc-4ot8tf-4"})(["",";"],commonStyles),SvgIconLinearGradient=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.linearGradient.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconLinearGradient",componentId:"sc-4ot8tf-5"})(["",";"],commonStyles),SvgIconDefs=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.defs.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconDefs",componentId:"sc-4ot8tf-6"})(["",";"],commonStyles),SvgIconStop=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.stop.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconStop",componentId:"sc-4ot8tf-7"})(["",";"],commonStyles),SvgIconClipPath=_lokalise_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.clipPath.withConfig({shouldForwardProp:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconClipPath",componentId:"sc-4ot8tf-8"})(["",";"],commonStyles)},"./src/utils/styles/inputStyle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IK:()=>withInputErrorModifier,NH:()=>withInputContainerStyle,RP:()=>withInputSizeVariants,WC:()=>inputHeight,dC:()=>smallInputHeight,gf:()=>withInputStyle,hJ:()=>withInputDisabledStyle,jR:()=>withInputFieldStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withInputErrorStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-color:",";"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.danger")),withInputErrorModifier=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.c)("error",withInputErrorStyle),withInputDisabledStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["color:",";background-color:",";border-color:",";cursor:not-allowed;&:hover,[data-dev-state='hover'] &{border-color:",";}&:focus,[data-dev-state='focus'] &{border-color:",";}&::placeholder{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.middle"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.disabled")),withInputDisabledModifier=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)([""," &:disabled{","}"],(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.c)("disabled",withInputDisabledStyle),withInputDisabledStyle),withInputContainerStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["box-sizing:border-box;",";width:100%;color:",";border:1px solid ",";border-radius:",";transition:border-color ease-in-out ",";padding:",";background-color:",";@media (prefers-reduced-motion:reduce){transition:none;}&:hover,[data-dev-state='hover'] &{border-color:",";}&:focus-within,[data-dev-state='focus'] &{border-color:",";}"," ",""],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("v2.body.small"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("radius.m"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("transition.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.W0)(2,3),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.input.hover"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.active"),withInputErrorModifier,withInputDisabledModifier),withInputFieldStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["box-sizing:content-box;-webkit-font-smoothing:subpixel-antialiased;",";color:",";background:none;&&&:focus,&&&:focus-visible,[data-dev-state='focus'] &&&{outline:none !important;}&::placeholder{",";color:",";}"," ",""],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("v2.body.small"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("v2.body.small"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.input.placeholder"),withInputErrorModifier,withInputDisabledModifier),withInputStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["",";",";box-sizing:border-box;background:",";"],withInputContainerStyle,withInputFieldStyle,(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.input.default")),inputHeight=35,smallInputHeight=30,inputElementHeight=inputHeight-2,smallInputElementHeight=smallInputHeight-2,withInputSizeVariants=(sizeStyles={small:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:","px;min-height:","px;",";&::placeholder{","}"],smallInputElementHeight,smallInputElementHeight,(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("v2.body.caption"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("v2.body.caption")),default:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:","px;min-height:","px;line-height:","px;&::-moz-placeholder{line-height:","px;}"],inputElementHeight,inputElementHeight,inputElementHeight,inputElementHeight)},(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__.o)("inputSize",sizeStyles,"default"));var sizeStyles},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}}}]);
//# sourceMappingURL=components-Textarea-Textarea-stories-mdx.db5f662c.iframe.bundle.js.map