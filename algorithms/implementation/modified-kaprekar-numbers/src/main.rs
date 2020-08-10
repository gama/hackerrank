// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

use std::env;
use std::fs::File;
use std::io::LineWriter;
use std::io::Write;
use std::io::prelude::*;

fn is_modified_kaprekar_number(n: u32) -> bool {
    let square: u64 = (n as u64) * (n as u64);
    let square_str = square.to_string();
    let (left, right) = square_str.split_at(square_str.len() / 2);
    n == (left.parse::<u32>().unwrap_or(0) + right.parse::<u32>().unwrap())
}

fn modified_kaprekar_numbers(p: u32, q: u32) -> Vec<u32> {
    (p..q + 1).into_iter()
        .filter(|n| is_modified_kaprekar_number(*n))
        .collect::<Vec<u32>>()
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(modified_kaprekar_numbers(1, 1000),  [1, 9, 45, 55, 99, 297, 703, 999]);
        assert_eq!(modified_kaprekar_numbers(2, 1000),  [9, 45, 55, 99, 297, 703, 999]);
        assert_eq!(modified_kaprekar_numbers(9, 999),   [9, 45, 55, 99, 297, 703, 999]);
        assert_eq!(modified_kaprekar_numbers(9, 998),   [9, 45, 55, 99, 297, 703]);
        assert_eq!(modified_kaprekar_numbers(10, 998),  [45, 55, 99, 297, 703]);
        assert_eq!(modified_kaprekar_numbers(1, 99999), [1, 9, 45, 55, 99, 297, 703, 999, 2223, 2728, 4950, 5050, 7272, 7777, 9999, 17344, 22222, 77778, 82656, 95121, 99999]);
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

fn read_params() -> Result<(u32, u32), Box<dyn std::error::Error>> {
    let p: u32 = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().parse::<u32>()?;
    let q: u32 = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().parse::<u32>()?;

    Ok((p, q))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (p, q) = read_params()?;
    let numbers = modified_kaprekar_numbers(p, q);

    let result: String = if numbers.is_empty() {
        "INVALID_RANGE".to_string()
    } else {
        numbers.into_iter().map(|n| n.to_string()).collect::<Vec<String>>().join(" ")
    };

    let mut out = create_writer();
    out.write_all(result.as_bytes())?;
    out.write_all(b"\n")?;

    Ok(())
}
