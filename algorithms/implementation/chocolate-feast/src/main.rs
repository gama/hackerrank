// https://www.hackerrank.com/challenges/chocolate-feast/problem

use std::env;
use std::fs::File;
use std::io::LineWriter;
use std::io::Write;
use std::io::prelude::*;

fn chocolate_feast(budget: u32, cost: u32, exchange_cost: u32) -> u32 {
    let mut num_chocolates = budget / cost;
    let mut num_wrappers = num_chocolates;
    while num_wrappers >= exchange_cost {
        let num_exchanged = num_wrappers / exchange_cost;
        num_wrappers = num_wrappers % exchange_cost + num_exchanged;
        num_chocolates += num_exchanged;
    }
    num_chocolates
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(chocolate_feast(10, 2, 5), 6);
        assert_eq!(chocolate_feast(12, 4, 4), 3);
        assert_eq!(chocolate_feast(6, 2, 2), 5);
        assert_eq!(chocolate_feast(7, 2, 2), 5);
        assert_eq!(chocolate_feast(8, 2, 2), 7);
        assert_eq!(chocolate_feast(8, 3, 2), 3);
        assert_eq!(chocolate_feast(8, 1, 2), 15);
        assert_eq!(chocolate_feast(8, 1, 8), 9);
        assert_eq!(chocolate_feast(8, 2, 8), 4);
    }
}


// ----- I/O boilerplate -----
fn create_writer() -> LineWriter<Box<dyn Write>> {
    let writer: Box<dyn Write> = match env::var("OUTPUT_PATH") {
        Ok(path_str) => Box::new(File::create(path_str).unwrap()),
        Err(_) => Box::new(std::io::stdout()),
    };
    LineWriter::new(writer)
}

fn read_params() -> Result<Vec<(u32, u32, u32)>, Box<dyn std::error::Error>> {
    let num_tests: u16 = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line").trim().parse::<u16>()?;
    let tests = (0..num_tests).map(|_| {
        let values: Vec<u32> = std::io::stdin().lock().lines().next()
            .expect("no line in buffer")
            .expect("failed to read line")
            .trim().split(" ")
            .map(|n| n.parse::<u32>().unwrap())
            .collect::<Vec<u32>>();
        assert_eq!(values.len(), 3);

        (values[0], values[1], values[2])
    }).collect::<Vec<(u32, u32, u32)>>();
    Ok(tests)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let tests = read_params()?;
    for (budget, cost, num_exchange) in tests {
        let num_chocolates_eaten = chocolate_feast(budget, cost, num_exchange);
        writeln!(out, "{}", num_chocolates_eaten)?;
    }

    Ok(())
}
