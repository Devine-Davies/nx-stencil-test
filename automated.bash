cd my-comps/
nx build my-comp --pr
cd dist/packages/my-comp/
npm pack
cd ../../../../
cd my-app
npm i 
npm i ../my-comps/dist/packages/my-comp/my-comps-my-comp-0.0.1.tgz
npm run start