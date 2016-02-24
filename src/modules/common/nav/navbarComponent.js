import angular, {module} from 'angular';
import navbarTemplate    from './nav.html';
import NavbarController  from './navcontroller';

export function bsNavbar(){
  return {
    restrict: 'EA',
    template: navbarTemplate,
    controller: NavbarController,
    controllerAs: 'nav'
  };
}

export default module('common.navbarComponent', []).directive('bsNavbar', bsNavbar).name;
