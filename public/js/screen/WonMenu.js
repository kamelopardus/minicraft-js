// package com.mojang.ld22.screen;

// import com.mojang.ld22.gfx.Color;
// import com.mojang.ld22.gfx.Font;
// import com.mojang.ld22.gfx.Screen;

function WonMenu() {
  this.inputDelay = 60;
}

WonMenu.Super = Menu.prototype;
WonMenu.prototype = extend(new Menu(), {

  tick: function() {
    if (this.inputDelay > 0) {
      this.inputDelay--;
    }
    else if (this.input.attack.clicked || this.input.menu.clicked) {
      this.game.setMenu(new TitleMenu());
    }
  },

  render: function(screen) {
    Font.renderFrame(screen, '', 1, 3, 18, 9);
    Font.draw('You won! Yay!', screen, 2 * 8, 4 * 8, Color.get(-1, 555, 555, 555));

    var seconds = this.game.gameTime / 60 | 0;
    var minutes = seconds / 60 | 0;
    var hours = minutes / 60 | 0;
    minutes %= 60;
    seconds %= 60;

    var timeString = '';
    if (hours > 0) {
      timeString = hours + 'h ' + (minutes < 10 ? '0' : '') + minutes + 'm';
    } else {
      timeString = minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's';
    }
    Font.draw('Time:', screen, 2 * 8, 5 * 8, Color.get(-1, 555, 555, 555));
    Font.draw(timeString, screen, (2 + 5) * 8, 5 * 8, Color.get(-1, 550, 550, 550));
    Font.draw('Score:', screen, 2 * 8, 6 * 8, Color.get(-1, 555, 555, 555));
    Font.draw('' + this.game.player.score, screen, 2 * 8, 8 * 8, Color.get(-1, 550, 550, 550));
    Font.draw('Press C to win', screen, 2 * 8, 8 * 8, Color.get(-1, 333, 333, 333));
  }

});



// public class WonMenu extends Menu {
//  private int inputDelay = 60;

//  public WonMenu() {
//  }

//  public void tick() {
//    if (inputDelay > 0)
//      inputDelay--;
//    else if (input.attack.clicked || input.menu.clicked) {
//      game.setMenu(new TitleMenu());
//    }
//  }

//  public void render(Screen screen) {
//    Font.renderFrame(screen, "", 1, 3, 18, 9);
//    Font.draw("You won! Yay!", screen, 2 * 8, 4 * 8, Color.get(-1, 555, 555, 555));

//    int seconds = game.gameTime / 60;
//    int minutes = seconds / 60;
//    int hours = minutes / 60;
//    minutes %= 60;
//    seconds %= 60;

//    String timeString = "";
//    if (hours > 0) {
//      timeString = hours + "h" + (minutes < 10 ? "0" : "") + minutes + "m";
//    } else {
//      timeString = minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
//    }
//    Font.draw("Time:", screen, 2 * 8, 5 * 8, Color.get(-1, 555, 555, 555));
//    Font.draw(timeString, screen, (2 + 5) * 8, 5 * 8, Color.get(-1, 550, 550, 550));
//    Font.draw("Score:", screen, 2 * 8, 6 * 8, Color.get(-1, 555, 555, 555));
//    Font.draw("" + game.player.score, screen, (2 + 6) * 8, 6 * 8, Color.get(-1, 550, 550, 550));
//    Font.draw("Press C to win", screen, 2 * 8, 8 * 8, Color.get(-1, 333, 333, 333));
//  }
// }
