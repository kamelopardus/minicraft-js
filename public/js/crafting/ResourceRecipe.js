// package com.mojang.ld22.crafting;

// import com.mojang.ld22.entity.Player;
// import com.mojang.ld22.gfx.Color;
// import com.mojang.ld22.gfx.Font;
// import com.mojang.ld22.gfx.Screen;
// import com.mojang.ld22.item.ResourceItem;
// import com.mojang.ld22.item.resource.Resource;

function ResourceRecipe(resource) {
  this.resource = resource;
  this.init(resource);
}

ResourceRecipe.Super = Recipe.prototype;
ResourceRecipe.prototype = extend(new Recipe(), {

  craft: function(player) {
    player.inventory.add(0, new ResourceItem(this.resource, 1));
  }

});


// public class ResourceRecipe extends Recipe {
//  private Resource resource;

//  public ResourceRecipe(Resource resource) {
//    super(new ResourceItem(resource, 1));
//    this.resource = resource;
//  }

//  public void craft(Player player) {
//    player.inventory.add(0, new ResourceItem(resource, 1));
//  }
// }
