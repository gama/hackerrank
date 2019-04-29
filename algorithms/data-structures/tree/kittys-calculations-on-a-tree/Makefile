MAIN_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))main
include ../Makefile

tests:
	@source ../test.sh $(MAIN_PATH);                     \
	test_it "$$(<input00.txt)" "$$(<output00.txt)"  "1"; \
	test_it "$$(<input01.txt)" "$$(<output01.txt)"  "2"; \
	test_it "$$(<input07.txt)" "$$(<output07.txt)"  "7"; \
	test_it "$$(<input08.txt)" "$$(<output08.txt)"  "8"; \
	test_it "$$(<input10.txt)" "$$(<output10.txt)" "10"; \
	test_it "$$(<input17.txt)" "$$(<output17.txt)" "17"; \
	test_it "$$(<input18.txt)" "$$(<output18.txt)" "18"; \
	test_it "$$(<input20.txt)" "$$(<output20.txt)" "20";
	# test_it "$$(<input02.txt)" "$$(<output02.txt)"; \
