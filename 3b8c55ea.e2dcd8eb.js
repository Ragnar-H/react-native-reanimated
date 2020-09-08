(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(175)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},l={id:"installation",title:"Installation",description:"Reanimated 2 is primarily built in C++ using Turbo Modules infrastructure which is not yet completely deployed in React Native (specifically on Android).",source:"@site/docs/installation.md",permalink:"/react-native-reanimated/docs/next/installation",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/installation.md",version:"next",sidebar_label:"Installation",sidebar:"docs",previous:{title:"About React Native Reanimated",permalink:"/react-native-reanimated/docs/next/about"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/next/worklets"}},c=[{value:"I just want to try new Reanimated...",id:"i-just-want-to-try-new-reanimated",children:[]},{value:"Installing the package",id:"installing-the-package",children:[]},{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Reanimated 2 is primarily built in C++ using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"}),"Turbo Modules")," infrastructure which is not yet completely deployed in React Native (specifically on Android).\nBecause of that the installation of new Reanimated requires additional steps apart from just adding a dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ."),Object(o.b)("p",null,"As a consequence of the above the minimum supported version of React Native is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.62.0"}),"v0.62"),".\nBefore you continue with the installation, make sure that you are running the supported version of React Native."),Object(o.b)("p",null,"Please follow the below instructions for Android and iOS."),Object(o.b)("h2",{id:"i-just-want-to-try-new-reanimated"},"I just want to try new Reanimated..."),Object(o.b)("p",null,"We realize the project setup is very complex and you may not want to add that to your existing app rightaway.\nIf you just want to play with Reanimated 2, we made a clean repo that has all the steps configured so that you can pull it from github and give the new version a shot."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Visit the Playground repo here")," or copy the command below to do a git checkout:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> git checkout git@github.com:software-mansion-labs/reanimated-2-playground.git\n")),Object(o.b)("p",null,"Continue with the instruction below if you'd like to install Reanimated v2 on an existing or new React Native project."),Object(o.b)("h2",{id:"installing-the-package"},"Installing the package"),Object(o.b)("p",null,"First step is to install ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," alpha as a dependency in your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> yarn add react-native-reanimated@alpha\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," to use Reanimated 2 from master branch:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"go to ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/software-mansion/react-native-reanimated/actions?query=workflow%3A%22Build+npm+package%22")),Object(o.b)("li",{parentName:"ul"},"select latest build and download ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-reanimated-2.0.0-alpha.tgz")," artifact"),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"tar zxvf react-native-reanimated-2.0.0-alpha.tgz.zip")," to unpack zip (or unpack it manually)"),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add file:react-native-reanimated-2.0.0-*.tgz")," to install the package")),Object(o.b)("h2",{id:"babel-plugin"},"Babel plugin"),Object(o.b)("p",null,"Add Reanimated's babel plugin to your ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"  module.exports = {\n      ...\n      plugins: [\n          ...\n          'react-native-reanimated/plugin',\n      ],\n  };\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:"))," Reanimated plugin has to be listed last.")),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Turn on Hermes engine by editing ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/build.gradle"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{2}","{2}":!0}),"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Plug Reanimated in ",Object(o.b)("inlineCode",{parentName:"li"},"MainApplication.java"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:"{1-2,12-15}","{1-2,12-15}":!0}),'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n      @Override\n      protected String getJSMainModuleName() {\n        return "index";\n      }\n\n      @Override\n      protected JSIModulePackage getJSIModulePackage() {\n        return new ReanimatedJSIModulePackage(); // <- add\n      }\n    };\n  ...\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:"))," In previous releases, we required an additional step which is turning on Turbo Modules.\nIf you are upgrading from alpha.{ <=3 } please remove the following lines:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Java"}),"static {\n   ReactFeatureFlags.useTurboModules = true;\n }\n")),Object(o.b)("p",{parentName:"blockquote"},"from ",Object(o.b)("inlineCode",{parentName:"p"},"MainActivity.java"),".")),Object(o.b)("p",null,"You can refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8"}),"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Playground repo"),"."),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"Steps here are adapted directly from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/RNTester/RNTester/AppDelegate.mm"}),"React Native's RNTester app"),", that is configured to use Turbo Modules.\nMost of the changes aren't specific to Reanimated but rather to Turbo Modules itself.\nIf your iOS app is already using Turbo Modules, you can likely skip some of the steps below.\nIf not, after making those changes your app will be compatible with Turbo Modules which may help with future React Native upgrades."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cd ios && pod install && cd .."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m")," to ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.mm"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:"))," It's important to do it with Xcode."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add AppDelegate category in ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.mm"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{1-2,4-7}","{1-2,4-7}":!0}),"#import <React/RCTCxxBridgeDelegate.h>\n#import <ReactCommon/RCTTurboModuleManager.h>\n...\n@interface AppDelegate() <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {\n    RCTTurboModuleManager *_turboModuleManager;\n}\n@end\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Enable TurboModules in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{3}","{3}":!0}),"  + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n  {\n    RCTEnableTurboModule(YES); // <- add\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Add remaining methods needed to configure Turbo Modules and Reanimated module in particular \u2013 all changes should be made in ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.mm"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),'// add headers (start)\n#import <React/RCTDataRequestHandler.h>\n#import <React/RCTFileRequestHandler.h>\n#import <React/RCTHTTPRequestHandler.h>\n#import <React/RCTNetworking.h>\n#import <React/RCTLocalAssetImageLoader.h>\n#import <React/RCTGIFImageDecoder.h>\n#import <React/RCTImageLoader.h>\n#import <React/JSCExecutorFactory.h>\n#import <RNReanimated/REATurboModuleProvider.h>\n#import <RNReanimated/REAModule.h>\n// add headers (end)\n...\n@implementation AppDelegate // changes should be made within AppDelegate\'s implementation\n...\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  _bridge_reanimated = bridge;\n  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge\n                                                              delegate:self\n                                                             jsInvoker:bridge.jsCallInvoker];\n #if RCT_DEV\n  [_turboModuleManager moduleForName:"RCTDevMenu"]; // <- add\n #endif\n __weak __typeof(self) weakSelf = self;\n return std::make_unique<facebook::react::JSCExecutorFactory>([weakSelf, bridge](facebook::jsi::Runtime &runtime) {\n   if (!bridge) {\n     return;\n   }\n   __typeof(self) strongSelf = weakSelf;\n   if (strongSelf) {\n     [strongSelf->_turboModuleManager installJSBindingWithRuntime:&runtime];\n   }\n });\n}\n\n- (Class)getModuleClassFromName:(const char *)name\n{\n return facebook::react::REATurboModuleClassProvider(name);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name\n                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n{\n return facebook::react::REATurboModuleProvider(name, jsInvoker);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name\n                                                      instance:(id<RCTTurboModule>)instance\n                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n{\n return facebook::react::REATurboModuleProvider(name, instance, jsInvoker);\n}\n\n- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass\n{\n if (moduleClass == RCTImageLoader.class) {\n   return [[moduleClass alloc] initWithRedirectDelegate:nil loadersProvider:^NSArray<id<RCTImageURLLoader>> *{\n     return @[[RCTLocalAssetImageLoader new]];\n   } decodersProvider:^NSArray<id<RCTImageDataDecoder>> *{\n     return @[[RCTGIFImageDecoder new]];\n   }];\n } else if (moduleClass == RCTNetworking.class) {\n   return [[moduleClass alloc] initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *{\n     return @[\n       [RCTHTTPRequestHandler new],\n       [RCTDataRequestHandler new],\n       [RCTFileRequestHandler new],\n     ];\n   }];\n }\n return [moduleClass new];\n}\n\n@end\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"( Additinal step for React Native 0.62.","*"," ) Change initialization of TurboModuleManager")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{3-3}","{3-3}":!0}),"- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge delegate:self];\n  ...\n")),Object(o.b)("p",null,"You can refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/37cb058115562bdcd33e3d729abef1f27c081da5"}),"to this diff")," that presents the set of the above changes made to a fresh react native project in our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/reanimated-2-playground"}),"Playground repo"),"."))}s.isMDXComponent=!0}}]);