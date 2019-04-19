#!/usr/bin/env bash

SCRIPT_DIR=$(dirname $(readlink -f "$BASH_SOURCE[0]"))

test_it() {
	input="${1}"
	expected="${2}"

	output=$(printf "${input}" | "${SCRIPT_DIR}/main")

	[ "${output}" = "${expected}" ] || {
		echo "\e[0;31m✘ ERROR: \e[0;1moutput does not match expected value\e[0m"
		echo "  input:    ${input}"
		echo "  output:   ${output}"
		echo "  expected: ${expected}"
		exit 1
	}
}

test_it "1\n0\n1\n1\n"       "1"
test_it "1\n1\n1\n1\n"       "0"
test_it "1\n0\n3\n1\n2\n3\n" "1"
test_it "1\n1\n3\n1\n2\n3\n" "1"
test_it "1\n2\n3\n1\n2\n3\n" "1"
test_it "1\n3\n3\n1\n2\n3\n" "0"
test_it "1\n4\n3\n1\n2\n3\n" "0"

echo "\e[0;32m✔ SUCCESS: \e[1mall tests passed\e[0m"
