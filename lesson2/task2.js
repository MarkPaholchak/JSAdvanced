$("button[value='Restart']").toggle(10);
$('#Ball').toggle(10);

$("button[value='Restart']").on('click', function () {

})
const FootbalGame = (function () {

    this.numb = 0;
    this.numbPlayer = 0;
    var self = this;
    this.gameAvalible = true;

    var cacherJump = function () {

        var randomN = Math.floor(Math.random() * (5 - 1) + 1);
        switch (randomN) {
            case 1:
                return "RightTop";
            case 2:
                return "RightBottom";
            case 3:
                return "LeftBottom";
            case 4:
                return "LeftTop";
        }
        console.log(randomN)
    };

    var alertF = function (rightName, cacherSide, who, int) {
        setTimeout(function () {
                if (who == false) {
                    alert('Catch!');
                } else {
                    alert('GOOOAALL!!');
                }
                $('#Ball').toggleClass('ball' + rightName);
                $('#cacher').toggleClass('footballer' + cacherSide);
                if (int == 10) {
                    if (who == false){
                        alert('End Game! Forward Wins!');
                    }else {
                        alert('End Game! Player Wins!');
                    }
                    self.gameAvalible = false;
                    return;
                }
                return;
            }, 1000
        )
    }


    var targetSelect = function (elem) {
        elem.preventDefault();
        var block = elem.target;
        if (block.className.match('target')) {
            if(self.gameAvalible == false){
                alert('Game end ^-^ please restart');
                return;
            }
            var cacherSide = cacherJump();
            var rightName = block.className.slice(0, block.className.length - 7);

            $('#Ball').toggleClass('ball' + rightName);
            $('#cacher').toggleClass('footballer' + cacherSide);
            if (cacherSide == rightName) {

                self.numbPlayer = parseInt(numbPlayer) + 1;
                $('.numbValue').html(numbPlayer);

                alertF(rightName, cacherSide, false, self.numbPlayer);


            } else {
                self.numb = parseInt(numb) + 1;
                $('.numbPlayer').html(numb);
                alertF(rightName, cacherSide, true, self.numb);
            }


        }
    }
    var Start = function () {
        $("button[value='Start']").on('click', function () {

            alert('New Game! Let\'s start!)')
            $("button[value='Restart']").toggle(10);
            $("button[value='Start']").toggle(10);
            $('.numbValue').html(numb);
            $('.numbPlayer').html(numbPlayer);
            $('#numbValuee').css('margin-right', '350px');
            $('#Ball').toggle(100);
            Game();
            Restart();
        });
    }

    var Restart = function () {
        $("button[value='Restart']").on('click', function () {
            // location.reload();
            self.numb = 0;

            $('.numbValue').html(numb);
            self.numbPlayer = 0;

            $('.numbPlayer').html(numbPlayer);
            self.gameAvalible = true;
            alert('New Game! Let\'s start!)')
        })

    }

    var Game = function () {
        $('.gateBlock').on('click', targetSelect)
    }
    return {
        game: Start
    }

})();
FootbalGame.game();