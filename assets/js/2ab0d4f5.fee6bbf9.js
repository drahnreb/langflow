"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1845],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},83640:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"type":"api","id":"simplified-run-flow","title":"Simplified Run Flow","description":"","slug":"/simplified-run-flow","frontMatter":{},"api":{"tags":["Base"],"description":"Executes a specified flow by ID with support for streaming and telemetry.\\n\\nThis endpoint executes a flow identified by ID or name, with options for streaming the response\\nand tracking execution metrics. It handles both streaming and non-streaming execution modes.\\n\\nArgs:\\n    background_tasks (BackgroundTasks): FastAPI background task manager\\n    flow (FlowRead | None): The flow to execute, loaded via dependency\\n    input_request (SimplifiedAPIRequest | None): Input parameters for the flow\\n    stream (bool): Whether to stream the response\\n    api_key_user (UserRead): Authenticated user from API key\\n    request (Request): The incoming HTTP request\\n\\nReturns:\\n    Union[StreamingResponse, RunResponse]: Either a streaming response for real-time results\\n    or a RunResponse with the complete execution results\\n\\nRaises:\\n    HTTPException: For flow not found (404) or invalid input (400)\\n    APIException: For internal execution errors (500)\\n\\nNotes:\\n    - Supports both streaming and non-streaming execution modes\\n    - Tracks execution time and success/failure via telemetry\\n    - Handles graceful client disconnection in streaming mode\\n    - Provides detailed error handling with appropriate HTTP status codes\\n    - In streaming mode, uses EventManager to handle events:\\n        - \\"add_message\\": New messages during execution\\n        - \\"token\\": Individual tokens during streaming\\n        - \\"end\\": Final execution result","operationId":"simplified_run_flow_api_v1_run__flow_id_or_name__post","security":[{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"flow_id_or_name","in":"path","required":true,"schema":{"type":"string","title":"Flow Id Or Name"}},{"name":"stream","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Stream"}},{"name":"user_id","in":"query","required":false,"schema":{"anyOf":[{"type":"string"},{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"}}],"requestBody":{"content":{"application/json":{"schema":{"anyOf":[{"properties":{"input_value":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Input Value","description":"The input value"},"input_type":{"anyOf":[{"type":"string","enum":["chat","text","any"]},{"type":"null"}],"title":"Input Type","description":"The input type","default":"chat"},"output_type":{"anyOf":[{"type":"string","enum":["chat","text","any","debug"]},{"type":"null"}],"title":"Output Type","description":"The output type","default":"chat"},"output_component":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Output Component","description":"If there are multiple output components, you can specify the component to get the output from.","default":""},"tweaks":{"anyOf":[{"additionalProperties":{"anyOf":[{"type":"string"},{"type":"object"}]},"type":"object","title":"Tweaks","description":"A dictionary of tweaks to adjust the flow\'s execution. Allows customizing flow behavior dynamically. All tweaks are overridden by the input values.","examples":[{"Component Name":{"parameter_name":"value"},"component_id":{"parameter_name":"value"},"parameter_name":"value"}]},{"type":"null"}],"description":"The tweaks"},"session_id":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Session Id","description":"The session id"}},"type":"object","title":"SimplifiedAPIRequest"},{"type":"null"}],"title":"Input Request"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"post","path":"/api/v1/run/{flow_id_or_name}","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.2.0"},"postman":{"name":"Simplified Run Flow","description":{"content":"Executes a specified flow by ID with support for streaming and telemetry.\\n\\nThis endpoint executes a flow identified by ID or name, with options for streaming the response\\nand tracking execution metrics. It handles both streaming and non-streaming execution modes.\\n\\nArgs:\\n    background_tasks (BackgroundTasks): FastAPI background task manager\\n    flow (FlowRead | None): The flow to execute, loaded via dependency\\n    input_request (SimplifiedAPIRequest | None): Input parameters for the flow\\n    stream (bool): Whether to stream the response\\n    api_key_user (UserRead): Authenticated user from API key\\n    request (Request): The incoming HTTP request\\n\\nReturns:\\n    Union[StreamingResponse, RunResponse]: Either a streaming response for real-time results\\n    or a RunResponse with the complete execution results\\n\\nRaises:\\n    HTTPException: For flow not found (404) or invalid input (400)\\n    APIException: For internal execution errors (500)\\n\\nNotes:\\n    - Supports both streaming and non-streaming execution modes\\n    - Tracks execution time and success/failure via telemetry\\n    - Handles graceful client disconnection in streaming mode\\n    - Provides detailed error handling with appropriate HTTP status codes\\n    - In streaming mode, uses EventManager to handle events:\\n        - \\"add_message\\": New messages during execution\\n        - \\"token\\": Individual tokens during streaming\\n        - \\"end\\": Final execution result","type":"text/plain"},"url":{"path":["api","v1","run",":flow_id_or_name"],"host":["{{baseUrl}}"],"query":[{"disabled":false,"key":"stream","value":"false"},{"disabled":false,"key":"user_id","value":"<string>"}],"variable":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"flow_id_or_name"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"input_value\\": \\"<string>\\",\\n  \\"input_type\\": \\"<string>\\",\\n  \\"output_type\\": \\"<string>\\",\\n  \\"output_component\\": \\"<string>\\",\\n  \\"tweaks\\": {\\n    \\"sed65\\": \\"<string>\\",\\n    \\"anim1_5\\": \\"<string>\\"\\n  },\\n  \\"session_id\\": \\"<string>\\"\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"apikey","apikey":[{"type":"any","value":"x-api-key","key":"key"},{"type":"any","value":"{{apiKey}}","key":"value"},{"type":"any","value":"query","key":"in"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/simplified-run-flow","previous":{"title":"Get All","permalink":"/api/get-all"},"next":{"title":"Webhook Run Flow","permalink":"/api/webhook-run-flow"}}');var s=t(74848),r=t(28453);const a={},o="Simplified Run Flow",l=[];function d(e){const n={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"simplified-run-flow",children:"Simplified Run Flow"})}),"\n",(0,s.jsx)(n.p,{children:"Executes a specified flow by ID with support for streaming and telemetry."}),"\n",(0,s.jsx)(n.p,{children:"This endpoint executes a flow identified by ID or name, with options for streaming the response\nand tracking execution metrics. It handles both streaming and non-streaming execution modes."}),"\n",(0,s.jsx)(n.p,{children:"Args:\nbackground_tasks (BackgroundTasks): FastAPI background task manager\nflow (FlowRead | None): The flow to execute, loaded via dependency\ninput_request (SimplifiedAPIRequest | None): Input parameters for the flow\nstream (bool): Whether to stream the response\napi_key_user (UserRead): Authenticated user from API key\nrequest (Request): The incoming HTTP request"}),"\n",(0,s.jsx)(n.p,{children:"Returns:\nUnion[StreamingResponse, RunResponse]: Either a streaming response for real-time results\nor a RunResponse with the complete execution results"}),"\n",(0,s.jsx)(n.p,{children:"Raises:\nHTTPException: For flow not found (404) or invalid input (400)\nAPIException: For internal execution errors (500)"}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Supports both streaming and non-streaming execution modes"}),"\n",(0,s.jsx)(n.li,{children:"Tracks execution time and success/failure via telemetry"}),"\n",(0,s.jsx)(n.li,{children:"Handles graceful client disconnection in streaming mode"}),"\n",(0,s.jsx)(n.li,{children:"Provides detailed error handling with appropriate HTTP status codes"}),"\n",(0,s.jsxs)(n.li,{children:["In streaming mode, uses EventManager to handle events:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"add_message": New messages during execution'}),"\n",(0,s.jsx)(n.li,{children:'"token": Individual tokens during streaming'}),"\n",(0,s.jsx)(n.li,{children:'"end": Final execution result'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"flow_id_or_name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Flow Id Or Name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"stream"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Stream"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(n.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);