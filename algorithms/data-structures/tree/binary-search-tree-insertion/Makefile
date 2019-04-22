MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);                \
	test_it "1\n1\n" "1 ";                          \
	test_it "2\n2\n1\n" "2 1 ";                     \
	test_it "3\n2\n1\n3\n" "2 1 3 ";                \
	test_it "6\n1\n2\n5\n3\n4\n6\n" "1 2 5 3 4 6 ";
