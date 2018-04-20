// var CollaborativeFilter = (function() {

//     function pred(params) {

//     }

//     function sim_cal(params) {

//     }

//     function test() {

//     }

// })();

function CollaborativeFilter() {
    this.movie_user = {};
    this.user_movie = {};
    this.similarity = {};
}
CollaborativeFilter.prototype = {
    sim_cal: function(m1, m2) {

        this.similarity[m1] = {};
        this.similarity[m2] = {};

        this.movie_user[m1] = {};
        this.movie_user[m2] = {};

        this.similarity[m1][m2] = -1;
        this.similarity[m2][m1] = -1;

        var si = {};



    },
    pred: function() {


    },
    test: function() {

    }
}

var a = new CollaborativeFilter();