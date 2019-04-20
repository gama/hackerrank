MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);        \
	test_it "1\n1\n"                   "0"; \
	test_it "2\n1\n2\n"                "1"; \
	test_it "7\n3\n2\n1\n5\n4\n6\n7\n" "3";
