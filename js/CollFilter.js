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

        if (this.similarity[m1][m2] != -1) return this.similarity[m1][m2];

        var si = [];

        for (var user in this.movie_user[m1]) {
            if (user in this.movie_user[m1]) {
                si[user] = 1;
            }
        }

        n = si.length;

        if (n == 0) {
            this.similarity[m1][m2] = 1;
            this.similarity[m2][m1] = 1;
            return 1;
        }

        var s1 = this.similarity[m1];
        var s2 = this.similarity[m2];

        var sum1 = this.sum(s1);
        var sum2 = this.sum(s1);


    },
    pred: function(uid, mid) {
        var sim_accumulate = 0.0;
        var rat_acc = 0.0;
        //     for item in self.user_movie[uid]:  
        //     sim=self.sim_cal(item,mid)  
        //     if sim<0:continue  
        //     #print sim,self.user_movie[uid][item],sim*self.user_movie[uid][item]  
        //     rat_acc+=sim*self.user_movie[uid][item]  
        //     sim_accumulate+=sim  
        // #print rat_acc,sim_accumulate  
        // if sim_accumulate==0: #no same user rated,return average rates of the data  
        //     return  self.ave  
        // return rat_acc/sim_accumulate   


    },
    test: function() {

    },
    sum: function(s) {
        var sm = 0;
        for (var a in s) {
            sm += a;
        }
        return sm;
    }
}

var a = new CollaborativeFilter();