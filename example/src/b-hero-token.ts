import { BigInt } from "@graphprotocol/graph-ts"
import {
  BHeroToken,
  AdminChanged,
  Approval,
  ApprovalForAll,
  BeaconUpgraded,
  Initialized,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenAbilityRandomized,
  TokenChanged,
  TokenCreateRequested,
  TokenCreated,
  TokenRandomRequestCreated,
  TokenUpgraded,
  Transfer,
  Unpaused,
  Upgraded
} from "../generated/BHeroToken/BHeroToken"
import { CreateToken } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count.plus(BigInt.fromI32(1))

  // // Entity fields can be set based on event parameters
  // entity.previousAdmin = event.params.previousAdmin
  // entity.newAdmin = event.params.newAdmin

  // // Entities can be written to the store with `.save()`
  // entity.save()
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleInitialized(event: Initialized): void {}

export function handlePaused(event: Paused): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTokenAbilityRandomized(
  event: TokenAbilityRandomized
): void {}

export function handleTokenChanged(event: TokenChanged): void {}

export function handleTokenCreateRequested(event: TokenCreateRequested): void {}

export function handleTokenCreated(event: TokenCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = CreateToken.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new CreateToken(event.transaction.from.toHex())

   
  }

  // BigInt and BigDecimal math are supported
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;
  entity.details = event.params.details;
  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleTokenRandomRequestCreated(
  event: TokenRandomRequestCreated
): void {}

export function handleTokenUpgraded(event: TokenUpgraded): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleUpgraded(event: Upgraded): void {}
