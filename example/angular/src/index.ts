import * as angular from 'angular';
import {ExampleService} from './example-service';
import {ExampleController} from './example-controller';
import "./index.css";
import template from "./template.html";

console.log(template);

let myDecorator = (Target) => {
	console.log(Target.name);
};

@myDecorator
class Car {}

export var module = angular.module("example", [

])
	.service("exampleService", ExampleService)
	.controller("exampleController", ExampleController);

angular.element(document).ready(() =>  angular.bootstrap(document, [ module.name ], { strictDi: false }));

