
angular
.module('App', [
  'ui.router',
  'ui.bootstrap',
  'ui.tree'
]).run();

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('App')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  'NAVLIST',
];

function MainCtrl(
  NAVLIST,
) {
  const vm = this;
  let routePermissionMap = new Map();
  const navList = NAVLIST;

  Object.keys(navList).forEach((navKey) => {
    const navItem = navList[navKey];
    if (navItem.nav.code) {
      routePermissionMap.set(navItem.nav.state, navItem.nav.code);
    }
    (navItem.subNavs || []).forEach((subNavItem) => {
      routePermissionMap.set(subNavItem.state, subNavItem.code);
    });
  });
}

