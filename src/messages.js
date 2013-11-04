"use strict";

// XXX(jeresig): Used for i18n string extraction
var $ = { _: function (msg) { return msg; } };

var errors = {
	// JSHint options
	E001: $._("Bad option: '{a}'."),
	E002: $._("Bad option value."),

	// JSHint input
	E003: $._("Expected a JSON value."),
	E004: $._("Input is neither a string nor an array of strings."),
	E005: $._("Input is empty."),
	E006: $._("Unexpected early end of program."),

	// Strict mode
	E007: $._("Missing \"use strict\" statement."),
	E008: $._("Strict violation."),
	E009: $._("Option 'validthis' can't be used in a global scope."),
	E010: $._("'with' is not allowed in strict mode."),

	// Constants
	E011: $._("const '{a}' has already been declared."),
	E012: $._("const '{a}' is initialized to 'undefined'."),
	E013: $._("Attempting to override '{a}' which is a constant."),

	// Regular expressions
	E014: $._("A regular expression literal can be confused with '/='."),
	E015: $._("Unclosed regular expression."),
	E016: $._("Invalid regular expression."),

	// Tokens
	E017: $._("It looks like your comment isn't closed. Use \"*/\" to end a multi-line comment."),
	E018: $._("It looks like you never started your comment. Use \"/*\" to start a multi-line comment."),
	E019: $._("Unmatched \"{a}\"."),
	E020: $._("I thought you were going to type \"{a}\" to match \"{b}\" from line {c} but you typed \"{d}\""),
	E021: $._("I thought you were going to type \"{a}\" but you typed \"{b}\"!"),
	E022: $._("Line breaking error '{a}'."),
	E023: $._("I think you're missing a \"{a}\"!"),
	E024: $._("Unexpected \"{a}\"."),
	E025: $._("I think you're missing ':' on a case clause."),
	E026: $._("I think you're missing a '}' to match '{' from line {a}."),
	E027: $._("I think you're missing a ']' to match '[' from line {a}."),
	E028: $._("Illegal comma."),
	E029: $._("Unclosed string! Make sure you end your string with a quote."),

	// Everything else
	E030: $._("I thought you were going to type an identifier but you typed '{a}'."),
	E031: $._("The left side of an assignment must be a single variable name, not an expression."), // FIXME: Rephrase
	E032: $._("I thought you were going to type a number or 'false' but you typed '{a}'."),
	E033: $._("I thought you were going to type an operator but you typed '{a}'."),
	E034: $._("get/set are ES5 features."),
	E035: $._("I think you're missing a property name."),
	E036: $._("I thought you were going to type a statement but you typed a block instead."),
	E037: null, // Vacant
	E038: null, // Vacant
	E039: $._("Function declarations are not invocable. Wrap the whole function invocation in parens."),
	E040: $._("Each value should have its own case label."),
	E041: $._("Unrecoverable syntax error."),
	E042: $._("Stopping."),
	E043: $._("Too many errors."),
	E044: $._("'{a}' is already defined and can't be redefined."),
	E045: $._("Invalid for each loop."),
	E046: $._("A yield statement shall be within a generator function (with syntax: `function*`)"),
	E047: $._("A generator function shall contain a yield statement."),
	E048: $._("Let declaration not directly within block."),
	E049: $._("A {a} cannot be named '{b}'."),
	E050: $._("Mozilla requires the yield expression to be parenthesized here."),
	E051: $._("Regular parameters cannot come after default parameters."),
	E052: $._("I think you meant to type a value or variable name before that comma?"),
	E053: $._("I think you either have an extra comma or a missing argument?")
};

