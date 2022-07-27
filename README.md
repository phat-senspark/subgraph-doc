# subgraph doc 
Description: Introduton the subgraph and run graph-node local to test subgraph.

## Run graph-node
**Require!!!**: Install Docker
Step by steps:
Step 1: Clone this repo
```bash
  git clone https://github.com/phat-senspark/subgraph-doc.git
  cd subgraph-doc
```
Step 2: Run docker compose.
```
  docker compose up -d
```
After running docker, the graph will open some port. Can using this ports:
- localhost:8020/ : Using to deploy subgrapj.
- localhost:8080/ : Using to test GraphQL API.

## Create and deploy the subgraph. 
**Require**: NodeJS, yarn or npm, graph-cli. <br/>
Note: Install graph-cli: <br/> ```npm install -g @graphprotocol/graph-cli``` or  <br/> ```yarn global add @graphprotocol/graph-cli```
### Init the subgraph
```
graph init
```
### Deploy the subgraph
**Note**: Please check ```package.json``` file:
```
    ...
    "create-local": "graph create --node http://localhost:8020 <slug>",
    "remove-local": "graph remove --node http://localhost:8020/ <slug>",
    "deploy-local": "graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 <slug>"
```
Step 1: Generate code
```
  yarn codegen
  or
  npm run codegen
```
Step 2: Build code to wasm file.
```
  yarn build
  or
  npm run build
```
Step 3:
```
  yarn create-local
  yarn deploy-local
  or
  npm run create-local
  npm run deploy-local
```
After deploying the subgraph, it will return 1 URL with format: ```http://localhost:8020/<slug>/...```. You just replace 8020 to 8080 and parse it into browser then you can test GraphQL.
