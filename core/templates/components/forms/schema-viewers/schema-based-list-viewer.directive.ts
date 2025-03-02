// Copyright 2016 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Directive for a schema-based viewer for lists.
 */

require('components/forms/schema-viewers/schema-based-viewer.directive.ts');

require('domain/utilities/url-interpolation.service.ts');
require('services/nested-directives-recursion-timeout-prevention.service.ts');

angular.module('oppia').directive('schemaBasedListViewer', [
  'NestedDirectivesRecursionTimeoutPreventionService',
  function(
      NestedDirectivesRecursionTimeoutPreventionService) {
    return {
      scope: {
        localValue: '=',
        // Read-only property. The schema definition for each item in the list.
        itemSchema: '&'
      },
      template: require(
        'components/forms/schema-viewers/' +
        'schema-based-list-viewer.directive.html'),
      restrict: 'E',
      compile: NestedDirectivesRecursionTimeoutPreventionService.compile,
      controllerAs: '$ctrl',
      controller: [function() {}]
    };
  }
]);
