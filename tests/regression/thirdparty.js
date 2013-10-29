"use strict";

var fs = require('fs');
var TestRun = require("../helpers/testhelper").setup.testRun;

exports["Backbone.js 0.5.3"] = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/backbone.js', 'utf8');

	TestRun(test)
		.addError(685, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(764, "Use '===' to compare with '0'.")
		.addError(859, "Use '!==' to compare with '0'.")
		.test(src, { expr: true, eqnull: true, boss: true, regexdash: true });

	test.done();
};

exports.jQuery_1_7 = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/jquery-1.7.js', 'utf8');
	var globals = { DOMParser: false, ActiveXObject: false, define: false };

	TestRun(test)
		.addError(551, "'name' is defined but never used.")
		.addError(1044, "'actual' is defined but never used.")
		.addError(1312, "'pCount' is defined but never used.")
		.addError(1369, "'events' is defined but never used.")
		.addError(1607, "'table' is defined but never used.")
		.addError(1710, "'internalKey' is defined but never used.")
		.addError(1813, "'internalKey' is defined but never used.")
		.addError(2662, "Did you mean to return a conditional instead of an assignment?")
		.addError(2751, "Did you mean to return a conditional instead of an assignment?")
		.addError(2805, "Did you mean to return a conditional instead of an assignment?")
		.addError(2818, "I thought you were going to type an assignment or function call but you typed an expression instead.")
		.addError(2822, "I thought you were going to type an assignment or function call but you typed an expression instead.")
		.addError(2850, "Did you mean to return a conditional instead of an assignment?")
		.addError(2859, "'rnamespaces' is defined but never used.")
		.addError(2861, "'rperiod' is defined but never used.")
		.addError(2862, "'rspaces' is defined but never used.")
		.addError(2863, "'rescape' is defined but never used.")
		.addError(2900, "'quick' is defined but never used.")
		.addError(3269, "'related' is defined but never used.")
		.addError(3592, "'selector' is defined but never used.")
		.addError(4465, "'curLoop' is defined but never used.")
		.addError(4560, "I thought you were going to type an assignment or function call but you typed an expression instead.")
		.addError(4694, "'cache' is defined but never used.")
		.addError(4702, "Mixed spaces and tabs.")
		.addError(4712, "Did you forget a 'break' statement before 'case'?")
		.addError(4715, "Mixed spaces and tabs.")
		.addError(4843, "I thought you were going to type an assignment or function call but you typed an expression instead.")
		.addError(5635, "'elem' is defined but never used.")
		.addError(5675, "'i' is defined but never used.")
		.addError(5691, "'i' is defined but never used.")
		.addError(7141, "'i' is defined but never used.")
		.addError(6061, "'cur' is defined but never used.")
		.addError(8595, "Did you mean to return a conditional instead of an assignment?")
		.addError(9209, "Mixed spaces and tabs.")
		.test(src, { undef: true, unused: true }, globals);

	test.done();
};

