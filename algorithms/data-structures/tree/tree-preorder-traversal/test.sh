#!/usr/bin/env bash

SCRIPT_DIR=$(dirname $(readlink -f "$BASH_SOURCE[0]"))

test_it() {
	input="${1}"
	expected="${2}"

	output=$(printf "${input}" | "${SCRIPT_DIR}/main")

	[ "${output}" = "${expected}" ] || {
		echo -e "\e[0;31m✘ ERROR: \e[0;1moutput does not match expected value\e[0m"
		echo "  input:    \"${input}\""
		echo "  output:   \"${output}\""
		echo "  expected: \"${expected}\""
		echo
		exit 1
	}
}
