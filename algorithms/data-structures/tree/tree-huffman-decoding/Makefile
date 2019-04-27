MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);     \
	test_it "AB"          "AB";          \
	test_it "ABC"         "ABC";         \
	test_it "AABC"        "AABC";        \
	test_it "ABAC"        "ABAC";        \
	test_it "ABCA"        "ABCA";        \
	test_it "ABACA"       "ABACA";       \
	test_it "ABABA"       "ABABA";       \
	test_it "ABABAC"      "ABABAC";      \
	test_it "ABRACADABRA" "ABRACADABRA";
