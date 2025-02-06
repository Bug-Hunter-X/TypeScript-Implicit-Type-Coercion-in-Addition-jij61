# TypeScript Implicit Type Coercion in Addition

This repository demonstrates an uncommon error in TypeScript related to implicit type coercion during addition.  TypeScript doesn't throw a type error when adding a number and a string, instead, it performs string concatenation.

## Bug
The provided `add` function is designed to add two numbers. However, it does not correctly handle the case where one or both inputs are of a string type. When we add a number to a string, it performs string concatenation instead of numerical addition. This can lead to unexpected results and make debugging difficult.

## Solution
The solution involves adding type guards or using explicit type assertions. Type guards ensure that the input parameters are of the expected type before performing the addition operation.