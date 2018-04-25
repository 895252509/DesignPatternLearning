function CollaborativeFilter() {
    this.movie_user = [];
    this.user_movie = [];
    this.similarity = [];

    this.ave = [];

    this.data = [
        [0, 0, 1],
        [0, 1, 8],
        [0, 2, 2],
        [1, 0, 2],
        [1, 1, 2],
        [1, 2, 5],
        [2, 0, 1],
        [2, 1, 9],
        [2, 2, 1],
        [3, 0, 3],
        [3, 1, 9],
        [3, 2, 5],
        [4, 0, 3],
        [4, 1, 6]
    ];

    for (var i = 0; i < this.data.length; i++) {
        var uid = this.data[i][0];
        var mid = this.data[i][1];
        var rat = this.data[i][2];

        this.movie_user[mid] = this.movie_user[mid] || [];
        this.user_movie[uid] = this.user_movie[uid] || [];

        this.user_movie[uid][mid] = rat;
        this.movie_user[mid][uid] = rat;
    }
}
CollaborativeFilter.prototype = {
    //sim_cal()为相似度计算
    sim_cal: function(m1, m2) {

        this.similarity[m1] = [];
        this.similarity[m2] = [];

        this.movie_user[m1] = this.movie_user[m1] || [];
        this.movie_user[m2] = this.movie_user[m2] || [];

        this.similarity[m1][m2] = -1;
        this.similarity[m2][m1] = -1;

        if (this.similarity[m1][m2] != -1) return this.similarity[m1][m2];

        var si = [];
        //找到同时给m1和m2都评过分的用户
        for (var user in this.movie_user[m1]) {
            if (user in this.movie_user[m2]) {
                si[user] = 1;
            }
        }
        n = si.length;

        if (n == 0) {
            this.similarity[m1][m2] = 1;
            this.similarity[m2][m1] = 1;
            return 1;
        }

        //分别把这些用户对这两个电影的评分做成数组
        var s1 = [];
        var s2 = [];
        for (var user in si) {
            s1.push(this.movie_user[m1][user]);
            s2.push(this.movie_user[m2][user]);
        }
        //对这两个数组分别求和
        var sum1 = this.sum(s1);
        var sum2 = this.sum(s2);
        //求数组值的平方的和
        var s1sq = this.sum(this.sqarr(s1));
        var s2sq = this.sum(this.sqarr(s2));
        //
        var psum = this.sum(this.ama(s1, s2));

        var num = psum - (sum1 * sum2 / n);

        var den = Math.sqrt((s1sq - Math.pow(sum1, 2) / n) * (s2sq - Math.pow(sum2, 2) / n));

        if (den == 0) {
            this.similarity[m1][m2] = 0;
            this.similarity[m2][m1] = 0;
            return 0;
        }
        this.similarity[m1][m2] = num / den;
        this.similarity[m2][m1] = num / den;
        return num / den;
    },
    // pred(uid,mid)预测uid号用户对mid号电影评分
    pred: function(uid, mid) {
        var sim_accumulate = 0.0;
        var rat_acc = 0.0;
        $("#panel-othertime").parent().find("lable:not(:last-child)")

        for (var item in this.user_movie[uid]) {
            // 计算该物品与待评价物品的相似度 
            var sim = this.sim_cal(item, mid);
            //if (sim < 0) continue;
            //
            rat_acc += sim * this.user_movie[uid][item];
            // 相似度的和
            sim_accumulate += sim;
        }

        if (sim_accumulate == 0) {
            return 0;
        }
        return rat_acc / sim_accumulate;
    },
    test: function() {
        // var output = [];
        // var sums = 0;
        // for (var i = 0; i < this.data.length; i++) {
        //     var pre = this.pred(this.data[i][0], this.data[i][1]);
        //     output.push(pre);
        //     sums += (pre - this.data[i][2]) * (pre - this.data[i][2])
        // }
        // var rmse = Math.sqrt(sums / this.data.length);

        var sim = this.sim_cal(0, 2);
    },
    sum: function(s) {
        var sm = 0;
        for (var a in s) {
            sm += s[a];
        }
        return sm;
    },
    sqarr: function(arr) {
        var arr1 = [];
        for (var i = 0; i < arr.length; i++) {
            arr1.push(Math.pow(arr[i], 2));
        }
        return arr1;
    },
    ama: function(a1, a2) {
        if (a1.length !== a2.length) return null;
        var resu = [];
        for (var i = 0; i < a1.length; i++) {
            resu.push(a1[i] * a2[i]);
        }
        return resu;
    }
}

var a = new CollaborativeFilter();
a.test();