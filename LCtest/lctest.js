var people = new Lawnchair('people');
var me = {name:'brian'};
people.save(me);
people.get(me.key, function(r){
    console.log(r);
});