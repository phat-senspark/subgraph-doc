import { BigInt } from "@graphprotocol/graph-ts"
import {
  BHeroS,
  AdminChanged,
  BeaconUpgraded,
  BurnResetShield,
  CreateRock,
  Initialized,
  ResetShieldHeroS,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenCreateRequested,
  Upgraded
} from "../generated/BHeroS/BHeroS"
import { ResetShieldHeroSTable } from "../generated/schema";


export function handleAdminChanged(event: AdminChanged): void {
}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleBurnResetShield(event: BurnResetShield): void {}

export function handleCreateRock(event: CreateRock): void {}

export function handleInitialized(event: Initialized): void {}

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
  entity.owner = event.params.owner;
  entity.idHeroS = event.params.idHeroS;
  entity.numRock = event.params.numRock;
  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTokenCreateRequested(event: TokenCreateRequested): void {}

export function handleUpgraded(event: Upgraded): void {}
