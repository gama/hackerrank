MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);     \
	test_it "3\n2 1 3\n1 3\n" "2";       \
	test_it "3\n2 1 3\n1 2\n" "2";       \
	test_it "3\n2 1 3\n2 3\n" "2";       \
	test_it "6\n2 1 4 3 5 6\n3 6\n" "4"; \
	test_it "6\n2 1 4 3 5 6\n4 6\n" "4"; \
	test_it "6\n2 1 3 4 5 6\n1 3\n" "2"; \
	test_it "6\n4 2 3 1 7 6\n1 3\n" "2"; \
	test_it "6\n4 2 3 1 7 6\n1 7\n" "4";
