# Fusion System

The fusion system is a way to combine lower rarity Characters into a higher rarity Character.

## Specifications

To perform a Fusion, a player must first select 5 Characters of the same rarity in their [Staked](./staking) inventory (Not Recruited!). In the **Fusion** screen, a player can select the characters they wish to Fuse and click on the Fuse button. Once the player signs the transaction, the characters selected and fusion fee will be burned and the player will be rewarded a new Character of the next highest rarity. The new Character will be randomly selected from the possible characters from the sets selected. Legendary Characters can not be selected for Fusion since there is no higher rarity tier above Legendary.

### New Character Selection

Each selected Character will contribute their set to a set "pool" which the new character would be pulled from. Once the set is determined, the new character will be randomly selected from the available characters from that set.

**Example 1:**

A player Fuses 5 [Common Milos](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Milo_358969). The only possible set is the founders set. They will then be rewarded with 1 [Uncommon Milo](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Milo_358972).

**Example 2:**

A player Fuses 4 [Uncommon Festive Milo](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Festive-Milo_400942) and 1 [Uncommon Thankful Milo](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Thankful-Milo_366835).

The possible sets are (holiday21, holiday21, holiday21, holiday21, thank.2021).

In other words 80%, chance of the new character being from the holiday21 set and 20% chance of thank.2021 set.

Since these sets only have 1 character in each set, the new Character will have an 80% chance of being a [Rare Festive Milo](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Festive-Milo_400944) and a 20% chance of being a [Rare Thankful Milo](https://wax.atomichub.io/explorer/template/wax-mainnet/blokchainrpg/Thankful-Milo_366837)

**Example 3:**

A player Fuses 3 [Epic Auroras](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Aurora_497759) and 2 [Epic Garricks](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Garrick_497762).

The possible sets are (starter, starter, starter, starter, starter). In other words, 100% starter.

Since this set has 5 Characters, the new Character will have 20% chance of being one of the following:

- [Legendary Aurora](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Aurora_497764)
- [Legendary Elon](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Elon_497765)
- [Legendary Faye](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Faye_497766)
- [Legendary Garrick](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Garrick_497767)
- [Legendary Salazar](https://wax.atomichub.io/explorer/template/wax-mainnet/brpg/Salazar_497768)

### Fusion Costs

| Current Rarity | GOLD cost  |
| -------------- | ---------- |
| Common         | 0.00025000 |
| Uncommon       | 0.00125000 |
| Rare           | 0.00625000 |
| Epic           | 0.01250000 |
