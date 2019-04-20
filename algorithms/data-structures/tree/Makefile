SHELL := /bin/bash
BOLD  := \033[0;1m
RED   := \033[0;31m
GREEN := \033[0;32m
RESET := \033[m

main: main.cpp
	g++ -Wall -O0 -g3 -o $@ $<

test: main tests
	@echo -e "$(GREEN)✔ SUCCESS$(RESET): all tests passed";

# the tests target should be defined in each problem's Makefile:
# problem-abc/Makefile:
# tests:
#    source ../test.sh; \
#    test_it "input1" "expected1"; \
#    test_it "input2" "expected2"; \
#    ...
#    test_it "inputN" "expectedN";