var warnings = {
	W001: $._("'hasOwnProperty' is a really bad name."),
	W002: $._("Value of '{a}' may be overwritten in IE 8 and earlier."),
	W003: $._("'{a}' was used before it was defined."),
	W004: $._("'{a}' is already defined."),
	W005: $._("A dot following a number can be confused with a decimal point."),
	W006: $._("Confusing minuses."),
	W007: $._("Confusing pluses."),
	W008: $._("Please put a 0 in front of the decimal point: \"{a}\"!"),
	W009: $._("The array literal notation [] is preferrable."),
	W010: $._("The object literal notation {} is preferrable."),
	W011: $._("Unexpected space after '{a}'."),
	W012: $._("Unexpected space before '{a}'."),
	W013: $._("I think you're missing a space after \"{a}\"."),
	W014: $._("Bad line breaking before '{a}'."),
	W015: $._("Expected '{a}' to have an indentation at {b} instead at {c}."),
	W016: $._("Unexpected use of '{a}'."),
	W017: $._("Bad operand."),
	W018: $._("Confusing use of '{a}'."),
	W019: $._("Use the isNaN function to compare with NaN."),
	W020: $._("Read only."),
	W021: $._("'{a}' is a function."),
	W022: $._("Do not assign to the exception parameter."),
	W023: $._("I thought you were going to type an identifier in an assignment but you typed a function invocation instead."),
	W024: $._("I thought you were going to type an identifier but you typed '{a}' (a reserved word)."),
	W025: $._("I think you're missing the name in your function declaration."),
	W026: $._("Inner functions should be listed at the top of the outer function."),
	W027: $._("Unreachable '{a}' after '{b}'."),
	W028: $._("Label '{a}' on {b} statement."),
	W030: $._("I thought you were going to type an assignment or function call but you typed an expression instead."),
	W031: $._("Do not use 'new' for side effects."),
	W032: $._("It looks like you have an unnecessary semicolon."),
	W033: $._("It looks like you're missing a semicolon."),
	W034: $._("Unnecessary directive \"{a}\"."),
	W035: $._("Empty block."),
	W036: $._("Unexpected /*member '{a}'."),
	W037: $._("'{a}' is a statement label."),
	W038: $._("'{a}' used out of scope."),
	W039: $._("'{a}' is not allowed."),
	W040: $._("Possible strict violation."),
	W041: $._("Use '{a}' to compare with '{b}'."),
	W042: $._("Avoid EOL escaping."),
	W043: $._("Bad escaping of EOL. Use option multistr if needed."),
	W044: $._("Bad or unnecessary escaping."),
	W045: $._("Bad number '{a}'."),
	W046: $._("Don't use extra leading zeros \"{a}\"."),
	W047: $._("A trailing decimal point can be confused with a dot: '{a}'."),
	W048: $._("Unexpected control character in regular expression."),
	W049: $._("Unexpected escaped character '{a}' in regular expression."),
	W050: $._("JavaScript URL."),
	W051: $._("Variables should not be deleted."),
	W052: $._("Unexpected '{a}'."),
	W053: $._("Do not use {a} as a constructor."),
	W054: $._("The Function constructor is a form of eval."),
	W055: $._("A constructor name should start with an uppercase letter."),
	W056: $._("Bad constructor."),
	W057: $._("Weird construction. Is 'new' necessary?"),
	W058: $._("I think you're missing the \"()\" to invoke the constructor."),
	W059: $._("Avoid arguments.{a}."),
	W060: $._("document.write can be a form of eval."),
	W061: $._("eval can be harmful."),
	W062: $._("Wrap an immediate function invocation in parens " +
		"to assist the reader in understanding that the expression " +
		"is the result of a function, and not the function itself."),
	W063: $._("Math is not a function."),
	W064: $._("I think you're missing using 'new' to call a constructor."),
	W065: $._("It looks like you're missing a radix parameter."),
	W066: $._("Implied eval. Consider passing a function instead of a string."),
	W067: $._("Bad invocation."),
	W068: $._("Wrapping non-IIFE function literals in parens is unnecessary."),
	W069: $._("['{a}'] is better written in dot notation."),
	W070: $._("Extra comma. (it breaks older versions of IE)"),
	W071: $._("This function has too many statements. ({a})"),
	W072: $._("This function has too many parameters. ({a})"),
	W073: $._("Blocks are nested too deeply. ({a})"),
	W074: $._("This function's cyclomatic complexity is too high. ({a})"),
	W075: $._("Duplicate key '{a}'."),
	W076: $._("Unexpected parameter '{a}' in get {b} function."),
	W077: $._("Expected a single parameter in set {a} function."),
	W078: $._("Setter is defined without getter."),
	W079: $._("Redefinition of '{a}'."),
	W080: $._("It's not necessary to initialize '{a}' to 'undefined'."),
	W081: $._("Too many var statements."),
	W082: $._("Function declarations should not be placed in blocks. " +
		"Use a function expression or move the statement to the top of " +
		"the outer function."),
	W083: $._("It's not a good idea to define functions within a loop. Can you define them outside instead?"),
	W084: $._("I thought you were going to type a conditional expression but you typed an assignment instead."),
	W085: $._("Don't use 'with'."),
	W086: $._("Did you forget a 'break' statement before '{a}'?"),
	W087: $._("Forgotten 'debugger' statement?"),
	W088: $._("Creating global 'for' variable. Should be 'for (var {a} ...'."),
	W089: $._("The body of a for in should be wrapped in an if statement to filter " +
		"unwanted properties from the prototype."),
	W090: $._("'{a}' is not a statement label."),
	W091: $._("'{a}' is out of scope."),
	W092: $._("Wrap the /regexp/ literal in parens to disambiguate the slash operator."),
	W093: $._("Did you mean to return a conditional instead of an assignment?"),
	W094: $._("Unexpected comma."),
	W095: $._("I thought you were going to type a string but you typed {a}."),
	W096: $._("The '{a}' key may produce unexpected results."),
	W097: $._("Use the function form of \"use strict\"."),
	W098: $._("'{a}' is defined but never used."),
	W099: $._("Mixed spaces and tabs."),
	W100: $._("This character may get silently deleted by one or more browsers."),
	W101: $._("Line is too long."),
	W102: $._("Trailing whitespace."),
	W103: $._("The '{a}' property is deprecated."),
	W104: $._("'{a}' is only available in JavaScript 1.7."),
	W105: $._("Unexpected {a} in '{b}'."),
	W106: $._("Identifier '{a}' is not in camel case."),
	W107: $._("Script URL."),
	W108: $._("Strings must use doublequote."),
	W109: $._("Strings must use singlequote."),
	W110: $._("Mixed double and single quotes."),
	W112: $._("Unclosed string! Make sure you end your string with a quote."),
	W113: $._("Control character in string: {a}."),
	W114: $._("Avoid {a}."),
	W115: $._("Octal literals are not allowed in strict mode."),
	W116: $._("I thought you were going to type \"{a}\" but you typed \"{b}\"."),
	W117: $._("\"{a}\" is not defined. Make sure you're spelling it correctly and that you declared it."),
	W118: $._("'{a}' is only available in Mozilla JavaScript extensions (use moz option)."),
	W119: $._("'{a}' is only available in ES6 (use esnext option)."),
	W120: $._("You might be leaking a variable ({a}) here."),
	W121: $._("I thought you were going to type a conditional expression but you typed an assignment instead. Maybe you meant to type === instead of =?"),
	
};

var info = {
	I001: $._("Comma warnings can be turned off with 'laxcomma'."),
	I002: $._("Reserved words as properties can be used under the 'es5' option."),
	I003: $._("ES5 option is now set per default")
};

exports.errors = {};
exports.warnings = {};
exports.info = {};

for (var code in errors) {
	exports.errors[code] = { code: code, desc: errors[code] };
}

for (var code in warnings) {
	exports.warnings[code] = { code: code, desc: warnings[code] };
}

for (var code in info) {
	exports.info[code] = { code: code, desc: info[code] };
}
