// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
function Fighter(name, health, damagePerAttack) {
  this.name = name
  this.health = health
  this.damagePerAttack = damagePerAttack
  this.toString = function () {
    return this.name
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let damage1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  let damage2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)

  if (damage1 > damage2) {
    return fighter1.name
  } else if (damage2 > damage1) {
    return fighter2.name
  }
  return firstAttacker
}

console.log(
  declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'),
  'Lew'
)
