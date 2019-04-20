MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);               \
	test_it "1\n1\n" "1 ";                         \
	test_it "2\n1\n2\n" "1 2 ";                    \
	test_it "6\n1\n2\n5\n3\n4\n6\n" "1 2 3 4 5 6 ";
