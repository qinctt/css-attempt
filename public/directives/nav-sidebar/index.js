(() => {
    angular.module('App')
      .directive('navSidebar', ['$state', 'NAVLIST', ($state, NAVLIST) => {
        return {
          restrict: 'A',
          transclude: true,
          controller: sidebarCtrl,
          controllerAs: 'vm',
          templateUrl: 'directives/nav-sidebar/template.html'
        };
  
        function sidebarCtrl() {
          const vm = this;
  
          vm.navList = [
            buildNav(NAVLIST.lead),
            buildNav(NAVLIST.marketing),
            buildNav(NAVLIST.student),
            buildNav(NAVLIST.coach),
            buildNav(NAVLIST.tutor),
            buildNav(NAVLIST.courseSchedule),
            buildNav(NAVLIST.opportunity),
            buildNav(NAVLIST.employer),
            buildNav(NAVLIST.content),
            buildNav(NAVLIST.edm),
            buildNav(NAVLIST.finance),
            buildNav(NAVLIST.cfCollege),
            buildNav(NAVLIST.baseSettings),
            buildNav(NAVLIST.account),
          ];
        }
  
        function buildNav(navs) {
          const nav = navs.nav;
          nav.onclick = () => {
            nav.isOpen = !nav.isOpen;
          };
          nav.subNavs = navs.subNavs.map((sn) => {
            sn.isActive = () => $state.includes(sn.state);
            return sn;
          });
          nav.isActive = () => nav.subNavs.find(sn => sn.isActive() ===
            true) || $state.includes(nav.state);
  
          return nav;
        }
      }]);
  })();
  