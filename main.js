const conway = {
    name: "Conway",
    species: "cat",
    nicknames: ["Conwayson", "sir", "mister"],
    age: 8,
    meow: function () {
        console.log("Meow!");
    },
    hiss: function () {
        console.log("Hissssssss");
    },
    scream: function () {
        console.log("MEEEEEEOOOOOOWWWW");
    },
    toys: [
        
            {
                name: "fish taco",
                likesToy: true
            },

            {
                name: "soccer ball",
                likesToy: true
            },

            {
                name: "bouncy ball",
                likesToy: false
            },

            {
                name: "laser pointer",
                likesToy: true
            },

            {
                name: "mouse",
                likesToy: true
            },

            {
                name: "stuffed rhino",
                likesToy: false
            }
        
        ],
    favoriteToys: [],
    play: function () {
        for (let i = 0; i < this.toys.length; i++) {
            if (this.toys[i].likesToy === true) {
                // console.log(conway.toys[i].name);
                // toy = this.toys[i].name;
                this.favoriteToys.push(this.toys[i].name);
            }
        }
    }
}

conway.meow();
conway.hiss();
conway.scream();

conway.play();
console.log(conway.favoriteToys);





