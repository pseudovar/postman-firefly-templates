(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ImageTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <p>\n        <h3>Seed "
    + alias1(((helper = (helper = lookupProperty(helpers,"seed") || (depth0 != null ? lookupProperty(depth0,"seed") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"seed","hash":{},"data":data,"loc":{"start":{"line":8,"column":17},"end":{"line":8,"column":25}}}) : helper)))
    + "</h3>\n        <img\n            src='"
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"presignedUrl") : stack1), depth0))
    + "'\n            style='max-width: 100%; max-height: 50vh;'\n        />\n    </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Testing</h1>\n<ul>\n    <li>"
    + alias2(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"version","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":19}}}) : helper)))
    + "</li>\n    <li>"
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + " x "
    + alias2(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + "</li>\n</ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"outputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();