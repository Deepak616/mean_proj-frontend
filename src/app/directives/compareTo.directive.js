export function compareToDirective($parse) {
    'ngInject';
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            var firstModel = $parse(attr.compareTo);
            var secondModel = $parse(attr.ngModel);

            scope.$watch(attr.ngModel, function (newValue) {
                ngModel.$setValidity(attr.name, newValue === firstModel(scope));
            });

            scope.$watch(attr.compareTo, function (newValue) {
                ngModel.$setValidity(attr.name, newValue === secondModel(scope));
            })
        }
    }
}
