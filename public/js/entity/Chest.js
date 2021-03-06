// package com.mojang.ld22.entity;

// import com.mojang.ld22.gfx.Color;
// import com.mojang.ld22.screen.ContainerMenu;

function Chest() {
  this.col = Color.get(-1, 110, 331, 552);
  this.sprite = 1;
}

Chest.Super = Furniture.prototype;
Chest.prototype = extend(new Furniture("Chest"), {

  use : function(player, attackDir) {
    player.game.setMenu(new ContainerMenu(player, "Chest", inventory));
    return true;
  }

});



// public class Chest extends Furniture {
//  public Inventory inventory = new Inventory();

//  public Chest() {
//    super("Chest");
//    col = Color.get(-1, 110, 331, 552);
//    sprite = 1;
//  }

//  public boolean use(Player player, int attackDir) {
//    player.game.setMenu(new ContainerMenu(player, "Chest", inventory));
//    return true;
//  }
// }