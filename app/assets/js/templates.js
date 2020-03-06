angular.module('ejdirectivas').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "<div class=\"container2\">\n" +
    "	<br>\n" +
    "	<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\n" +
    "		<div flex-xs flex-gt-xs=\"50\" layout=\"column\">\n" +
    "		  <md-card md-theme=\"{{ showDarkTheme ? 'dark-grey' : 'default' }}\" md-theme-watch>\n" +
    "			<md-card-title>\n" +
    "			  <md-card-title-text>\n" +
    "				<span class=\"md-headline\">Card with image</span>\n" +
    "				<span class=\"md-subhead\">Large</span>\n" +
    "			  </md-card-title-text>\n" +
    "			  <md-card-title-media>\n" +
    "				<div class=\"md-media-lg card-media\"></div>\n" +
    "			  </md-card-title-media>\n" +
    "			</md-card-title>\n" +
    "			<md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "			  <md-button>Action 1</md-button>\n" +
    "			  <md-button>Action 2</md-button>\n" +
    "			</md-card-actions>\n" +
    "		  </md-card>\n" +
    "		  <md-card md-theme=\"{{ showDarkTheme ? 'dark-orange' : 'default' }}\" md-theme-watch>\n" +
    "			<md-card-title>\n" +
    "			  <md-card-title-text>\n" +
    "				<span class=\"md-headline\">Card with image</span>\n" +
    "				<span class=\"md-subhead\">Extra Large</span>\n" +
    "			  </md-card-title-text>\n" +
    "			</md-card-title>\n" +
    "			<md-card-content layout=\"row\" layout-align=\"space-between\">\n" +
    "			  <div class=\"md-media-xl card-media\"></div>\n" +
    "	\n" +
    "			  <md-card-actions layout=\"column\">\n" +
    "				<md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n" +
    "				  <md-icon md-svg-icon=\"img/icons/favorite.svg\"></md-icon>\n" +
    "				</md-button>\n" +
    "				<md-button class=\"md-icon-button\" aria-label=\"Settings\">\n" +
    "				  <md-icon md-svg-icon=\"img/icons/menu.svg\"></md-icon>\n" +
    "				</md-button>\n" +
    "				<md-button class=\"md-icon-button\" aria-label=\"Share\">\n" +
    "				  <md-icon md-svg-icon=\"img/icons/baseline-share-24px.svg\"></md-icon>\n" +
    "				</md-button>\n" +
    "			  </md-card-actions>\n" +
    "			</md-card-content>\n" +
    "		  </md-card>\n" +
    "		</div>\n" +
    "		<div flex-xs flex-gt-xs=\"50\" layout=\"column\">\n" +
    "		  <md-card md-theme=\"{{ showDarkTheme ? 'dark-purple' : 'default' }}\" md-theme-watch>\n" +
    "			<md-card-title>\n" +
    "			  <md-card-title-text>\n" +
    "				<span class=\"md-headline\">Card with image</span>\n" +
    "				<span class=\"md-subhead\">Small</span>\n" +
    "			  </md-card-title-text>\n" +
    "			  <md-card-title-media>\n" +
    "				<div class=\"md-media-sm card-media\"></div>\n" +
    "			  </md-card-title-media>\n" +
    "			</md-card-title>\n" +
    "			<md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "			  <md-button>Action 1</md-button>\n" +
    "			  <md-button>Action 2</md-button>\n" +
    "			</md-card-actions>\n" +
    "		  </md-card>\n" +
    "		  <md-card md-theme=\"{{ showDarkTheme ? 'dark-blue' : 'default' }}\" md-theme-watch>\n" +
    "			<md-card-title>\n" +
    "			  <md-card-title-text>\n" +
    "				<span class=\"md-headline\">Card with image</span>\n" +
    "				<span class=\"md-subhead\">Medium</span>\n" +
    "			  </md-card-title-text>\n" +
    "			  <md-card-title-media>\n" +
    "				<div class=\"md-media-md card-media\"></div>\n" +
    "			  </md-card-title-media>\n" +
    "			</md-card-title>\n" +
    "			<md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "			  <md-button>Action 1</md-button>\n" +
    "			  <md-button>Action 2</md-button>\n" +
    "			</md-card-actions>\n" +
    "		  </md-card>\n" +
    "		  <div layout layout-padding layout-align=\"center end\" style=\"height:200px\">\n" +
    "			<md-checkbox ng-model=\"showDarkTheme\">Use 'Dark' Themed Cards</md-checkbox>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </md-content>\n" +
    "	<br>\n" +
    "	<div class=\"well text-center\">\n" +
    "		<h1>{{ vm.title }}</h1>\n" +
    "		<h3>{{ vm.version }}</h3>\n" +
    "		<p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\n" +
    "		<code>app/modules/home/home.html</code>\n" +
    "		<hr>\n" +
    "    <h1>Features</h1>\n" +
    "		<ul class=\"list-group\">\n" +
    "			<li class=\"list-group-item\" ng-repeat=\"item in vm.listFeatures\">{{item.feature}}</li>\n" +
    "		</ul>\n" +
    "		<p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\">{{ brand }}</a>\n" +
    "		</div>\n" +
    "		<div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "			<ul class=\"nav navbar-nav\">\n" +
    "				<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">\n" +
    "					<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div><!--/.nav-collapse -->\n" +
    "	</div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );

}]);
