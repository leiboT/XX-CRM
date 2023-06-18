const e="@ant-design/icons-vue",s="6.1.0",t="./lib/index.js",n="./es/index.js",d=!1,i={type:"git",url:"https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue"},r=["tangjinzhou <415800467@qq.com>"],o="MIT",p={clean:"./scripts/cleanup.sh",start:"vc-tools run server",lint:"eslint src/ --ext .tsx,.ts",compile:"vc-tools run compile",test:"cross-env NODE_ENV=test jest --config .jest.js",prepublishOnly:"npm run lint && npm run generate && npm run compile && npm run test",generate:"rimraf src/icons && TS_NODE_PROJECT=scripts/tsconfig.json node -r ts-node/register scripts/generate.ts --target=icon",postcompile:"npm run clean && TS_NODE_PROJECT=scripts/tsconfig.json node -r ts-node/register scripts/generate.ts --target=entry",ci:"npm run lint && npm run compile && npm run test"},l={vue:">=3.0.3"},c={"@babel/plugin-proposal-class-properties":"^7.14.5","@babel/plugin-proposal-export-default-from":"^7.14.5","@babel/plugin-proposal-export-namespace-from":"^7.14.5","@babel/plugin-proposal-object-rest-spread":"^7.14.7","@babel/plugin-transform-member-expression-literals":"^7.14.5","@babel/plugin-transform-object-assign":"^7.14.5","@babel/plugin-transform-property-literals":"^7.14.5","@babel/plugin-transform-spread":"^7.14.6","@babel/plugin-transform-template-literals":"^7.14.5","@babel/runtime":"^7.11.2","@types/jest":"^24.9.1","@types/lodash":"^4.14.165","@types/node":"^13.13.15","@typescript-eslint/eslint-plugin":"^4.14.0","@typescript-eslint/parser":"^4.14.0","@vue/babel-plugin-jsx":"^1.0.6","@vue/cli-plugin-babel":"^5.0.0-0","@vue/cli-plugin-eslint":"^5.0.0-0","@vue/cli-plugin-typescript":"^5.0.0-0","@vue/cli-service":"~4.5.0","@vue/compiler-sfc":"^3.0.3","@vue/eslint-config-prettier":"^6.0.0","@vue/eslint-config-typescript":"^7.0.0","@vue/test-utils":"^2.0.0-beta.2","gulp-less":"^5.0.0","cross-env":"^7.0.3",eslint:"^7.16.0","eslint-config-prettier":"^8.3.0","eslint-plugin-jest":"^24.4.0","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^7.0.0",jest:"^26.0.0","jest-serializer-vue":"^2.0.2",lodash:"^4.17.15",prettier:"^1.19.1","ts-node":"^10.1.0",typescript:"^4.2.0","@ant-design-vue/tools":"^3.1.2",vue:"^3.0.3","vue-jest":"^5.0.0-alpha.10"},a={"@ant-design/colors":"^6.0.0","@ant-design/icons-svg":"^4.2.1"},u={port:9528,entry:{index:["./src/index.ts"]}},g="Ant Design Icons for Vue",m={name:e,version:s,main:t,module:n,sideEffects:!1,repository:i,contributors:r,license:o,scripts:p,peerDependencies:l,devDependencies:c,dependencies:a,config:u,description:g};export{u as config,r as contributors,m as default,a as dependencies,g as description,c as devDependencies,o as license,t as main,n as module,e as name,l as peerDependencies,i as repository,p as scripts,d as sideEffects,s as version};
