# Subgraph document 
**Description:** Introdution the subgraph and run graph-node local to test it.

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

**Database info**: PostgreSQL
```
postgres_host: localhost
postgres_user: graph-node
postgres_pass: let-me-in
postgres_db: graph-node
```
**Note**: This composed version has not yet been tested in windows os. If there are any problems, contact the author. <br/>  

## Create and deploy the subgraph. 
**Require**: NodeJS, yarn or npm, graph-cli. <br/>
Note: Install graph-cli: <br/>  
```npm install -g @graphprotocol/graph-cli``` or  <br/> ```yarn global add @graphprotocol/graph-cli```
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
After deploying the subgraph, it will return 1 URL with format: ```http://localhost:8000/<slug>/...```. Click to use it on a web browser.

## Create and update handle events
Subgraph can listen to the event when it is configured in the mapping file.<br/>

Mapping files in the src folder.<br/>
Example
```typescript
  export function handleResetShieldHeroS(event: ResetShieldHeroS): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = ResetShieldHeroSTable.load(event.transaction.from.toHex())

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!entity) {
      entity = new ResetShieldHeroSTable(event.transaction.from.toHex())
    
    }

    // BigInt and BigDecimal math are supported
    // Entity fields can be set based on event parameters
    entity.owner = event.params.owner;
    entity.idHeroS = event.params.idHeroS;
    entity.numRock = event.params.numRock;
    // Entities can be written to the store with `.save()`
    entity.save()
}
```

If the logic of the event handling needs upgrading. You just need to modify the mapping files and rebuild them, then redeploy them to the subgraph node.

## Defining an entity into the database
In the subgraph, the entities are defined in the ```schema.graphql``` file. Create the entities in the subgraph to the similar with another ORMs.<br/>
Example:<br/>
```typescript
//Defined an entity
type ResetShieldHeroSTable @entity {
  id: ID! // from is indexed
  owner: Bytes! //field
  idHeroS: BigInt!
  numRock: BigInt!
}
```
More details: [Here](https://thegraph.com/docs/en/developing/creating-a-subgraph/#the-graph-ql-schema)

