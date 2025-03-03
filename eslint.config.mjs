// eslint.config.mjs

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
	// import.meta.dirname is available after Node.js v20.11.0
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		plugins: ["@typescript-eslint", "import"],
		parserOptions: {
			project: "tsconfig.json",
		},
		extends: [
			"plugin:@typescript-eslint/recommended",
			"plugin:@typescript-eslint/recommended-requiring-type-checking",
			"plugin:import/recommended",
			"plugin:import/typescript",
			"prettier",
			"next/core-web-vitals",
		],
		settings: {
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},
		rules: {
			// sort imports
			"import/order": "error",

			// no let exports
			"import/no-mutable-exports": "error",

			"import/no-cycle": "error",
			"import/no-default-export": "error",

			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
					disallowTypeAnnotations: false,
				},
			],

			"import/no-duplicates": ["error", { "prefer-inline": true }],

			// false negatives
			"import/namespace": ["off"],

			// we allow empty interfaces
			"no-empty-pattern": "off",
			"@typescript-eslint/no-empty-interface": "off",

			// we allow empty functions
			"@typescript-eslint/no-empty-function": "off",

			// we sometimes use async functions that don't await anything
			"@typescript-eslint/require-await": "off",

			// allow unused vars prefixed with `_`
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],

			// numbers and booleans are fine in template strings
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true, allowBoolean: true },
			],

			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],

			"@typescript-eslint/no-floating-promises": ["off"],

			"no-restricted-imports": [
				"error",
				{
					name: "next/router",
					message: "Please use next/navigation instead.",
				},
			],
		},
		overrides: [
			{
				files: ["src/app/**/*.ts?(x)", "tailwind.config.ts"],
				rules: {
					"import/no-default-export": "off",
				},
			},
		],
		ignorePatterns: ["*.js", "*.jsx"],
	}),
];

export default eslintConfig;
