#!/usr/bin/env bash

SCRIPT_DIR=$(dirname $(readlink -f "${BASH_SOURCE[0]}"))
EXE="${1:-${SCRIPT_DIR}/main}"

test_it() {
	input="${1}"
	expected="${2}"
	test_id="${3+ of test $3}"

	output=$(printf "${input}" | "${EXE}")

	[ "${output}" = "${expected}" ] && {
		echo -e "\e[0;32m✔ OK: \e[moutput${test_id} matches"
	} || {
		echo -e "\e[0;31m✘ ERROR: \e[0;1moutput${test_id} does not match expected value\e[0m"
		echo "  input:    \"${input:0:80}\""
		diff -u --color=always --label "EXPECTED" <(echo "${expected}") --label "ACTUAL OUTPUT" <(echo "${output}")
		exit 1
	}
}
