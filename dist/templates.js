(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ImageGrid'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"group relative flex flex-col overflow-hidden rounded-lg bg-white\">\n        <div class=\"aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75\">\n            <img src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"presignedUrl") : stack1), depth0))
    + "\">\n        </div>\n        <div class=\"flex flex-1 flex-col space-y-2 p-4\">\n            <h3 class=\"text-sm font-medium text-gray-900 text-center\">Seed: "
    + alias1(((helper = (helper = lookupProperty(helpers,"seed") || (depth0 != null ? lookupProperty(depth0,"seed") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"seed","hash":{},"data":data,"loc":{"start":{"line":11,"column":76},"end":{"line":11,"column":84}}}) : helper)))
    + "</h3>\n        </div>  \n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"partials/tailwind"),depth0,{"name":"partials/tailwind","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"partials/header"),depth0,{"name":"partials/header","hash":{"title":"Firefly API Results"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mb-8\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"outputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
templates['partials/h1'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":13}}}) : helper)))
    + "</h1>";
},"useData":true});
templates['partials/header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='flex items-center justify-between mb-4'>\n    <div class='min-w-0 flex-1'>\n        <h2\n            class='text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight'\n        >"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":9},"end":{"line":5,"column":18}}}) : helper)))
    + "</h2>\n    </div>\n    <div class='mt-4 flex sm:ml-4 sm:mt-0'>\n        <a\n            href='https://developer.adobe.com/firefly-services/docs/firefly-api/'\n            class='ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'\n        >API Docs</a>\n    </div>\n</div>";
},"useData":true});
templates['partials/tailwind'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src='https://cdn.tailwindcss.com'></script>";
},"useData":true});
})();