exports.prototype_1_7 = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/prototype-17.js', 'utf8');

	TestRun(test)
		.addError(22, "It looks like you're missing a semicolon.")
		.addError(94, "It looks like you have an unnecessary semicolon.")
		.addError(110, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(253, "'i' is already defined.")
		.addError(253, "'length' is already defined.")
		.addError(260, "'i' is already defined.")
		.addError(260, "'length' is already defined.")
		.addError(261, "'key' is already defined.")
		.addError(261, "'str' is already defined.")
		.addError(319, "'isArray' is a function.")
		.addError(392, "It looks like you're missing a semicolon.")
		.addError(400, "It looks like you're missing a semicolon.")
		.addError(409, "It looks like you're missing a semicolon.")
		.addError(430, "It looks like you're missing a semicolon.")
		.addError(451, "It looks like you're missing a semicolon.")
		.addError(633, "Use '!==' to compare with 'undefined'.")
		.addError(737, "Use '===' to compare with ''.")
		.addError(741, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(807, "Use '===' to compare with ''.")
		.addError(1137, "Use '===' to compare with '0'.")
		.addError(1215, "It looks like you're missing a semicolon.")
		.addError(1224, "It looks like you have an unnecessary semicolon.")
		.addError(1916, "It looks like you're missing a semicolon.")
		.addError(2034, "It looks like you're missing a semicolon.")
		.addError(2662, "It looks like you're missing a semicolon.")
		.addError(2735, "It looks like you're missing a semicolon.")
		.addError(2924, "It looks like you're missing a semicolon.")
		.addError(2987, "'tagName' used out of scope.")
		.addError(2989, "'tagName' used out of scope.")
		.addError(2989, "'tagName' used out of scope.")
		.addError(2990, "'tagName' used out of scope.")
		.addError(3844, "'positionedOffset' is a function.")
		.addError(3860, "'cumulativeOffset' is a function.")
		.addError(3987, "You might be leaking a variable (context) here.")
		.addError(4036, "'ret' is already defined.")
		.addError(4072, "'cur' used out of scope.")
		.addError(4085, "'i' is already defined.")
		.addError(4132, "'match' is already defined.")
		.addError(4290, "'i' is already defined.")
		.addError(4290, "'l' is already defined.")
		.addError(4291, "'elem' is already defined.")
		.addError(4308, "You might be leaking a variable (part) here.")
		.addError(4312, "'nodeCheck' used out of scope.")
		.addError(4318, "You might be leaking a variable (part) here.")
		.addError(4322, "'nodeCheck' used out of scope.")
		.addError(4450, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(4480, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(4520, "'i' is already defined.")
		.addError(4538, "Did you forget a 'break' statement before 'case'?")
		.addError(4547, "Use '===' to compare with '0'.")
		.addError(4565, "Use '===' to compare with '0'.")
		.addError(4566, "Use '===' to compare with '0'.")
		.addError(4568, "Use '===' to compare with '0'.")
		.addError(4656, "'i' is already defined.")
		.addError(4722, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(4988, "It looks like you're missing a semicolon.")
		.addError(4988, "It looks like you're missing a semicolon.")
		.addError(5021, "It looks like you're missing a semicolon.")
		.addError(5397, "It looks like you're missing a semicolon.")
		.addError(5061, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(5112, "Use '!==' to compare with 'undefined'.")
		.addError(5140, "Use '!==' to compare with ''.")
		.addError(5224, "'values' is already defined.")
		.addError(5495, "Function declarations should not be placed in blocks. Use a function " +
			"expression or move the statement to the top of the outer function.")
		.addError(5545, "The '__proto__' property is deprecated.")
		.test(src, {
			sub      : true,
			lastsemic: true,
			loopfunc : true,
			evil     : true,
			eqnull   : true,
			laxbreak : true,
			boss     : true,
			expr     : true,
			maxerr   : 9001
		});

	test.done();
};


exports.lodash_0_6_1 = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/lodash.js', 'utf8');
	var globals = { _: false, define: false };
	var options = {
		unused   : true,
		expr     : true,
		eqnull   : true,
		boss     : true,
		regexdash: true,
		proto    : true,
		laxbreak : true,
		newcap   : false,
		node     : true,
		evil     : true,
		laxcomma : true
	};

	TestRun(test)
		.addError(168, "Possible strict violation.")
		.addError(170, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(632, "It looks like you're missing a semicolon.")
		.addError(920, "'isArguments' is a function.")
		.addError(963, "'isFunction' is a function.")
		.addError(1122, "'isArr' used out of scope.")
		.addError(1127, "'className' used out of scope.")
		.addError(1129, "Use '===' to compare with 'true'.")
		.addError(1153, "'isArr' used out of scope.")
		.addError(1159, "'isArr' used out of scope.")
		.addError(1490, "Use '===' to compare with '0'.")
		.addError(1670, "It looks like you're missing a semicolon.")
		.addError(2731, "'array' is already defined.")
		.addError(2732, "'array' is a statement label.")
		.addError(3374, "Possible strict violation.")
		.addError(3377, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(3384, "It looks like you're missing a semicolon.")
		.addError(3677, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(3683, "I think you're missing the \"()\" to invoke the constructor.")
		.addError(3825, "Possible strict violation.")
		.addError(4225, "Possible strict violation.")
		.addError(4226, "Possible strict violation.")
		.addError(4242, "Possible strict violation.")
		.test(src, options, globals);

	test.done();
};

exports.json2 = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/json2.js', 'utf8');

	TestRun(test)
		.addError(177, "'key' is defined but never used.")
		.addError(191, "'key' is defined but never used.")
		.test(src, { undef: true, unused: true, laxbreak: true }, { JSON: true });

	test.done();
};

exports.codemirror3 = function (test) {
	var src = fs.readFileSync(__dirname + '/libs/codemirror3.js', 'utf8');
	var opt = {
		newcap:   false,
		undef:    true,
		unused:   true,
		eqnull:   true,
		boss:     true,
		laxbreak: true,
		shadow:   true,
		loopfunc: true,
		browser:  true,
		supernew: true,

		"-W008":  true, // Ignore warnings about leading dots in numbers.
		"-W038":  true, // Ignore scope warnings.
		"-W040":  true, // Ignore possible strict violations.
		"-W041":  true, // Ignore poor relations warnings.

	};

	TestRun(test)
		.addError(1157, "'result' is defined but never used.")
		.addError(1342, "Value of 'e' may be overwritten in IE 8 and earlier.")
		.addError(1526, "Value of 'e' may be overwritten in IE 8 and earlier.")
		.addError(1532, "'mX' is defined but never used.")
		.addError(1532, "'mY' is defined but never used.")
		.addError(1533, "Value of 'e' may be overwritten in IE 8 and earlier.")
		.addError(2218, "'state' is defined but never used.")
		.addError(2298, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(2427, "'style' is defined but never used.")
		.addError(2696, "'target' is defined but never used.")
		.addError(3168, "'ok' is defined but never used.")
		.addError(4093, "It looks like you have an unnecessary semicolon.")
		.addError(4168, "Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
		.addError(4277, "'range' is defined but never used.")
		.test(src, opt, { CodeMirror: true });

	test.done();
};
