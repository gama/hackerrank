MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH); \
	test_it "0 1 "            "Yes" "1";  \
	test_it "1 1 2 3 "        "Yes" "2";  \
	test_it "1 3 1 2 "        "No"  "3";  \
	test_it "1 1 3 2 "        "No"  "4";  \
	test_it "1 2 1 3 "        "No"  "5";  \
	test_it "1 2 3 1 "        "No"  "6";  \
	test_it "2 1 2 3 4 5 6 7" "Yes" "7";  \
	test_it "2 2 1 3 4 5 6 7" "No"  "8";  \
	test_it "2 1 3 2 4 5 6 7" "No"  "9";  \
	test_it "2 1 2 4 3 5 6 7" "No"  "10";  \
	test_it "2 1 2 3 5 4 6 7" "No"  "11";  \
	test_it "2 1 2 3 4 6 5 7" "No"  "12";  \
	test_it "2 1 2 3 4 5 7 6" "No"  "13";  \
	test_it "2 1 2 3 4 6 7 5" "No"  "14";  \
	test_it "2 1 2 3 5 8 11 13" "Yes" "15";  \
	# test_it "3\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15\n" "Yes" "2";  \
