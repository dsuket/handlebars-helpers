Handlebars.registerHelper('each_with_idx', function(context, options) {
    var ret = "";
    var start = Number(options.hash['start'] || 0);
    for(var i=0, j=context.length; i<j; i++) {
        context[i].idx = start;
        ret = ret + options.fn(context[i], i);
        start++;
    }
    return ret;
});
